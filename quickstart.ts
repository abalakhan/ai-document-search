import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const message = await client.messages.create({
  model: "claude-opus-5-5",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: "Explain bubblr sort to me like to a 5 year old in no more than 3 sentences."
    }
  ]
});

for (const block of message.content) {
  if (block.type === "text") {
    console.log(block.text);
  }
}