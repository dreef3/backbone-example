define(['backbone', 'todo/TodoItem'], function (Backbone, TodoItem) {
    return Backbone.Collection.extend({
        model: TodoItem,
        url: '/1/classes/Todo'
    });
});
