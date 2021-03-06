angular.module('SpotifyApp')

.factory('SpotifyFactory', function($http) {

    function searchArtist(searchQuery) {
        var url = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
        url = url.replace('<%ARTIST-NAME%>', searchQuery)
        return $http.get(url)
    }

    function searchAlbum(searchQuery) {
        var url = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
        url = url.replace('<%ID-ARTIST%>', searchQuery)
        return $http.get(url)
        
    }

    function searchTrack(searchQuery) {
        var url = 'https://api.spotify.com/v1/albums/<%ID-ALBUM%>/tracks'
        url = url.replace('<%ID-ALBUM%>', searchQuery)
        return $http.get(url)

    }

    
    return {
        searchArtist: searchArtist,
        searchAlbum: searchAlbum,
        searchTrack: searchTrack
    }
})