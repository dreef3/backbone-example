$(function () {
    var Router = Backbone.Router.extend({
        routes: {
            'posts': 'posts',
            'posts/:id(/)': 'post',
            'posts/:id/edit(/)': 'edit'
        },

        posts: function () {/* ... */},

        post: function (id) {/* ... */},

        edit: function (id) {/* ... */}
    });

    var mainRouter = new Router();

    Backbone.history.start({pushState: true});

    Backbone.history.navigate('posts/3/edit');
});
