var app = angular.module("myApp", []);
app.controller("taskCtrl", function ($scope) {
  $scope.inputField = 0;
  $scope.taskList = [];
  $scope.taskAdd = function () {
    $scope.inputField = 1;
  };
  $scope.addToList = function (value) {
    $scope.taskList.push({
      taskText: value,
      done: false,
      id: $scope.taskList.length,
    });
    $scope.inputField = 0;
  };
  $scope.deleteTask = function (item) {
    var index = $scope.taskList.indexOf(item);
    $scope.taskList.splice(index, 1);
  };
});
