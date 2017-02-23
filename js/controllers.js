var app = angular.module('ToDoList.Controllers',[]);

app.controller('TodoCtrl', function($scope, DBservice){
  $scope.datasets = null;

  DBservice.GetData()
    .then(function (respons) {
        console.log(respons.val());
        $scope.datasets = respons.val();
        $scope.$apply();
    }, function (error) {
        console.log(error);
    });

});

app.controller('CreateCtrl', function($scope, DBservice){
  $scope.taskID = Math.random().toString(36).substring(7);
  $scope.titleNew = null;
  $scope.descriptionNew = null;
  $scope.checkNew = false;

  $scope.CreateTodo = function(){
    $scope.taskID = Math.random().toString(36).substring(7);
    DBservice.PostData($scope.taskID, $scope.titleNew, $scope.descriptionNew, $scope.checkNew)
    .then(function (respons) {
        console.log(respons);
    }, function (error) {
        console.log(error);
    });
  };

});
