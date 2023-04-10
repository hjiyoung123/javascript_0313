$(function(){
  $(".btn1").on("click", function(e){
    e.preventDefault();
    $(".txt1").css({"background-color":"#f00"});
  });

  $(".btn2").on("click", function(){
    $(".txt2").css({"background-color":"#0ff"});
  });

  $(".btn3").on("dblclick", function(){
    $(".txt3").css({"background-color":"#0f0"});
  });
});