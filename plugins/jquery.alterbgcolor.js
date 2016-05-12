// ;是为了兼容性考虑，避免其他不规范插件遗漏分号
;(function() {
  // 对jQuery对象的方法的扩展使用jQuery.fn.extend()来编写
  $.fn.extend({
    "alterBgColor": function(options) {
      options = $.extend({
        odd: "odd", //偶数行样式
        even: "even", //奇数行样式
        selected: "selected" //选中行样式
      }, options);
      
    }
  });
})(jQuery);
