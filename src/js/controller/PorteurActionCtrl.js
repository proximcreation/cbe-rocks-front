var app = require('../app.js');
app
.controller('PorteurActionCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("PorteurActionCtrl loaded");
  $scope._id = $routeParams._id;
  console.log($scope._id);
  httpService.get('porteurs/'+$scope._id).then(function(resultat){
    $scope.porteur = resultat.data;
    console.log($scope.porteur);
  });
  httpService.get('actions?listePorteur='+$scope._id+'&$populate=dossier').then(function(resultat){
    $scope.actions = resultat.data;
    $scope.dossier_id = $scope.actions.data[0].dossier._id;
    console.log($scope.dossier_id);
  });




}]);
