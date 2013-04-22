define(function (require) {
    var $ = require('jquery'),
        tweenCss = require('tweenCss'),
        tweenLite = require('tweenLite');

    $(function () {

        //good old tweenLite
        TweenLite.from('.wrapper span', 2, {left:"500px"});

    });
});
