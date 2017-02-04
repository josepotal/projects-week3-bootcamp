angular.module('SpotifyApp')

.controller("SearchArtistController", function ($scope, $rootScope, SpotifyFactory) {
  
  $scope.searchArtist = function(e) {
  e.preventDefault();
  SpotifyFactory.searchArtist($scope.search)
    .then (function(response){
      $rootScope.artists = response.data.artists.items
      $rootScope.albums = ''
      $rootScope.tracks = ''
  })
  }
})

.controller("ArtistsController", function ($scope, $rootScope, SpotifyFactory) {
  $scope.searchAlbum = function() {
  SpotifyFactory.searchAlbum($scope.search)
    .then (function(response){
    $rootScope.albums = response.data.items 
    $rootScope.tracks = '' 
  })
  }
})
