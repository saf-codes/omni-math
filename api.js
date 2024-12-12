const assistant = await openai.beta.assistants.create({
  name: "OmniMath",
  instructions: "You are a math tutor. Write and run code to answer math questions.",
  tools: [{ type: "code_interpreter" }],
  model: "gpt-4-1106-preview",
});
