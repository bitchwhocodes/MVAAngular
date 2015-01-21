/*Angular Modules take a name, best practice is lowerCamelCase, and a list of dependancies*/

angular.module('mainApp', [])
.config([function () {
	/* Configuration is where you configure providers ( not instances)*/
	console.log("Configuration hook")
}])
.run([function () {
	/* Run is when the app gets kicked off*/
	console.log("Run hook");
}])