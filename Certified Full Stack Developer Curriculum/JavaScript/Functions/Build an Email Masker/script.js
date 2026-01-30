function maskEmail(email) {
  let atIndex = email.indexOf("@");
  return email[0] + "*".repeat(atIndex - 2) + email.slice(atIndex - 1);
}

let email = "freecodecamp@example.com";
console.log(maskEmail(email));