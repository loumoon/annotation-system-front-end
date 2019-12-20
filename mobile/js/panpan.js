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