module.exports = (function(){
	var app = angular.module(
		'app',
		['ngRoute', 'LocalStorageModule']
	);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		$routeProvider
		.when('/', {                  //HOME
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/dossier',{           //LISTE DOSSIER
			templateUrl: 'views/includes/folderList.html',
			controller: 'FolderListCtrl'
		})
		.when('/dossier/create',{         //CREER DOSSIER
			templateUrl: 'views/includes/folderCreate.html',
			controller: 'FolderCreateCtrl'
		})
		.when('/dossier/:_id',{           //DOSSIER d'id :_id
			templateUrl: 'views/includes/folderID.html',
			controller: 'FolderIDCtrl'
		})
		.when('/dossier/action/liste/:_id',{    //liste Action du dossier d'id :_id
			templateUrl: 'views/includes/actionList.html',
			controller: 'ActionListCtrl'
		})
		.when('/dossier/action/:_id',{    //liste Action du dossier d'id :_id
			templateUrl: 'views/includes/actionID.html',
			controller: 'ActionIDCtrl'
		})
		.when('/dossier/action/create/:_id',{     //Creer une action sur le dossier en cours
			templateUrl: 'views/includes/actionCreate.html',
			controller: 'ActionCreateCtrl'
		})
		.when('/dossier/action/patch/:_id',{    //modifier l'action d'id :_id
			templateUrl: 'views/includes/actionPatch.html',
			controller: 'ActionPatchCtrl'
		})
		.when('/dossier/patch/:_id',{          //modifier le dossier en cours (d'id :_id)
			templateUrl: 'views/includes/folderPatch.html',
			controller: 'FolderPatchCtrl'
		})
		.when('/porteur',{                  //Liste porteur
			templateUrl: 'views/includes/porteurList.html',
			controller: 'PorteurListCtrl'
		})
		.when('/porteur/create',{					//creer un porteur
			templateUrl: 'views/includes/createPorteur.html',
			controller: 'HomeCtrl'
		})
		.when('/porteur/:_id',{             ///voir le porteur d'id :_id
			templateUrl: 'views/includes/porteurID.html',
			controller: 'PorteurIDCtrl'
		})
		.when('/porteur/patch/:_id',{          //modifier le porteur d'id :_id
			templateUrl: 'views/includes/porteurPatch.html',
			controller: 'PorteurPatchCtrl'
		})
		.when('/porteur/actions/:_id',{          //Voir les actions du porteur d'id _id
			templateUrl: 'views/includes/porteurAction.html',
			controller: 'PorteurActionCtrl'
		})
		.when('/porteur/dossiers/:_id',{          //Voir les dossiers du porteur d'id _id
			templateUrl: 'views/includes/folderList.html',
			controller: 'PorteurDossierCtrl'
		})
		.otherwise({ redirectTo: '/' });        //redirection si url erroné

		$locationProvider.hashPrefix('');
	}]);

	app.config(function(localStorageServiceProvider){
		// === TODO : define a prefix for your localstorage data
		localStorageServiceProvider.setPrefix('feather-front');
	});

	return app;
})();
