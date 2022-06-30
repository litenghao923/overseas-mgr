var host = "http://47.109.24.64:8080/";

//获取url参数
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

//获取token
function getLocalToken() {
    //return 'BaEiSQEwwQRArE3HsDnPXLYCJxmv+H4oN/CuC0Qf1Ts=';
    var token = localStorage.getItem("token");
    if (token === null || token === "" || token === undefined) {
        layer.msg("token失效，请重新登录", {
            icon: 2,
            time: 1000
        }, function () {
            window.location.href = "/"
        });
    } else {
        return token;
    }
}

var token = getLocalToken();
