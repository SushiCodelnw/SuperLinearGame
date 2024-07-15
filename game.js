const box = document.getElementById("box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");
let choose1_BooleanOpen = false;
let choose2_BooleanOpen = false;
let choose3_BooleanOpen = false;
let time = 0;
const word_list = [
  "เย้!! ถึงบ้านแล้ว",
  "เอาแหละ ทำอะไรก่อนดี",
  "ไปนอนดีฝ่า ว่าแต่ห้องนอนอยู่ไหนวะเนี่ย",
  "เจอละๆ",
  "ฝันดี",
  "Z",
  "ZZ",
  "ZZZ",
  "ZZZZ",
  "ZZZZZ",
  "ZZZZZZ",
  "ZZZZZZZ",
];
let in_line = true;
box.addEventListener("click", BoxClick);
function BoxClick() {
  if (in_line == true) {
    document.getElementById("text").innerHTML = word_list[time];
    time += 1;
    if (time == 2) {
      in_line = false;
      choose_open(
        "นอน",
        "กินข้าว",
        "อาบน้ำ",
        "",
        "ไม่หิวอะ แต่ง่วง",
        "ไม่อยากอาบน้ำอะ ขี้เกียจ อยากนอนง่าาา"
      );
    }
  }
}

function choose_close() {
  choose1.style.opacity = "0";
  choose2.style.opacity = "0";
  choose3.style.opacity = "0";
  choose1_BooleanOpen = false;
  choose2_BooleanOpen = false;
  choose3_BooleanOpen = false;
}
function choose_close_next(outline) {
  choose_close();
  if (outline == "") {
    in_line = true;
    BoxClick();
  } else {
    document.getElementById("text").innerHTML = outline;
    in_line = true;
  }
}

function chooseNumber_Open(number, text, outline) {
  number.innerHTML = text;
  number.style.opacity = "1";
  switch (number) {
    case choose1:
      choose1_BooleanOpen = true;
      number.addEventListener("click", () => {
        if (choose1_BooleanOpen == true) {
          choose_close_next(outline);
        }
      });
      break;
    case choose2:
      choose2_BooleanOpen = true;
      number.addEventListener("click", () => {
        if (choose2_BooleanOpen == true) {
          choose_close_next(outline);
        }
      });
      break;
    case choose3:
      choose3_BooleanOpen = true;
      number.addEventListener("click", () => {
        if (choose3_BooleanOpen == true) {
          choose_close_next(outline);
        }
      });
      break;
  }
}

function choose_open(text1, text2, text3, outline1, outline2, outline3) {
  if (text1 != "") {
    chooseNumber_Open(choose1, text1, outline1);
  }
  if (text2 != "") {
    chooseNumber_Open(choose2, text2, outline2);
  }
  if (text3 != "") {
    chooseNumber_Open(choose3, text3, outline3);
  }
}
