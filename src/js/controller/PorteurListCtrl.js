var app = require('../app.js');
app
.controller('PorteurListCtrl', ['$scope', 'httpService', function ($scope, httpService) {
  console.log("PorteurListCtrl loaded");

  httpService.get('porteurs').then(function(resultat)
  {
      $scope.porteurs = resultat.data;
      _.forEach($scope.porteurs.data,function(_p){
          var tmpDate = _p.birthDate.split('T')[0];
          var tmpDate2 =
          {
            y:tmpDate.split('-')[0],
            m:tmpDate.split('-')[1],
            d:tmpDate.split('-')[2],
          };
          _p.birthDate = tmpDate2.d+"-"+tmpDate2.m+"-"+tmpDate2.y;
    });
  });
}]);
