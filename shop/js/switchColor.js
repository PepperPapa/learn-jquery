$(function() {
  $(".color_change li img").click(function() {
    // 获取颜色名称
    var r = /.+\/(.+).jpg/g;
    var color = r.exec(this.src)[1];

    // 显示选取颜色
    $(".color_change strong").text(this.alt);

    // 产品列表显示相应颜色的图片，其他颜色不显示
    $(".imgList li").hide();
    $(".imgList_" + color).show();

    // 联动大图显示
    $(".jqzoomWrap a").attr("href","images/pro_img/" + color + "_one_big.jpg")
          .find("img").attr("src", "images/pro_img/" + color + "_one_small.jpg");
  });
});
