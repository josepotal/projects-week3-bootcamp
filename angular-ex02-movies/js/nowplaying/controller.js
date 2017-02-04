angular.module('MoviesApp')
.controller('NowPlayingController', function($scope, MoviesFactory){
  $scope.section ='Now Playing' 

  MoviesFactory.getNowPlayingMovies()
  .then(function(response) {
    $scope.nowPlayingMovies = response.data.results
    console.log($scope.nowPlayingMovies)
  })
})