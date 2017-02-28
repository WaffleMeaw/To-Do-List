angular.module('ToDoList.Services')

.service('DBservice', function(){
  this.database = firebase.database();

  // ========== GET ALL DATA FROM DATABASE =====================================
  this.GetAllData = function(){
    return firebase.database().ref('tasks/').once('value');
  };


  // ========== GET DATA BY ID FROM DATABASE ===================================
  this.GetOneData = function(taskID){
    return firebase.database().ref('tasks/' + taskID).once('value');
  };


  // ========== POST DATA TO DATABASE ==========================================
  this.PostData = function(taskID, title, description, dateTime, timestamp, check){

    var data = {
      taskID: taskID,
      title: title,
      description: description,
      dateTime: dateTime,
      timestamp: timestamp,
      check: check
    };

    return firebase.database().ref('tasks/' + taskID).set(data);
  };


  // ========== UPDATE DATA TO DATABASE ========================================
  this.UpdateData = function(taskID, title, description, dateTime, timestamp, check) {

    var data = {
      taskID: taskID,
      title: title,
      description: description,
      dateTime: dateTime,
      timestamp: timestamp,
      check: check
    };

    var updates = {};
    updates['/tasks/' + taskID] = data;

    return firebase.database().ref().update(updates);
  };


  // ========== DELETE DATA IN DATABASE ==========================================
  this.DeleteData = function(taskID){

      return firebase.database().ref('/tasks/' + taskID).remove();
  };

});
