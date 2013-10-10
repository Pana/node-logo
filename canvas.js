/*
*   canvas version
*   author: Pana
*/

(function(){

    var VERSION = '0.0.1';

    var RATIO = Math.sqrt(3);

    /*
        返回指定精度数据
        data - 原始数据
        num - 小数位数 默认2
    */
    function fixed(data, num){
        return parseInt(data)
        return Number(data.toFixed(num || 2));
    };

    /*
        根据边的宽度计算六个点的坐标
    */
    function getPoints(len){
        var width = fixed(len*RATIO)  // cavas宽度
            , height = len*2          // canvas高度
            , halfLen = fixed(len/2)  // 边长一半
            , halfWidth = fixed(width/2); // 高度一半

        // 从最高点算起
        var points = [
            [halfWidth, 0],
            [width, halfLen],
            [width, halfLen+len],
            [halfWidth, height],
            [0, halfLen+len],
            [0, halfLen]
        ];

        // 偏移处理
        points = points.map(function(item){
            return [item[0]+1, item[1]+1];
        });

        console.log(points)

        return points;
    };

    /*
        class: NodeLogo
        opts:
            container: 
            color:
            length:
            border-width:       注意宽度算在里边还是外边
            border-color:
            image: 背景图片

    */
    function NodeLogo(opts){
        var con = document.getElementById(opts.container)
        if(!con){
            throw new Error('没有找到存放容器');
            return;
        }
        // 设定默认值
        opts.color = opts.color || '#5eb95e';
        opts.length = opts.length || 100;
        opts.borderWidth = opts.borderWidth || 1
        opts.borderColor = opts.borderColor || 'black'
        //
        var canvas = document.createElement('canvas')
            , ctx = canvas.getContext('2d')
            , len = opts.length
            , width = parseInt(len*RATIO) + 2
            , height = len*2 + 2
            , points = getPoints(len)

        canvas.width = width;
        canvas.height = height;
        // 绘制canvas
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = opts.color;
        ctx.lineWidth = opts.borderWidth;
        ctx.strokeStyle = opts.borderColor;
        ctx.beginPath();
        points.forEach(function(item, i){
            var action = i === 0 ? 'moveTo' : 'lineTo';
            ctx[action](item[0], item[1]);
        });
        ctx.closePath();
        ctx.stroke();
        ctx.clip();
        ctx.fill();
        ctx.save();
        con.appendChild(canvas);
    };

    // exports 
    window.NodeLogo = NodeLogo; 


}).call(window);