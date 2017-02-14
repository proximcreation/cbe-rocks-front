var app = require('../app.js');
app
.controller('FolderIDCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
  console.log("FolderIDCtrl loaded");
  $scope._id = $routeParams._id;
  httpService.get('dossiers/'+$scope._id+'?$populate=listePorteur').then(function(resultat){
    $scope.dossier = resultat.data;
    var tmpDate = $scope.dossier.dateCreationPrevu.split('T')[0];
    var tmpDate2 = {
      y:tmpDate.split('-')[0],
      m:tmpDate.split('-')[1],
      d:tmpDate.split('-')[2]
    };
    $scope.dossier.dateCreationPrevu = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
    tmpDate = $scope.dossier.dateCreationDossier.split('T')[0];
    tmpDate2 = {
      y:tmpDate.split('-')[0],
      m:tmpDate.split('-')[1],
      d:tmpDate.split('-')[2]
    };
    $scope.dossier.dateCreationDossier = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
    //console.log(dossier);
    console.log($scope.dossier);
  });




}]);
