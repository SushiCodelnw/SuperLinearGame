const box = document.getElementById("box");
const choose1 = document.getElementById("choose1");
const choose2 = document.getElementById("choose2");
const choose3 = document.getElementById("choose3");
let time = 0;
const word_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let in_line = true;
box.addEventListener("click", () => {
  if (in_line == true) {
    if (time != 2) {
      document.getElementById("text").innerHTML = word_list[time];
    } else if (time == 2) {
        in_line = false;
        choose_open(1)
    }
    time += 1;
  } else if (in_line == false) {
  }
});
function choose_open(number) {
    if(number == 1){
        choose1.style.opacity = "1";
    }else if(number == 2){
        choose1.style.opacity = "1";
        choose2.style.opacity = "1";
    }else if(number == 3){
        choose1.style.opacity = "1";
        choose2.style.opacity = "1";
        choose3.style.opacity = "1";
    }
}