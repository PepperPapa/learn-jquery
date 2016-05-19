$(function() {
  $("#skin li").click(function() {
    $(this).addClass("selected")
           .siblings().removeClass("selected");
    $("#cssfile").attr("href", "./css/skin/" + this.id + ".css");
  });
});
