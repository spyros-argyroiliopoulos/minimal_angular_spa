"use strict";

var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "main.html"
    })
    .when("/about", {
        templateUrl: "about.html"
    })
    .when("/contact",{
        templateUrl: "contact.html"
    })
    .otherwise({
        templateUrl: "error.html"
    });

});