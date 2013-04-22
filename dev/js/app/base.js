define(function (require) {
    var $ = require('jquery');
    $(function () {
        
        //global function

        //adding the nav here because I'm lazy
        var html = '<ul><li><a href="/">Home</a></li> <li><a href="/backbone/">Backbone Example</a></li> <li><a href="/animation/">Animation Example</a></li> <li><a href="/static/">Static Example</a></li> </ul>';
        $('.wrapper').prepend(html);
        $('.wrapper').append('global function 1 - brought to you by base.js<br />');
        
    });
});
