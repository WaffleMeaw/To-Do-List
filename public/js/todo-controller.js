angular.module('ToDoList')

.controller('TodoCtrl', function(DBservice, $scope, $state, $stateParams){

  // ========== GET DATA FROM DATABASE =========================================
  $scope.datasets = [];
  function GetAllData(){
    DBservice.GetAllData()
      .then(function(respons){
          angular.forEach(respons.val(), function(value, key){
            $scope.datasets.push(value);
          });
          $scope.$apply();
      }, function(error){
          // console.log(error);
      });
  };
  GetAllData();

  // ========== UPDATE CHECK, UNCHECK TO DATABASE ==============================
  $scope.Checked = function(data){

    DBservice.UpdateData(data.taskID,
                         data.title,
                         data.description,
                         data.dateTime,
                         data.timestamp,
                         data.check)
      .then(function(respons){
          // console.log(respons);
          $scope.datasets = [];
          GetAllData();
      }, function(error){
          // console.log(error);
      });
  };

  // ========== DELETE DATA IN DATABASE ========================================
  $scope.dataDel = null
  $scope.preDeleteData = function(data){
    $scope.dataDel = data;
  };
  $scope.confirmDel = function(){

    if($scope.dataDel != null){
      DBservice.DeleteData($scope.dataDel.taskID)
        .then(function(respons){
            // console.log(respons);
            $scope.datasets = [];
            GetAllData();
        }, function(error){
            // console.log(error);
        });
    }
  };
  $scope.cancelDel = function(){
    $scope.dataDel = null
  };

});
