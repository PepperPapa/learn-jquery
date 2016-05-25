$(function() {
  $("#cart").click(function() {
    var product_info = "感谢你的购买！\n" +
                       "产品是：" + $(".jnProDetail h4").text() + ";\n" +
                       "尺寸是：" + $(".pro_size strong").text() + ";\n" +
                       "颜色是：" + $(".color_change strong").text() + ";\n" +
                       "数量是：" + $("#num_sort").val() + ";\n" +
                       "总价是：" + $(".pro_price strong").text() + ";\n";
    alert(product_info);
    return false;
  });
});
