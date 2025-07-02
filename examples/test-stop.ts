import { EventStream, STOP, ServerEvent } from "@s2-dev/streamstore/lib/event-streams";

// Create a simple test to verify STOP symbol works
async function testStopSymbol() {
  // Create a mock stream that sends some events and then [DONE]
  const encoder = new TextEncoder();
  const mockStream = new ReadableStream<Uint8Array>({
    start(controller) {
      // Send first event
      controller.enqueue(encoder.encode('event: test\ndata: {"message": "Hello"}\n\n'));
      
      // Send second event
      controller.enqueue(encoder.encode('event: test\ndata: {"message": "World"}\n\n'));
      
      // Send [DONE] sentinel
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      
      // This should not be processed
      controller.enqueue(encoder.encode('event: test\ndata: {"message": "Should not see this"}\n\n'));
      
      controller.close();
    }
  });

  const eventStream = new EventStream<ServerEvent<any>>({
    stream: mockStream,
    decoder: (rawEvent) => {
      if (rawEvent.data === "[DONE]") {
        console.log("Decoder: Found [DONE] sentinel, returning STOP");
        return STOP;
      }
      console.log("Decoder: Processing event", rawEvent);
      return rawEvent;
    }
  });

  console.log("Starting to consume events...");
  let eventCount = 0;
  
  for await (const event of eventStream) {
    eventCount++;
    console.log(`Received event ${eventCount}:`, event);
  }
  
  console.log(`\nTest completed. Total events processed: ${eventCount}`);
  console.log("The stream should have stopped at the [DONE] sentinel.");
}

testStopSymbol().catch(console.error);