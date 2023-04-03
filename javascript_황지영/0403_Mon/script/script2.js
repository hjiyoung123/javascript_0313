function showDetail() {
  document.querySelector('#desc').style.display = "block";
  document.querySelector('#open').style.display = "none";
}
function hideDetail() {
  document.querySelector('#desc').style.display = "none";
  document.querySelector('#open').style.display = "block";
}
let coverImage = document.querySelector('#cover');
coverImage.onclick = function(){
  alert('대박');
}

coverImage.onmouseover = function(){
  coverImage.style.border = "10px solid";
}

coverImage.onmouseout = function(){
  coverImage.style.border = "";
}