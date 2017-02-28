angular.module('ToDoList')

.controller('EntryCtrl', function(DBservice, $scope, $state, $stateParams){

  // ========== GET DATA FROM DATABASE =========================================
  $scope.dataEntry = [];
  function GetOneData(){
    DBservice.GetOneData($stateParams.id)
      .then(function(respons){
          $scope.dataEntry = respons.val();
          $scope.$apply();
      }, function(error){
          // console.log(error);
      });
  };
  GetOneData();


  // ========== UPDATE DATA TO DATABASE ========================================
  $scope.updateEntry = function(){

    if($scope.dataEntry.title == null || $scope.dataEntry.title == ''){
      $scope.dataEntry.title = '-';
    }
    else if($scope.dataEntry.description == null || $scope.dataEntry.description == ''){
      $scope.dataEntry.description = '-';
    }
    else if($scope.dataEntry.check == null || $scope.dataEntry.check == ''){
      $scope.dataEntry.check = false ;
    }
    else{}

    var dateTime = $scope.dataEntry.dateTime;
    if(dateTime == null){
      dateTime = '-';
    }else{
      dateTime = dateTime.toLocaleString();
    };

    DBservice.UpdateData($scope.dataEntry.taskID,
                         $scope.dataEntry.title,
                         $scope.dataEntry.description,
                         dateTime,
                         $scope.dataEntry.timestamp,
                         $scope.dataEntry.check)
      .then(function(respons){
          $scope.dataEntry = [];
          GetOneData();
          $state.go('entry', {id: $stateParams.id});
      }, function(error){
          // console.log(error);
      });
  };

});
