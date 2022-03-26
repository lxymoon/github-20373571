window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });
    
}

function search() {
    // TODO: 搜索触发后的行为
    console.log('');
    var res = document.getElementById('search-exe2').value;
    if(res != '') {
        // alert(res);
        window.location.href="https://baidu.com/baidu?wd="+res;
        document.getElementById("search_input").value="";
    }
    else {
        alert("请输入搜索内容");
    }
    //return false;
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + username + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content.split("*{");
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}