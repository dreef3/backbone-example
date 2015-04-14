define(function (require) {
    var expect = require('chai').expect,
        sinon = require('sinon'),
        TodoItem = require('todo/item/TodoItem');

    describe('TodoItem', function () {
        var item;

        beforeEach(function () {
            item = new TodoItem({id: 1});
        });

        describe('url method', function () {
            it('should return URL with ID for existing model', function () {
                sinon.stub(item, 'isNew', function () {
                    return false;
                });

                expect(item.url()).to.be.equal('/1/classes/Todo/1');
            });
        })
    });
});
