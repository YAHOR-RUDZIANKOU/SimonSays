import {
  showImitation,
  getSliceCount,
  checkAnswer,
  createMusicPlayer,
  numbers,
  letters,
  mix,
  changeFlagSeq,
} from "./utils.js";

export async function startGame() {
  createMusicPlayer("/music/winChoose.mp3", "winMusic");
  createMusicPlayer("/music/fulFail.mp3", "loseMusic");
  createMusicPlayer("/music/oneTry.mp3", "oneTry");
  const keyItem = Array.from(document.querySelectorAll(".keyboard__item"));
  const input = document.querySelector(".input__text");
  const count = getSliceCount();

  if (keyItem.length === 10) {
    input.value = "";
    changeFlagSeq(false);
    await showImitation(numbers, count);
    checkAnswer();
  } else if (keyItem.length === 26) {
    input.value = "";
    changeFlagSeq(false);
    await showImitation(letters, count);
    checkAnswer();
  } else if (keyItem.length === 36) {
    input.value = "";
    changeFlagSeq(false);
    await showImitation(mix, count);
    checkAnswer();
  }
}
