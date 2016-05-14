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
      $("tbody>tr:odd", this).addClass(options.odd);
      $("tbody>tr:even", this).addClass(options.even);
      $("tbody>tr", this).click(function() {
        // 判断当前行是否选中
        var hasSelected = $(this).hasClass(options.selected);
        // 若选中则移出selected类，否则加上selected类
        $(this)[hasSelected ? "removeClass" : "addClass"](options.selected)
                  .find(":checkbox").prop("checked", !hasSelected);
      });
      // 如果单选框默认情况下是选择的，则该行背景高亮
      $("tbody>tr:has(:checked)", this).addClass(options.selected);
      return this;   // 返回this，使方法可链式操作
    }
  });
})(jQuery);
