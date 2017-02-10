var app = require('../app.js');
app
.controller('ActionListCtrl', ['$scope', 'httpService','$routeParams', function ($scope, httpService,$routeParams) {
    console.log("ActionListCtrl loaded");

    $scope._id = $routeParams._id;

    httpService.get('Dossiers/'+$scope._id).then(function(resultat){
      $scope.dossier = resultat.data;

    });

    httpService.get('actions?dossier='+$scope._id+"&$limit=255").then(function(resultat){
      $scope.actions = resultat.data;
      _.forEach($scope.actions.data,function(_a){
        console.log(_a);
        var tmpDate = _a.dateAction.split('T')[0];
        var tmpDate2 = {
          y:tmpDate.split('-')[0],
          m:tmpDate.split('-')[1],
          d:tmpDate.split('-')[2]
        };
        _a.dateAction = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
      });
      console.log($scope.actions);
    });



}]);
