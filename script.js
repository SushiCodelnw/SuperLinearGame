const textBox = document.getElementById("text-box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");

let time = 0;
let stage = 0; // สถานะของเกม

const word_list = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];

let in_line = true;

textBox.addEventListener("click", BoxClick);

function BoxClick() {
  if (in_line) {
    updateText(word_list[time]);
    time++;

    if (time === 4) {
      // เปลี่ยนตามจำนวนข้อความที่ต้องการให้มีตัวเลือก
      in_line = false;
      if (stage === 0) {
        openChoices(
          { text: "เก็บมันมาเลี้ยง", outline: "เก็บ" },
          { text: "ปล่อยมันไว้อย่างงั้นแหละ", outline: "ปล่อยไว้" }
        );
      }
    }
  }
}

function updateText(text) {
  document.getElementById("text").innerText = text;
}

function closeChoices() {
  [choose1, choose2, choose3].forEach((choice) => {
    choice.style.opacity = "0";
    choice.classList.remove("visible");
    choice.onclick = null;
  });
}

function handleChoiceClick(outline) {
  closeChoices();

  if (stage === 0) {
    if (outline === "เก็บ") {
      updateText("มานี้มะ ไอหน้าหมา");
      stage = 1; // เปลี่ยนสถานะหลังจากเลือกเก็บลูกหมา
    } else {
      updateText("จะบ้าหรอ มันน่าสงสารจะตาย");
      time -= 1; // กลับไปที่ข้อความก่อนหน้านี้
    }
  }

  in_line = true;
}

function openChoice(choiceElement, { text, outline }) {
  choiceElement.innerText = text;
  choiceElement.style.opacity = "1";
  choiceElement.classList.add("visible");
  choiceElement.onclick = () => handleChoiceClick(outline);
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
