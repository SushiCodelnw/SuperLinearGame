import { word_list_1, word_list_2, word_list_3 } from "./story-1.js";

//! ====================
//! การประกาศตัวแปร
//! ====================

// ตัวแปร Element ข้อความ
const textBox = document.getElementById("text-box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");

// ตัวแปร Element รูปภาพ
const backgroundImg = document.getElementById("background-container");
const characterImg = document.getElementById("character-container");

// ตัวแปรธรรมดา
let wordList = [...word_list_1];
let time = 0;
let isActiveAndInLine = false;
let isTyping = false;
let interval;
let fullWord = "";

//! ====================
//! ฟังก์ชันการทำงาน
//! ====================

// เมื่อกดคลิกที่กล่องข้อความ
function BoxClick() {
  const textElement = document.getElementById("text");

  if (isTyping) {
    clearInterval(interval);
    textElement.innerText = fullWord;
    isTyping = false;
  } else if (!isActiveAndInLine && time < wordList.length) {
    const {
      character,
      background,
      speaker,
      word,
      nextlist,
      hideTextBox: hideDelay,
      openChoices: choices,
    } = wordList[time];

    updateCharacter(character);
    updateBackground(background);
    updateText(speaker, word);

    hideDelay ? hideTextBox(hideDelay) : "";
    choices ? openChoices(choices) : "";
    nextlist ? wordList = switchWordList(nextlist) : time++;
  }
}

//! ====================
//! ฟังก์ชันการอัปเดต
//! ====================

// ฟังก์ชันอัปเดตข้อความ
function updateText(speaker, word) {
  const textElement = document.getElementById("text");
  document.getElementById("speaker").innerText = speaker;
  textElement.innerText = "";

  fullWord = word;
  let index = 0;
  isTyping = true;
  clearInterval(interval);

  interval = setInterval(() => {
    if (index < word.length) {
      const currentChar = word[index];
      textElement.innerHTML += currentChar === " " ? "&nbsp;" : currentChar;
      index++;
    } else {
      clearInterval(interval);
      isTyping = false;
    }
  }, 30);
}

// ฟังก์ชันอัปเดตภาพพื้นหลัง
function updateBackground(background) {
  backgroundImg.style.backgroundImage = background
    ? `url("assets/images/backgrounds/${background}.png")`
    : "";
}

// ฟังก์ชันอัปเดตภาพตัวละคร
function updateCharacter(character) {
  characterImg.style.backgroundImage = character
    ? `url("assets/images/characters/${character.name}/${character.reaction}.png")`
    : "";

  switch (character.size) {
    case "800*1000":
      characterImg.style.height = "85vh";
      characterImg.style.width = "68vh";
      break;
    case "1000*1000":
      characterImg.style.height = "85vh";
      characterImg.style.width = "85vh";
      break;
  }
}

//! ====================
//! ฟังก์ชันสถานการณ์
//! ====================

// ฟังก์ชันซ่อนกล่องข้อความ
function hideTextBox(delay) {
  textBox.style.transition = "opacity 0.1s";
  textBox.style.opacity = "0";
  isActiveAndInLine = true;

  setTimeout(() => {
    textBox.style.opacity = "1";
    isActiveAndInLine = false;
  }, delay * 1000);
}

// ฟังก์ชันเปิดตัวเลือก
function openChoices(choices) {
  isActiveAndInLine = false;
  choices.choice1
    ? openChoice(choose1, choices.choice1)
    : "";
  choices.choice2
    ? openChoice(choose2, choices.choice2)
    : "";
  choices.choice3
    ? openChoice(choose3, choices.choice3)
    : "";
}

// ฟังก์ชันจัดการตัวเลือก
function openChoice(
  choiceElement,
  { character, background, speaker, word, text, result }
) {
  choiceElement.innerText = text;
  choiceElement.style.opacity = "1";
  choiceElement.classList.add("visible");
  choiceElement.onclick = () =>
    handleChoiceClick(character, background, speaker, word, result);
}

// ฟังก์ชันจัดการเมื่อเลือกตัวเลือก
function handleChoiceClick(character, background, speaker, word, result) {
  isActiveAndInLine = false;

  closeChoices();
  updateCharacter(character);
  updateBackground(background);
  updateText(speaker, word);

  wordList = switchWordList(result);
}

// ฟังก์ชันปิดตัวเลือก
function closeChoices() {
  [choose1, choose2, choose3].forEach((choice) => {
    choice.style.opacity = "0";
    choice.classList.remove("visible");
    choice.onclick = null;
  });
}

// ฟังก์ชันเปลี่ยนชุดข้อความ
function switchWordList(result) {
  time = 0;
  switch (result) {
    case "word_list_1":
      return [...word_list_1];
    case "word_list_2":
      return [...word_list_2];
    case "word_list_3":
      return [...word_list_3];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textBox) {
    textBox.addEventListener("click", BoxClick);
  }
});
