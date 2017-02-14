var app = require('../app.js');
console.log("kgr");
app
.controller('FolderListCtrl', ['$scope', 'httpService', function ($scope, httpService) {
  console.log("FolderListCtrl loaded");
  $scope.allPorteur = [];
  httpService.get('dossiers').then(function(resultat){
    $scope.dossiers = resultat.data;
    _.forEach($scope.dossiers.data,function(dossier){
      //console.log(dossier);
      var tmpDate = dossier.dateCreationPrevu.split('T')[0];
      var tmpDate2 = {
        y:tmpDate.split('-')[0],
        m:tmpDate.split('-')[1],
        d:tmpDate.split('-')[2]
      };
      dossier.dateCreationPrevu = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
      var tmpDate = dossier.dateCreationDossier.split('T')[0];
      var tmpDate2 = {
        y:tmpDate.split('-')[0],
        m:tmpDate.split('-')[1],
        d:tmpDate.split('-')[2]
      };
      dossier.dateCreationDossier = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
      _.forEach(dossier.listePorteur,function(_idPorteur){


      })
    });
  });




}]);
