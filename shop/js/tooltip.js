$(function() {
  var x = 10;
  var y = 20;
  $("a.tooltip").mouseover(function(e) {
    this.MyTitle = this.title;
    this.title = "";
    // 创建div元素
    var tooltip = "<div id='tooltip'>" + this.MyTitle + "</div>";
    $("body").append(tooltip);
    // 设置x y坐标并显示
    $("#tooltip").css ({
      "top": (e.pageY + y) + "px",
      "left": (e.pageX + x) + "px"
    }).show("fast");
  }).mouseout(function() {
    this.title = this.MyTitle;
    $("#tooltip").remove();
  }).mousemove(function(e) {
    $("#tooltip").css({
      "top": (e.pageY + y) + "px",
      "left": (e.pageX + x) + "px"
    });
  });
});
