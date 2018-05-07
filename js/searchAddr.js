
    var map, geolocation;
    map = new AMap.Map('map');
    var city = '';
    map.plugin('AMap.Geolocation', function () {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onComplete);//返回定位出错信息
        //解析定位错误信息
        // function onError(data) {
        // }
    });
    function searchNearBy(centerX, centerY) {
        AMap.service(["AMap.PlaceSearch"], function () {
            var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                pageSize: 5,
                // type: '地名地址信息',
                pageIndex: 1,
                city: city, //城市
                map: map,
                panel: 'panel',
                children: 1,
                extensions: 'all'
            });
            var cpoint = [centerX, centerY]; //中心点坐标
            placeSearch.searchNearBy('', cpoint, 200, function (status, result) {
                console.log(status);
                console.log(result);
            });
        });
    }
    function onComplete(data) {
        geolocation.getCityInfo(function (status, result) {
            city = result.city;
            var centerX = data.position.getLng();
            var centerY =  data.position.getLat();
            searchNearBy(centerX, centerY);
            AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function () {//回调函数
                //实例化Autocomplete
                var autoOptions = {
                    city: city,
                    input: "searchInput"//使用联想输入的input的id
                };
                autocomplete = new AMap.Autocomplete(autoOptions);
                var placeSearch = new AMap.PlaceSearch({
                    city: city,
                    map: map,
                });
                AMap.event.addListener(autocomplete, "select", function (e) {
                    console.log(e);
                   console.log(e.poi);
                    placeSearch.search(e.poi.name);
                    var centerX = e.poi.location.M, centerY = e.poi.location.O;
                    searchNearBy(centerX, centerY);
                });
            });
        });
    }

