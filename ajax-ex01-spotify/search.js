/* eslint no-undef: "off" */

// When searching an artist, just tyep in, it will return  a list of all the found artists
$('#search-artists form').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%ARTIST-NAME%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listArtists = response.artists.items
    // other possibility --> with string stored in a variable
    var tploption = "<option value='<%ARTIST-ID%>'><%ARTIST-NAME%></option>"
    var optionsArtists = listArtists.map(function (artist) {
      var currentOption = tploption.replace('<%ARTIST-ID%>', artist.id)
      currentOption = currentOption.replace('<%ARTIST-NAME%>', artist.name)
      return currentOption
      // return "<option value='" + artist.id + "'>" + artist.name + '</option>'
    })
    optionsArtists.unshift('<option disabled selected>Select an artist...</option>')
    $('#list-artists').html(optionsArtists.join(''))
    $('#select-artist').removeClass('hidden')
    $('#select-album,#select-track').addClass('hidden')
  })
})

// When selecting an artist from the list, it will returns a select with all the albums
$('#select-artist form').on('change', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
  var valueSelected = $(this).find('select').val()
  var urlFilled = urlSearch.replace('<%ID-ARTIST%>', valueSelected)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listAlbums = response.items
    var optionsAlbums = listAlbums.map(function (album) {
      return "<option value='" + album.id + "'>" + album.name + '</option>'
    })
    optionsAlbums.unshift('<option disabled selected>Select an album...</option>')
    $('#list-albums').html(optionsAlbums.join(''))
    $('#select-album').removeClass('hidden')
    $('#select-track').addClass('hidden')
  })
})

$('#select-album form').on('change', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/albums/<%ID-ALBUM%>/tracks'
  var valueSelected = $(this).find('select').val()
  var urlFilled = urlSearch.replace('<%ID-ALBUM%>', valueSelected)
  console.log(urlFilled)
  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    console.log(response)
    var listTracks = response.items
    var optionsTracks = listTracks.map(function (track) {
      return "<li value='" + track.id + "'><a href='" + track.preview_url + "'>" + track.name + '</li>'
    })
    $('#list-track').html(optionsTracks.join(''))
    $('#select-track').removeClass('hidden')
  })
})

