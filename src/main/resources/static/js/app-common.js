function formatObjTime(date) {
    var year = date.year;
    var month = date.month < 10 ? '0' + date.month : date.month;
    var day = date.date < 10 ? "0" + date.date : date.date;
    return year + "-" + month + "-" + day
}

function formatTime(timestamp) {
    var date = new Date(parseInt(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    var w = date.getDay();
    var strWeek;
    switch (w) {
        case 1:
            strWeek = "周一";
            break;
        case 2:
            strWeek = "周二";
            break;
        case 3:
            strWeek = "周三";
            break;
        case 4:
            strWeek = "周四";
            break;
        case 5:
            strWeek = "周五";
            break;
        case 6:
            strWeek = "周六";
            break;
        default:
            strWeek = "周日";
            break;
    }

    return M + "/" + D + " " + h + ":" + m + " " + strWeek;
}

function formatXDataTime(st) {
    var date = new Date(parseInt(st));
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    return M + "/" + D;
}

function getDateTimeNow(timestamp) {
    var date = new Date(parseInt(timestamp));
    var year = date.getFullYear();
    var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var day = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    return year + "-" + month + "-" + day
}

function getDateTimeHour(timestamp) {
    var date = new Date(parseInt(timestamp));
    var year = date.getFullYear();
    var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var day = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    return year + "-" + month + "-" + day + " " + date.getHours() + ":" + date.getMinutes()
}

//计算日周月开始时间戳
function getDateStartTimeStamp(timeStamp, type) {
    var startTimeStamp;
    var date = new Date(timeStamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var w = date.getDay();
    var temp = new Date(y + "-" + m + "-" + d + " 00:00").getTime();
    switch (type) {
        //计算日开始
        case 1:
            startTimeStamp = new Date(y + "-" + m + "-" + d + " 00:00").getTime();
            break;
        //计算周开始
        case 2:
            if (w === 0) {
                startTimeStamp = temp - 6 * 1000 * 60 * 60 * 24;
            } else {
                startTimeStamp = temp - (w - 1) * 1000 * 60 * 60 * 24;
            }
            break;
        //计算月开始
        case 3:
            startTimeStamp = new Date(y + "-" + m + "-01" + " 00:00").getTime();
            break;
        default:
            break;
    }
    return startTimeStamp;
}

function getNearDayTime(et, day) {
    return et - day * 1000 * 60 * 60 * 24;
}

function formatPercentage(num, n) {
    num = num - 0;
    return (num * 100).toFixed(n) + "%";
}

function formatBigNum(num) {
    num = num - 0;
    if (num >= 100000000) {
        var fN1 = parseInt((num / 100000000));
        if (fN1 >= 100) {
            num = fN1 + "亿";
        }
        if (100 > fN1 && fN1 >= 10) {
            num = (num / 100000000).toFixed(1) + "亿";
        }
        if (10 > fN1) {
            num = (num / 100000000).toFixed(2) + "亿";
        }
    }
    if (100000000 > num && num >= 10000) {
        var fN2 = parseInt((num / 10000));
        if (fN2 >= 100) {
            num = fN2 + "万";
        }
        if (100 > fN2 && fN2 >= 10) {
            num = (num / 10000).toFixed(1) + "万";
        }
        if (10 > fN2) {
            num = (num / 10000).toFixed(2) + "万"
        }
    }

    if (10000 > num) {
        var fN3 = parseInt(num);
        if (fN3 >= 100) {
            num = fN3;
        }
        if (100 > fN3 && fN3 >= 10) {
            num = num.toFixed(1);
        }
        if (10 > fN3) {
            num = num.toFixed(2);
        }
    }
    return num;
}

function calcDValue(a, b) {
    return a - b;
}

function createTimeDate(laydate,st_str,et_str){
    var initEndTime = new Date().getTime();
    var initStartTime = getNearDayTime(initEndTime, 7);
    laydate.render({
        elem: '#' + st_str,
        value: new Date(initStartTime)
    })

    laydate.render({
        elem: '#' + et_str,
        value: new Date(initEndTime)
    })

    laydate.render({
        elem: '#op_time_range',
        range: ['#' + st_str, '#' + et_str],
        done: function (v, st, et) {
            initStartTime = new Date(formatObjTime(st)).getTime();
            initEndTime = new Date(formatObjTime(et)).getTime();
        }
    })
}

function getChannel(){
    /*$.ajax({
        url: host + 'option/channel',
        type: 'get',
        beforeSend: function (request) {
            request.setRequestHeader("token", token);
        },
        success: function (res) {
            console.log(res);
            if (res.code === 0) {
                return  res.data;
            }
        }
    })*/
    return [
        {
            name:'汇总',
            value:'SUM'
        },
        {
            name:'GW',
            value:'GW'
        },
        {
            name:'DEFAULT',
            value:'DEFAULT'
        }
    ]
}
