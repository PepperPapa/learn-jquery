// ;是为了兼容性考虑，避免其他不规范插件遗漏分号
;(function() {
  // 对jQuery对象的方法的扩展使用jQuery.fn.extend()来编写
  $.fn.extend({
    "color": function(value) {
      // 如未提供value参数则返回集合元素第一个的color值
      if (value === undefined) {
        return this.css("color");
      // 否则设置color值为value
      } else {
        // 插件内的this表示jQuery对象，而非DOM对象
        return this.css("color", value);
      }
    }
  });
})(jQuery);
