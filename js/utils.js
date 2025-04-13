export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
export const mix = [...numbers, ...letters];
import { showMainWindows } from "./createBtn.js";

export function generateKeyLayout(arr) {
  let keyboardContainer = document.querySelector(".keyboard__container");
  let wrapper = document.querySelector(".wrapper");
  if (keyboardContainer) {
    keyboardContainer.innerHTML = "";
  } else {
    keyboardContainer = document.createElement("div");
    keyboardContainer.classList.add("keyboard__container");
  }

  const keyboardItems = document.createElement("div");
  keyboardItems.classList.add("keyboard__items");
  for (let i = 0; i < arr.length; i++) {
    const key = document.createElement("button");
    key.classList.add("keyboard__item", "btn");
    key.setAttribute("data-key", arr[i]);
    key.textContent = arr[i];

    keyboardItems.appendChild(key);
  }

  keyboardContainer.appendChild(keyboardItems);
  wrapper.appendChild(keyboardContainer);
  document.body.appendChild(wrapper);
}

export function changeFon(level) {
  const item = Array.from(document.querySelectorAll(".menu__item"));
  item.forEach((value) => {
    value.classList.remove("choose__level");
  });
  level.classList.add("choose__level");
}

export function createInput() {
  let wrapper = document.querySelector(".wrapper");
  let inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input__text-wrapper");

  let input = document.createElement("input");
  input.className = "input__text";
  input.type = "text";
  input.readOnly = true;

  inputWrapper.appendChild(input);
  wrapper.appendChild(inputWrapper);
  document.body.appendChild(wrapper);
}

export function addDisabled() {
  let itemBtn = Array.from(document.querySelectorAll(".menu__item"));
  itemBtn.forEach((value) => {
    value.disabled = true;
  });
}

export function changeButtons() {
  let btnStart = document.querySelector(".button__start");
  btnStart.classList.add("none");
  let btnRepeat = document.querySelector(".button__repeat");
  btnRepeat.classList.remove("none");
  let btnNew = document.querySelector(".button__new");
  btnNew.classList.remove("none");
}

export function clickKeyBoards() {
  // const btnAll = Array.from(document.querySelectorAll(".btn"));
  // const input = document.querySelector(".input__text");
  const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
  keyBoardItem.forEach((value) => {
    value.addEventListener("click", showInput);
  });
}

export function showInput(event) {
  const btnAll = Array.from(document.querySelectorAll(".btn"));
  const input = document.querySelector(".input__text");
  event.target.classList.add("active");
  input.value += event.target.innerText.toUpperCase();
  disabledAllBtn(btnAll);

  setTimeout(() => {
    event.target.classList.remove("active");
    noDisabledAllBtn(btnAll);
  }, 500);
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]]; // меняем местами элементы
  }
  return array;
}

export function createCurrentRound() {
  let wrapper = document.querySelector(".wrapper");

  const roundContainer = document.createElement("div");
  roundContainer.classList.add("round__container");

  const roundWrapper = document.createElement("div");
  roundWrapper.classList.add("current__round-wrapper");

  const text = document.createElement("div");
  text.classList.add("current__round-text");
  text.textContent = "Round";

  const number = document.createElement("button");
  number.classList.add("current__round-number", "btn");
  number.textContent = "1";

  roundWrapper.appendChild(text);
  roundWrapper.appendChild(number);
  roundContainer.appendChild(roundWrapper);

  wrapper.appendChild(roundContainer);
}

export function getSliceCount() {
  let currentNumber = document.querySelector(".current__round-number").innerHTML;
  let n;
  // console.log("-------");
  // console.log(currentNumber);
  // console.log("-------");
  if (+currentNumber === 1) {
    n = 2;
  } else if (+currentNumber === 2) {
    n = 4;
  } else if (+currentNumber === 3) {
    n = 6;
  } else if (+currentNumber === 4) {
    n = 8;
  } else if (+currentNumber === 5) {
    n = 10;
  } else {
    console.log("error");
  }

  return n;
}

function disabledAllBtn(btnAll) {
  btnAll.forEach((value) => {
    value.disabled = true;
    // console.log("aaaaaaaaaaaa");
  });
}

export function noDisabledAllBtn(btnAll) {
  btnAll.forEach((value) => {
    value.disabled = false;
  });
}

export function insertValueToInput(event) {
  const key = event.key.toLowerCase();
  const keyButton = document.querySelector(`.keyboard__item[data-key="${key}"]`);
  let input = document.querySelector(".input__text");
  let strArray = previousSequence.join("");

  if (/^[a-zA-Z0-9]$/.test(key)) {
    input.value += key.toUpperCase();

    if (keyButton) {
      keyButton.classList.add("active");
      setTimeout(() => {
        keyButton.classList.remove("active");
      }, 100);
    }
  }
}

export function setPreviousSequence(newSequence) {
  previousSequence = newSequence;
}
export function changeFlagSeq(boolean) {
  sequenceShown = boolean;
}

export let previousSequence = [];
let sequenceShown = false; // Переменная для хранения предыдущей последовательности

export async function showImitation(array, n) {
  const repeatBtn = document.querySelector(".button__repeat");
  const newGameBtn = document.querySelector(".button__new");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let allKey = Array.from(document.querySelectorAll(".keyboard__item"));
  let input = document.querySelector(".input__text");
  const btnAll = Array.from(document.querySelectorAll(".btn"));
  const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
  let sheffleNumbers;

  if (!sequenceShown) {
    sheffleNumbers = shuffle([...array]);
    previousSequence = sheffleNumbers.slice(0, n); // Сохраняем текущую последовательность
  }

  let resultArray = previousSequence;
  console.log(previousSequence);
  for (let index = 0; index < resultArray.length; index++) {
    let element = resultArray[index];

    await delay(300);
    allKey.forEach((value) => {
      if (element === value.dataset.key) {
        value.classList.add("active");
        input.value += element.toUpperCase();
        repeatBtn.disabled = true;
        // disabledAllBtn(btnAll);
        blockAllKeyInputs(keyBoardItem);
        newGameBtn.disabled = true;
      }
    });

    await delay(500);
    allKey.forEach((value) => {
      if (element === value.dataset.key) {
        value.classList.remove("active");
      }
    });

    await delay(300);
  }

  noBlockAllKeyInputs(keyBoardItem);
  newGameBtn.disabled = false;
  repeatBtn.disabled = false;
  input.value = "";

  document.addEventListener("keyup", insertValueToInput);
  sequenceShown = true;
}

export function checkAnswer() {
  const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
  document.addEventListener("keydown", handleKeyPress);
  keyBoardItem.forEach((value) => {
    value.addEventListener("click", handleKeyPress);
  });
}

export function setCount(value) {
  count = value;
}

let count = 0;

export function handleKeyPress(event) {
  setTimeout(() => {
    const btmNext = document.querySelector(".button__next");
    const btmRepeat = document.querySelector(".button__repeat");
    const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
    let modal = document.querySelector(".modal-backdrop");
    let musicOneTry = document.getElementById("oneTry");
    let musicLose = document.getElementById("loseMusic");
    let strArray = previousSequence.join("");
    let input = document.querySelector(".input__text");
    let btnRepeat = document.querySelector(".button__repeat");
    // console.log(input.value)
    if (!modal) {
      if (strArray.startsWith(input.value)) {
        if (input.value.length === strArray.length) {
          // console.log("все работает");
          blockAllKeyInputs(keyBoardItem);
          btmNext.classList.remove("none");
          btmRepeat.classList.add("none");
          setTimeout(() => {
            input.value = "";
          }, 200);
          // console.log("правильно");
          document.getElementById("winMusic").play();
          setCount(0);
          checkRound();
        }
      } else {
        if (count === 1) {
          btnRepeat.disabled = true;
          createLosePopUp();
          blockAllKeyInputs(keyBoardItem);
          // console.log("больше нет попыток");
          musicLose.play();
          showLinearPop();
          setTimeout(() => {
            input.value = "";
            musicLose.pause();
            musicLose.currentTime = 0;
          }, 1500);
        } else {
          count = count + 1;
          musicOneTry.play();
          // console.log("осталась одна попытка");
          blockAllKeyInputs(keyBoardItem);
          createErrorPopUp();
          showLinearPop();
          setTimeout(() => {
            input.value = "";
            musicOneTry.pause();
            musicOneTry.currentTime = 0;
          }, 1500);
        }
      }
    }
  }, 500); // 👈 здесь ключ
}

function showLinearPop() {
  setTimeout(() => {
    changeTop();
    // console.log("555");
  }, 200);
}

function changeTop() {
  let popUpModal = document.querySelector(".modal");
  popUpModal.classList.add("changeTop");
}

function blockAllKeyInputs(keyBoardItem) {
  setTimeout(() => {
    document.removeEventListener("keyup", insertValueToInput);
    keyBoardItem.forEach((value) => {
      value.removeEventListener("click", showInput);
      value.disabled = true;
    });
  }, 0);
}

export function noBlockAllKeyInputs(keyBoardItem) {
  document.addEventListener("keyup", insertValueToInput);
  keyBoardItem.forEach((value) => {
    value.addEventListener("click", showInput);
  });
  keyBoardItem.forEach((value) => {
    value.disabled = false;
  });
}

function createErrorPopUp() {
  const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
  // Создаём backdrop
  const backdrop = document.createElement("div");
  backdrop.classList.add("modal-backdrop");

  // Создаём модальное окно
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Обёртка внутри модального окна
  const wrapper = document.createElement("div");
  wrapper.classList.add("modal__wrapper");

  // Кнопка закрытия
  const closeImg = document.createElement("img");
  closeImg.src = "/images/close.png";
  closeImg.classList.add("close__pop");

  // Заголовок
  const title = document.createElement("p");
  title.classList.add("title__error");
  title.textContent = "Error";

  // Подзаголовок
  const subtitle = document.createElement("div");
  subtitle.classList.add("subtitle__error");
  subtitle.textContent = "One Attempt Left !";

  // Сборка элементов
  wrapper.appendChild(closeImg);
  wrapper.appendChild(title);
  wrapper.appendChild(subtitle);

  modal.appendChild(wrapper);
  backdrop.appendChild(modal);

  // Добавляем в body
  document.body.appendChild(backdrop);

  closeImg.addEventListener("click", () => {
    backdrop.remove();
    noBlockAllKeyInputs(keyBoardItem);
  });
}

function createLosePopUp() {
  // Создаём backdrop
  const backdrop = document.createElement("div");
  backdrop.classList.add("modal-backdrop");

  // Создаём модальное окно
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Обёртка внутри модального окна
  const wrapper = document.createElement("div");
  wrapper.classList.add("modal__wrapper");

  // Заголовок
  const title = document.createElement("p");
  title.classList.add("title__error");
  title.textContent = "Alas, you have lost!";

  // Кнопка "Start Over"
  const button = document.createElement("button");
  button.classList.add("subtitle__error-btn");
  button.textContent = "Start Over";

  // Сборка элементов
  wrapper.appendChild(title);
  wrapper.appendChild(button);

  modal.appendChild(wrapper);
  backdrop.appendChild(modal);

  // Добавляем в body
  document.body.appendChild(backdrop);

  // Обработка клика по кнопке (например, перезапуск игры)
  button.addEventListener("click", () => {
    showMainWindows();
    // previousSequence=[];
    backdrop.remove(); // Закрытие попапа
  });
}

function createWinPopUp() {
  let wrapper = document.querySelector(".wrapper");

  const backdrop = document.createElement("div");
  backdrop.classList.add("modal-backdrop");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const div = document.createElement("div");
  div.classList.add("modal__wrapper");

  const title = document.createElement("p");
  title.classList.add("title__win");
  title.textContent = "Game over !";

  const button = document.createElement("button");
  button.classList.add("subtitle__win-btn");
  button.textContent = "Back to Main Menu";

  // Собираем структуру
  div.appendChild(title);
  div.appendChild(button);

  modal.appendChild(div);
  backdrop.appendChild(modal);
  wrapper.appendChild(backdrop);

  // Добавляем в документ
  document.body.appendChild(wrapper);

  button.addEventListener("click", () => {
    showMainWindows();
    // previousSequence=[];
    backdrop.remove(); // Закрытие попапа
  });
}

export function createMusicPlayer(src, id) {
  const wrapper = document.querySelector(".wrapper");
  const audioPlayer = document.createElement("audio");
  audioPlayer.id = id;
  audioPlayer.src = src;
  wrapper.appendChild(audioPlayer);
}

function checkRound() {
  let currentRound = document.querySelector(".current__round-number");
  if (currentRound.innerHTML === "5") {
    createMusicPlayer("/music/fulWin.mp3", "finishGame");
    let music = document.getElementById("finishGame");
    let input = document.querySelector(".input__text");
    input.readOnly = true;
    createWinPopUp();
    showLinearPop();
    music.play();
  }
}

export function deleteMenuWrap() {
  const mainMenu = document.querySelector(".menu__wrapper");
  mainMenu.classList.add("none");
  // const buttonContainer=document.querySelector('.button__container');
  // buttonContainer.classList.add('changeMargin')
}

export function createCurrentLevel() {
  let chooseLevel = document.querySelector(".choose__level").innerText;
  // console.log(chooseLevel.innerText);

  let wrapper = document.querySelector(".wrapper");

  const roundContainer = document.createElement("div");
  roundContainer.classList.add("round__container");

  const roundWrapper = document.createElement("div");
  roundWrapper.classList.add("current__level-wrapper");

  const text = document.createElement("div");
  text.classList.add("current__round-text");
  text.textContent = `Level : ${chooseLevel}`;

  roundWrapper.appendChild(text);
  roundContainer.appendChild(roundWrapper);

  wrapper.appendChild(roundContainer);
}
