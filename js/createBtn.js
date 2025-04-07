import { startGame } from "./startGame.js";
import { createInput, addDisabled, changeButtons, clickKeyBoards, createCurrentRound} from "./utils.js";

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
    btnNew.classList.add("button__general", "button__new", "none","btn");
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

    btnRepeat.addEventListener('click',()=>{
      startGame();
      console.log('repeat');
    },{ once: true })
  }