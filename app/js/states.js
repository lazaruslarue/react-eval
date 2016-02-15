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
        template: '<h1>hello: {{ctrl.user.username}}</h1><pre>{{ctrl.user}}</pre>',
        controllerAs: 'ctrl',
        controller: ['Api', function function_name(Api) {

          var vm = this;

          Api.proxyGET('public/person/info')
            .catch(_err)
            .then(function (resp){
              // save your data visibly
              return vm.id = resp.id
            })
            .finally(getPersonInfo);

          function getPersonInfo() {
            // get public information
            Api.proxyGET('public/person/'+vm.id)
            .then(function (resp) {
              return vm.user = resp;
            })
          }
        }]
      }
    },
  })

}])

})();

function _err(err, resp) {
  // todo: catch errors
}
