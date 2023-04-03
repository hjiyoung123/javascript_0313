let num = 1;
function gallery(event) {
  if(event) {
    if(num == 9) return;
    num++;
  } else {
    if(num == 1) return;
    num--;
  }

  let imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "/0403_Mon/img/pic_"+num+".jpg");
}