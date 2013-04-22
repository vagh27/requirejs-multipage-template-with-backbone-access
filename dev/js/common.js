require.config({
    baseUrl: "/js/",
    deps:['app/base'],
    paths:{
        //use AMD versions of backbone/require (got these guys using Bower pkg manager)
        //otherwise you'll have to use the shim config option
        //we can throw all of the things we use here (finally, a master version of cycle.js!)
        //and just call them when we need them
        "jquery":"lib/jquery",
        "underscore":"lib/underscore",
        "backbone":"lib/backbone",
        "tweenCss":"lib/tweenlite/CSSPlugin.min",
        "tweenLite":"lib/tweenlite/TweenLite.min"
    }
});

require(['jquery'],function(){

    //global functionality
    //you can theoretically do global stuff here 
    //or load it in as a dep e.g. app/base
    //this is exectuted before app/base UNTIL compiled
    //then this nonsense loads second
    $('.wrapper').append('global function 2 - brought to you by common.js<br />')
    

});