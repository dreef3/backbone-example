define(['underscore', 'backbone', 'todo/TodoListView', 'text!main.html'], function (_, Backbone, TodoListView, viewTemplate) {
    var AppView = Backbone.View.extend({
        el: '#application-container',
        template: _.template(viewTemplate),

        render: function () {
            this.$el.html(this.template());

            this.$items = this.$('#todo-items-container');
            this.$items.html(new TodoListView().render().el);

            return this;
        }
    }, {
        start: function () {
            new AppView().render();
        }
    });

    return AppView;
});
