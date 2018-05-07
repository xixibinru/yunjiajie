window.onload = function () {
    !function (window) {
        var personal = new Vue({
            el: '#personal',
            data: {
                userSex: '男',
                headPortrait: ['选择图片', '拍照', '从相册选', '取消'],
                sex: ['选择性别', '男', '女', '取消']
            },
            methods: {
                select: function (data) {
                    mask.show = true;
                    mask.showInner = true;
                    if(data === 'headPortrait'){
                        mask.current = this.headPortrait;
                    }else if(data === 'sex'){
                        mask.current = this.sex;
                    }
                }
            }
        });
        var mask = new Vue({
            el: '#mask',
            data: {
                current: [],
                show: false,
            },
            methods: {
                select: function (index) {
                    if (this.current === personal.sex) {
                        switch (index) {
                            case 1 :
                                personal.userSex = '男';
                                this.show = false;
                                break;
                            case 2 :
                                personal.userSex = '女';
                                this.show = false;
                                break;
                        }
                    }
                    if (index === 3) {
                        this.show = false;
                    }
                }
            }
        });
    }(window);
    !function (window) {
        var calendar = new LCalendar();
        calendar.init({
            'trigger': '#birth',//标签id
            'type': 'date',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
            'minDate':'1900-01-01',//最小日期 注意：该值会覆盖标签内定义的日期范围
            'minDate': '1900-1-1', //最小日期
            'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
        });
    }(window);
}
