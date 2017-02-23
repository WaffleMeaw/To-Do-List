var app = angular.module('ToDoList.Services',[]);

app.service('DBservice', function(){
  this.database = firebase.database();

  this.GetData = function() {
    return firebase.database().ref('tasks/').once('value');
  };

  this.PostData = function(taskID, titleNew, descriptionNew, checkNew) {
    return firebase.database().ref('tasks/' + taskID).set({
      title: titleNew,
      description: descriptionNew,
      check: checkNew
    });
  };

});
