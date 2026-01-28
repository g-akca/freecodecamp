document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("text-input");
  const countElement = document.getElementById("char-count");

  textElement.addEventListener("input", () => {
    const textLength = textElement.value.length;
    if (textLength >= 50) {
      textElement.value = textElement.value.substring(0, 50);
      countElement.innerHTML = "Character Count: 50/50";
      countElement.style.color = "red";
    }
    else {
      countElement.innerHTML = "Character Count: " + textLength + "/50";
      countElement.style.color = "inherit";
    }
  })
})