let computerNum = 0;
let chances = 3;
let $mainImage = document.getElementById("mainImage");
let $inputNum = document.getElementById("inputNum");
let $goButton = document.getElementById("goButton");
let $resetButton = document.getElementById("resetButton");
let $result = document.getElementById("result");
let $answerArea = document.getElementById("answerArea");
let $answerButton = document.getElementById("answerButton");
let history = [];

const pickRandomNum = () => {
  computerNum = Math.floor(Math.random() * 100 + 1);
};

const chanceCheck = () => {
  if (chances <= 0) {
    $mainImage.src = "images/drink-pepe.png";
    $result.textContent = "게임오버! 한잔해~";
    $goButton.disabled = true;
    $goButton.style.backgroundColor = "gray";
  }
};

const play = () => {
  let userNum = Number($inputNum.value);
  if (!userNum) {
    $result.textContent = `숫자를 입력하지 않았습니다. 기회: ${chances}`;
    return;
  } else if (userNum < 0 || userNum > 100) {
    $result.textContent = `1 ~ 100 사이의 숫자를 입력해주세요. 기회: ${chances}`;
    return;
  } else if (history.includes(userNum)) {
    $result.textContent = `이미 입력한 숫자입니다. 기회: ${chances}`;
    return;
  }

  if (userNum < computerNum) {
    chances--;
    $mainImage.src = "images/up-pepe.jpg";
    $mainImage.style.height = "220px";
    $result.textContent = `Up!! 기회: ${chances}`;
    history.push(userNum);
    chanceCheck();
  } else if (userNum > computerNum) {
    chances--;
    $mainImage.src = "images/down-pepe.jpeg";
    $mainImage.style.height = "220px";
    $result.textContent = `DOWN!! 기회: ${chances}`;
    history.push(userNum);
    chanceCheck();
  } else if (userNum === computerNum) {
    $mainImage.src = "images/correct.gif";
    $result.textContent = "이걸 맞춘다고? 정답!!";
  }
};

const reset = () => {
  $inputNum.value = "";
  $mainImage.src = "images/dance_pepe.gif";
  $mainImage.style.height = "";
  $result.textContent = "한번 맞춰보시지! 기회: 3";
  chances = 3;
  $goButton.disabled = false;
  $goButton.style.backgroundColor = "blueviolet";
  history = [];
};

const answerShow = () => {
  $answerArea.style.display = "block";
  $answerArea.textContent = `정답: ${computerNum}`;
};

pickRandomNum();
$goButton.addEventListener("click", play);
$resetButton.addEventListener("click", reset);
$answerButton.addEventListener("click", answerShow);
$inputNum.addEventListener("focus", function(){$inputNum.value=""});
