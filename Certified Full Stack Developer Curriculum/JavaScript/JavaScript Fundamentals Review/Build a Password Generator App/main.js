function generatePassword(passwordLength) {
  const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return randomPassword;
}

const password = generatePassword(12);
console.log("Generated password: " + password);