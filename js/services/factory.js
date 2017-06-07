(function () {
    'use strict';
    angular
        .module('movies')
        .factory('moviesFactory', moviesFactory);

    moviesFactory.$inject = ['$http'];

    /* @ngInject */
    function moviesFactory($http){
        var exports = {

            getDefaultMovies:getDefaultMovies
        };
        var baseUrl = "https://api.themoviedb.org/3/";

        return exports;

        ////////////////

        function func() {
        }

//hola
        function getDefaultMovies() {
            $http.get(baseUrl + "discover/movie?with_genres=18&primary_release_year=2017&api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES")

                .then(function (response) {
                    console.log(response);
                    return response.data.results;



                })
        }
    }
})();
