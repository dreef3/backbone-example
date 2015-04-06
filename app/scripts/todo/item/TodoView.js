define(['underscore', 'backbone', 'text!todo/item/todo.html'], function (_, Backbone, viewTemplate) {
    return Backbone.View.extend({
        template: _.template(viewTemplate),

        initialize: function (options) {
            this.model = options.model;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});
