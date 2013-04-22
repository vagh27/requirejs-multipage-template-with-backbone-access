define(function (require) {
    var $ = require('jquery'),
        backbone = require('backbone'),
        underscore = require('underscore');

    $(function () {

        //good old fashion jquery
        $('.wrapper').append('backbone function - backbone data about to get populated (message brought to you by app/backbone.js):<br /><br />')

        //namespacing - is this necessary here in require?
        window.App = {
            Models: {},
            Collections: {},
            Views: {}
        }

        //AGENDA
        App.Views.TestData = Backbone.View.extend({
            initialize: function(){
                this.setElement('.wrapper');
            },
            render: function(){
                var testItem = this.collection;
                for(var i = 0; i < testItem.days.length; i++) {
                    var content = "<table><thead><tr><td colspan='2'>"+testItem.days[i].day+"</td></tr></thead><tbody>";
                    for(var a = 0; a < testItem.days[i].info.length; a++) {
                        content += "<tr><td>"+testItem.days[i].info[a].time+"</td><td>"+testItem.days[i].info[a].desc+"</td></tr>";
                    }
                    content += "</tbody></table>"
                    this.$el.append(content);
                }
                return this;
            }
        });

        App.Collections.Agenda = Backbone.Collection.extend();

        //we will get our data from a json and pass it into the App.Views.TestData as a collection
        $.getJSON('/data/data.json?'+(new Date()).getTime(), function(testCollection) { 
            var test = new App.Views.TestData({ collection:testCollection });
            test.render().el;
        });

    });
});
