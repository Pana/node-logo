/*
*   Name: NodeLogo
*   Version: 0.0.1
*   Author: Pana
*   Date: 2013-10-09
*/
(function(){

    VERSION = '0.0.1';

    /*
        常量
    */ 
    var RATIO = Math.sqrt(3);

    /*
        html元素create helper
    */
    function cDom(tagName){
        return document.createElement(tagName);
    }

    /*
        id生成器
    */
    function idGenerator(){
        return 'hexo'+ Date.now();
    }

    /*
        样式
    */
    function hexaStyle(id, width, color){
        var dom = cDom('style')
            , idS = '#' + id
            , height = width
            , paddingTop = parseInt(width/2)
            , lWidth = parseInt(width * RATIO)
            , containerHei = width + paddingTop
        var style = idS + '{width:' + lWidth + 'px;padding-top:' + paddingTop + 'px;height: ' + containerHei + 'px;}';
        style += idS + ' .hex{width:' + lWidth + 'px;height:' + height + 'px;background-color:' + color + '}';
        dom.innerHTML = style;
        return dom;
    }

    /*
        options
        container: id
        width:
        backcolor: 
    */
    function NodeLogo(options){
        var container = document.getElementById(options.container);
        if(!container){
            throw new Error('Container were not found');
            return;
        }
        var hex = cDom('div')
            , hex1 = cDom('div')
            , hex2 = cDom('div')
            , hex3 = cDom('div')
            , id = idGenerator();

        hex.id = id;
        hex1.className = 'hex hex1';
        hex2.className = 'hex hex2';
        hex3.className = 'hex hex3';
        hex.appendChild(hex1);
        hex.appendChild(hex2);
        hex.appendChild(hex3);
        var styleDom = hexaStyle(id, options.width, options.backcolor);
        hex.appendChild(styleDom);
        container.appendChild(hex);
    }

    /*
        添加 common style
    */
    (function initStyle(){
        var styleDom = cDom('style')
            , style = '.hex{position: absolute;}'+
            '.hex.hex2{-webkit-transform: rotate(60deg);-moz-transform: rotate(60deg);-ms-transform: rotate(60deg);-o-transform: rotate(60deg);transform: rotate(60deg);}'+
            '.hex.hex3{-webkit-transform: rotate(-60deg);-moz-transform: rotate(-60deg);-ms-transform: rotate(-60deg);-o-transform: rotate(-60deg);transform: rotate(-60deg);}';
        styleDom.innerHTML = style;
        document.head.appendChild(styleDom);
    })();

    // exports
    this.NodeLogo = NodeLogo;

}).call(window);