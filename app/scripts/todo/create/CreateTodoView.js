define(['underscore', 'marionette', 'todo/item/TodoItem', 'text!todo/create/createTodo.html'],
    function (_, Marionette, TodoItem, viewTemplate) {
    return Marionette.ItemView.extend({
        template: _.template(viewTemplate),

        events: {
            'submit #create-todo-form': 'onSubmit'
        },

        initialize: function () {
            _.bindAll(this, 'onSubmit');
            this.model = new TodoItem();
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
