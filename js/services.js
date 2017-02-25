var app = angular.module('ToDoList.Services',[]);

app.service('DBservice', function(){
  this.database = firebase.database();

  // ========== GET DATA FROM DATABASE =========================================
  this.GetData = function(){
    return firebase.database().ref('tasks/').once('value');
  };

  // ========== POST DATA TO DATABASE ==========================================
  this.PostData = function(taskID, title, description, dateTime, timestamp, check){

    if(timestamp == null || timestamp == ''){
      var timestamp = new Date();
      timestamp = timestamp.toLocaleString();
    }
    else if(dateTime == null || dateTime == ''){
      dateTime = '-';
    }
    else if(title == null || title == ''){
      title = '-';
    }
    else if(description == null || description == ''){
      description = '-';
    }
    else if(check == null || check == ''){
      check = false ;
    }
    else{}

    // console.log(dateTime);

    var data = {
      taskID: taskID,
      title: title,
      description: description,
      dateTime: dateTime,
      timestamp: timestamp,
      check: check
    };
    // console.log(JSON.stringify(data));
    return firebase.database().ref('tasks/' + taskID).set(data);
  };

  // ========== UPDATE DATA TO DATABASE ========================================
  this.UpdateData = function(taskID, title, description, dateTime, timestamp, check) {

    // if(titleUpdate == null || titleUpdate == ''){
    //   titleUpdate = '';
    // }else if(descriptionUpdate == null || descriptionUpdate == ''){
    //   descriptionUpdate = '-';
    // }else if(checkUpdate == null || checkUpdate == ''){
    //   checkUpdate = false;
    // }else{}

    var data = {
      taskID: taskID,
      title: title,
      description: description,
      dateTime: dateTime,
      timestamp: timestamp,
      check: check
    };

    console.log(JSON.stringify(data));
    var updates = {};
    updates['/tasks/' + data.taskID] = data;

    return firebase.database().ref().update(updates);
  };

  // ========== POST DATA TO DATABASE ==========================================
  this.DeleteData = function(taskID){
      console.log("in service : " + taskID);
      return firebase.database().ref('/tasks/' + taskID).remove();
  };



});
