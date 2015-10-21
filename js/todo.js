var todo = angular.module('todoApp', []);
todo.controller('todoController', ['$scope', function($scope) {
    $scope.todos = [{
        'title': 'my first task',
        'done': false
    }];

    $scope.addTodo = function() {
        $scope.todos.push({
            'title': $scope.todoItem
        });
        $scope.todoItem = '';
    };
    $scope.remove = function() {
        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done
        })
    };
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(item) {
            count += item.done ? 0 : 1;
        });
        return count;
    };

    $scope.selectAll = function() {


        angular.forEach($scope.todos, function(item) {
            item.done = true;
            //item.done = $scope.selectedAll;
        });
    };
    $scope.unselectAll = function() {

        angular.forEach($scope.todos, function(item) {
            item.done = false;
        });
    };

}]);
