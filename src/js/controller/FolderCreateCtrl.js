var app = require('../app.js');
app
.controller('FolderCreateCtrl', ['$scope', 'httpService','$routeParams','$location', function ($scope, httpService,$routeParams,$location) {
  console.log("FolderCreateCtrl loaded");

//fonction appelée lors de l'envois du formulaire
  $scope.create = function(_data,_url){
    _data.listePorteur = $scope.array_id;
    httpService.post(_url,_data);
    console.log('create');

    $location.path("/dossier"); //redirection
  }
//GET des porteurs
  httpService.get('porteurs').then(function(resultat){
    $scope.porteurs = resultat.data;
  });

// Tableau de gestion des porteurs
  $scope.array_porteur = [];
  $scope.array_id = [];

//Fonction de push
  $scope.push = function(_data){
    $scope.array_porteur.push(_data);
    $scope.array_id.push(_data._id);
    console.log($scope.array_id);
  }

//Fonction de pull
  $scope.pull = function(_data){
    var dataString = _data._id.toString();
    var index = _.indexOf($scope.array_porteur,dataString,0);
    var index_id = _.indexOf($scope.array_id,dataString,0);
    $scope.array_id.splice(index,1);
    $scope.array_porteur.splice(index,1);
  }
//exist?
  $scope.exist = function(_data){
    var _d = _data.toString();
    var _r = $scope.array_porteur.includes(_data);
    return _r;
  };






}]);
