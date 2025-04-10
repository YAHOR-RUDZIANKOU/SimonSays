import { showImitation,getSliceCount,checkAnswer,createMusicPlayer,numbers,letters,mix } from "./utils.js";

export async function startGame() {
  createMusicPlayer("/music/winChoose.mp3", "winMusic");
  createMusicPlayer("/music/fulFail.mp3", "loseMusic");
  createMusicPlayer("/music/oneTry.mp3", "oneTry");
  let keyItem = Array.from(document.querySelectorAll(".keyboard__item"));
  let input=document.querySelector('.input__text');
  let count=getSliceCount();

  if (keyItem.length === 10) {
    input.value="";
    await showImitation(numbers, count);
    checkAnswer();
  }else if(keyItem.length === 26){
    input.value="";
    await showImitation(letters, count);
    checkAnswer();
  }else if(keyItem.length === 36){
    input.value="";
    await showImitation(mix, count);
    checkAnswer();
  }else{
    console.log('error')
  }
}
