(function () {
	'use strict';

	angular
		.module('movies')
		.controller('homeController', homeController);

	homeController.$inject = ['$scope', '$http'];

	/* @ngInject */
	function homeController($scope, $http, $modal) {

		$scope.movies = [];
		$scope.img = 'https://image.tmdb.org/t/p/w500';
		$scope.genres = [];
		$scope.activo = false;
        $scope.selectedMovie = selectedMovie;
        $scope.getGenre = getGenre;
        $scope.newMovie = {};
		activate();

		////////////////

		function activate() {

		}
		var baseUrl = "https://api.themoviedb.org/3/";
/*RECOGEMOS TODAS LAS PELICULAS*/
		function call() {
			$http.get(baseUrl + "discover/movie?&primary_release_year=2017&api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES")

				.then(function (response) {
					console.log(response);
					//$scope.data = response;
					$scope.movies = $scope.movies.concat(response.data.results);
					console.log($scope.movies);
				})

		}


/*CREAMOS BOTONES*/
		function genres() {
			$http
				.get(baseUrl + "genre/movie/list?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES")
				.then(function (response) {
					console.log(response);
					$scope.genres = response.data.genres;
					console.log($scope.genres);
				})
		}
        /*SELECCIONAMOS LA PELICULA PARA MODAL DESPUES*/
        function selectedMovie(movie){
            $scope.newMovie = movie;
        }
        /*RECOGEMOS EL GENERO DE LA PELICULA PARA MOSTRAR LAS PELICULAS CON EL MISMO GENERO*/
        function getGenre(genreId){

            $http
                .get(baseUrl + "discover/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES&sort_by=popularity.desc&page=1&with_genres=" + genreId)
                .then(function (response){
                     $scope.movies = response.data.results;
                console.log(response.data);
					  })
        }
		call();
		genres();

	}
})();
