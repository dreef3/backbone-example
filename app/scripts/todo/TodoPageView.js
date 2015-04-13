define(['underscore', 'backbone', 'marionette', 'todo/list/TodoListView', 'text!todo/main.html'],
    function (_, Backbone, Marionette, TodoListView, viewTemplate) {
        return Marionette.LayoutView.extend({
            template: _.template(viewTemplate),
            regions: {
                'items': '#items-container',
                'details': '#details-container'
            },

            onBeforeShow: function () {
                this.showChildView('items', new TodoListView());
            }
        });
    });
