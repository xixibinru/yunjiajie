$(function () {
    var timer = null;
    var num = 0;
    timer = setInterval(function () {
        $('#banner .prompt p').eq(num).fadeOut(500);
        num++;
        num = num < 3 ? num : 0;
        $('#banner .prompt p').eq(num).fadeIn(3000);
    }, 5000);
});