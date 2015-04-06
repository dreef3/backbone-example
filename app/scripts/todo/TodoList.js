define(['backbone', 'ParseUtil', 'todo/TodoItem'], function (Backbone, ParseUtil, TodoItem) {
    return Backbone.Collection.extend({
        model: TodoItem,
        url: '/1/classes/Todo',
        parse: function (response) {
            return response.results;
        }
    });
});
