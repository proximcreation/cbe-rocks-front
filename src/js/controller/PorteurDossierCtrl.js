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
    console.log($scope.dossiers);
  });




}]);
