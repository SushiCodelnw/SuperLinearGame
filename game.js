const box = document.getElementById("box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");
let choose1_BooleanOpen = false;
let choose2_BooleanOpen = false;
let choose3_BooleanOpen = false;
let time = 0;
const word_list = [
  "Nissannnnnnnn",
  "Nissann Gee Ahhhhh",
  "Ahhhh Nissannn",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];
let in_line = true;
box.addEventListener("click", BoxClick);
function BoxClick() {
  if (in_line == true) {
    document.getElementById("text").innerHTML = word_list[time];
    time += 1;
    if (time == 2) {
      in_line = false;
      choose_open("...", "You Okay?", " ", "gay", " ");
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

function chooseNumber_Open(number, text, outline) {
  number.innerHTML = text;
  number.style.opacity = "1";
  switch (number) {
    case choose1:
      choose1_BooleanOpen = true;
      number.addEventListener("click", () => {
        if (choose1_BooleanOpen == true) {
          choose_close();
          console.log("choose Close");
          if (outline == " ") {
            in_line = true;
            BoxClick();
          } else {
            document.getElementById("text").innerHTML = outline;
          }
        }
      });

      break;
    case choose2:
      choose2_BooleanOpen = true;
      number.addEventListener("click", () => {
        if (choose2_BooleanOpen == true) {
          choose_close();
          console.log("choose Close");
          if (outline == " ") {
            in_line = true;
            BoxClick();
          } else {
            document.getElementById("text").innerHTML = outline;
          }
        }
      });

      break;
    case choose3:
      choose3_BooleanOpen = true;
      number.addEventListener("click", () => {
        if (choose3_BooleanOpen == true) {
          choose_close();
          console.log("choose Close");
          if (outline == " ") {
            in_line = true;
            BoxClick();
          } else {
            document.getElementById("text").innerHTML = outline;
          }
        }
      });

      break;
  }
}

function choose_open(text1, text2, text3, outline1, outline2, outline3) {
  if (text1 != " ") {
    chooseNumber_Open(choose1, text1, outline1);
  }
  if (text2 != " ") {
    chooseNumber_Open(choose2, text2, outline2);
  }
  if (text3 != " ") {
    chooseNumber_Open(choose3, text3, outline3);
  }
}
