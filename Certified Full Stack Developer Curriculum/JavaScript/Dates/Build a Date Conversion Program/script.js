const currentDate = new Date();
const currentDateFormat = "Current Date and Time: " + currentDate;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return "Formatted Date (MM/DD/YYYY): " + date.toLocaleDateString("en-US");
}

function formatDateLong(date) {
  return "Formatted Date (Month Day, Year): " + date.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
}