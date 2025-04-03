import { generateKeyLayout } from "./utils.js";

export function createKeyboards(mode) {
  const startBtn=document.querySelector('.button__start-wrapper');
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const mix = [...numbers, ...letters];
  if (mode === "numbers") {
    generateKeyLayout(numbers);
    startBtn.style.top='40%';
  } else if (mode === "letters") {
    generateKeyLayout(letters);
    startBtn.style.top='58%';
  } else {
    generateKeyLayout(mix);
    startBtn.style.top='65%';
  }
}
