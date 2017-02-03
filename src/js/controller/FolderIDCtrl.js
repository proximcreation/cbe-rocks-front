var app = require('../app.js');
app
.controller('FolderIDCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("FolderIDCtrl loaded");
  $scope._id = $routeParams._id;
  httpService.get('dossiers/'+$scope._id+'?$populate=listePorteur').then(function(resultat){
    $scope.dossier = resultat.data;
    console.log($scope.dossier);
  });




}]);
