var app = require('../app.js');
app
.controller('PorteurPatchCtrl', ['$scope', 'httpService','$routeParams','$location', function ($scope, httpService,$routeParams,$location) {
  console.log("PorteurPatchCtrl loaded");
  $scope._id = $routeParams._id;

  httpService.patch('porteurs/'+$scope._id,).then(function(resultat){
    $scope.porteur = resultat.data;
    var tmpDate = $scope.porteur.birthDate.split('T')[0];
    var tmpDate2 =
    {
      y:tmpDate.split('-')[0],
      m:tmpDate.split('-')[1] -1,
      d:tmpDate.split('-')[2],
    };
    $scope.porteur.birthDate = new Date(tmpDate2.y, tmpDate2.m,tmpDate2.d,12);
  });
  //patch un objet d'ID _id
  $scope.patchObject =function(_o,_data,){
    console.log("patching ...");
    httpService.patch(_o+'/'+$scope._id,$scope.porteur);
    $location.path("/porteur/"+$scope._id);
  }




}]);
