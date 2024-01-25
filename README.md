# wzh-blog

### **my blog first commit**

搭建hexo框架



### **themes-change butterfly**

修改主题为butterfly



### **butterfly-config-v1.0**

更换主页背景，头像，增添导航栏

### **butterfly-config-v1.1**

开启缓冲加载，防止图片还没加载导致割裂；
更换网站图标favicon

### **butterfly-config-v1.2**
#### 主题页面配置
1、增加标签页
2、增加分类页
3、友情链接页
友情链接没用官方文档提供的在source/_data文件夹里创建一个文件link.yml，
而是直接用友情链接页的md文档进行书写，md里面也可以用css代码书写，样式参考网上的
4、开启404error页面
#### 主题配置
1、增加github和email社交图标
2、主页文章节选设置为both：优先选择description，如果没有配置description，则显示自动节选的内容
3、页面meta显示,主页显示更新日期，且是相对日期；文章页显示创建日期和更新日期，且是具体日期
3、设置默认文章主页（default_top_img）和默认文章封面（cover）
按下面的顺序如果各自的top_img和cover没有配置的话，default_top_img目前只是应用于页面顶部图，而cover目前应用于文章顶部图和封面。
##### 页面顶部图（标签页，分类页，友情链接页等等）的获取顺序：
`各自配置的 top_img > 配置文件的 default_top_img`
##### 文章页顶部图的获取顺序：
`各自配置的 top_img > cover > 配置文件的 default_top_img`
##### 文章封面的获取顺序：
`各个md文件的Front-matter 中的 cover > 配置文件的 default_cover > false`



### **butterfly-config-v1.3**

增加live2d看板娘模型：

安装了`hexo-helper-live2d`插件，但是这个插件只支持moc类型的文件，不支持moc3，所以这里只是测试。

安装了`hexo-helper-live2d`插件提供的官方模型包（`live2d-widget-model-haru`、`live2d-widget-model-koharu`、`live2d-widget-model-tororo`模型包，可以在`node_modules`文件夹下找到，文件夹名字就为模型名）。

上面插件和官方模型包都是用npm安装的，要想卸载，用`npm uninstall+插件名/模型名`即可卸载。

按插件要求修改了`_config.yml`配置文件，即添加了`live2d`相关字段。

================================================================================

安装自定义的`live2d`模型（moc），有的测试成功了，但是有的也不生效，还在研究中，这次没有自定义模型的相关文件添加，研究明白了再更新，这里只是提一嘴。后续还有moc3的，等全部研究明白了再更新一下，到时候也可以试试moc3的。


### **butterfly-config-v1.4**

自定义修改live2d看板娘模型

##### 说明：

这里把之前的`hexo-helper-live2d`插件，还有提供的官方模型包全都卸载删除了（`live2d-widget-model-haru`、`live2d-widget-model-koharu`、`live2d-widget-model-tororo`），原因是这些不支持最新市面上moc3等。这里首先参考elycio大佬提供的一个即用的项目，[网址](https://github.com/cqc-elycio/live2dDemo/releases)，但是发现对于市面上最新的那些模型还是不行，应该是不支持最新的驱动 4.0/5.0 版本（调试浏览器查看报错），虽然这个也是moc3文件，但是是两年前了，现在驱动好像也不一样。另说一句：b站这里有个大佬做的npm包，可以直接下载，它可以支持最新的驱动 4.0/5.0 版本，但是只提供了如何在vue3项目里使用，至于在hexo博客上使用，我还没尝试过，不过按道理应该也是可以的。

这里还是采用elycio大佬在b站和csdn上的教程（除了上面提供的即用的项目，还提供了大致如何从官方提供的demo打包成这样即用的项目），下载live2d官方最新的CubismSdkForWeb（版本是CubismSdkForWeb-4-r.7），然后根据步骤来，再进行打包。（有一些功能他写的不全，但是他提供的那个即用的项目有，但是由于打包之后js代码压缩，看不到，所以这里他也提供了打包之前的[CubismSdkForWeb项目](https://github.com/cqc-elycio/live2dDemo)）

分三大步骤，第一，根据步骤学习并更改官方最新的CubismSdkForWeb项目代码，第二，打包好之后，自己创建一个普通的html项目测试，第三，把该项目移植到hexo博客中。

##### 文件：

增加`source\live2d-test-demo`文件夹，也就是打包好，然后自己创建的普通html项目，用于添加live2d模型以及相关的js（其中内含两个模型，没有提供切换按钮，需要自己手动改代码）

bug：这里对于`_config.butterfly`配置项里的`inject`里的`head`标签下，添加了一个`extra_hexo2.js`文件，原因是live2d模型在博客网站点击退后和前进的操作时，live2d模型不显示，只有刷新页面才显示，可能是浏览器调用的缓存导致live2d没重新渲染，目前解决这个bug就是添加了一个`extra_hexo2.js`文件，用于每次检测到是回退或者前进时强制重新刷新加载页面，但是也导致每次进入一个页面都会有个动画。

### **butterfly-config-v1.5**

##### 修复config-v1.4的bug：

修复上个版本的小bug，前进和后退页面时，live2d模型不会不显示了，原因主要是在打包前的官方`main.ts`文件里两个加载函数没有注释掉，而该`main.ts`文件下面根据elycio大佬提供的教程是添加了自定义的加载函数的，所以导致可能最终运行的还是上面原生的函数，或者两个函数有冲突。解决这个bug的思路是根据前端浏览器调试，看到控制台相关文件的报错，然后根据elycio大佬提供的打包前的项目，查看进行对比发现的。因为首先我用他提供的littleDemo文件移植过来，发现没有这个bug，然后我一开始以为是他的js相关代码写了什么，但是发现不行，就猜到应该是还有修改官方文件代码，重新打包才行，后来才看控制台相关文件的报错找到代码出现问题的地方，根据他提供的代码对比发现错误的。
这里修改官方项目代码重新打包之后，生成并命名为`bundle2.js`文件，改为应用`bundle2.js`文件，并注释掉之前临时为了解决这个bug加的`extra_hexo2.js`文件，这个`extra_hexo2.js`文件是每次监听后退前进时重新刷新页面，这样会导致很慢，这次修复了之后就把这个注释掉了，但`extra_hexo2.js`保留了，同时这里也保留了之前有bug的`bundle.js`文件。

令：修复了live2d上面显示的随机语录在你点击live2d模型时也会突然跳出来，现在live2d上面显示的随机语录是当用户无操作之后才进行显示的。

说明：`message.js`都是参考这个[项目](https://github.com/stevenjoezhang/live2d-widget/tree/master)的`waifu-tips.js`文件进行修改的。

### **butterfly-config-v1.6**

添加博客背景彩带，修改博客侧边栏一些基础模块展示，等等。
设置锚点，文章过期提醒等等（过期时长是一年）