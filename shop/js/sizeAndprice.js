$(function() {
  $(".pro_size li").click(function() {
    $(this).addClass("cur").siblings().removeClass("cur");
    $(this).parent().siblings("strong")[0].innerText = this.innerText;
  });
  $("#num_sort").change(function() {
    var num = this.value;
    var unit_price = $(".tbDetailPrice strong")[0].innerText;
    $(".pro_price strong").text(String(unit_price * num));
  }).change();
});
