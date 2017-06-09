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
		$scope.buscaPeli = buscaPeli;
        $scope.newMovie = {};
		$scope.mejorValoradas = mejorValoradas;
		$scope.popNow=popNow;
		$scope.incoming=incoming;
		activate();

		////////////////

		function activate() {

		}
		var baseUrl = "https://api.themoviedb.org/3/";
/*RECOGEMOS TODAS LAS PELICULAS*/
		//https://api.themoviedb.org/3/discover/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES&sort_by=revenue.asc&include_adult=true&include_video=false&page=1
		function call() {
			$http.get(baseUrl + "discover/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES&sort_by=revenue.asc&include_adult=true&include_video=false&page=1")

				.then(function (response) {

					//$scope.data = response;
					$scope.movies = $scope.movies.concat(response.data.results);

				})

		}


/*CREAMOS BOTONES*/
		function genres() {
			$http
				.get(baseUrl + "genre/movie/list?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES")
				.then(function (response) {

					$scope.genres = response.data.genres;

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

					  })
        }

		function buscaPeli(peli){
			//search/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&page=1&query=logan
			 $http
                .get(baseUrl + "search/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&page=1&query=" + peli)
				.then(function (response){
				 $scope.movies = response.data.results;
			 })
		}
		function mejorValoradas(){
			$http
				.get(baseUrl + "discover/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1")
				.then(function (response){
				$scope.movies = response.data.results;
			})
		}

		function popNow(){
			$http
				.get(baseUrl + "discover/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES&sort_by=popularity.desc&include_adult=true&include_video=false&page=1")
				.then(function (response){
				$scope.movies = response.data.results;
			})
		}

		function incoming(){
			$http
				.get(baseUrl + "discover/movie?api_key=edf0f15a547c21b304bcfd7d8fefc700&language=es-ES&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1")
				.then(function (response){
				$scope.movies = response.data.results;
			})
		}
		buscaPeli();
		call();
		genres();

	}
})();
