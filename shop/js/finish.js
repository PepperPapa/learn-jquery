$(function() {
  $(".imgList li a").click(function() {
    r = /smallimage: \'(.+)\',/;
    var show_src = r.exec(this.rel)[1];
    $(".jqzoomWrap img").attr("src", show_src);
  });
});
