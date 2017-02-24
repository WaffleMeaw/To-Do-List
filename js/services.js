var app = angular.module('ToDoList.Services',[]);

app.service('DBservice', function(){
  this.database = firebase.database();

  this.GetData = function() {
    return firebase.database().ref('tasks/').once('value');
  };

  this.PostData = function(taskID, titleNew, descriptionNew, checkNew) {
    var currentDate = new Date();
    console.log(currentDate);
    currentDate = currentDate.toLocaleString();

    if(titleNew == null || titleNew == ''){
      titleNew = '-';
    }else if(descriptionNew == null || descriptionNew == ''){
      descriptionNew = '-';
    }else if(checkNew == null || checkNew == ''){
      checkNew = false ;
    }else{}

    return firebase.database().ref('tasks/' + taskID).set({
      title: titleNew,
      description: descriptionNew,
      timestamp: currentDate,
      check: checkNew
    });
  };

  this.UpdateData = function(taskID, titleUpdate, descriptionUpdate, checkUpdate) {

    if(titleUpdate == null || titleUpdate == ''){
      titleUpdate = '';
    }else if(descriptionUpdate == null || descriptionUpdate == ''){
      descriptionUpdate = '-';
    }else if(checkUpdate == null || checkUpdate == ''){
      checkUpdate = false;
    }else{}

    var data = {
      title: titleUpdate,
      description: descriptionUpdate,
      check: checkUpdate
    };
    var updates = {};
    updates['/tasks/' + taskID] = data;

    return firebase.database().ref().update(updates);
  };

  this.DeleteData = function(taskID) {
      console.log("in service : " + taskID);
      return firebase.database().ref('/tasks/' + taskID).remove();
  };



});
