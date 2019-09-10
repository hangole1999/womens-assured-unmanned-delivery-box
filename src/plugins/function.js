
import Vue from 'vue';

Vue.prototype.$timeformatDiffNow = function (timestamp) {
  if (!timestamp) {
    return 'Unknown times ago';
  }

  var result = '';
  var timeValue = 0;

  try {
    timeValue = parseInt(timestamp);
  } catch (error) {
  }

  if (('' + timeValue).length < 13) {
    timeValue *= 1000;
  }

  if (isNaN(timeValue)) {
    timeValue = 0;
  }

  timeValue -= 1000;

  var date = new Date(Date.now() - timeValue);

  var second = Math.floor(date % (60000) / (1000));
  var minute = Math.floor(date % (3600000) / (60000));
  var hour = Math.floor(date % (86400000) / (3600000));
  var day = Math.floor(date / (86400000));
  var month = date.getMonth();
  var year = date.getFullYear() - 1970;

  if (year > 0) {
    result = year + ' years ago';
  } else if (month > 0) {
    result = month + ' months ago';
  } else if (day > 0) {
    result = day + ' days ago';
  } else if (hour > 0) {
    result = hour + ' hours ago';
  } else if (minute > 0) {
    result = minute + ' min ago';
  } else if (second > 0) {
    result = second + ' sec ago';
  } else {
    result = 'just now';
  }

  return result;
};

Vue.prototype.$timeformat = function (timestamp) {
  if (!timestamp) {
    return 'Unknown Time';
  }

  var timeValue = 0;

  try {
    timeValue = parseInt(timestamp);
  } catch (error) {
  }

  if (('' + timeValue).length < 13) {
    timeValue *= 1000;
  }

  if (isNaN(timeValue)) {
    timeValue = 0;
  }

  var date = new Date(timeValue);

  var seconds = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  seconds = (seconds < 10) ? '0' + seconds : seconds;
  minute = (minute < 10) ? '0' + minute : minute;
  hour = (hour < 10) ? '0' + hour : hour;

  day = (day < 10) ? '0' + day : day;
  month = (month < 10) ? '0' + month : month;

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds;
};

Vue.prototype.$getColorFromString = function (str) {
  if (!str) {
    return 'FFFFFF';
  }
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = (hash & 0x00FFFFFF).toString(16).toUpperCase();

  return '00000'.substring(0, 6 - color.length) + color;
};

Vue.prototype.$numberWithCommas = function (x) {
  if (!x) {
    x = '0';
  }
  try {
    x = ('' + x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (error) {
    console.log('numberWithCommas Error', error);
  }
  return x;
};
