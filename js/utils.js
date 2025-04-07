export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
export const mix = [...numbers, ...letters];

export function generateKeyLayout(arr) {
  let keyboardContainer = document.querySelector(".keyboard__container");
  let wrapper = document.querySelector(".wrapper");
  if (keyboardContainer) {
    keyboardContainer.innerHTML = "";
  } else {
    // Если клавиатуры нет, создаём новый контейнер
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
  const input = document.querySelector(".input__text");
  const keyBoardItem = Array.from(document.querySelectorAll(".keyboard__item"));
  keyBoardItem.forEach((value) => {
    value.addEventListener("click", showInput);
  });

  function showInput(event) {
    input.value += event.target.innerText;
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
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
  number.classList.add("current__round-number","btn");
  number.textContent = "1";

  roundWrapper.appendChild(text);
  roundWrapper.appendChild(number);
  roundContainer.appendChild(roundWrapper);

  wrapper.appendChild(roundContainer);
}

export function getSliceCount(){
  let currentNumber=document.querySelector('.current__round-number').innerHTML;
  let n;
  if(+currentNumber===1){
    n=2;
  }else if(+currentNumber===2){
    n=4
  }else if(+currentNumber===3){
    n=6
  }else if(+currentNumber===4){
    n=8
  }else if(+currentNumber===5){
    n=10
  }else{
    console.log('error')
  }

  return n;
}


let previousSequence = [];
let sequenceShown = false;   // Переменная для хранения предыдущей последовательности
export async function showImitation(array, n) {
  const repeatBtn=document.querySelector('.button__general');
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let allKey = Array.from(document.querySelectorAll(".keyboard__item"));
  let input = document.querySelector(".input__text");
  const btnAll = Array.from(document.querySelectorAll(".btn"));
  let sheffleNumbers ;

  if ( !sequenceShown) {
    sheffleNumbers = shuffle([...array]);
    previousSequence = sheffleNumbers.slice(0, n);  // Сохраняем текущую последовательность
  }

  const resultArray = previousSequence;

  for (let index = 0; index < resultArray.length; index++) {
    const element = resultArray[index];

    await delay(300);
    allKey.forEach((value) => {
      if (element === value.dataset.key) {
        value.classList.add("active");
        input.value += element;
        btnAll.forEach((value) => {
          value.disabled = true;
        });
        repeatBtn.disabled=true;
      }
    });

    await delay(800);
    allKey.forEach((value) => {
      if (element === value.dataset.key) {
        value.classList.remove("active");
      }
    });

    await delay(500);
  }

  btnAll.forEach((value) => {
    value.disabled = false;
  });
  repeatBtn.disabled=false;
  input.value = "";

  sequenceShown = true;
  // previousSequence.length=0;
}
