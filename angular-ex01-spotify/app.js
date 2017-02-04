angular.module('SpotifyApp',[])

// .controller("searchArtistController", function ($scope, $rootScope, spotifyFactory) {
  
//   $scope.searchArtist = function(e) {
//   e.preventDefault();
//   spotifyFactory.searchArtist($scope.search)
//     .then (function(response){
//       $rootScope.artists = response.data.artists.items
//     console.log($rootScope.artists)
//   })
//   }
// })

// .controller("artistsController", function ($scope, $rootScope, spotifyFactory) {
  
//   $scope.searchAlbum = function(e) {
//   e.preventDefault();
//   spotifyFactory.searchAlbum($scope.search)
//     .then (function(response){
//     console.log(response)
//   })
//   }
// })


// .factory('spotifyFactory', function($http){

//   function searchArtist(searchQuery){
//    var url = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
//    url = url.replace('<%ARTIST-NAME%>', searchQuery)
//    return  $http.get(url)
//  }

//  function searchAlbum(searchQuery){
//   var urlSearch = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
//   url = url.replace('<%ID-ARTIST%>', searchQuery)
//   return $http.get(url)
//  }
//  return {
//   searchArtist: searchArtist,
//   searchAlbum: searchAlbum
//  }
// })






