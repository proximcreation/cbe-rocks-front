var app = require('../app.js');
app
.controller('FolderPatchCtrl', ['$scope', 'httpService','$routeParams','$location', function ($scope, httpService,$routeParams,$location) {
  console.log("FolderPatchCtrl loaded");
  $scope._id = $routeParams._id;

  //Tableau pour la gestion de listPorteur
  $scope.array_porteur = [];
  $scope.array_id = [];

  //get du dossier
  httpService.get('dossiers/'+$scope._id+'?$populate=listePorteur').then(function(resultat){
    $scope.dossier = resultat.data;
    _.forEach($scope.dossier.listePorteur, function(_p){
        $scope.array_id.push(_p._id);
        $scope.array_porteur.push(_p);
    })
  });
  //patch un objet d'ID _id
  $scope.patchObject =function(_o,_data,){
    console.log("$scope.patchObject");
    _data.listePorteur = $scope.array_id;
    httpService.patch(_o+'/'+$scope._id,_data);
    $location.path("/dossier/"+$scope._id);
  }

  //Recuperation de tous les porteurs
  httpService.get('porteurs').then(function(resultat){
    $scope.porteurs = resultat.data;
  });

  //fonction appelée dans le ng-click de la liste des porteur disponible pour l'ajouter a la liste des porteurs lors du patch
  $scope.push = function(_data){
    $scope.array_porteur.push(_data);
    $scope.array_id.push(_data._id);
  }

  //  //fonction appelée dans le ng-click de la liste des porteur du dossier pour le supprimer de la liste  lors du patch
  $scope.pull = function(_data){
    var dataString = _data._id.toString();
    var index = _.indexOf($scope.array_porteur,dataString,0);
    var index_id = _.indexOf($scope.array_id,dataString,0);
    $scope.array_id.splice(index,1);
    $scope.array_porteur.splice(index,1);
  }
  //fonction qui verifie quels porteurs sont deja dans listPorteur pour les masquer de la selection d'ajout.
  $scope.exist = function(_data){
    var _d = _data._id;
    var _r = $scope.array_id.includes(_d);
    return _r;
  }



}]);
