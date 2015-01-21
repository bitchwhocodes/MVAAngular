

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
	console.log(this.title);
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
	this.eventIndex = 0;

	this.setIndex=function(val)
	{
		this.index = val;
		console.log("called")
	}

	this.getIndex=function(){
		return(this.index);
	}

	this.setEventIndex = function(val)
	{
		this.eventIndex = val;
	}
	this.getEventIndex = function(){
		return(this.eventIndex);
	}

	this.events=[
	{
		title : "New York",
		itemTitle:mainTitle.title,
		description:" is a one day event that teaches kids how to code",
		imgName:"newyork",
		date : Date.parse("January 24 2015")
	},
	{
		title: "Seattle",
		itemTitle:mainTitle.title,
		description:" is a one day event that teaches kids how to code",
		imgName:"seattle",
		date:"February 24, 2015"
	},
	{
		title: "San Francisco",
		itemTitle:mainTitle.title,
		description:" is a one day event that teaches kids how to code",
		imgName:"sanfran",
		date:"April 24, 2015"
	},
	{
		title : "Vancouver",
		itemTitle:mainTitle.title,
		description:" is a one day event that teaches kids how to code",
		imgName:"vancouver",
		date:"March 24, 2015"
	},
	{
		title : "Brighton",
		itemTitle:mainTitle.title,
		description:" is a one day event that teaches kids how to code",
		imgName:"brighton",
		date:"September 24, 2015"
	},

	{
		title: "London",
		itemTitle:mainTitle.title,
		description:" is a one day event that teaches kids how to code",
		imgName:"London",
		date:"September 26, 2015"
	},

	]
	
}])
.controller('EventItemCtrl', ['$scope','MainTitle',  function ($scope,mainTitle) {
	
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