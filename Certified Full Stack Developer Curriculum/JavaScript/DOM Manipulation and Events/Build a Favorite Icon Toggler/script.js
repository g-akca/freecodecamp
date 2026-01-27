document.addEventListener("DOMContentLoaded", () => {
  const heartButtons = document.querySelectorAll(".favorite-icon");

  heartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filled = button.classList.toggle("filled");
    button.innerHTML = filled ? "&#10084;" : "&#9825;";
    })
  })
})