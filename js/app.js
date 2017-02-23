angular.module('ToDoList', [
                              'ToDoList.Services',
                              'ToDoList.Controllers',
                              'ui.router'
                           ])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/all');

  $stateProvider
    .state('all', {
        url: '/all',
        templateUrl: 'template/all.html',
        controller: 'TodoCtrl'
    })
    .state('todo', {
        url: '/todo',
        templateUrl: 'template/todo.html'
    })
    .state('completed', {
        url: '/completed',
        templateUrl: 'template/completed.html'
    })
    .state('create', {
        url: '/create',
        templateUrl: 'template/create.html'
    });

});

angular.module('ToDoList.Controllers',[]);
angular.module('ToDoList.Services',[]);
