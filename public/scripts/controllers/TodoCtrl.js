angular.module('TodoCtrl', []).controller('TodoController', function($scope, Todo){
    Todo.get().success(function(data){
        $scope.todos = data;
        console.log(data);
    }).error(function(data){
        console.log("Error: ", data);
    });
    
    $scope.tagline = 'Nerd page';

    $scope.createTodo = function() {
        Todo.create($scope.formData).success(function(data){
            $scope.formData = {};
            $scope.todos = data;
            console.log(data);
        }).error(function(data){
            console.log(data);
        });
    };

    $scope.deleteTodo = function(id) {
        Todo.delete(id).success(function(data){
            $scope.todos = data;
            console.log(data);
        }).error(function(data){
            console.log(data);
        });
    };
});
