function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};


// 这个原作者写的，但是没有生效
// var re = /x/;
// console.log(re);
// re.toString = function() {
//     showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000);
//     return '';
// };


// 采用监听用户按下键盘F12按键来实现，但是如果右键点击检查来打开控制台则这个方法无效。
document.addEventListener('keydown', function(event) {
    // 检查是否按下了F12键
    if (event.key === 'F12') {//也可以写成if(event.keyCode == 123)
        showMessage('你刚刚打开了控制台,是想要偷看我的秘密吗？', 5000);
    }
});




$(document).on('copy', function (){
    showMessage('你都复制了些什么呀，转载要记得加上出处哦~', 5000);
});

function initTips(){
    $.ajax({
        cache: true,
        // url: `${message_Path}message.json`,
        url: `/live2d-test-demo/live2d/message.json`,
        dataType: "json",
        success: function (result){
            $.each(result.mouseover, function (index, tips){
                $(tips.selector).mouseover(function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips){
                $(tips.selector).click(function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
        }
    });
}
initTips();



(function (){
    var text;
    if(document.referrer !== ''){
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        // text = '嗨！来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友！';
        // var domain = referrer.hostname.split('.')[1];
        // if (domain == 'baidu') {
        //     text = '嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        // }else if (domain == 'so') {
        //     text = '嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        // }else if (domain == 'google') {
        //     text = '嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        // }
        
        //不要上面的逻辑，这里直接随便添加一个文本，但是如果这里你不添加文本，会导致有框但是没有文字。
        text = '嗨~';
        showMessage(text, 5000);
    }else {
        // if (window.location.href == `${home_Path}`) { //主页URL判断，需要斜杠结尾
        // 本地调试用这一行
        // if (window.location.href == `http://localhost:4000/`) { //主页URL判断，需要斜杠结尾
        if (window.location.href == `https://blog.wuzih.top/`) { //主页URL判断，需要斜杠结尾
            var now = (new Date()).getHours();
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了！';
            } else if (now > 7 && now <= 11) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 11 && now <= 14) {
                text = '中午了，工作了一个上午，现在是午餐时间！';
            } else if (now > 14 && now <= 17) {
                text = '午后很容易犯困呢，今天的运动目标完成了吗？';
            } else if (now > 17 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~~';
            } else {
                text = '嗨~';
            }
        }else {
            // text = '欢迎阅读<span>「' + document.title.split(' - ')[0] + '」</span>';
            text = '欢迎访问~';
        }
        showMessage(text, 12000);
    }
    //这个放在这里导致前面那个文本显示的时长也很长，所以这里注释掉，分别在上面的if else里面设置显示时长
    // showMessage(text, 12000);
})();

// 下面这些事用于显示随机语录消息的，是https://v1.hitokoto.cn/的API，这里由于有时候随机的话有点长，导致美观，所以就注释掉了
// 如果你想要，直接取消注释即可，然后调整一下样式就行了，把显示的那个框的width调宽一点。

// 表示多少毫秒后执行一次showHitokoto()函数，这里设置为30秒
// window.setInterval(showHitokoto,30000);
// function showHitokoto(){
//     $.getJSON('https://v1.hitokoto.cn/',function(result){
//         showMessage(result.hitokoto, 5000);
//     });
// }

// 不用上面的函数，原因是有个小bug，当你点击live2d模型的时候，它也会突然跳出随机消息，因为上面是任何情况都是30秒执行一次函数
// 这里改一下逻辑，当用户未活动时再计时调用这个API，显示消息
//window.hitokotoTimer = window.setInterval(showHitokoto,30000);
/* 检测用户活动状态，并在空闲时 定时显示一言 */
var getActed = false;
window.hitokotoTimer = 0;
var hitokotoInterval = false;

// 这两行是检测用户鼠标移动和键盘按下的事件
// 第一行是的$(document).mousemove和$(document).keydown是jQuery的事件监听器，它们分别监听了鼠标移动和键盘按键的事件。当这些事件被触发时，getActed变量会被设置为true。
// 第二行是设置一个定时器，每隔1秒进行检查getActed变量的值。如果getActed为false，则调用ifActed函数；如果getActed为true，则调用elseActed函数。
// 其中setInterval就是设置一个定时器
$(document).mousemove(function(e){getActed = true;}).keydown(function(){getActed = true;});
setInterval(function() { if (!getActed) ifActed(); else elseActed(); }, 1000);

// 执行hitokotoTimer = window.setInterval(showHitokoto, 30000)这一行，是先等待30秒执行第一次，并不是上来就执行第一次，再等待30秒执行第二次
// 加上前面的一秒，也就是1秒不动才会保证调用ifActed函数，如果动了，就调用elseActed函数，它会清除ifActed的计时器，所以是30-31秒不动才会显示随机语录
function ifActed() {
    if (!hitokotoInterval) {
        hitokotoInterval = true;
        hitokotoTimer = window.setInterval(showHitokoto, 30000);
    }
}

// window.clearInterval(hitokotoTimer)是清除上面ifActed()里的30秒执行showHitokoto函数的计时器。
function elseActed() {
    getActed = hitokotoInterval = false;
    window.clearInterval(hitokotoTimer);
}

function showHitokoto(){
	/* 增加 hitokoto.cn API */
    $.getJSON('https://v1.hitokoto.cn',function(result){
        var text = '这句一言来自 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">{creator}</span> 在 hitokoto.cn 投稿的。';
        text = text.renderTip({source: result.from, creator: result.creator});
        showMessage(result.hitokoto, 5000);
        window.setTimeout(function() {showMessage(text, 3000);}, 5000);
    });

}




//timeout单位ms，表示多少毫秒后消失

function showMessage(text, timeout){
    if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
    console.log('showMessage', text);
    $('.message').stop();
    $('.message').html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout){
    $('.message').stop().css('opacity',1);
    if (timeout === null) timeout = 5000;
    $('.message').delay(timeout).fadeTo(200, 0);
}

function initLive2d (){
    $('.hide-button').fadeOut(0).on('click', () => {
        $('#landlord').css('display', 'none')
    })
    $('#landlord').hover(() => {
        $('.hide-button').fadeIn(600)
    }, () => {
        $('.hide-button').fadeOut(600)
    })
}
initLive2d ();
