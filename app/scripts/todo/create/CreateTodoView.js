define(['underscore', 'backbone', 'todo/item/TodoItem', 'text!todo/create/createTodo.html'],
    function (_, Backbone, TodoItem, viewTemplate) {
    return Backbone.View.extend({
        template: _.template(viewTemplate),

        events: {
            'submit #create-todo-form': 'onSubmit'
        },

        initialize: function () {
            this.model = new TodoItem();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.delegateEvents();
            return this;
        },

        onSubmit: function (e) {
            this.model.set({
                name: this.$('#input-todo-name').val()
            });
            this.model.save().then(_.bind(function () {
                this.trigger('model:save', this.model);
                this.model = new TodoItem();
                this.render();
            }, this));

            e.preventDefault();
        }
    });
});
