(function(){
/**
  ui-router state definition boilerplate
*/
angular.module('sprinkle').controller('MainCtrl',['Api', function function_name(Api) {

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
            .catch(_err)
            .then(function (resp) {
              return vm.user = resp;
            })
          }
        }])

})();

function _err(err, resp) {
  // todo: catch errors
}

