(function () {
    'use strict';

    angular
        .module('movies')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', '$http'];

    /* @ngInject */
    function homeController($scope, $http) {

        $scope.movies = [];
        $scope.img = 'https://image.tmdb.org/t/p/w500';
        $scope.genres = [];


        activate();

        ////////////////

        function activate() {

        }
        var baseUrl = "https://api.themoviedb.org/3/";

        function call() {
            $http.get(baseUrl + "discover/movie?with_genres=18&primary_release_year=2017&api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES")

                .then(function (response) {
                    console.log(response);
                    $scope.data = response;
                    $scope.movies = $scope.movies.concat(response.data.results);
                    console.log($scope.movies);


                })

        }

        function genres() {
            $http
                .get(baseUrl + "genre/movie/list?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES")
                .then(function (response) {
                    console.log(response);
                    $scope.genres = response.data.genres;
                    console.log($scope.genres);
                })
        }
        call();
        genres();

    }
})();
