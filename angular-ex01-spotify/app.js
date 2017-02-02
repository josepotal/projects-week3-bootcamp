angular.module('spotifyApp', [])

  .controller("searchController", function ($scope) {
    $scope.name = "Josep"
    
    $scope.obj = [{
      first: 'Josep',
      last: 'Otal'
    },{},{}]

    // $scope.searchArtitst = function(e) {
    //   e.preventDefault();

    // }

  });

