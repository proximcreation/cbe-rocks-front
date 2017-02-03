var app = require('../app.js');
app
.controller('ActionListCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
    console.log("ActionListCtrl loaded");

    $scope._id = $routeParams._id;

    httpService.get('Dossiers/'+$scope._id).then(function(resultat){
      $scope.dossier = resultat.data;
    });

    httpService.get('actions?dossier='+$scope._id).then(function(resultat){
      $scope.actions = resultat.data;
      console.log($scope.actions);
    });


}]);
