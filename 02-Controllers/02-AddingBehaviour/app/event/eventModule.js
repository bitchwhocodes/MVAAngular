

(function(){

angular.module('eventModule', [])
.config([function () {
	console.log("Event Module:: config");
}])
.run([function () {
	console.log("Event Module::running");
}])
.controller('EventCtrl', ['$scope', function ($scope) {
	$scope.title = "Young Game Maker";

	$scope.menu=[
		{
			name:"Events",
			href:"index.html"
		},
		{
			name:"Contact",
			href:"contact.html"
		}
	]

	$scope.index = 0;

	$scope.setIndex=function(val)
	{
		$scope.index = val;
		
	}

	$scope.getIndex=function(){
		return($scope.index);
	}
}])

})();