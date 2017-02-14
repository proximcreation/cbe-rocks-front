var app = require('../app.js');
app
.controller('PorteurIDCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("PorteurIDCtrl loaded");
  $scope._id = $routeParams._id;
  console.log($scope._id);
  httpService.get('porteurs/'+$scope._id).then(function(resultat){
    $scope.porteur = resultat.data;
    var tmpDate = $scope.porteur.birthDate.split('T')[0];
    var tmpDate2 =
    {
      y:tmpDate.split('-')[0],
      m:tmpDate.split('-')[1],
      d:tmpDate.split('-')[2],
    };
    $scope.porteur.birthDate = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
  });



}]);
