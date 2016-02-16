(function () {
  /*
    Provide interactions for a device.
    todo: break this file apart.
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
      controller: ['$scope', '$element', 'Api', function ($scope, $element, Api){
        var vm = this;
        // get device detail
        vm.Api = Api;
        // vm.runAll = function(duration) {
        //   // todo: verify reasonable duration
        //   var allZoneData = vm.device.zones.map(function(z, key){return {
        //     id: z.id,
        //     duration: parseInt(duration), // strictly typed backend... noted.
        //     sortOrder: key, // todo: how does this work?
        //   }})

        //   Api.proxyPUT('public/zone/start_multiple', {
        //     zones: allZoneData,
        //   })
        //   .then(function(){
        //     return console.log("successful start", allZoneData)
        //   })
        // }
        vm.runMulti = function() {
          var collection, duration, allZoneData;
          // todo: verify reasonable duration
          collection = $($element).find('select').val();

          // don't let users start NO zones
          if (collection.length === 0) {
            return Materialize.toast('You need to select some zones', 4000);
          }

          duration = $($element).find('#duration').val();
          duration = duration*60; // seconds
          // don't send 0 duration watering requests
          if (duration === 0) {
            return Materialize.toast('You need to decide how long to water', 4000);
          }

          allZoneData = collection.map(function(z, key){return {
            id: z,
            duration: parseInt(duration), // typed backend... noted.
            sortOrder: key, // todo: learn how does this work?
          }})

          Api.proxyPUT('public/zone/start_multiple', {
            zones: allZoneData,
          })
          .catch(_err) // <--todo
          .then(function(){
            angular.forEach(allZoneData, function(z){
              var message = ['Zone', z.id, 'will rain for', z.duration/60, 'minutes' ].join(' ');
              Materialize.toast(message, 4000);
            })
            return console.log("successful start", allZoneData)
          })
        }
      }],
      link: function (scope, ele, attr, ctrl) {

        // hack: angular gods aren't happy about this and neither am i
        ctrl.Api.proxyGET('public/device/'+scope.device.id)
        .then(function (resp) {
          ctrl.device = resp
          ctrl.zones = resp.zones;
        }).finally(selectInit);
        // todo: make less stupider
        function selectInit(){
          setTimeout(function function_name(argument) {
            $('select').material_select();
          }, 1)
        }
      }
    }
  })
  .directive('racDeviceZone', function () {
  // todo: unused
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
