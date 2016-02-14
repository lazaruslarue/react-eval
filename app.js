(function IIFEyouWannaYouCanHavva() {

  angular.module('sprinkle',[
    'ui-router',
    'sprinkle.client',
    'sprinkle.devide',
  ])
  .config(function(){})
  .run(function () {})

  angular.module('sprinkle.states',[]); // state your purpose
  angular.module('sprinkle.client',[]); // client app
  angular.module('sprinkle.device',[]); // device simulator

})()



(function Services() {

  angular.module('sprinkle')
  .service('Api',['$http', function ($http) {

    var accesstoken = 'c3667b81-92a6-4913-b83c-64cc713cbc1e';


    // curl -X GET -H "Authorization:Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e" https://api.rach.io/1/public/person/c3667b81-92a6-4913-b83c-64cc713cbc1e

    function getAuth() {
      $http({
        method: 'GET',
        url: 'https://api.rach.io/1/public/person/'+ accesstoken,
        headers:  {
            'Authorization': 'Bearer ' + accesstoken,
            'Accept': 'application/json;odata=verbose',
            "X-Testing" : "testing"
        }
      })
      .then(function(){
        debugger;
      })
    }

    getAuth();


  }])
})()



