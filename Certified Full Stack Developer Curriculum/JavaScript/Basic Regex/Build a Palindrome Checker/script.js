function checkPalindrome(input) {
  let newInput = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  return newInput == newInput.split("").reverse().join("")
}

document.addEventListener("DOMContentLoaded", () => {
  const checkButton = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  checkButton.addEventListener("click", () => {
    const input = textInput.value;

    if (input == "") alert("Please input a value");
    else result.innerHTML = checkPalindrome(input) ? input + " is a palindrome" : input + " is not a palindrome";
  });
});