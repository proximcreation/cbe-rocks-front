var app = require('../app.js');
app
.controller('PorteurDossierCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("PorteurDossierCtrl loaded");
  $scope._id = $routeParams._id;
  console.log($scope._id);
  httpService.get('porteurs/'+$scope._id).then(function(resultat){
    $scope.porteur = resultat.data;
    console.log($scope.porteur);
  });
  httpService.get('dossiers?listePorteur='+$scope._id+'&$populate=dossier').then(function(resultat){
    $scope.dossiers = resultat.data;
    console.log($scope.dossiers);
  });




}]);
