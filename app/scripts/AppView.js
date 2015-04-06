define(['underscore', 'backbone', 'text!main.html'], function (_, Backbone, viewTemplate) {
    var AppView = Backbone.View.extend({
        el: '#application-container',
        template: _.template(viewTemplate),

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    }, {
        start: function () {
            new AppView().render();
        }
    });

    return AppView;
});
