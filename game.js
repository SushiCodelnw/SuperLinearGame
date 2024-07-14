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
      choose_open(2, "...", "You Okay?");
    }
  }
}

function choose_close() {
  choose1.style.opacity = "0";
  choose2.style.opacity = "0";
  choose3.style.opacity = "0";
  choose1_Open = false;
  choose2_Open = false;
  choose3_Open = false;
}

function choose1_Open() {
  choose1.innerHTML = text1;
  choose1.style.opacity = "1";
  choose1_BooleanOpen = true;
  choose1.addEventListener("click", () => {
    if (choose1_BooleanOpen == true) {
      choose_close();
      in_line = true;
      BoxClick();
    }
  });
}

function choose_open(number, text1, text2, text3) {
  switch (number) {
    case 1:
      choose1_Open();
      break;
    case 2:
      choose1.innerHTML = text1;
      choose2.innerHTML = text2;
      choose1.style.opacity = "1";
      choose2.style.opacity = "1";
      choose1_Open = true;
      choose2_Open = true;
      break;
    case 3:
      choose1.innerHTML = text1;
      choose2.innerHTML = text2;
      choose3.innerHTML = text3;
      choose1.style.opacity = "1";
      choose2.style.opacity = "1";
      choose3.style.opacity = "1";
      choose1_Open = true;
      choose2_Open = true;
      choose3_Open = true;
      break;
  }
}
