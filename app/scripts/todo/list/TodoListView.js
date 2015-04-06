define(['underscore', 'backbone', 'todo/list/TodoList', 'todo/item/TodoView', 'todo/create/CreateTodoView', 'text!todo/list/todoList.html'],
    function (_, Backbone, TodoList, TodoView, CreateTodoView, viewTemplate) {
    return Backbone.View.extend({
        template: _.template(viewTemplate),

        initialize: function () {
            _.bindAll(this, 'render');
            this.collection = new TodoList();
            this.listenTo(this.collection, 'sync add remove', this.render);
            this.collection.fetch();
            this.createTodoView = new CreateTodoView();
            this.listenTo(this.createTodoView, 'model:save', function (model) {
                this.collection.add(model);
            });
        },

        render: function () {
            this.$el.html(this.template());

            this.$('#add-todo-container').html(this.createTodoView.render().el);

            var $list = this.$('ul');
            this.collection.each(function (item) {
                $list.append(new TodoView({model: item}).render().el);
            }, this);
            return this;
        }
    });
});
