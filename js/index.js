window.onload = function () {
    $(function () {
        // banner位置
        var bannerData = [
            {
                width:5.3,
                height:2.35,
                top:0.44,
                left:-5,
                opacity:0.6,
                zIndex:0
            },
            {
                width:6.46,
                height:2.86,
                top:0.18,
                left:0.53,
                opacity:1,
                zIndex:2
            },
            {
                width:5.3,
                height:2.35,
                top:0.44,
                left:7.2,
                opacity:0.6,
                zIndex:1
            }
        ];
        // 初始化banner位置
        $('#banner li').each(function (i,e) {
            $(e).css({
                'width':bannerData[i].width+'rem',
                'height':bannerData[i].height+'rem',
                'top':bannerData[i].top+'rem',
                'left':bannerData[i].left+'rem',
                'opacity':bannerData[i].opacity
            });
        });
        // 轮播图旋转一次的动画
        function rotate() {
            $('#banner li').each(function (i,e) {
                $(e).animate({
                    'width':bannerData[i].width+'rem',
                    'height':bannerData[i].height+'rem',
                    'top':bannerData[i].top+'rem',
                    'left':bannerData[i].left+'rem',
                    'opacity':bannerData[i].opacity,
                    'z-index':bannerData[i].zIndex
                },750);
            })
        };
        // 旋转一次
        function gonext() {
            bannerData.unshift(bannerData.pop());
            rotate();
        }
        setInterval(function () {
            gonext();
        },3000);
    });
}
