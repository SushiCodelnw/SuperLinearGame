import { word_list_1, word_list_2, word_list_3 } from "./story-1.js";

const textBox = document.getElementById("text-box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");

const backgroundImg = document.getElementById("background-container");
const characterImg = document.getElementById("character-container");

let word_list = [...word_list_1];

let time = 0;
let in_line = true;
let isTextBoxActive = true;

function BoxClick() {
  if (isTextBoxActive && in_line && time < word_list.length) {
    const {
      character,
      background,
      speaker,
      word,
      nextlist,
      hideTextBox: hideDelay,
      openChoices: choices,
    } = word_list[time];
    console.log(`Background: ${background}, Character: ${character}`);
    updateCharacter(character);
    updateBackground(background);
    updateText(speaker, word);

    if (hideDelay) {
      hideTextBox(hideDelay);
    }

    if (choices) {
      in_line = false;
      openChoices(choices.choice1, choices.choice2, choices.choice3);
    }

    if (nextlist) {
      word_list = switchWordList(nextlist);
    } else {
      time++;
    }
  }
}

function updateBackground(background) {
  backgroundImg.style.backgroundImage = "";
  if (background) {
    backgroundImg.style.backgroundImage = `url("/assets/images/Backgrounds/${background}.png")`;
  }
}

function updateCharacter(character) {
  characterImg.style.backgroundImage = "";
  if (character) {
    characterImg.style.backgroundImage = `url("/assets/images/Characters/${character}.png")`;
  }
}

function updateText(speaker, word) {
  document.getElementById("speaker").innerText = speaker;
  document.getElementById("text").innerText = word;
}

function hideTextBox(delay) {
  textBox.style.transition = "opacity 0.1s";
  textBox.style.opacity = "0";
  isTextBoxActive = false;

  setTimeout(() => {
    textBox.style.opacity = "1";
    isTextBoxActive = true;
  }, delay * 1000);
}

function closeChoices() {
  [choose1, choose2, choose3].forEach((choice) => {
    choice.style.opacity = "0";
    choice.classList.remove("visible");
    choice.onclick = null;
  });
}

function handleChoiceClick(character, background, speaker, word, result) {
  in_line = true;

  closeChoices();
  updateCharacter(character);
  updateBackground(background);
  updateText(speaker, word);

  word_list = switchWordList(result);
}

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

function openChoices(choice1, choice2, choice3) {
  if (choice1) {
    openChoice(choose1, choice1);
  }
  if (choice2) {
    openChoice(choose2, choice2);
  }
  if (choice3) {
    openChoice(choose3, choice3);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textBox) {
    textBox.addEventListener("click", BoxClick);
  }
});
