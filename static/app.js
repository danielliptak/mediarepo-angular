var myFirstAppInAng = angular.module('app', ['ngRoute']);

myFirstAppInAng.config(['$routeProvider', function ($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: './static/views/home.html'
  })
  .when('/login', {
    templateUrl: './static/views/login.html'
  })
  .when('/signin', {
    templateUrl: './static/views/signin.html',
    controller: 'FormController'
  }).otherwise({
    redirectTo: '/'
  });

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
