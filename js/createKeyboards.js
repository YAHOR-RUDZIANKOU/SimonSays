import { generateKeyLayout,numbers,letters,mix } from "./utils.js";

export function createKeyboards(mode) {
  // const startBtn=document.querySelector('.button__start-wrapper');

  if (mode === "numbers") {
    generateKeyLayout(numbers);
  } else if (mode === "letters") {
    generateKeyLayout(letters);
  } else {
    generateKeyLayout(mix);
  }
}
