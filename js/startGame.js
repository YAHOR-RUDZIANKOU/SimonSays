import { showImitation,getSliceCount,checkAnswer,numbers,letters,mix } from "./utils.js";

export async function startGame() {
  let keyItem = Array.from(document.querySelectorAll(".keyboard__item"));
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let input=document.querySelector('.input__text');
  // console.log(input)
  let count=getSliceCount();

  if (keyItem.length === 10) {
    input.value="";
    await showImitation(numbers, count);
    checkAnswer();
  }
}
