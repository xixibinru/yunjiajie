!function (window) {
        new Vue({
            el: '.base-header',
            data:{
                text: ''
            },
            created:function () {
                var text = window.location.search;
                this.text = decodeURI(text).replace(/\?title=/,'');
            }
        });
        new Vue({
            el:'#service_list',
            data: {
                current: [],
                title: '',
                herNanny:[
                    {
                        href:'./moonWoman.html',
                        img:'img/baseServiceList/herNanny_01.jpg',
                        name: '月嫂',
                        desc: '良好的职业道德、完善的售后服务体系，培养专业的 月嫂服务人员'
                    },
                    {
                        href: './nanny.html',
                        img:'img/baseServiceList/herNanny_02.jpg',
                        name: '保姆',
                        desc: '严格筛选，认真负责，精心照顾老人、小孩、病人等'
                    }
                ],
                homecare:[
                    {
                        href: './baseService.html?title=地板打蜡',
                        img: 'img/baseServiceList/homecare_01.jpg',
                        name: '地板打蜡',
                        desc:'清除顽固污渍，打蜡，抛光，让地板洁净光泽'
                    },
                    {
                        href: './baseService.html?title=沙发护理',
                        img: 'img/baseServiceList/homecare_02.jpg',
                        name: '沙发护理',
                        desc:'整体杀菌，抛光保养，让皮沙发纹理洁净，整体光亮'
                    }
                ],
                homeApplianceCleaning:[
                    {
                        href: './baseService.html?title=冰箱清洗',
                        img: 'img/baseServiceList/homeApplianceCleaning_01.jpg',
                        name: '冰箱清洗',
                        desc:'机身内外/零部件全面清洗去污，除霜除冰，消毒祛味'
                    },
                    {
                        href: './baseService.html?title=空调清洗',
                        img: 'img/baseServiceList/homeApplianceCleaning_02.jpg',
                        name: '空调清洗',
                        desc:'机壳/过滤网/换热器深层清洗，去污除尘，高温消毒 杀菌'
                    },
                    {
                        href: './baseService.html?title=洗衣机清洗',
                        img: 'img/baseServiceList/homeApplianceCleaning_03.jpg',
                        name: '洗衣机清洗',
                        desc:'内筒/外壁/过滤器/排水管内外清洁，彻底杀菌，杜绝 衣物污染'
                    },
                    {
                        href: './baseService.html?title=油烟机清洗',
                        img: 'img/baseServiceList/homeApplianceCleaning_04.jpg',
                        name: '油烟机清洗',
                        desc:'机身内外/油网/工作台强效去油污，高温消毒，扫除安 全隐患'
                    }
                ]
            },
            created:function () {
                var currentSearch = window.location.search;
                //月嫂保姆
                if(currentSearch === '?title=%E6%9C%88%E5%AB%82%E4%BF%9D%E5%A7%86' || currentSearch === '?title=月嫂保姆'){
                    this.current = this.herNanny;
                }
                //家电清洗
                else if(currentSearch === '?title=%E5%AE%B6%E7%94%B5%E6%B8%85%E6%B4%97' ||currentSearch === '?title=家电清洗'){
                    this.current = this.homeApplianceCleaning;
                }
                //家居护理
                else if(currentSearch === '?title=%E5%AE%B6%E5%B1%85%E6%8A%A4%E7%90%86' ||currentSearch === '?title=家居护理'){
                    this.current = this.homecare;
                }
            }
        });
    }(window);