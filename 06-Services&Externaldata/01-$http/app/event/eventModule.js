

(function(){

angular.module('eventModule', [])
.factory('MainTitle', [function () {
	

	return {
		title:"Young Game Maker"
	};
}])
.filter('searchCity', function() {
  return function(items,search) {
    var filtered = [];
    if(!search){return items;}
    angular.forEach(items, function(item) {

    	if(angular.lowercase(item.title).indexOf(angular.lowercase(search))!=-1)
    	{
    		filtered.push(item);
    	}
      
    });
   return filtered;
  };
})

.config([function () {
	console.log("Event Module:: config");
}])
.run([function () {
	console.log("Event Module::running");
}])
.controller('EventCtrl', ['$scope','$http', 'MainTitle',function ($scope,$http,mainTitle) {
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

	this.getData = function(){
		var scope = this;
	$http.get('app/data/events.json')
      .success(function(data){
        scope.events = data;
      });
	}

	this.getData();
    


	
}])
.controller('EventItemCtrl', ['$scope','MainTitle',  function ($scope,mainTitle) {
	
}])
.controller('EventTabCtrl', ['$scope', function ($scope) {
	this.tab = 0;
	this.setTab=function(val)
	{
		this.tab = val;
	}
	this.getTab=function(val)
	{
		return(this.tab);
	}
	
}])

// directives
 .directive('eventItem', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment   
        /*      
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },
            */
        templateUrl: 'app/event/eventItem.html',
       
        controller: function($scope){
            console.log("do stuff")

        }, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});


})();