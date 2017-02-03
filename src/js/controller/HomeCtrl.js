var app = require('../app.js');
app
.controller('HomeCtrl', ['$scope', 'httpService', function ($scope, httpService) {

  console.log("HomeCtrl loaded.");
  $scope.new = {};
  $scope.data= {};


  console.log('Ctrl loaded !!');
  $scope.formData = {};


  //Post un objet _o
  $scope.postObject = function(_o,_data){
    console.log("$scope.postObject");
    httpService.post(_o,_data);
  };

  //patch un objet d'ID _id
  $scope.patchObject =function(_o,_data,){
    console.log("$scope.patchObject");
    httpService.patch(_o,_data);
  }
//

  // Fonction de creation d'un objet via form.html .
  $scope.create = function(_data,_url){
    console.log("$Scope.create");
    _data.listePorteur = $scope.array_id;
    $scope.postObject(_url,_data);
    console.log(_data);
  }
  //
  httpService.get('porteurs').then(function(resultat){
    $scope.porteurs = resultat.data;
  });
  //
  $scope.array_porteur = [];
  $scope.array_id = [];

  $scope.push = function(_data){
    $scope.array_porteur.push(_data);
    $scope.array_id.push(_data._id);
  }
  //
  $scope.pull = function(_data){
    var dataString = _data._id.toString();
    var index = _.indexOf($scope.array_porteur,dataString,0);
    var index_id = _.indexOf($scope.array_id,dataString,0);
    $scope.array_id.splice(index,1);
    $scope.array_porteur.splice(index,1);
  }
  //exist?
  $scope.exist = function(_data){
    /*console.log("exist()");
    var _d = _data.toString();
    var _r = $scope.array_porteur.includes(_data);
    return _r; */
    var _d = _data._id;
    var _r = $scope.array_id.includes(_d);
    return _r;
  }
}]);
