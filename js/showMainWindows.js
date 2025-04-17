import { setCount, numbers, letters, mix, setPreviousSequence, shuffle } from "./utils.js";
import { createAllElement } from "./createAllElement.js";

export async function showMainWindows() {
  const { createBtn } = await import("./createBtn.js");
  setCount(0);
  const count = Array.from(document.querySelectorAll(".keyboard__item"));
  document.body.innerHTML = "";
  if (count.length === 10) {
    createAllElement("numbers", createBtn);
    setPreviousSequence(shuffle([...numbers]).slice(0, 2));
  } else if (count.length === 26) {
    createAllElement("letters", createBtn);
    setPreviousSequence(shuffle([...letters]).slice(0, 2));
  } else {
    createAllElement("mix", createBtn);
    setPreviousSequence(shuffle([...mix]).slice(0, 2));
  }
}
