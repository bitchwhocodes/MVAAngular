

(function(){

angular.module('eventModule', [])
.factory('MainTitle', [function () {
	

	return {
		title:"Young Game Maker"
	};
}])
.config([function () {
	console.log("Event Module:: config");
}])
.run([function () {
	console.log("Event Module::running");
}])
.controller('EventCtrl', ['$scope', 'MainTitle',function ($scope,mainTitle) {
	this.title = mainTitle.title;
	this.menu=[
		{
			name:"Events",
			href:"index.html"
		},
		{
			name:"Contact",
			href:"contact.html"
		}
	]

	this.index = 0;

	this.setIndex=function(val)
	{
		this.index = val;
		console.log("called")
	}

	this.getIndex=function(){
		return(this.index);
	}
	
}])
.controller('EventItemCtrl', ['$scope','MainTitle',  function ($scope,mainTitle) {
	this.itemTitle=mainTitle.title+" in NYC";
	this.description=mainTitle.title+" is a one day event that teaches kids how to code";
	this.imgSrc ="assets/img/newyork_large.jpg";
	this.date ="January 24, 2015";
}])
.controller('EventTabCtrl', ['$scope', function ($scope) {
	this.tab = 0;
	console.log("yes")
	this.setTab=function(val)
	{
		this.tab = val;
	}
	this.getTab=function(val)
	{
		return(this.tab);
	}
	
}])


})();