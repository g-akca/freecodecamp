const form = document.querySelector("form");
const fullName = document.querySelector('input[id="full-name"]');
const email = document.querySelector('input[id="email"]');
const orderNo = document.querySelector('input[id="order-no"]');
const productCode = document.querySelector('input[id="product-code"]');
const quantity = document.querySelector('input[id="quantity"]');
const complaintsGroupCheckboxes = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.querySelector('textarea[id="complaint-description"]');
const solutionsGroupRadios = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.querySelector('textarea[id="solution-description"]');

function validateName() {
  return fullName.value != "";
}

function validateEmail() {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value);
}

function validateOrderNo() {
  return /2024\d{6}/.test(orderNo.value);
}

function validateProductCode() {
  return /[a-z][a-z]\d\d-[a-z]\d\d\d-[a-z][a-z]\d/i.test(productCode.value);
}

function validateQuantity() {
  return /^[1-9]\d*$/.test(quantity.value);
}

function validateComplaintsGroup() {
  return Array.from(complaintsGroupCheckboxes).some(checkbox => checkbox.checked);
}

function validateComplaintDescription() {
  const otherCheckbox = document.getElementById("other-complaint");
  return (!otherCheckbox.checked || complaintDescription.value.length >= 20);
}

function validateSolutionsGroup() {
  return Array.from(solutionsGroupRadios).some(radio => radio.checked);
}

function validateSolutionDescription() {
  const otherRadio = document.getElementById("other-solution");
  return (!otherRadio.checked || solutionDescription.value.length >= 20);
}

function validateForm() {
  let result = {
    "full-name": validateName(),
    "email": validateEmail(),
    "order-no": validateOrderNo(),
    "product-code": validateProductCode(),
    "quantity": validateQuantity(),
    "complaints-group": validateComplaintsGroup(),
    "complaint-description": validateComplaintDescription(),
    "solutions-group": validateSolutionsGroup(),
    "solution-description": validateSolutionDescription()
  };

  return result;
}

function isValid(formFields) {
  for (const key in formFields) {
    if (!formFields[key]) return false;
  }
  return true;
}

form.addEventListener("submit", (e) => {
  const formFields = validateForm();
  if (!isValid(formFields)) {
    e.preventDefault();
    for (const key in formFields) {
      if (!formFields[key]) {
        document.getElementById(key).style.borderColor = "red";
      }
    }
  }
});

fullName.addEventListener("change", () => {
  fullName.style.borderColor = validateName() ? "green" : "red";
});

email.addEventListener("change", () => {
  email.style.borderColor = validateEmail() ? "green" : "red";
});

orderNo.addEventListener("change", () => {
  orderNo.style.borderColor = validateOrderNo() ? "green" : "red";
});

productCode.addEventListener("change", () => {
  productCode.style.borderColor = validateProductCode() ? "green" : "red";
});

quantity.addEventListener("change", () => {
  quantity.style.borderColor = validateQuantity() ? "green" : "red";
});

complaintsGroupCheckboxes.forEach(cb => cb.addEventListener("change", () => {
    document.getElementById("complaints-group").style.borderColor = validateComplaintsGroup() ? "green" : "red";
  })
);

complaintDescription.addEventListener("change", () => {
  complaintDescription.style.borderColor = validateComplaintDescription() ? "green" : "red";
});

solutionsGroupRadios.forEach(radio => radio.addEventListener("change", () => {
    document.getElementById("solutions-group").style.borderColor = validateSolutionsGroup() ? "green" : "red";
  })
);

solutionDescription.addEventListener("change", () => {
  solutionDescription.style.borderColor = validateSolutionDescription() ? "green" : "red";
});
