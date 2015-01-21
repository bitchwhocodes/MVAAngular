/*Angular Modules take a name, best practice is lowerCamelCase, and a list of dependancies*/
/*added the second module as a dependancy */
angular.module('mainApp', ['eventModule'])
.config([function () {
	
	/* Configuration is where you configure providers ( not instances)*/
	console.log("Configuration hook")
}])
.run([function () {
	/* Run is when the app gets kicked off*/
	console.log("Run hook");
}])