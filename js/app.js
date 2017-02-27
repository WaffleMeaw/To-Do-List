angular.module('ToDoList', ['ToDoList.Services',
                            'ToDoList.Controllers',
                            'ui.router',
                            'ui.bootstrap.datetimepicker'])

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
        templateUrl: 'template/todo.html',
        controller: 'TodoCtrl'
    })
    .state('completed', {
        url: '/completed',
        templateUrl: 'template/completed.html',
        controller: 'TodoCtrl'
    })
    .state('create', {
        url: '/create',
        templateUrl: 'template/create.html',
        controller: 'CreateCtrl'
    })
    .state('entry', {
        url: '/:id',
        templateUrl: 'template/entry.html',
        controller: 'EntryCtrl'
    })
    .state('edit', {
        url: '/edit/:id',
        templateUrl: 'template/edit.html',
        controller: 'EntryCtrl'
    });
  $urlRouterProvider.otherwise('/all');

})

// ========== External controllers ==========
angular.module('ToDoList.Controllers',[])

// ========== External services ==========
angular.module('ToDoList.Services',[])
