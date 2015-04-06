define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        idAttribute: 'objectId',
        url: function () {
            var url = '/1/classes/Todo';
            if (!this.isNew()) {
                url += '/' + this.id;
            }
            return url;
        },
        defaults: {
            name: ''
        }
    });
});
