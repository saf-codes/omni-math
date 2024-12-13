const OpenAI = require('openai');
const readline = require('readline');
const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function createAssistant() {
  const assistant = await openai.beta.assistants.create({
    name: "OmniMath",
    instructions: "You are a math tutor. Write and run code to answer math questions and provide a friendly experience for all users.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview",
  });
  return assistant;
}

async function createThread() {
  return await openai.beta.threads.create();
}

async function createMessage(threadId, content) {
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    c
