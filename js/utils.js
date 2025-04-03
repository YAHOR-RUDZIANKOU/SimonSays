export function generateKeyLayout(arr) {
  let keyboardContainer = document.querySelector(".keyboard__container");
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
    const key = document.createElement("div");
    key.classList.add("keyboard__item");
    key.textContent = arr[i];

    keyboardItems.appendChild(key);
  }

  keyboardContainer.appendChild(keyboardItems);
  document.body.appendChild(keyboardContainer);
}

export function createBtn() {
  const btn = document.createElement("button");
  btn.classList.add("button__start-wrapper");
  btn.textContent = "START";

  document.body.appendChild(btn);
}
