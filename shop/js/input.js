// 1.输入框聚焦效果  提示文字消失
// 2.输入框失去焦点效果  提示文字重新显示
// 3.回车提交表单提示
$(function() {
  $("#inputSearch").focus(function() {
    $(this).addClass("focus");
    this.placeholder = "";
  }).blur(function() {
    $(this).removeClass("focus");
    this.placeholder = "输入商品名称";
  }).keyup(function(e) {
    if (e.which === 13) {
      alert("回车提交表单");
    }
  });
});
