# wzh-blog

### my blog first commit

搭建hexo框架



### themes-change butterfly

修改主题为butterfly



### butterfly-config-v1.0

更换主页背景，头像，增添导航栏

### butterfly-config-v1.1

开启缓冲加载，防止图片还没加载导致割裂；
更换网站图标favicon

### butterfly-config-v1.2
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
