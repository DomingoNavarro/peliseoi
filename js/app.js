(function () {
    'use strict';

    angular.module('movies', ['ngRoute']).config(config);
    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when("/", {

                controller: 'homeController',
                templateUrl: '/views/home.html'
            });


    }

})();
