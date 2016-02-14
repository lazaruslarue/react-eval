(function(){
/**
  ui-router state definition boilerplate
*/
angular.module('sprinkler.states').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('a', {
    url: '/',
    abstract: true,
    views: {}
  })

}])

})();
