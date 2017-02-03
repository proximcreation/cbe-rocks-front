var app = require('../app.js');
console.log("kgr");
app
.controller('FolderListCtrl', ['$scope', 'httpService', function ($scope, httpService) {
  console.log("FolderListCtrl loaded");
  $scope.allPorteur = [];
  httpService.get('dossiers').then(function(resultat){
    $scope.dossiers = resultat.data;
    _.forEach($scope.dossiers.data,function(dossier){
      console.log(dossier.listePorteur);
      _.forEach(dossier.listePorteur,function(_idPorteur){
        

      })
    });
  });




}]);
