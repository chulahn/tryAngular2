'use strict';

angular.module('blogList').
	component('blogList', {
		//template: "<div class=''><h1 class='new-class'>{{ title }}</h1>-title is in component<p><ul><li>blog-list.module.js - declaring angular module.  FIRST</li><li>blog-list.component.js - declares controller.  can add scope for context variables.</li></ul></p><button ng-click='someClickTest()'>Click me!</button></div>",
		templateUrl: '/templates/blog-list.html',
		controller: function($scope) {

			var blogItems = [
				{title: "Some Title", id: 1, description: "This is a book", publishDate: "2016-09-11"},
				{title: "Title", id: 2, description: "This is a book"},
				{title: "Tea", id: 3, description: "This is a book"},
				{title: "Lite", id: 4, description: "This is a book"}
			]

			$scope.items = blogItems;

			$scope.title = "Hi there";
			$scope.clicks = 0;
			$scope.someClickTest = function() {
				console.log("clicked");
				$scope.clicks += 1;
				$scope.title = "Clicked " + $scope.clicks + ' times';
			}
		}
	})


	//moved inside component's controller.
	// controller('BlogListController', function($scope) {
	// 	console.log("hello");
	// 	$scope.title = "Hi there";
	// 	$scope.clicks = 0;
	// 	$scope.someClickTest = function() {
	// 		console.log("clicked");
	// 		$scope.clicks += 1;
	// 		$scope.title = "Clicked " + $scope.clicks + ' times';
	// 	}
	// });
	// component('blogList');