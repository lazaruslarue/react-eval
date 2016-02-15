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
      "User@main" :{
        // todo: introduce ourselves, nicely
        template: '<h1>Welcome, {{Main.user.fullName}}</h1>',
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
