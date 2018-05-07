window.onload = function () {
    !function (window) {
        var mask_signIn = new Vue({
            el: '#mask_signIn',
            data: {
                show: false
            },
            methods: {
                closeSignIn:function () {
                    this.show = false
                }
            }
        });
        new Vue({
            el: '#signIn',
            methods:{
                showSignIn:function () {
                    mask_signIn.show = true;
                }
            }
        });
    }(window);
}
