import puter from "@heyputer/puter.js"; 

export const handleAI = async (tags) => {
  if (!tags) return null;

  const response = await puter.ai.chat(`
You are a caption generator.

Rules:
• Write ONE elegant sentence
• Max 30 words

Create a caption from these keywords:
${tags}
`);


  return response.message.content;
};
