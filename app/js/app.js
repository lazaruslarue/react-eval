(function IIFEyouWannaYouCanHavva() {

  angular.module('sprinkle',[
    'ui.router',
    'sprinkle.states',
    'sprinkle.client',
    'sprinkle.device',
  ])
  .config(function(){})
  .run(function () {})

  angular.module('sprinkle.states',[]); // state your purpose
  angular.module('sprinkle.client',[]); // client app
  angular.module('sprinkle.device',[]); // device simulator

})();
