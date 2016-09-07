'use strict';

var myFirstAppInAng = angular.module('app', ['ui.router']);

myFirstAppInAng.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: '../static/views/home.html',
      // controller: 'MainCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '../static/views/login.html',
    })
    .state('signin', {
      url: '/register',
      templateUrl: '../static/views/signin.html',
      controller: 'FormController'
    })
}]);

myFirstAppInAng.controller('xhrController', ['$scope', '$http', function($scope, $http){

  $http.get('/api/users').success(function(data) {
    $scope.users = data;
  })

}]);

myFirstAppInAng.controller('FormController', ['$scope', '$http', function($scope, $http){

  $scope.submit = function () {
    var data = {'username':$scope.username, 'email':$scope.email.txt, 'password':$scope.pw}
    $http.post('/api/users', data).success(function(data) {
      console.log('Alabama');
    })
  }

}]);
