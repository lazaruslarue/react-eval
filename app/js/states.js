(function(){
/**
  ui-router state definition boilerplate
*/
angular.module('sprinkle.states').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('main', {
    url: '/',
    views: {
      "main@": {
        templateUrl: 'templates/main.html',
        controllerAs: 'Main',
        controller: 'MainCtrl',
      },

      "Header@main" :{
        // todo: introduce ourselves, nicely
        templateUrl: 'templates/header.html'
      },
      "Devices@main" : {
        templateUrl: 'templates/devices.html',
      },
    },
  })

}])

})();

function _err(err, resp) {
  // todo: catch errors
}
