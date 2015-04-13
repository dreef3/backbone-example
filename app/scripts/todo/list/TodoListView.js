define(['underscore', 'marionette', 'todo/list/TodoList', 'todo/item/TodoView', 'todo/create/CreateTodoView', 'text!todo/list/todoList.html'],
    function (_, Marionette, TodoList, TodoView, CreateTodoView, viewTemplate) {
        var TodoListView = Marionette.CollectionView.extend({
            childView: TodoView,

            collectionEvents: {
                'add remove sync reset': 'render'
            }
        });

        return Marionette.LayoutView.extend({
            template: _.template(viewTemplate),

            regions: {
                'add': '#add-todo-container',
                'list': '#todo-list-container'
            },

            initialize: function () {
                this.collection = new TodoList();
                this.collection.fetch();
                this.createTodoView = new CreateTodoView();
                this.listenTo(this.createTodoView, 'model:save', function (model) {
                    this.collection.add(model);
                });
            },

            onBeforeShow: function () {
                this.showChildView('add', this.createTodoView);
                this.showChildView('list', new TodoListView({collection: this.collection}));
            }
        });
    });
