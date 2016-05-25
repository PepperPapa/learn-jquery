$(function() {
  $("#thickImg").click(function() {
    var update_href = $(".jqzoomWrap a").attr("href");
    $(this).attr("href", update_href);
  });
});
