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

          var collection = $($element).find('select').val();
          var duration = $($element).find('#duration').val();
          var allZoneData = collection.map(function(z, key){return {
            id: z,
            duration: parseInt(duration), // strictly typed backend... noted.
            sortOrder: key, // todo: how does this work?
          }})
          console.log(allZoneData); // dev
          Api.proxyPUT('public/zone/start_multiple', {
            zones: allZoneData,
          })
          .catch(_err) // <--todo
          .then(function(){
            angular.forEach(allZoneData, function(z){
              var message = ['Zone', z.id, 'will rain for', z.duration, 'minutes' ].join(' ');
              Materialize.toast(message, 4000);
            })
            return console.log("successful start", allZoneData)
          })
        }
      }],
      link: function (scope, ele, attr, ctrl) {

        ctrl.Api.proxyGET('public/device/'+scope.device.id)
        .then(function (resp) {
          ctrl.device = resp
          ctrl.zones = resp.zones;
        }).finally(selectInit);
        // hack: angular gods aren't happy about this and neither am i
        // todo: make less stupid
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
