Nodejs Logo
=======

# Html version

## 设计目标

* 使用html&css画hexagon  ok
* 能够配置边长, 背景颜色, 背景图片 (暂不支持背景图片)
* 使用简单 ok
* 兼容多浏览器, 多版本 (只支持CSS3浏览器)
* 不依赖第三方库  ok

## 使用方法

    new NodeLog(options)

option:
    
* container: 父容器ID (必须)  
* width: 宽度  (默认100)
* backcolor: 背景颜色  (默认#5eb95e)

## Html版本原理
使用三个长方形, 其中两个使用css3的旋转特性分别进行正负60度旋转. 三个长方形的中心必须相同.
长宽满足: width = height * Math.sqrt(3)


## 其他实现

* canvas version
* svg version
* 3D version
