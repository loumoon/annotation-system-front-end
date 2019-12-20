/*
本文件函数作用于两个以上的页面
*/

// 主菜单选择定位按钮
$("#joined").click(function () {
  localStorage.role = 0;
  window.location.href = "joined_courses.html";
})
$("#created").click(function () {
  localStorage.role = 1;
  window.location.href = "created_courses.html";
})
$("#managed").click(function () {
  localStorage.role = 2;
  window.location.href = "managed_courses.html";
})
$("#me").click(function () {
  window.location.href = "me.html";
})

//清除过期localstorage函数
$(function () {
  $.ajax({
    url: 'http://212.64.11.56:8080/EAnnotation/getCurrentUser',
    type: 'post',
    dataType: 'jsonp',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    success: function (data) {
      if (data == 0) {
        localStorage.id = -1;
        localStorage.classid = null;
        localStorage.usertype = null;
        console.log("清除localstorage")
      }
      console.log(localStorage.usertype)
      console.log(localStorage.id) 
    },
    error: function () {}
  });
});