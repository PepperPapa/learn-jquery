$(function() {
  var rating = {
    1: "onestar",
    2: "twostar",
    3: "threestar",
    4: "fourstar",
    5: "fivestar"
  };
  $(".rating li").click(function() {
    var $rating = $(this).parent();
    var cur_class = $rating[0].classList[1];
    $rating.removeClass(cur_class).addClass(rating[this.innerText]);
    return false;   // 阻止<a>元素的超链接行为
  });
});
