(function () {
  /*
    Provide interactions for a device
  */
  angular.module('sprinkle')
  .directive('racDevice', function () {
    return {
      restrict: 'A',
      scope: {
        device: '=',
      },
      controllerAs: 'ctrl',
      transclude: true,
      templateUrl: 'templates/racDevice.html',
      controller: ['$scope', 'Api', function ($scope, Api){
        var vm = this;
        // get device detail
        Api.proxyGET('public/device/'+$scope.device.id)
        .then(function (resp) {
          return vm.device = resp
        })

        vm.runAll = function(duration) {
          return console.log(duration); // dev
        }

        vm.startZone = function(duration, zoneId) {

        }
      }],
      link: function (scope, ele, attr, ctrl) {

      }
    }
  })
  .directive('racDeviceZone', function () {
    return {
      restrict: 'A',
      scope: {
        zone: '=',
      },
      controllerAs: 'zone',
      transclude: true,
      templateUrl: 'templates/racDeviceZone.html',
      controller: ['$scope', 'Api', function ($scope, Api){
        var vm = this;

        // get zone details // todo
        // Api.proxyGET('public/zone/'+$scope.zone.id)
        // .then(function(resp){
        //   return console.log(resp)
        // })
        // start zone

        // stop zone


      }],
      link: function (scope, ele, attr, ctrl) {

      }
    }
  })

})();
