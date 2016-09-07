'use strict';

var myFirstAppInAng = angular.module('app', ['ui.router']);

myFirstAppInAng.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: '../static/views/home.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: '../static/views/login.html',
      controller: 'loginController'
    })
    .state('signin', {
      url: '/register',
      templateUrl: '../static/views/signin.html',
      controller: 'signinController'
    })
    .state('users', {
      url: '/users',
      templateUrl: '../static/views/users.html',
      controller: 'xhrController'
    })
}]);

myFirstAppInAng.directive('wjValidationError', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctl) {
      scope.$watch(attrs['wjValidationError'], function (errorMsg) {
        elm[0].setCustomValidity(errorMsg);
        ctl.$setValidity('wjValidationError', errorMsg ? false : true);
      });
    }
  };
});

myFirstAppInAng.controller('xhrController', ['$scope', '$http', function($scope, $http){

  $http.get('/api/users').success(function(data) {
    $scope.users = data;
  })

}]);

myFirstAppInAng.controller('signinController', ['$scope', '$http', '$state', function($scope, $http, $state){

  $scope.signin = function () {
    var data = {'username':$scope.username, 'email':$scope.email.txt, 'password':$scope.pw}
    $http.post('/api/users', data).success(function(data) {
      $state.go('users')
    })
  }

}]);

myFirstAppInAng.controller('loginController', ['$scope', '$http', '$state', function($scope, $http, $state){

  $scope.login = function () {
    var data = {'email':$scope.email.txt, 'password':$scope.pw}
    $http.post('/api/users/login', data).success(function(data) {
      $state.go('users');
    })
  }

}]);
