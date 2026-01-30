function convertMarkdown() {
  let text = markdownInput.value;

  // Headings
  text = text.replace(/^###\s*(.*?)$/gm, "<h3>$1</h3>");
  text = text.replace(/^##\s*(.*?)$/gm, "<h2>$1</h2>");
  text = text.replace(/^#\s*(.*?)$/gm, "<h1>$1</h1>");

  // Bold
  text = text.replace(/\*\*(.*?)\*\*/gm, "<strong>$1</strong>");
  text = text.replace(/__(.*?)__/gm, "<strong>$1</strong>");

  // Italic
  text = text.replace(/\*(.+?)\*/gm, "<em>$1</em>");
  text = text.replace(/_(.+?)_/gm, "<em>$1</em>");

  // Image
  text = text.replace(/!\[(.*?)\]\((.*?)\)/gm, '<img alt="$1" src="$2">');

  // Link
  text = text.replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>');

  // Quote
  text = text.replace(/^>\s*(.*)/gm, "<blockquote>$1</blockquote>");

  return text;
}

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
  const output = convertMarkdown();
  htmlOutput.innerText = output;
  htmlPreview.innerHTML = output;
});
