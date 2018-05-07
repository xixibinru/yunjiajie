window.onload = function () {
    !function (window) {
        var service = new Vue({
            el: '#footer',
            methods: {
                showPhoneNumber: function () {
                    servicesPhone.show = true;
                }
            }
        });
        var servicesPhone = new Vue({
            el: '.mask-service-phone',
            data: {
                show: false
            },
            methods: {
                closePhoneNumber: function () {
                    this.show = false;
                }
            }
        });
    }(window);
}