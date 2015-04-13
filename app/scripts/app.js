define(function (require) {
    var _ = require('underscore'),
        Marionette = require('marionette'),
        TodoPageView = require('todo/TodoPageView');

    var RootView = Marionette.LayoutView.extend({
        el: '#application-container',
        template: _.template('<div id="root"></div>'),
        regions: {
            'root': '#root'
        }
    });

    var App = Marionette.Application.extend({
        todosPage: function () {
            this.rootView.showChildView('root', new TodoPageView());
        },

        default: function () {
            this.router.navigate('todos', {trigger: true});
        }
    });

    var app = new App();
    app.on('start', function () {
        this.rootView = new RootView();
        this.rootView.render();

        this.router = new Marionette.AppRouter({
            controller: this,
            appRoutes: {
                'todos': 'todosPage',
                '': 'default'
            }
        });
        Backbone.history.start();
    });

    return app;
});
