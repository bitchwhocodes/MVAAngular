

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
		console.log("called")
	}

	$scope.getIndex=function(){
		return($scope.index);
	}
	
}])
.controller('EventItemCtrl', ['$scope', function ($scope) {
	$scope.itemTitle="Young Game Makers in NYC";
	$scope.description="Young Game Makers is a one day event that teaches kids how to code";
	$scope.imgSrc ="assets/img/newyork_large.jpg";
	$scope.date ="January 24, 2015";

	
}])


})();