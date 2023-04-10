// Panner Rotation
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;

let i = 0;
for(el of lists) {
  el.style.transform = `rotate(${deg*i}deg)translateY(-100vh)`

  let pic = el.querySelector(".pic");
  pic.style.backgroundImage = `url(/music_player/img/member${i+1}.jpg)`;
  i++;

  let play = el.querySelector(".play"); 
  let pause = el.querySelector(".pause"); 
  let load = el.querySelector(".load"); 

  play.addEventListener("click", e => {
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("click", e => {
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });
  load.addEventListener("click", e => {
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
}
