import { startGame } from "./startGame.js";
import {
  createInput,
  addDisabled,
  changeButtons,
  clickKeyBoards,
  createCurrentRound,
  previousSequence,
  numbers,
  letters,
  mix,
  setPreviousSequence,
  shuffle,
  getSliceCount
} from "./utils.js";
import { createMenu } from "./createMenu.js";
import { createKeyboards } from "./createKeyboards.js";

export function createBtn() {
  let wrapper = document.querySelector(".wrapper");

  let btnContainer = document.createElement("div");
  btnContainer.classList.add("button__container");

  const btnRepeat = document.createElement("button");
  btnRepeat.classList.add("button__general", "button__repeat", "none");
  btnRepeat.textContent = "Repeat the sequence";

  const btnStart = document.createElement("button");
  btnStart.classList.add("button__general", "button__start");
  btnStart.textContent = "START";

  const btnNew = document.createElement("button");
  btnNew.classList.add("button__general", "button__new", "none", "btn");
  btnNew.textContent = "New game";

  btnContainer.appendChild(btnRepeat);
  btnContainer.appendChild(btnStart);
  btnContainer.appendChild(btnNew);

  wrapper.appendChild(btnContainer);

  document.body.appendChild(wrapper);

  btnStart.addEventListener("click", () => {
    addDisabled();
    changeButtons();
    createInput();
    clickKeyBoards();
    createCurrentRound();
    startGame();
  });

  btnRepeat.addEventListener(
    "click",
    () => {
      startGame();
      // console.log('repeat');
    },
    { once: true }
  );

  btnNew.addEventListener("click", () => {
    let count = Array.from(document.querySelectorAll(".keyboard__item"));
    // console.log(typeof(count.length))
    console.log(previousSequence);
    let n=getSliceCount();
    document.body.innerHTML = "";
    // createKeyboards('numbers');
    if (count.length === 10) {
      createAllElement("numbers");
      setPreviousSequence(shuffle([...numbers]).slice(0,n));
    } else if (count.length === 26) {
      createAllElement("letters");
      setPreviousSequence(shuffle([...letters]).slice(0,n));
    } else {
      createAllElement("mix");
      setPreviousSequence(shuffle([...mix]).slice(0,n));
    }
    console.log(previousSequence);
  });
}

function createAllElement(par) {
  createMenu(par);
  createBtn();
  createKeyboards(par);
}
