var app = require('../app.js');
app
.controller('CoreCtrl', ['$scope', 'httpService', 'localStorageService', function ($scope, httpService, localStorageService) {

  var ls = localStorageService;
  $scope.me = ls.get('me');

  $scope.auth = {
    register : function(user){
      $scope.msg = "Please wait ...";
      httpService.register(
        {
          email: user.email,
          password: user.password
        }
      )
      .then(
        function(res){
          ls.set('me', res.data);
          $scope.me = ls.get('me');
          $scope.msg = undefined;
        },
        function(error){
          console.log(error);
        }
      );
    },

    login : function(user){
      $scope.msg = "Please wait ...";
      httpService.login(
        {
          email: user.email,
          password: user.password
      })
      .then(
        function(res){
          ls.set('me', res.data);
          $scope.me = ls.get('me');
          $scope.msg = undefined;
          console.log(res.data);

        },
        function(error){
          console.log(error);
        }
      );
    },

    destroy : function(){
      ls.remove('me');
      $scope.me = undefined;
    }
  };

}]);
