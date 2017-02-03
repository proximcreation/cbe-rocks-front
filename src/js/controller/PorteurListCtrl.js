var app = require('../app.js');
app
.controller('PorteurListCtrl', ['$scope', 'httpService', function ($scope, httpService) {
  console.log("PorteurListCtrl loaded");
  httpService.get('porteurs').then(function(resultat){
    $scope.porteurs = resultat.data;

  });




}]);
