$(function() {
  $(".tab_menu ul li").click(function() {
    $(this).addClass("selected")
           .siblings().removeClass("selected");
    var index = $(this).index();
    $(".tab_box div").eq(index).show().siblings().hide();

  });
});
