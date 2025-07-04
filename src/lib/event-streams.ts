/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

export type ServerEvent<T> = {
  data?: T | undefined;
  event?: string | undefined;
  retry?: number | undefined;
  id?: string | undefined;
};
const LF = 0x0a;
const CR = 0x0d;
const NEWLINE_CHARS = new Set([LF, CR]);
const MESSAGE_BOUNDARIES = [
  new Uint8Array([CR, LF, CR, LF]),
  new Uint8Array([CR, CR]),
  new Uint8Array([LF, LF]),
];

export class EventStream<Event extends ServerEvent<unknown>> {
  private readonly stream: ReadableStream<Uint8Array>;
  private readonly decoder: (rawEvent: ServerEvent<string>) => Event;

  constructor(init: {
    stream: ReadableStream<Uint8Array>;
    decoder: (rawEvent: ServerEvent<string>) => Event;
  }) {
    this.stream = init.stream;
    this.decoder = init.decoder;
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Event, void, unknown> {
    const reader = this.stream.getReader();
    let buffer = new Uint8Array([]);
    let position = 0;

    try {
      while (true) {
        // measure the time it takes to read the stream
        const start = Date.now();
        const { done, value } = await reader.read();
        const end = Date.now();
        console.log(`Time taken to read: ${end - start}ms`);
        const valueAsString = new TextDecoder().decode(value);
        console.log(`Value length: ${valueAsString}`);
        if (done) {
          break;
        }

        const newBuffer = new Uint8Array(buffer.length + value.length);
        newBuffer.set(buffer);
        newBuffer.set(value, buffer.length);
        buffer = newBuffer;

        for (let i = position; i < buffer.length; i++) {
          const boundary = findBoundary(buffer, i);
          if (boundary == null) {
            continue;
          }

          const chunk = buffer.slice(position, i);
          position = i + boundary.length;
          const event = parseEvent(chunk, this.decoder);
          if (event != null) {
            yield event;
          }
        }

        if (position > 0) {
          buffer = buffer.slice(position);
          position = 0;
        }
      }

      if (buffer.length > 0) {
        const event = parseEvent(buffer, this.decoder);
        if (event != null) {
          yield event;
        }
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name === "AbortError") {
        return;
      }

      throw e;
    } finally {
      reader.releaseLock();
    }
  }
}

function findBoundary(buffer: Uint8Array, start: number): Uint8Array | null {
  const char1 = buffer[start];
  const char2 = buffer[start + 1];

  // Don't bother checking if the first two characters are not new line
  // characters.
  if (
    char1 == null
    || char2 == null
    || !NEWLINE_CHARS.has(char1)
    || !NEWLINE_CHARS.has(char2)
  ) {
    return null;
  }

  for (const s of MESSAGE_BOUNDARIES) {
    const seq = peekSequence(start, buffer, s);
    if (seq != null) {
      return seq;
    }
  }

  return null;
}

function peekSequence(
  position: number,
  buffer: Uint8Array,
  sequence: Uint8Array,
): Uint8Array | null {
  if (sequence.length > buffer.length - position) {
    return null;
  }

  for (let i = 0; i < sequence.length; i++) {
    if (buffer[position + i] !== sequence[i]) {
      return null;
    }
  }

  return sequence;
}

function parseEvent<Event extends ServerEvent<unknown>>(
  chunk: Uint8Array,
  decoder: (rawEvent: ServerEvent<string>) => Event,
) {
  if (!chunk.length) {
    return null;
  }

  const td = new TextDecoder();
  const raw = td.decode(chunk);
  const lines = raw.split(/\r?\n|\r/g);
  let publish = false;
  const rawEvent: ServerEvent<string> = {};

  for (const line of lines) {
    if (!line) {
      continue;
    }

    const delim = line.indexOf(":");
    // Lines starting with a colon are ignored.
    if (delim === 0) {
      continue;
    }

    const field = delim > 0 ? line.substring(0, delim) : "";
    let value = delim > 0 ? line.substring(delim + 1) : "";
    if (value.charAt(0) === " ") {
      value = value.substring(1);
    }

    switch (field) {
      case "event": {
        publish = true;
        rawEvent.event = value;
        break;
      }
      case "data": {
        publish = true;
        rawEvent.data ??= "";
        rawEvent.data += value + "\n";
        break;
      }
      case "id": {
        publish = true;
        rawEvent.id = value;
        break;
      }
      case "retry": {
        const r = parseInt(value, 10);
        if (!Number.isNaN(r)) {
          publish = true;
          rawEvent.retry = r;
        }
        break;
      }
    }
  }

  if (!publish) {
    return null;
  }

  if (rawEvent.data != null) {
    rawEvent.data = rawEvent.data.slice(0, -1);
  }

  return decoder(rawEvent);
}

export function discardSentinel(
  stream: ReadableStream<Uint8Array>,
  sentinel: string,
): ReadableStream<Uint8Array> {
  return new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = new Uint8Array([]);
      let position = 0;
      let done = false;
      let discard = false;
      const rdr = stream.getReader();
      try {
        while (!done) {
          const result = await rdr.read();
          const value = result.value;
          done = done || result.done;
          // We keep consuming from the source to its completion so it can
          // flush all its contents and release resources.
          if (discard) {
            continue;
          }
          if (typeof value === "undefined") {
            continue;
          }

          const newBuffer = new Uint8Array(buffer.length + value.length);
          newBuffer.set(buffer);
          newBuffer.set(value, buffer.length);
          buffer = newBuffer;

          for (let i = position; i < buffer.length; i++) {
            const boundary = findBoundary(buffer, i);
            if (boundary == null) {
              continue;
            }

            const start = position;
            const chunk = buffer.slice(start, i);
            position = i + boundary.length;
            const event = parseEvent(chunk, id);
            if (event?.data === sentinel) {
              controller.enqueue(buffer.slice(0, start));
              discard = true;
            } else {
              controller.enqueue(buffer.slice(0, position));
              buffer = buffer.slice(position);
              position = 0;
            }
          }
        }
      } catch (e) {
        controller.error(e);
      } finally {
        // If the source stream terminates, flush its contents and terminate.
        // If the sentinel event was found, flush everything up to its start.
        controller.close();
        rdr.releaseLock();
      }
    },
  });
}

function id<T>(v: T): T {
  return v;
}
