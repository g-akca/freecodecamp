const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

testButton.addEventListener("click", () => {
  const originalText = stringToTest.innerText;
  let matched;
  const flags = getFlags();

  try {
    const regex = new RegExp(regexPattern.value, flags);
    stringToTest.innerHTML = originalText.replace(regex, '<span class="highlight">$&</span>');

    if (flags.includes("g")) {
      matched = [...originalText.matchAll(regex)].map(m => m[0]);
    }
    else {
      matched = originalText.match(regex);
    }

    testResult.innerText = matched ? matched.join(", ") : "no match";
  }
  catch (err) {
    testResult.innerText = "Invalid regex";
  }
});
