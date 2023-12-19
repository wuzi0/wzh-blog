/**
 * 这个文件是由于在hexo中无法直接使用js代码，如果直接写，他不会生效，所以这里用了一个js文件，然后在hexo的config中引用
 */


// 这两个不知道为啥不生效，hexo的config也不能直接写js代码，只能外部引用，但是这里也不知道为什么不生效，
// 所以这两个路径直接在message.json里面设置了，没进行变量
// var message_Path = './live2d/'
// var home_Path = '/'

var loader  = live2dLoader 
//这两个是必须设置的
loader.resourcesConfig.setResourcesPath("/live2d-test-demo/models/")
loader.resourcesConfig.setModelNames(['sdwhite cat free'])
loader.start();
// console.log(loader)