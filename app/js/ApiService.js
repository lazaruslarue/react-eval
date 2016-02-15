(function Services() {

  angular.module('sprinkle')
  .service('Api',['$http', function ($http) {

    // auth to our API
    var apiKey = 'c3667b81-92a6-4913-b83c-64cc713cbc1e'; // todo: don't store apikeys in public, brah
    var apiUrl = 'https://api.rach.io/1/';


    function proxyGET(url) {
      return $http({
        method: "GET",
        headers: {
          Authorization: 'Bearer '+ apiKey,
        },
        url: '' + apiUrl + url
      })
      .then(function (res) {
        return res.data
      });
    }

    function proxyPUT(url, data) {
      return $http({
        method: "PUT",
        headers: {
          Authorization: 'Bearer '+ apiKey,
        },
        url: '' + apiUrl + url,
        data: data,
      })
      .then(function (res) {
        return res.data
      });
    }

    return {
      proxyGET: proxyGET,
      proxyPUT: proxyPUT,
    }



  }])

})();
