import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import rl from "readline/promises";

dotenv.config();

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

const messages = []

while (true) {
  const userInput = await readline.question("Enter your input: ");

  messages.push({
    role: "user",
    content: userInput
  })

  const response = await model.stream(messages);

  let aiMessages = ""

  for await(const chunk of response) {
    aiMessages += chunk.content
    process.stdout.write(chunk.content)
  }

  messages.push({
    role: "assistant",
    content: aiMessages
  })

  process.stdout.write("\n")
}

readline.close()