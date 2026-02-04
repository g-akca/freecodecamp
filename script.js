const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
const title = document.getElementById("main-topic-title");

const loadedContent = {};

async function loadTabContent(tabCtrl) {
  if (loadedContent[tabCtrl]) return;

  const panel = document.getElementById(tabCtrl);
  
  try {
    const response = await fetch(`./tabs/${tabCtrl}.html`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const html = await response.text();
    panel.innerHTML = html;
    loadedContent[tabCtrl] = true;
  }
  catch (error) {
    console.error(`Failed to load ${tabCtrl}:`, error);
    panel.innerHTML = '<p>Failed to load content.</p>';
  }
}

document.addEventListener("DOMContentLoaded", () => loadTabContent("panel-html"));

tabs.forEach(tab => {
  tab.addEventListener("click", async () => {
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    panels.forEach(p => p.hidden = true);

    tab.setAttribute("aria-selected", "true");
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);

    await loadTabContent(associatedPanel);
    panel.hidden = false;
    title.textContent = tab.textContent;
  });
});