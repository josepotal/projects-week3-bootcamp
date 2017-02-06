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

.controller("SelectArtistController", function ($scope, $rootScope, SpotifyFactory) {
  $scope.searchAlbum = function() {
  SpotifyFactory.searchAlbum($scope.search)
    .then (function(response){
    $rootScope.albums = response.data.items 
    $rootScope.tracks = '' 
    })
  }
})

.controller("SelectAlbumController", function ($scope, $rootScope, SpotifyFactory) {
  $scope.searchTrack = function() {
  SpotifyFactory.searchTrack($scope.search)
    .then (function(response){
    $rootScope.tracks = response.data.items 
    console.log($rootScope.tracks)
  })
  }
})
