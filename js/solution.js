window.onload =function () {
    !function (window) {
        new Vue({
            el: '#solution',
            data: {
                show: true,
                current: {},
                FAQ: {
                    title: '常见问题',
                    content: [
                        {
                            question: 'Q：近期都有什么优惠活动？',
                            answer: 'A：您好，您可以定期登录云家洁APP首页，首页滑动的横幅就是我们的优惠活动，您同时可以关注我们云家洁的微信公众号，获取更多优惠活动信息。'
                        }
                    ]
                },
                coupon: {
                    title: '优惠券问题',
                    content: [
                        {
                            question: '①:代金券使用规则',
                            answer: '您好，预约周期订单成功之后，将会显示临近服务的一单，待服务完成之后，下一单将会自动显示'
                        },
                        {
                            question: '②:代金券过期了怎么办?',
                            answer: '您好，预约周期订单成功之后，将会显示临近服务的一单，待服务完成之后，下一单将会自动显示'
                        },
                    ]
                },
            },
            components: {
                'my-solution': {
                    props: ['detail'],
                    template:'<div>'+
                    '<h3>{{detail.question}}<img src="img/solution/top.png" alt=""></h3>' +
                    '<p class="slide">{{detail.answer}}</p>'+
                    '</div>'
                }
            },
            created: function () {
                var hash = location.hash.slice(1) || '/';
                console.log(hash);
                if(hash === '/FAQ'){
                    this.current = this.FAQ;
                }else if (hash === '/coupon'){
                    this.current = this.coupon;
                }
            }
        });
    }(window);
    !function (window) {
        $(function () {
            $('#solution h3').on('click',function () {
                $(this).children('img').toggleClass('rotate');
                $(this).next().slideToggle();
            });
        });
    }(window);
}
