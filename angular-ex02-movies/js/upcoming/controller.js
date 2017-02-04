angular.module('MoviesApp')
.controller('UpcomingController', function($scope, MoviesFactory){
 
$scope.section = "Upcoming" 

MoviesFactory.getUpcomingMovies()
.then(function(response) {
  $scope.upcomingMovies = response.data.results
  console.log($scope.upcomingMovies)
})


})