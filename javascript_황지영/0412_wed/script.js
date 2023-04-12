$(function(){
  let baseFontSize = 14;

  $(".zoomBtnZone button").on("click", zoomInOut);
  function zoomInOut(){
    if($(this).hasClass("zoomOutBtn")) {
      if(baseFontSize <= 8) return false;
      baseFontSize--;
    }else if($(this).hasClass("zoomInBtn")){
      if(baseFontSize >= 20) return false;
      baseFontSize++;
    }else {
      baseFontSize = 14;
    }

    $(".fontSize").text(baseFontSize + "px");
    $("body").css({fontSize:baseFontSize + "px"});
  }
})