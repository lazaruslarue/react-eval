(function IIFEyouWannaYouCanHavva() {

  angular.module('sprinkle',[
    'ui.router',
    'sprinkle.states',
    'sprinkle.client', // todo: lose this
    'sprinkle.device', // todo: lose this
  ])
  .config(function(){})
  .run(function () {})

  angular.module('sprinkle.states',[]); // state your purpose
  angular.module('sprinkle.client',[]); // client app
  angular.module('sprinkle.device',[]); // device simulator

})();
