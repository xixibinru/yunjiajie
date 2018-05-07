window.onload = function () {
    !function () {
        var data = {
            first_cleaning: {
                mainTitle: '开荒保洁',
                bannerUrl: 'img/baseService/first_cleaning_banner.jpg',
                tables: [
                    {
                        th: ['开荒项目', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['一居室','（≤70平米）'],
                                price: ['￥500'],
                                discount: ['￥325']
                            },
                            {
                                type: ['二居室1卫','（≤100平米）'],
                                price: ['￥750'],
                                discount: ['￥487.5']
                            },
                            {
                                type: ['三居室1卫','（≤120平米）'],
                                price: ['￥950'],
                                discount: ['￥617.5']
                            },
                            {
                                type: ['三居室1卫','（≤130平米）'],
                                price: ['￥1100'],
                                discount: ['￥715']
                            },
                            {
                                type: ['三居室2卫','（≤150平米）'],
                                price: ['￥1425'],
                                discount: ['￥926.25']
                            },
                            {
                                type: ['四居室及以上'],
                                price: ['￥12元/平米'],
                                discount: ['￥7.8元/平米']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: true,
                    content:['1.计算居室面积时包含购买房屋时赠送的面积','2.每种居室设有上限平方米，超出上限的部分按10元/平方米计费','3.改造后新增房屋以实际房型为准','4.复式房屋面积以楼上、楼下的面积总和为准','5.所有居室均采用建筑面积为准']
                },
                tableRemark: {
                    exist: false,
                },
                serviceDetail: [
                    {
                        title: '服务介绍',
                        desc: ['开荒保洁着重处理新居装修后遗留的污渍、胶点、灰尘等问题。云家洁专业技师，经过专业培训，配备专业工具，为您的新家提供全方位的清洁方案'],
                        remark: {
                            exist: false,
                        },
                        remarkWarm: {
                            exist: false
                        }
                    },
                    {
                        title: '使用场景 — 入住前的新装房屋',
                        desc: ['1.未装修完成的房屋，建议在装修完成后预约','2.局部装修的房屋，按整套居室收费。未装修的房屋以日常保洁的标准进行清洁。','3.商户、办公室等非个人家庭用户，请拨打客服电话预约企业开荒保洁'],
                        remark: {
                            exist: false,
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 新居 服务范围 —',
                    lisItem: [
                        {
                            img: 'img/baseService/first_cleaning_01.jpg',
                            desc: ['1、涂料、水泥点、玻璃胶','等装修痕迹清楚']
                        },
                        {
                            img: 'img/baseService/first_cleaning_02.jpg',
                            desc:['2、墙面、顶棚除尘、地面','清洁，内窗玻璃清洁']
                        },
                        {
                            img: 'img/baseService/first_cleaning_03.jpg',
                            desc:['3、厨卫家居内外清洁，其','余家居表面除尘']
                        },
                        {
                            img: 'img/baseService/first_cleaning_04.jpg',
                            desc:['4、家电表面清洁，瓷砖，','五金等清洁']
                        }
                    ],
                    processWarmPrompt: {
                        exist: true,
                        content:['1.大型建筑垃圾请您提前联系装修公司移除','2.外窗玻璃清洗、家电清洗均不在开荒范围内，可预约专项保洁服务','3.不包含灯具、窗纱、窗帘等清洗']
                    }
                },
                nursing: {
                    exist: false,
                },
                question: {
                    exist: false
                }
            },
            icebox_cleaning: {
                mainTitle: '冰箱清洗',
                bannerUrl: 'img/baseService/icebox_cleaning_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['单/双门冰箱'],
                                price: ['150/台'],
                                discount: ['97.5元/台']
                            },
                            {
                                type: ['三门冰箱'],
                                price: ['200/台'],
                                discount: ['130元/台']
                            },
                            {
                                type: ['对门冰箱'],
                                price: ['265/台'],
                                discount: ['172.25元/台']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: false
                },
                serviceDetail: [
                    {
                        title: '服务标准',
                        desc: ['1.冰箱无异味，内部无霜无冰；', ' 2.零部件及冰箱内外部洁净无菌。'],
                        remark: {
                            exist: false
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 服务流程 —',
                    lisItem: [
                        {
                            img: 'img/baseService/icebox_cleaning_01.jpg',
                            desc: ['保温袋在清洁期间保险食','物、吸水毛巾防护']
                        },
                        {
                            img: 'img/baseService/icebox_cleaning_02.jpg',
                            desc: ['食品消毒液、消毒湿巾，','安全消毒擦拭 ']
                        },
                        {
                            img: 'img/baseService/icebox_cleaning_03.jpg',
                            desc: ['进口高温蒸汽消毒机','物理深层消毒']
                        },
                        {
                            img: 'img/baseService/icebox_cleaning_04.jpg',
                            desc: ['专业除冰铲刀，有效提升','制冷效果']
                        },
                        {
                            img: 'img/baseService/icebox_cleaning_05.jpg',
                            desc: ['可食用天然清洁剂，健康','去污抑菌']
                        },
                        {
                            img: 'img/baseService/icebox_cleaning_06.jpg',
                            desc: ['专业除味消毒机，杀菌除','味，保险更持久']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                    exist: false,
                },
                question: {
                    exist: false
                }
            },
            airCondition_cleaning: {
                mainTitle: '空调清洗',
                bannerUrl: 'img/baseService/airCondition_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['挂式空调'],
                                price: ['120元/台'],
                                discount: ['78元/台']
                            },
                            {
                                type: ['柜式空调'],
                                price: ['150元/台'],
                                discount: ['97.5元/台']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: false
                },
                serviceDetail: [
                    {
                        title: '服务介绍',
                        desc: ['空调内积累的灰尘、细菌吹向室内，威胁您和家人的健康。专业的换热器深层清洁，保障健康，还可节电15%-20%，延长使用寿命。建议每3个月清洗一次。'],
                        remark: {
                            exist: false
                        },
                        remarkWarm: {
                            exist: false
                        }
                    },
                    {
                        title: '服务标准',
                        desc: ['1.室内空调机売、风板、顶部、接水盘、空气过滤网、风轮洁净；', '2.换热器无尘无菌'],
                        remark: {
                            exist: false
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 服务流程 —',
                    lisItem: [
                        {
                            img: 'img/baseService/airCondition_cleaning_01.jpg',
                            desc: ['专业风速计测量制定科学','清洗计划']
                        },
                        {
                            img: 'img/baseService/airCondition_cleaning_02.jpg',
                            desc: ['安装防护套装细节','突显专业']
                        },
                        {
                            img: 'img/baseService/airCondition_cleaning_03.jpg',
                            desc: ['泡沫清洗强力去污','更干净']
                        },
                        {
                            img: 'img/baseService/airCondition_cleaning_04.jpg',
                            desc: ['滤网清洗风道通畅','更舒心 ']
                        },
                        {
                            img: 'img/baseService/airCondition_cleaning_05.jpg',
                            desc: ['水剂清洗深层清洁','更彻底']
                        },
                        {
                            img: 'img/baseService/airCondition_cleaning_06.jpg',
                            desc: ['进口蒸汽消毒机深层','杀菌消毒']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                    exist: false,
                },
                question: {
                    exist: false
                }
            },
            washingMachine_cleaning: {
                mainTitle: '洗衣机清洗',
                bannerUrl: 'img/baseService/washingMachine_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['波轮洗衣机'],
                                price: ['180元/台'],
                                discount: ['117元/台']
                            },
                            {
                                type: ['滚筒洗衣机'],
                                price: ['180元/台'],
                                discount: ['117元/台']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: false
                },
                serviceDetail: [
                    {
                        title: '服务范围',
                        desc: ['1.洗衣机内筒、外壁、排水口、洗衣机显示窗干净光富','2.密封圈、线屑过滤器、分配器、接水管、排水管等洁净无污;','3.工作区域干净,物品归位。'],
                        remark: {
                            exist: true,
                            content:'为达到更好的清洁杀菌效果,需要您提供温水，滚简洗衣机不提供拆卸清洗。'
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 服务流程 —',
                    lisItem: [
                        {
                            img: 'img/baseService/washingMachine_cleaning_01.jpg',
                            desc: ['标准化操作流程全面','检查洗衣机']
                        },
                        {
                            img: 'img/baseService/washingMachine_cleaning_02.jpg',
                            desc:['专用洗衣机杀菌粉','杀菌第一关 ']
                        },
                        {
                            img: 'img/baseService/washingMachine_cleaning_03.jpg',
                            desc:['进口高温蒸汽设备','杀菌第二关']
                        },
                        {
                            img: 'img/baseService/cleanser.jpg',
                            desc:['清洗外売分配器等','小部件']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                  exist: true,
                    title: '保养建议',
                    content:['1. 2-3个月清洗一次，清除霉菌、大肠杆菌等病菌；','2.洗完衣服后应该立刻把衣服拿出去晾晒，不要久放；','3.洗完衣服记得把洗衣机的内桶擦干，既能防老化又能防霉。']
                },
                question: {
                    exist: false
                }
            },
            cookHood_cleaning: {
                mainTitle: '油烟机清洗',
                bannerUrl: 'img/baseService/cookHood_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['欧式油烟机'],
                                price: ['130元/台'],
                                discount: ['84.5元/台']
                            },
                            {
                                type: ['中式油烟机'],
                                price: ['150元/台'],
                                discount: ['97.5元/台']
                            },
                            {
                                type: ['侧吸式油烟机'],
                                price: ['170元/台'],
                                discount: ['110.5元/台']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: false
                },
                serviceDetail: [
                    {
                        title: '服务范围',
                        desc: ['油烟机内外表面洁净光亮，油盒、油网和止回阀无油无痕迹，涡轮壳、涡轮除油消毒，工作区域干净。'],
                        remark: {
                            exist: true,
                            content:'清洗时需要热水用浸泡清洗油盒、油网等；部分机型动力平衡复杂，不方便拆卸涡轮，用进口高温蒸汽设备熏蒸杀菌消毒 。 '
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 服务流程 —',
                    lisItem: [
                        {
                            img: 'img/baseService/cookHood_cleaning_01.jpg',
                            desc: ['标准化操作流程制定科学','清洗方案']
                        },
                        {
                            img: 'img/baseService/cookHood_cleaning_02.jpg',
                            desc: ['专用除油剂除味杀菌','更彻底']
                        },
                        {
                            img: 'img/baseService/cookHood_cleaning_03.jpg',
                            desc: ['高温蒸汽设备专业消毒','更放心']
                        },
                        {
                            img: 'img/baseService/cookHood_cleaning_04.jpg',
                            desc: ['专业抛光让油烟机','焕然一新']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                    exist: true,
                    title: '保养建议',
                    content:['1.经常使用的油烟机内部会积累大量油垢，散发致癌物质，建议2-3月清洗一次;','2.为油盒铺上塑料薄膜，清洗更省力;','3.烹饪结束后，继续开启1-2分钟，以便彻底排净残余油烟 。']
                },
                question: {
                    exist: false
                }
            },
            floor_waxing: {
                mainTitle: '地板打蜡',
                bannerUrl: 'img/baseService/floor_waxing_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['地板打蜡'],
                                price: ['25元/平米 ','（15平米起）'],
                                discount: ['16.25元/平米','（20平米起）']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: false
                },
                serviceDetail: [
                    {
                        title: '服务标准',
                        desc: ['所有的实木地板和复合地板，清除顽固污渍，打蜡，抛光，让地板洁净光泽。'],
                        remark: {
                            exist: false,
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 地板打蜡服务流程 —',
                    lisItem: [
                        {
                            img: 'img/baseService/floor_waxing_01.jpg',
                            desc: ['专业材质识别制定科学','保养方案']
                        },
                        {
                            img: 'img/baseService/cleanser.jpg',
                            desc: ['中性清洁剂深度','(全面)清洁']
                        },
                        {
                            img: 'img/baseService/floor_waxing_03.jpg',
                            desc: ['进口原蜡手工上蜡温润','每一寸地板']
                        },
                        {
                            img: 'img/baseService/floor_waxing_04.jpg',
                            desc: ['天然抛光剂天鹅绒布','抛光杀菌']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                    exist: false,
                },
                question: {
                    exist: true,
                }
            },
            sofa_care: {
                mainTitle: '沙发护理',
                bannerUrl: 'img/baseService/sofa_care_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['皮沙发'],
                                price: ['80元/座','（3座起）'],
                                discount: ['52元/座','（3座起）']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: true,
                    content: '注：每座不超过1.2米'
                },
                serviceDetail: [
                    {
                        title: '服务范围',
                        desc: ['皮沙发整体清洁杀菌、抛光保养，让皮沙发纹理洁净，整体光亮'],
                        remark: {
                            exist: false,
                        },
                        remarkWarm: {
                            exist: false
                        }
                    },
                    {
                        title: '服务标准',
                        desc: ['1.彻底清洁皮革纹理的污垢，还原皮革的延展性','2.用天然护理剂对皮革进行上蜡保养，让沙发整体光亮','2.用天然护理剂对皮革进行上蜡保养，让沙发整体光亮'],
                        remark: {
                            exist: false,
                        },
                        remarkWarm: {
                            exist: false
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 沙发护理流程 —',
                    lisItem: [
                        {
                            img: 'img/baseService/sofa_care_01.jpg',
                            desc: ['专业皮革识别制定科学','保养方案']
                        },
                        {
                            img: 'img/baseService/sofa_care_02.jpg',
                            desc:['专业保洁更全面让沙发','纹理清晰 ']
                        },
                        {
                            img: 'img/baseService/sofa_care_03.jpg',
                            desc:['抛光保养更细致让沙发','重现活力']
                        },
                        {
                            img: 'img/baseService/sofa_care_04.jpg',
                            desc:['崭新如初更舒心优质服务','值得选择']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                    exist: false,
                },
                question: {
                    exist: false
                }
            },
            clean_window: {
                mainTitle: '擦玻璃',
                bannerUrl: 'img/baseService/clean_window_banner.jpg',
                tables: [
                    {
                        th: ['类型', '价格', '会员可享6.5折'],
                        tr: [
                            {
                                type: ['擦玻璃'],
                                price: ['10元/平米','（15平米起）'],
                                discount: ['6.5元/平米','（97.5元起）']
                            }
                        ]
                    },
                    {
                        th: ['房屋户型', '房屋面积', '玻璃面积参考'],
                        tr: [
                            {
                                type: ['一居室'],
                                price: ['80平米以下'],
                                discount: ['10平米']
                            },
                            {
                                type: ['二居室'],
                                price: ['(80-100)平米'],
                                discount: ['(10-15)平米']
                            },
                            {
                                type: ['三居室'],
                                price: ['(120-140)平米'],
                                discount: ['(15-25)平米']
                            },
                            {
                                type: ['四居室及以上'],
                                price: ['140平米以上'],
                                discount: ['25平米以上']
                            }
                        ]
                    }
                ],
                tableWarmPrompt: {
                    exist: false
                },
                tableRemark: {
                    exist: true,
                    content: '注：以上面积仅供参考，收费按实际测量为准；一般二居室，1位保洁师3小时左右完成，实际时长根据您家的具体情况上下浮动。'
                },
                serviceDetail: [
                    {
                        title: '服务范围',
                        desc: ['1、玻璃边框，槽道无尘无水印','2、玻璃内外表面无尘无水渍','3、操作区域干净整洁'],
                        remark: {
                            exist: false,
                        },
                        remarkWarm: {
                            exist: true,
                            content:'温馨提示：服务不包含纱窗清洁；不包含玻璃表面大面积的除胶除漆；清洗师会提前与您电话沟通，了解玻璃的具体情况——密封玻璃、玻璃厚度大于27mm无法提供服务，请您谅解。'
                        }
                    }
                ],
                serviceProcess: {
                    title: '— 擦玻璃服务 —',
                    lisItem: [
                        {
                            img: 'img/baseService/clean_window_01.jpg',
                            desc: ['专业皮革识别制定科学','保养方案']
                        },
                        {
                            img: 'img/baseService/clean_window_02.jpg',
                            desc:['专业保洁更全面让沙发','纹理清晰 ']
                        },
                        {
                            img: 'img/baseService/cleanser.jpg',
                            desc:['抛光保养更细致让沙发','重现活力']
                        },
                        {
                            img: 'img/baseService/clean_window_04.jpg',
                            desc:['崭新如初更舒心优质服务','值得选择']
                        }
                    ],
                    processWarmPrompt: {
                        exist: false
                    }
                },
                nursing: {
                    exist: false,
                },
                question: {
                    exist: false
                }
            }
        }
        var currentData = {};
        var currentSearch = window.location.search;
        if (currentSearch === '?title=冰箱清洗' || currentSearch === '?title=%E5%86%B0%E7%AE%B1%E6%B8%85%E6%B4%97') {
            currentData = data.icebox_cleaning;
        }else if (currentSearch === '?title=空调清洗' || currentSearch === '?title=%E7%A9%BA%E8%B0%83%E6%B8%85%E6%B4%97') {
            currentData = data.airCondition_cleaning;
        }
        else if (currentSearch === '?title=洗衣机清洗' || currentSearch === '?title=%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B8%85%E6%B4%97') {
            currentData = data.washingMachine_cleaning;
        }else if (currentSearch === '?title=油烟机清洗' || currentSearch === '?title=%E6%B2%B9%E7%83%9F%E6%9C%BA%E6%B8%85%E6%B4%97') {
            currentData = data.cookHood_cleaning;
        }else if (currentSearch === '?title=地板打蜡' || currentSearch === '?title=%E5%9C%B0%E6%9D%BF%E6%89%93%E8%9C%A1') {
            currentData = data.floor_waxing;
        }else if (currentSearch === '?title=沙发护理' || currentSearch === '?title=%E6%B2%99%E5%8F%91%E6%8A%A4%E7%90%86') {
            currentData = data.sofa_care;
        }else if (currentSearch === '?title=新居开荒' || currentSearch === '?title=%E6%96%B0%E5%B1%85%E5%BC%80%E8%8D%92') {
            currentData = data.first_cleaning;
        }else if (currentSearch === '?title=擦玻璃' || currentSearch === '?title=%E6%93%A6%E7%8E%BB%E7%92%83') {
            currentData = data.clean_window;
        }
        new Vue({
            el: '#mainTitle',
            data:{
                mainTitle: ''
            },
            created: function () {
                this.mainTitle = currentData.mainTitle;
            },
            methods: {
                goBack: function () {
                    window.history.go(-1);
                }
            }

        });
        new Vue({
            el: '#banner',
            data: {
                bannerUrl: ''
            },
            created: function () {
                this.bannerUrl = currentData.bannerUrl;
            }
        });
        new Vue({
            el: '#service_explain',
            components: {
                'my-table': {
                    props: ['table'],
                    template: '<table>' +
                    '<thead>' +
                    '<tr>' +
                    '<th v-for="th in table.th">{{th}}</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr v-for="tr in table.tr">' +
                        '<td v-for="td in tr"><p v-for="p in td">{{p}}</p></td>'+
                    '</tr>' +
                    '</tbody>' +
                    '</table>'
                },
                'my-servicedetail': {
                    props: ['detail'],
                    template: '<div class="service-detail" >' +
                    '<h4>{{detail.title}}</h4>' +
                    '<ul>' +
                    '<li v-for="desc in detail.desc">{{desc}}</li>' +
                    '</ul>' +
                    '<template v-if="detail.remark.exist">' +
                    '<div class="remark" >' +
                    '<p>注:</p>' +
                    '<p>{{detail.remark.content}}</p>' +
                    '</div>' +
                    '</template>' +
                    '<template v-if="detail.remarkWarm.exist">' +
                    '<div class="remark-warm">' +
                    '<p>{{detail.remarkWarm.content}}</p>' +
                    '</div>' +
                    '</template>' +
                    '</div>'
                }
            },
            data: {
                current: {}
            },
            created: function () {
                this.current = currentData;
            }
        });
    }();
}
