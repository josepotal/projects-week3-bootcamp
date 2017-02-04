angular.module('MoviesApp')

.config(function($routeProvider) {

  $routeProvider
  .when('/popular', {
    templateUrl: 'js/popular/template.html',
    controller: 'PopularController'
  })
  
  .when('/upcoming', {
    templateUrl: 'js/upcoming/template.html',
    controller: 'UpcomingController'
  })

  .when('/nowplaying', {
    templateUrl: 'js/nowplaying/template.html',
    controller: 'NowPlayingController'
  })

  .when('/toprated', {
    templateUrl: 'js/toprated/template.html',
    controller: 'TopRatedController'
  })
  
  
  
})