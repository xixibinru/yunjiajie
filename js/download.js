window.onload = function () {
    new Vue({
        el: '#gift',
        data: {
            classObj:{
                scale: false
            }
        },
        methods: {
            addScale:function () {
                this.classObj.scale = true;
            },
            removeScale:function () {
                this.classObj.scale = false;
            }
        }
    });
}