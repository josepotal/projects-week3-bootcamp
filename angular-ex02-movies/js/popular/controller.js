angular.module('MoviesApp')
.controller('PopularController', function($scope, MoviesFactory){

$scope.section ='Popular' 

MoviesFactory.getPopularMovies()
  .then(function (response) {
  $scope.popularMovies = response.data.results
  console.log($scope.popularMovies)
})



})