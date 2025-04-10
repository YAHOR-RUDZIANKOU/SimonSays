import { createKeyboards } from "./createKeyboards.js";
import { changeFon } from "./utils.js";

export function createMenu(level) {
  const btnStart = document.querySelector(".button__start-wrapper");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu__wrapper");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu__container");

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu__wrapper-btn");
  menuButton.textContent = "Choose Difficulty ▼";

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu__items");

  const menuItemsContent = document.createElement("div");
  menuItemsContent.classList.add("menu__items-content");

  const easyItem = document.createElement("button");
  easyItem.classList.add("menu__item", "menu__item-easy");
  easyItem.textContent = "Easy";

  const mediumItem = document.createElement("button");
  mediumItem.classList.add("menu__item", "menu__item-medium");
  mediumItem.textContent = "Medium";

  const hardItem = document.createElement("button");
  hardItem.classList.add("menu__item", "menu__item-hard");
  hardItem.textContent = "Hard";

  menuItemsContent.appendChild(easyItem);
  menuItemsContent.appendChild(mediumItem);
  menuItemsContent.appendChild(hardItem);

  menuItems.appendChild(menuItemsContent);

  menuContainer.appendChild(menuButton);
  menuContainer.appendChild(menuItems);

  menuWrapper.appendChild(menuContainer);

  wrapper.appendChild(menuWrapper);

  document.body.appendChild(wrapper);

  const easyLevel = document.querySelector(".menu__item-easy");
  const medium = document.querySelector(".menu__item-medium");
  const hard = document.querySelector(".menu__item-hard");

  easyLevel.addEventListener("click", () => {
    createKeyboards("numbers");
    changeFon(easyLevel);
  });

  medium.addEventListener("click", () => {
    createKeyboards("letters");
    changeFon(medium);
  });

  hard.addEventListener("click", () => {
    createKeyboards();
    changeFon(hard);
  });

  if (level === "numbers") {
    changeFon(easyLevel);
  } else if (level === "letters") {
    changeFon(medium);
  } else {
    changeFon(hard);
  }
}
