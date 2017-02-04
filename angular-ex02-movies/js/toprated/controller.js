angular.module('MoviesApp')
.controller('TopRatedController', function($scope, MoviesFactory){
  $scope.section ='Top Rated' 

  MoviesFactory.getTopRatedMovies()
  .then(function(response) {
    $scope.topRatedMovies = response.data.results
    console.log($scope.topRatedMovies)
  })

})