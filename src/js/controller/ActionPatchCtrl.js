var app = require('../app.js');
app
.controller('ActionPatchCtrl', ['$scope', 'httpService','$routeParams','$location', function ($scope, httpService,$routeParams,$location) {
  console.log("ActionPatchCtrl loaded");
  //Recupère l'ID en paramètre de l'url
  $scope._id = $routeParams._id;


  //Tableau pour la gestion de listPorteur
  $scope.array_porteur = [];
  $scope.array_id = [];
  //fais un get sur l'action en cours et la stock dans $scope.action
  httpService.get('Actions/'+$scope._id+'?$populate=listePorteur').then(function(resultat){
    $scope.action = resultat.data;
    httpService.get('Dossiers/'+$scope.action.dossier+'?$populate=listePorteur').then(function(resultat){
      $scope.dossier_porteur = resultat.data.listePorteur;
      _.forEach($scope.action.listePorteur, function(_p){
        $scope.array_porteur.push(_p);
        $scope.array_id.push(_p._id);
      });

    })
  });
  //fonction appelée lors de l'envois du formulaire
  $scope.create = function(_data){
    console.log('Patching .... ');
    _data.listePorteur = $scope.array_id;
    httpService.patch('actions/'+$scope.action._id,_data);
    console.log('Patch succes .... Redirection');
    $location.path("/dossier/action/"+$scope._id); //redirection
  };




  //fonction appelée dans le ng-click de la liste des porteur disponible pour l'ajouter a la liste des porteurs lors du patch
  $scope.push = function(_data){
    $scope.array_porteur.push(_data);
    $scope.array_id.push(_data._id);
  };

  //  //fonction appelée dans le ng-click de la liste des porteur du dossier pour le supprimer de la liste  lors du patch
  $scope.pull = function(_data){
    var dataString = _data._id;
    var index = _.indexOf($scope.array_porteur,dataString,0);
    var index_id = _.indexOf($scope.array_id,dataString,0);
    $scope.array_id.splice(index,1);
    $scope.array_porteur.splice(index,1);
  };

  //fonction qui verifie quels porteurs sont deja dans listPorteur pour les masquer de la selection d'ajout.
  $scope.exist = function(_data){
    var _d = _data._id;

    var _r = $scope.array_id.includes(_d);
    return _r;
  };


}]);
