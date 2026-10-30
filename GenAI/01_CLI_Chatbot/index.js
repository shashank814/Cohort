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

  // user input / messages
  messages.push({
    role: "user",
    content: userInput
  })

  const stream = await model.stream(messages);

  let aiMessages = ""

  for await (const chunk of stream) {
    aiMessages += chunk.content
    // console.log(chunk.content);
    process.stdout.write(chunk.content)
  }

  // assistant messages
  messages.push({
    role: "assistant",
    content: aiMessages
  })

  process.stdout.write("\n")
}




// while(true) {
//   const userInput = await readline.question("Enter your input: ");
//   const response = await model.invoke(userInput);
//   console.log(response.content);
// }