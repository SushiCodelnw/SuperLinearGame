const textBox = document.getElementById("text-box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");

const backgroundImg = document.getElementById("background-container");
const characterImg = document.getElementById("character-container");

const backgrounds = {
  bedroom: 'url("image/Background/Bedroom.png")',
};

const characters = {
  shin: 'url("image/Character/Shin.png")',
  sushi: 'url("image/Character/Sushi.png")',
  none: "",
};

let time = 0;
let stage = 0;
let in_line = true;

const word_list = [
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "โอ้ยยยย ข้อสอบวันนี้นี่มันยากจริงๆเลย",
  },
  { speaker: "ชิน", word: "เหนื่อยว่ะ รีบกลับหอดีกว่า" },
  { speaker: "ชิน", word: "โว๊ะ นั่นอะไรน่ะ กล่องกระดาษหรอ มันไมพอร์ตคุ้นๆวะ" },
  {
    speaker: "ชิน",
    word: "นั่นไงว่าแล้ว มีหมาอยู่ข้างในด้วย น่ารักจริงๆ เยยยย",
  },
  { speaker: "ชิน", word: "เห้ย!! ทำไมมาอยู่ตรงนี้เนี่ย....ไม่กลับบ้านหรอ" },
  { speaker: "ชิน", word: "...... ไม่ตอบแฮะ" },
  { speaker: "ชิน", word: "ตรู๊ท..ตรุ๊ท" },
  { speaker: "ชิน", word: "เห้ย!! มิ้น กูเจอหมาอยู่ข้างถนนว่ะ ทำไงดีวะ" },
  { speaker: "มิ้น", word: "หรอ เจอหมา? แล้วจะเอายังไงกับมันอะ" },
  { speaker: "ชิน", word: "ก็กูมาถามมึงนี่ไง" },
  { speaker: "มิ้น", word: "โทรหาศูนย์ช่วยเหลือสัตว์ดิ" },
  { speaker: "ชิน", word: "ได้ๆ" },
  { speaker: "ชิน", word: "เอาแหละฉันควรทำยังไงดี?" },
  { speaker: "ชิน", word: "ฉันคิดว่าจะพามันกลับห้องน่ะ มิ้น" },
  { speaker: "มิ้น", word: "เครๆ เลี้ยงมันดีๆล่ะ" },
];

textBox.addEventListener("click", BoxClick);

function BoxClick() {
  if (in_line) {
    const { speaker, word, background, character } = word_list[time];
    updateText(speaker, word);
    updateBackground(background);
    updateCharacter(character);
    time++;

    if (time === 13) {
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

function updateCharacter(character) {
  characterImg.style.backgroundImage = characters[character];
}

function updateText(speaker, word) {
  document.getElementById("speaker").innerText = speaker;
  document.getElementById("text").innerText = word;
}

function closeChoices() {
  [choose1, choose2, choose3].forEach((choice) => {
    choice.style.transition = "opacity 0.5s ease";  // เพิ่มแอนิเมชัน
    choice.style.opacity = "0";
    choice.classList.remove("visible");
    setTimeout(() => {
      choice.onclick = null;
    }, 500);  // รอให้แอนิเมชันเสร็จก่อนปิด
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
