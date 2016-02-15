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
          // todo: verify reasonable duration
          var allZoneData = vm.device.zones.map(function(z, key){return {
            id: z.id,
            duration: parseInt(duration), // strictly typed backend... noted.
            sortOrder: key, // todo: how does this work?
          }})

          Api.proxyPUT('public/zone/start_multiple', {
            zones: allZoneData,
          })
          .then(function(){
            return console.log("successful start", allZoneData)
          })
        }
        vm.runMulti = function(collection, duration) {
          // todo: verify reasonable duration
          var allZoneData = collections.map(function(z, key){return {
            id: z.id,
            duration: parseInt(duration), // strictly typed backend... noted.
            sortOrder: key, // todo: how does this work?
          }})

          Api.proxyPUT('public/zone/start_multiple', {
            zones: allZoneData,
          })
          .then(function(){
            return console.log("successful start", allZoneData)
          })
        }
        vm.stopWater = function() {
          Api.proxyPUT('public/device/stop_water', {
            id: vm.device.id
          })
          .then(function(resp){
            return console.log('successful stop water for device: ', vm.device.id);
          })

        }
        vm.startZone = function(zoneId, duration) {
          Api.proxyPUT('public/zone/start', {
            id: zoneId,
            duration: parseInt(duration),
          })
          .then(function(resp){
            return console.log('successful water for zone: ', vm.device.id);
          })
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
      }],
      link: function (scope, ele, attr, ctrl) {

      }
    }
  })

})();
