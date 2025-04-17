import { startGame } from "./startGame.js";
import {
  createInput,
  addDisabled,
  changeButtons,
  clickKeyBoards,
  createCurrentRound,
  changeFlagSeq,
  noBlockAllKeyInputs,
  showImitation,
  deleteMenuWrap,
  createCurrentLevel,
} from "./utils.js";

import { showMainWindows } from "./showMainWindows.js";

let repeatClicked = false;
export function createBtn() {
  const wrapper = document.querySelector(".wrapper");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("button__container");

  const btnNext = document.createElement("button");
  btnNext.classList.add("button__general", "button__next", "none");
  btnNext.textContent = "Next";

  const btnRepeat = document.createElement("button");
  btnRepeat.classList.add("button__general", "button__repeat", "none", "btn");
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
      const input = document.querySelector(".input__text");
      showImitation();
      input.value = " ";
      repeatClicked = true;
    },
    { once: true }
  );

  btnNew.addEventListener("click", showMainWindows);

  btnNext.addEventListener("click", () => {
    const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
    btnNext.classList.add("none");
    btnRepeat.classList.remove("none");

    const currentRound = document.querySelector(".current__round-number");
    const currentRoundNumber = currentRound.innerHTML;
    currentRound.innerHTML = +currentRoundNumber + 1;

    if (repeatClicked) {
      btnRepeat.addEventListener(
        "click",
        () => {
          const input = document.querySelector(".input__text");
          input.value = " ";
          showImitation();
        },
        { once: true }
      );
    }

    noBlockAllKeyInputs(keyBoardItem);
    changeFlagSeq(false);
    startGame();
  });
}
