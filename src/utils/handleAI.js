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

  const text =
    response?.message?.content?.[0]?.text ?? "";

  if (text === "You have reached your AI usage limit for this account.") {

    localStorage.clear();
    sessionStorage.clear();

    try {
      await navigator.clipboard.writeText(
        "chrome://settings/content/all?searchSubpage=puter"
      );

      console.log(
        "Free AI limit over.\n" +
        "Link copied to clipboard. Paste it into new address bar.\n\n" +
        "Steps:\n" +
        "1. Click 'Delete displayed data'\n" +
        "2. Right-click → Inspect → Application → Storage → Clear site data\n" +
        "3. Reload the page\n\n" +
        "Instructions apply to Chrome & Brave only."
      );

    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }

    return null;
  }

  return response.message.content;
};
