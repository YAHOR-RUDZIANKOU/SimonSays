import { startGame } from "./startGame.js";
import {
  createInput,
  addDisabled,
  changeButtons,
  clickKeyBoards,
  createCurrentRound,
  numbers,
  letters,
  mix,
  setPreviousSequence,
  shuffle,
  setCount,
  changeFlagSeq,
  noBlockAllKeyInputs,
  showImitation,
  deleteMenuWrap,
  createCurrentLevel
} from "./utils.js";
import { createMenu } from "./createMenu.js";
import { createKeyboards } from "./createKeyboards.js";

let repeatClicked = false;
export function createBtn() {
  let wrapper = document.querySelector(".wrapper");

  let btnContainer = document.createElement("div");
  btnContainer.classList.add("button__container");

  const btnNext = document.createElement("button");
  btnNext.classList.add("button__general", "button__next", "none");
  btnNext.textContent = "Next";

  const btnRepeat = document.createElement("button");
  btnRepeat.classList.add("button__general", "button__repeat", "none","btn");
  btnRepeat.textContent = "Repeat the sequence";

  const btnStart = document.createElement("button");
  btnStart.classList.add("button__general", "button__start");
  btnStart.textContent = "START";

  const btnNew = document.createElement("button");
  btnNew.classList.add("button__general", "button__new", "none", "btn");
  btnNew.textContent = "New game";

  btnContainer.appendChild(btnNext);
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
    createCurrentLevel();
    deleteMenuWrap();
    startGame();
  });

  btnRepeat.addEventListener(
    "click",
    () => {
      showImitation();
      repeatClicked=true;
      console.log('repeat 1');
    },
    { once: true }
  );

  btnNew.addEventListener("click", showMainWindows);

  btnNext.addEventListener("click", (event) => {
    const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
    btnNext.classList.add("none");
    btnRepeat.classList.remove("none");

    let currentRound = document.querySelector(".current__round-number");
    let currentRoundNumber = currentRound.innerHTML;
    currentRound.innerHTML = +currentRoundNumber + 1;

    if(repeatClicked){
      btnRepeat.addEventListener(
        "click",
        () => {
          showImitation();
          console.log('repeat 2');
        },
        { once: true }
      );
    }

    noBlockAllKeyInputs(keyBoardItem);
    changeFlagSeq(false);
    startGame();
  });
}

function createAllElement(par) {
  createMenu(par);
  createBtn();
  createKeyboards(par);
}

export function showMainWindows() {
  setCount(0);
  let count = Array.from(document.querySelectorAll(".keyboard__item"));
  document.body.innerHTML = "";
  if (count.length === 10) {
    createAllElement("numbers");
    setPreviousSequence(shuffle([...numbers]).slice(0, 2));
  } else if (count.length === 26) {
    createAllElement("letters");
    setPreviousSequence(shuffle([...letters]).slice(0, 2));
  } else {
    createAllElement("mix");
    setPreviousSequence(shuffle([...mix]).slice(0, 2));
  }
  // console.log(previousSequence);
}
