const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  changeHourMinutestr: changeHourMinutestr,
  changeStrToMinutes: changeStrToMinutes
}

// 分钟转小时
function changeHourMinutestr(str) {
  if (str !== "0" && str !== "" && str !== null) {
    return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() :
      (Math.floor(str / 60)).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + (str % 60).toString() : (str % 60).toString());
  }
  else {
    return "";
  }
}

// 小时转分钟
function changeStrToMinutes(str) {
  var arrminutes = str.split(":");
  if (arrminutes.length == 2) {
    var minutes = parseInt(arrminutes[0]) * 60 + parseInt(arrminutes[1]);
    return minutes;
  }
  else {
    return 0;
  }
}