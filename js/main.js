var keyMap = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm']
};

var websiteMap = {
    /*
    1: '163.com',
    2: '2345.com',
    3: '360.cn',
    4: '4399.com',
    5: '58.com',
    6: '6.cn',
    7: '7daysinn.cn',
    8: '8264.com',
    9: '99.com',
    0: '05wang.com',
    */
    q: 'qq.com',
    w: 'weibo.com',
    e: 'ebay.com',
    r: 'renren.com',
    t: 'taobao.com',
    y: 'yy.com',
    u: 'ui.cn',
    i: 'iqiyi.com',
    o: 'oschina.net',
    p: 'pconline.com',
    a: 'amazon.com',
    s: 'sohu.com',
    d: 'douban.com',
    f: 'ftchinese.com',
    g: 'ganji.com',
    h: 'hao123.com',
    j: 'jd.com',
    k: 'kuaishou.com',
    l: 'lenovo.com',
    z: 'zhihu.com',
    x: 'xinhuanet.com',
    c: 'csdn.net',
    v: 'vip.com',
    b: 'baidu.com',
    n: 'nike.com',
    m: 'microsoft.com'
}

var websiteMap_new = JSON.parse(localStorage.getItem('websiteMap_new'));

if (websiteMap_new) {
    websiteMap = websiteMap_new;
}

//JS把kbd建好，利用循环
var r_index = 0;
while (r_index < Object.keys(keyMap).length) {
    var kbd_row = document.createElement("div");
    // kbd_row.class = 'kbd_row';
    var kbd_rowWrapper = document.getElementById("kbd_rowWrapper");
    //也可以直接使用id，不用getElementById
    kbd_rowWrapper.appendChild(kbd_row);

    var k_index = 0;
    while (k_index < keyMap[r_index].length) {
        var kbd = document.createElement("kbd");
        //易错：如果这儿textContent放在btn的textContent之后会把btn设置的textContent覆盖掉。
        kbd.textContent = keyMap[r_index][k_index];
        kbd.id = keyMap[r_index][k_index];
        var edit_btn = document.createElement("button");
        edit_btn.textContent = 'Edit';
        edit_btn.id = keyMap[r_index][k_index];
        edit_btn.onclick = function (clickEvent) {
            console.log(clickEvent);
            console.log("按下的键：" + clickEvent.target['id']);
            var edit_input = prompt('当前网站是http://' + websiteMap[clickEvent.target.id] + '\n请输入想变更的网站');
            if (edit_input) {
                websiteMap[clickEvent.target.id] = edit_input;
                localStorage.setItem('websiteMap_new', JSON.stringify(websiteMap));
            } else if(edit_input==="") {
                //点了确定，但没内容，返回""
                alert('输入内容不可为空');
            } else {
                //点了取消，返回的是null值得
                //do nothing
            }


        }


        kbd.appendChild(edit_btn);
        kbd_row.appendChild(kbd);
        k_index++;
    }
    r_index++;
}

document.onkeypress = function (pressEvent) {

    var pressKey = pressEvent.key;
    console.log(pressEvent);
    console.log('按下的键：' + pressKey);

    var pressWebsite = 'http://' + websiteMap[pressKey];
    window.open(pressWebsite, '_blank');


}