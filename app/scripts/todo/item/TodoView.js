define(['underscore', 'marionette', 'text!todo/item/todo.html'], function (_, Marionette, viewTemplate) {
    return Marionette.ItemView.extend({
        template: _.template(viewTemplate)
    });
});
