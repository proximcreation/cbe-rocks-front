var app = require('../app.js');
app
.controller('PorteurPatchCtrl', ['$scope', 'httpService','$routeParams','$location', function ($scope, httpService,$routeParams,$location) {
  console.log("PorteurPatchCtrl loaded");
  $scope._id = $routeParams._id;
  console.log($scope._id);

  httpService.patch('porteurs/'+$scope._id,).then(function(resultat){
    $scope.porteur = resultat.data;
    console.log($scope.porteur);
  });
  //patch un objet d'ID _id
  $scope.patchObject =function(_o,_data,){
    console.log("$scope.patchObject");
    console.log(_o+'/'+$scope._id)
    httpService.patch(_o+'/'+$scope._id,_data);
    $location.path("/porteur/"+$scope._id);
  }
  



}]);
