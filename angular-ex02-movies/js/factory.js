angular.module('MoviesApp')

.factory('MoviesFactory', function($http) {
  var APIkey = "48915862a111fe6eaaa51e012de9bb33"
  
  function getPopularMovies() {
    return $http.get("https://api.themoviedb.org/3/movie/popular?api_key="+APIkey+"&language=en-US&page=1")
  }

  function getUpcomingMovies() {
    return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key="+APIkey+"&language=en-US&page=1")
  }

  function getNowPlayingMovies() {
    return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+APIkey+"&language=en-US&page=1")
  }

  function getTopRatedMovies() {
    return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+APIkey+"&language=en-US&page=1")
    
  }



return {
  getPopularMovies: getPopularMovies,
  getUpcomingMovies: getUpcomingMovies,
  getNowPlayingMovies: getNowPlayingMovies,
  getTopRatedMovies: getTopRatedMovies
};
})


