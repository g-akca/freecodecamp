const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach(drumPad => {
  drumPad.addEventListener("click", () => {
    drumPad.querySelector("audio").play();
    display.innerText = drumPad.id.toUpperCase();
  })
});

document.addEventListener("keydown", (e) => {
  if (/[qweasdzxc]/.test(e.key)) {
    document.getElementById(e.key.toUpperCase()).play();
    display.innerText = document.getElementById(e.key.toUpperCase()).parentNode.id.toUpperCase();
  }
});