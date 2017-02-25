var app = angular.module('ToDoList.Controllers',[]);

app.controller('TodoCtrl', function(DBservice, $scope, $state){

  // ========== GET DATA FROM DATABASE =========================================
  $scope.datasets = [];
  function GetData(){
    DBservice.GetData()
      .then(function(respons){
          angular.forEach(respons.val(), function(value, key){
            $scope.datasets.push(value);
          });
          $scope.$apply();
      }, function(error){
          console.log(error);
      });
  };
  GetData();

  // ========== UPDATE CHECK, UNCHECK TO DATABASE ==============================
  $scope.Checked = function(data){
    console.log(JSON.stringify(data));
    DBservice.UpdateData(data.taskID,
                         data.title,
                         data.description,
                         data.dateTime,
                         data.timestamp,
                         data.check)
      .then(function(respons){
          console.log(respons);
          $scope.datasets = [];
          GetData();
      }, function(error){
          console.log(error);
      });
  };

  // ========== DELETE DATA IN DATABASE ========================================
  $scope.dataDel = null
  $scope.preDeleteData = function(data){
    $scope.dataDel = data;
  };
  $scope.confirmDel = function(){
    console.log($scope.dataDel);
    if($scope.dataDel != null){
      DBservice.DeleteData($scope.dataDel.taskID)
        .then(function(respons){
            console.log(respons);
            $scope.datasets = [];
            GetData();
        }, function(error){
            console.log(error);
        });
    }
  };
  $scope.cancelDel = function(){
    console.log("Cancel");
    $scope.dataDel = null
    console.log($scope.dataDel);
  };

});


app.controller('CreateCtrl', function(DBservice, $scope, $state){
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
        dateTime = '';
      }else{
        ateTime = dateTime.toLocaleString();
      };

      DBservice.PostData($scope.taskID,
                         $scope.titleNew,
                         $scope.descriptionNew,
                         dateTime,
                         currentDate,
                         $scope.checkNew)
        .then(function(respons){
            // console.log(respons);
            $state.go('all');
        }, function(error){
            console.log(error);
        });
    };

  };

});
