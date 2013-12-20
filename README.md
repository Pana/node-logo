Nodejs Logo
=======

# Html version

## 设计目标

* 使用html&css画hexagon
* 能够配置边长, 背景颜色, 背景图片 (暂不支持背景图片)
* 使用简单
* 兼容多浏览器, 多版本 (只支持CSS3浏览器)
* 不依赖第三方库

## 使用方法

    new NodeLog(options)

option:
    
* container: 父容器ID (必须)  
* width: 宽度  (默认100)
* backcolor: 背景颜色  (默认#5eb95e)

## Html版本原理
使用三个长方形, 其中两个使用css3的旋转特性分别进行正负60度旋转. 三个长方形的中心必须相同.
长宽满足: width = height * Math.sqrt(3)


# canvas version
使用canvas画图发现的问题, 斜边会有锯齿效果(难道是画得有问题), 边的效果需要特殊处理

# char version
直接使用六边形字符,参看char-logo.html

# svg version
使用svg画出的效果较好, 需要实现一种方便的方式使用.
可以使用node方式生成svg脚本, 然后在浏览器中直接使用



# three.js version


## TODO

# 更多形式
# 允许动画


## 可使用库

* http://raphaeljs.com/
* https://github.com/wout/svg.js
* [svg 介绍](http://www.ibm.com/developerworks/cn/web/1107_pangjun_svgcanvas1/)
* http://bonsaijs.org/

