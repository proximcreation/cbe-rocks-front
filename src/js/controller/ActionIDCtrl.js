var app = require('../app.js');
app
.controller('ActionIDCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("ActionIDCtrl loaded");
  $scope._id = $routeParams._id;

  httpService.get('actions/'+$scope._id+'?$populate=listePorteur').then(function(resultat){
    $scope.action = resultat.data;
    var tmpDate = $scope.action.dateAction.split('T')[0];
    var tmpDate2 = {
      y:tmpDate.split('-')[0],
      m:tmpDate.split('-')[1],
      d:tmpDate.split('-')[2]
    };
    $scope.action.dateAction = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;

    $scope.porteurs = $scope.action.listePorteur;
    $scope._idDossier = $scope.action.dossier;
  });








}]);
