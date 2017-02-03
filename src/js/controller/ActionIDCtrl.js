var app = require('../app.js');
app
.controller('ActionIDCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("ActionIDCtrl loaded");
  $scope._id = $routeParams._id;

  httpService.get('actions/'+$scope._id+'?$populate=listePorteur').then(function(resultat){
    $scope.action = resultat.data;
    console.log($scope.action.listePorteur);
    $scope.porteurs = $scope.action.listePorteur;
    console.log($scope.porteurs);
    $scope._idDossier = $scope.action.dossier;
  });








}]);
