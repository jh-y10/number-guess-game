let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea =document.getElementById("result-area");

const play = () => {
  let userValue = Number(userInput.value);
  if (userValue < computerNum) {
    resultArea.textContent = "Up!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!";
  } else {
    resultArea.textContent = "맞췄습니다!!";
  }
};

const pickRandomNum = () => {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log(`정답 ${computerNum}`);
};

playButton.addEventListener("click", play);
pickRandomNum();