angular.module('ToDoList')

.controller('CreateCtrl', function(DBservice, $scope, $state){
  $scope.taskID = Math.random().toString(36).substring(7);
  $scope.titleNew = null;
  $scope.descriptionNew = null;
  $scope.dateTimeNew = null;
  $scope.checkNew = false;
  $scope.titleValid = false;

  // ========== CREATE DATA TO DATABASE ========================================
  $scope.CreateTodo = function(){
    $scope.titleValid = true;

    if($scope.titleNew == null || $scope.titleNew == '') {
      $scope.titleValid = true;
    }else{
      $scope.titleValid = false;
    };
    if($scope.titleValid == false){
      $scope.taskID = Math.random().toString(36).substring(7);

      var currentDate = new Date();
      currentDate = currentDate.toLocaleString();

      var dateTime = $scope.dateTimeNew;
      if(dateTime == null){
        dateTime = '-';
      }else{
        dateTime = dateTime.toLocaleString();
      };
      if($scope.titleNew == null || $scope.titleNew == ''){
        $scope.titleNew = '-';
      }
      else if($scope.descriptionNew == null || $scope.descriptionNew == ''){
        $scope.descriptionNew = '-';
      }
      else if($scope.checkNew == null || $scope.checkNew == ''){
        $scope.checkNew = false ;
      }
      else{}

      DBservice.PostData($scope.taskID,
                         $scope.titleNew,
                         $scope.descriptionNew,
                         dateTime,
                         currentDate,
                         $scope.checkNew)
        .then(function(respons){
            $state.go('all');
        }, function(error){
            // console.log(error);
        });
    };

  };

});
