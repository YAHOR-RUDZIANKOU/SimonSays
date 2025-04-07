import { showImitation,getSliceCount,numbers,letters,mix } from "./utils.js";

export function startGame() {
  let keyItem = Array.from(document.querySelectorAll(".keyboard__item"));
  let count=getSliceCount();

  if (keyItem.length === 10) {
    showImitation(numbers, count);
  }
}
