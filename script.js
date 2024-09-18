const textBox = document.getElementById("text-box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");

const backgroundImg = document.getElementById("background-container");
const characterImg = document.getElementById("character-container");

const backgrounds = {
  bedroom: 'url("image/Background/bedroom.png")',
};

const characters = {
  shin: 'url("image/Character/shin.png")',
  sushi: 'url("image/Character/sushi.png")',
};

let time = 0;
let stage = 0;
let in_line = true;

const word_list = [
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "โอ้ยยยย ข้อสอบวันนี้นี่มันยากจริงๆเลย... รีบกลับบ้านดีกว่า",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "โว๊ะ นั่นอะไรน่ะ? กล่องกระดาษเหรอ? สงสัยจังว่าอะไรอยู่ข้างใน...",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "เชี่ย! มีลูกหมาอยู่ข้างในด้วย!",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "ฉันยิ่งชอบหมาอยู่ด้วยสิ... เอาไงกับมันดีนะ?",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "โอเคๆ ฉันจะไม่ปล่อยให้นายอยู่ตรงนี้หรอก...",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "เห.. มีใบกระดาษอยู่ในกล่องด้วย.. เขียนว่า ซูชิ",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "งั้นหรอ นายชื่อซูชิสินะ ไปกันเถอะ ซูชิ!!",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "ก่อนอื่น... คงต้องหาข้าวให้มันกินก่อน",
  },
  {
    character: "shin",
    background: "bedroom",
    speaker: "ชิน",
    word: "ไปซื้ออาหารหมาดีกว่า",
  },
  {
    character: "shin",
    background: "store",
    speaker: "ชิน",
    word: "สวัสดีคร้าบบบบบบ ลุง",
  },
  {
    character: "storekeeper",
    background: "store",
    speaker: "ลุง",
    word: "หวัสดีจ่ะหลาน! เอาอะไรดีล่ะ?",
  },
  {
    character: "shin",
    background: "store",
    speaker: "ชิน",
    word: "เอาเป็น... อาหารหมา... ลุงแนะนำได้ไหมครับว่าเอาแบบไหนดี",
  },
  {
    character: "storekeeper",
    background: "store",
    speaker: "ลุง",
    word: "ลุงมีนี่แนะนำ อาหารหมาจากญี่ปุ่น ปกติเหมือนจะขายกันหลายร้อยเลยนะ แต่ลุงได้มาฟรีน่ะ เมื่อวานเพื่อนลุงซื้อมาฝาก งั้นลุงขายแค่ 100 เดียวจ่ะ",
  },
  {
    character: "shin",
    background: "store",
    speaker: "ชิน",
    word: "โอ้ววว ลุงใจดีจัง ขอบคุณมากนะครับลุง",
  },
  {
    character: "storekeeper",
    background: "store",
    speaker: "ลุง",
    word: "ไม่เป็นไรจ่ะ โชคดีนะ เลี้ยงมันดีๆล่ะ",
  },
  {
    character: "shin",
    background: "store",
    speaker: "ชิน",
    word: "ครับ ขอบคุณมากเลยครับลุง",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "เฮ้อ... ถึงบ้านสักที รอแป๊บนะ เดี๋ยวเอาอาหารให้กิน",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "เห้ย! เกิดอะไรขึ้นเนี่ย? อ้าาาาาา!!!",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "ว๊าา! อะไรเนี่ย!!",
  },
  {
    character: "sushi",
    background: "home",
    speaker: "ซูชิ",
    word: "เกิดอะไรขึ้นกันล่ะเนี่ย",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: ".",
  },
  {
    character: "sushi",
    background: "home",
    speaker: "ซูชิ",
    word: "..",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "...",
  },
  {
    character: "sushi",
    background: "home",
    speaker: "ซูชิ",
    word: "....",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "นี่มัน... อะไรกันล่ะเนี่ย? น่ะ...นาย.. เป็นคน? งั้นหรอ?",
  },
  {
    character: "sushi",
    background: "home",
    speaker: "ซูชิ",
    word: "ฉันก็ไม่รู้วววววว ทำไมอยู่ดีๆฉันกลายเป็นเหมือนนายล่ะเนี่ย",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "อะไรกันล่ะเนี่ย (แต่... ตอนเป็นหมาก็น่ารักอยู่แล้วนะ ทะ..ทำไมตอนนายกลายเป็นคนมันก็....)",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "หรือว่าจะเป็นเพราะอาหารหมาที่ลุงให้มากันนะ เพราะหลังจากที่นายกิน นายก็กลายเป็นคนเลยในอีกไม่กี่วินาทีตอนมา",
  },
  {
    character: "shin",
    background: "home",
    speaker: "ชิน",
    word: "ถึงจะยังไม่เข้าใจก็เหอะ แต่นายต้องอยู่กับฉันไปก่อนล่ะนะ",
  },
];

function BoxClick() {
  if (in_line && time < word_list.length) {
    const { character, background, speaker, word } = word_list[time];
    updateCharacter(character);
    updateBackground(background);
    updateText(speaker, word);
    time++;

    if (time === 3) {
      hideTextBox();
    }

    if (time === 4) {
      in_line = false;
      if (stage === 0) {
        openChoices(
          {
            speaker: "ชิน",
            text: "เก็บมันมาเลี้ยง",
            outline: "คงมีแค่วิธีนี้แหละ!",
          },
          {
            speaker: "ชิน",
            text: "ปล่อยมันไว้อย่างงั้นแหละ",
            outline: "ไม่เอาๆๆๆๆๆ มันน่าสงสารจะตาย",
          },
          {
            speaker: "ชิน",
            text: "โทรหาศูนย์ช่วยเหลือสัตว์",
            outline: "แต่ฉันไม่รู้เบอร์แฮะ คงต้องเลือกวิธีอื่น",
          }
        );
      }
    }
  }
}

function updateBackground(background) {
  backgroundImg.style.backgroundImage = backgrounds[background];
}

function updateCharacter(character = {}) {
  characterImg.style.backgroundImage = characters[character];
}

function updateText(speaker, word) {
  document.getElementById("speaker").innerText = speaker;
  document.getElementById("text").innerText = word;
}

function hideTextBox() {
  textBox.style.transition = "opacity 0.1s";
  textBox.style.opacity = "0";
  textBox.onclick = null;

  setTimeout(() => {
    textBox.style.opacity = "1";
    textBox.onclick = BoxClick;
  }, 2000);
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
