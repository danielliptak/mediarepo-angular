var myFirstAppInAng = angular.module('app', ['ngRoute']);

myFirstAppInAng.config(['$routeProvider', function ($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: './static/views/home.html'
  })
  .when('/login', {
    templateUrl: './static/views/login.html',
    controller: 'loginController'
  })
  .when('/users', {
    templateUrl: './static/views/users.html'
  })
  .when('/signin', {
    templateUrl: './static/views/signin.html',
    controller: 'signinController'
  }).otherwise({
    redirectTo: '/'
  });

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

myFirstAppInAng.controller('signinController', ['$scope', '$http', function($scope, $http){

  $scope.signin = function () {
    var data = {'username':$scope.username, 'email':$scope.email.txt, 'password':$scope.pw}
    $http.post('/api/users', data).success(function(data) {
      console.log('Alabama');
    })
  }

}]);

myFirstAppInAng.controller('loginController', ['$scope', '$http', function($scope, $http){

  $scope.login = function () {
    var data = {'email':$scope.email.txt, 'password':$scope.pw}
    $http.post('/api/users/login', data).success(function(data) {
      console.log('Alabama');
    })
  }

}]);
