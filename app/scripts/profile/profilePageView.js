define(function (require) {
    var Marionette = require('marionette'),
        User = require('profile/user'),
        viewTemplate = require('text!profile/main.html');

    return Marionette.LayoutView.extend({
        template: _.template(viewTemplate),

        initialize: function () {
            this.model = new User();
        }
    });
});
