var app = require('../app.js');
app
.controller('ActionCreateCtrl', ['$scope', 'httpService','$routeParams','$location', function ($scope, httpService,$routeParams,$location) {
  console.log("ActionCreateCtrl loaded");

  //Recupère l'ID en paramètre de l'url
  $scope._id = $routeParams._id;
  $scope.listeAction = [];

  //fais un get sur le dossier d'id $scope._id et met le resultat dans $scope.dossier
  httpService.get('Dossiers/'+$scope._id+"?$populate=listePorteur").then(function(resultat){
    $scope.dossier = resultat.data;
    $scope.porteurs = [];
    // mettre les porteurs du dossier dans un tableau
    _.forEach($scope.dossier.listePorteur,function(_p){
      $scope.porteurs.push(_p);
      console.log($scope.porteurs);
    })
  });



//fonction appelée lors de l'envois du formulaire
  $scope.create = function(_data,_url){
    _data.dossier = $scope._id;
    _data.listePorteur = $scope.array_id;
    httpService.post(_url,_data);
    console.log('create');
    $location.path("/dossier"); //redirection
  }

// Tableau de gestion des porteurs
  $scope.array_porteur = [];
  $scope.array_id = [];
//Fonction de push
  $scope.push = function(_data){
    $scope.array_porteur.push(_data);
    $scope.array_id.push(_data._id);
    console.log($scope.array_id);
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
    var _d = _data.toString();
    var _r = $scope.array_porteur.includes(_data);
    return _r;
  };






}]);
