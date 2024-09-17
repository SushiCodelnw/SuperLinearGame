const textBox = document.getElementById("text-box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");

const backgroundImg = document.getElementById("background-container");
const shinImg = document.getElementById("shin");
const sushiImg = document.getElementById("sushi");

const backgrounds = {
  bedroom: 'url("image/Background/Bedroom.png")',
};

const characters = {
  shin: 'image/Character/shin.png',
  sushi: 'image/Character/sushi.png',
  none: null,
};

let time = 0;
let stage = 0;
let in_line = true;

const word_list = [
  {
    character: ["shin", "sushi"],
    background: "bedroom",
    speaker: "ชิน",
    word: "โอ้ยยยย ข้อสอบวันนี้นี่มันยากจริงๆเลย",
    action: { shin: ["moveX(5px)", "scaleX(-1)"], sushi: ["moveY(10px)"] },
    loop: { type: "repeat", count: 10 },
  },
  {
    character: ["shin"],
    background: "bedroom",
    speaker: "ชิน",
    word: "เหนื่อยว่ะ รีบกลับหอดีกว่า",
    action: { shin: ["moveY(10px)"] },
    loop: { type: "untilChange" },
  },
  {
    character: ["sushi"],
    background: "bedroom",
    speaker: "ชิน",
    word: "โว๊ะ นั่นอะไรน่ะ กล่องกระดาษหรอ มันไมพอร์ตคุ้นๆวะ",
    action: {},
    loop: { type: "once" },
  },
];

textBox.addEventListener("click", BoxClick);

function BoxClick() {
  if (in_line && time < word_list.length) {
    const { character, background, speaker, word, action, loop } =
      word_list[time];
    updateCharacter(character, action);
    updateBackground(background);
    updateText(speaker, word);
    time++;

    if (time === 5) {
      in_line = false;
      if (stage === 0) {
        openChoices(
          {
            speaker: "ชิน",
            text: "เก็บมันมาเลี้ยง",
            outline: "มานี้มะ ไอหน้าหมา",
          },
          {
            speaker: "มิ้น",
            text: "ปล่อยมันไว้อย่างงั้นแหละ",
            outline: "มึงจะบ้าหรอ มันน่าสงสารจะตาย",
          },
          {
            speaker: "มิ้น",
            text: "โทรหาศูนย์ช่วยเหลือสัตว์",
            outline: "แต่กูไม่รู้เบอร์ว่ะ",
          }
        );
      }
    }
  }
}

function updateBackground(background) {
  backgroundImg.style.backgroundImage = backgrounds[background];
}

function updateCharacter(charactersArray, actions = {}) {
  // Reset image and transformation styles for each character
  shinImg.style.backgroundImage = "";
  shinImg.style.transform = "";
  sushiImg.style.backgroundImage = "";
  sushiImg.style.transform = "";

  charactersArray.forEach((character) => {
    if (characters[character]) {
      if (character === "shin") {
        shinImg.style.backgroundImage = `url(${characters[character]})`;
        applyActions(shinImg, actions[character] || []);
      } else if (character === "sushi") {
        sushiImg.style.backgroundImage = `url(${characters[character]})`;
        applyActions(sushiImg, actions[character] || []);
      }
    }
  });
}

function applyActions(characterImg, actions) {
  actions.forEach((action) => {
    if (action.startsWith("moveX")) {
      const value = action.match(/\d+/)[0];
      characterImg.style.transform += ` translateX(${value}px)`;
    } else if (action.startsWith("moveY")) {
      const value = action.match(/\d+/)[0];
      characterImg.style.transform += ` translateY(${value}px)`;
    } else if (action.startsWith("scaleX")) {
      const value = action.match(/-?\d+/)[0];
      characterImg.style.transform += ` scaleX(${value})`;
    }
  });
}

function updateText(speaker, word) {
  document.getElementById("speaker").innerText = speaker;
  document.getElementById("text").innerText = word;
}

function closeChoices() {
  [choose1, choose2, choose3].forEach((choice) => {
    choice.style.opacity = "0";
    choice.classList.remove("visible");
    choice.onclick = null;
  });
}

function handleChoiceClick(speaker, text, outline) {
  closeChoices();
  updateText(speaker, outline);

  if (text === "เก็บมันมาเลี้ยง") {
    stage = 1;
  } else {
    time--;
  }
  in_line = true;
}

function openChoice(choiceElement, { speaker, text, outline }) {
  choiceElement.innerText = text;
  choiceElement.style.opacity = "1";
  choiceElement.classList.add("visible");
  choiceElement.onclick = () => handleChoiceClick(speaker, text, outline);
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
