(function(){
/**
  ui-router state definition boilerplate
*/
angular.module('sprinkle.states').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('a', {
    url: '/',
    views: {
      "main@": {
        template:"<h1>hi: {{ctrl.id}}</h1>",
        controllerAs: 'ctrl',
        controller: ['Api', function function_name(Api) {

          var vm = this;

          Api.proxyGET('public/person/info')
            .then(function (resp){
              return vm.id = resp.id
            });
        }]
      }
    },
  })

}])

})();
