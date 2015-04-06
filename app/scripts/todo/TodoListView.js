define(['underscore', 'backbone', 'todo/TodoList', 'todo/TodoView', 'todo/CreateTodoView', 'text!todo/todoList.html'],
    function (_, Backbone, TodoList, TodoView, CreateTodoView, viewTemplate) {
    return Backbone.View.extend({
        template: _.template(viewTemplate),

        initialize: function () {
            _.bindAll(this, 'render');
            this.collection = new TodoList();
            this.listenTo(this.collection, 'sync add remove', this.render);
            this.collection.fetch();
        },

        render: function () {
            this.$el.html(this.template());
            var $list = this.$('ul');
            this.collection.each(function (item) {
                $list.append(new TodoView({model: item}).render().el);
            }, this);
            return this;
        }
    });
});
