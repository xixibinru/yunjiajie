(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement || window || document.body;
        var windowWidth = html.clientWidth;
        windowWidth = windowWidth > 750 ? 750 : windowWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px';
    }, false);

    document.addEventListener('DOMContentLoaded',function () {
        if(!document.querySelector('.goBack')) return;
        var goback = document.querySelector('.goBack');
        goback.addEventListener('click', function (event) {
            event.preventDefault();
            window.history.go(-1);
        },false);
    });
})();





