(function(window) {
    var doc = window.document;
    // -------------代码段二 ------------------
    var JQuery = function(selector) {
       return new JClass(selector);
    };

    // --------------- 代码段三 ----------------
    JQuery.html = function(obj) {
        if(obj && obj.nodeType === 1) {
            return obj.innerHTML;
        }
    };

    // ---------代码段一 --------------
    var JClass = function(selector) {
        if (selector.nodeType ) { // 如果传入的是DOM元素
            this.length = 1;
        }else if(selector.charAt(0) === '#') { //如果传入的是'#..'形式
            this.length = 1;
            this[0] = doc.getElementById(selector.slice(1));
        }else if(typeof selector === 'string') {
            //传入的是字符串，假设全部为html标签 ，如'div' 'p'等
            var nodes = doc.getElementsByTagName(selector);
            this.length = nodes.length;
            for(var i=0,len=nodes.length;i<len;i++) {
                this[i] = nodes[i];
            }
        }else { //都不是的话，就不识别咯
            this.length = 0;
        }
    };

    // ------------ 代码段四 --------------------
    JQuery.prototype.html = function() {
        if(this[0]) {
            return JQuery.html(this[0]);
        }
    };
    JClass.prototype = JQuery.prototype;

    // ------------ 代码段五 ---------------
    window.$ = window.JQuery = JQuery;

}(window));
