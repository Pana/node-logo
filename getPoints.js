/*
* 点坐标计算脚本
*/

function fixed(data, num){
    return parseInt(data)
};


/* 获取点坐标方法 */
function getPoints(len, offset){
    var RATIO = Math.sqrt(3)
        , width = fixed(len*RATIO)  // cavas宽度
        , height = len*2          // canvas高度
        , halfLen = fixed(len/2)  // 边长一半
        , off = offset || 10
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
        return [item[0]+off, item[1]+off];
    });

    return points;
};


var len = parseInt(process.argv[2] || '100')

var points = getPoints(len)

//  输出svg需要的格式
points = points.map(function(item){return item.join(',')})
console.log(points.join(' '))