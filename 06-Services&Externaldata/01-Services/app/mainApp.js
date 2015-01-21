/*Angular Modules take a name, best practice is lowerCamelCase, and a list of dependancies*/
/*added the second module as a dependancy */
angular.module('mainApp', ['eventModule','ngRoute','ui.router'])
.config(['$urlRouterProvider','$stateProvider',
  function($urlRouterProvider,$stateProvider) {

    $stateProvider
        .state("home", {

          // Use a url of "/" to set a states as the "index".
          url: "/home",
          templateUrl: 'home.html'

        })
        
        .state("contact", {

          // Use a url of "/" to set a states as the "index".
          url: "/contact",
          templateUrl: 'contact.html'

        })

        $urlRouterProvider.when('', '/home');
   
  }])
.run([function () {
	/* Run is when the app gets kicked off*/
	console.log("Run hook");
}])
.factory('Events', ['$http', function($http){
    return{
      get: function(callback){
          $http.get('app/data/events.json').success(function(data) {
            callback(data);
        });
      }
    };
    }]);



