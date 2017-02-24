angular.module('ToDoList', ['ToDoList.Services',
                            'ToDoList.Controllers',
                            'ui.router'])

.run(function ($state, $rootScope) {
  // ========== For switch button on navbar ==========
  $rootScope.$state = $state;
})

.config(function($stateProvider, $urlRouterProvider) {

  // ========== Routing Setup ==========
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
        templateUrl: 'template/create.html',
        controller: 'CreateCtrl'
    });
  $urlRouterProvider.otherwise('/all');

});

// ========== External controllers ==========
angular.module('ToDoList.Controllers',[]);

// ========== External services ==========
angular.module('ToDoList.Services',[]);
