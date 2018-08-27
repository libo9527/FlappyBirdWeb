# Explain

## UA

> [User Agent](https://baike.baidu.com/item/%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86/1471005?fromtitle=useragent&fromid=5534048&fr=aladdin)中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。

在控制台使用`navigator.userAgent`可以打印出UA

# Software

## WebStorm

> [安装与破解](https://blog.csdn.net/dujing_15620553271/article/details/79126676)

## Node.js

## Babel

## 淘宝 NPM 镜像

# ES6

ES6默认使用[严格模式](http://www.runoob.com/js/js-strict.html)

# 小游戏逻辑

## game.js

游戏全局的入口文件，是微信小游戏必须有的一个文件

## main.js

程序主类，主要用来初始化canvas和一些全局对象，各个精灵和绑定

## director.js

程序导演类，用来控制游戏的逻辑和精灵的创建与销毁，控制游戏主循环

## datastore.js

存储游戏需要长期保存的变量和需要定时销毁的变量

## resources.js

游戏的资源

## resourceLoader.js

资源加载器，保证游戏是在图片加载完成后开始主循环

## sprite.js

游戏精灵的基类，背景，陆地，铅笔，小鸟等都是它的子类

## background.js

背景类

## land.js

陆地类

## UpPencil.js

上半部分铅笔类

## DownPencil.js

下半部分铅笔类

## Birds.js

小鸟类

## Score.js

计分器类

## StartButton.js

重新开始按钮类

