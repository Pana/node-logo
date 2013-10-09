html nodejs logo
=======

A small js lib draw hexagon use html



## target

* 使用html&css画hexagon
* 能够配置边长, 背景颜色, 背景图片
* 使用简单
* 兼容多浏览器, 多版本
* 考虑添加3d
* 不依赖第三方库


## Html版本原理
使用三个长方形, 其中两个使用css3的旋转特性分别进行正负60度旋转. 三个长方形的中心必须相同.
长宽满足: width = height * Math.sqrt(3)


## 实现方式

* html version
* canvas version
* svg version
* 3D version
