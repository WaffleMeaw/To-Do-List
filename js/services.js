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

  this.UpdateData = function(taskID, titleUpdate, descriptionUpdate, checkUpdate) {
      var data = {
        title: titleUpdate,
        description: descriptionUpdate,
        check: checkUpdate
      };
      var updates = {};
      updates['/tasks/' + taskID] = data;

      return firebase.database().ref().update(updates);
  };

  this.DeleteData = function(taskID, titleDelete, descriptionDelete, checkDelete) {
      console.log("in service : " + taskID);
      var data = {
        title: titleDelete,
        description: descriptionDelete,
        check: checkDelete
      };
      var deletes = {};
      deletes['/tasks/' + taskID] = data;

      return firebase.database().ref('/tasks/' + taskID).remove();
  };



});
