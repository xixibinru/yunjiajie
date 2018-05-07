
// 敬请期待 点击未开放的弹出 敬请期待
$(function () {
    var timer = null;
    $('.unOpen').on('click',function () {
        clearTimeout(timer);
        $('#mask_unOpen').fadeIn(600);
        timer = setTimeout(function () {
            $('#mask_unOpen').fadeOut(600);
        },3000);
    });
});
