var app = require('../app.js');
app
.controller('PorteurIDCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("PorteurIDCtrl loaded");
  $scope._id = $routeParams._id;
  console.log($scope._id);
  httpService.get('porteurs/'+$scope._id).then(function(resultat){
    $scope.porteur = resultat.data;
  });



}]);
