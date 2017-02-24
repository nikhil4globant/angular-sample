(function (){
	'use strict';

    debugger
	var myMod = angular.module("cardsFactory",[]);	
	var mainCtrl = myMod.factory("fetchusercards", function($scope,$http){
        return function(){
            return $http.get('http://localhost:4000/students').then(function(response){
                  return response;  
            });
        }
		
	});
	});