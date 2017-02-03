require('!style!css!less!./styles/importer.less');

module.exports = (function(){
  var Angular = require('angular');
  var AngularRoute = require('angular-route');
  var AngularLocalStorage = require('angular-local-storage');
  var _ = require('lodash');

  require('./js/app.js');
  require('./js/services/http.service.js');
  require('./js/controller/CoreCtrl.js');
  require('./js/controller/HomeCtrl.js');
  require('./js/controller/FolderListCtrl.js');
  require('./js/controller/FolderIDCtrl.js');
  require('./js/controller/FolderPatchCtrl.js');
  require('./js/controller/PorteurIDCtrl.js');
  require('./js/controller/PorteurListCtrl.js');
  require('./js/controller/PorteurPatchCtrl.js');
  require('./js/controller/ActionListCtrl.js');
  require('./js/controller/ActionCreateCtrl.js');
  require('./js/controller/ActionIDCtrl.js');
  require('./js/controller/ActionPatchCtrl.js');
  require('./js/controller/FolderCreateCtrl.js');
  require('./js/controller/PorteurActionCtrl.js');
  require('./js/controller/PorteurDossierCtrl.js');










})();
