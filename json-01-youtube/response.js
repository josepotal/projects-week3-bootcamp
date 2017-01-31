
$('#click-me').on('click', function () {
  $.ajax({
    url: 'youtube.json'
  })
  .done(function (response) {
    var title = response.data.items[0].title
    $('h1').html(title)
    var thumbnail = response.data.items[0].thumbnail.default
    $('img').attr('src', thumbnail)
    var video = response.data.items[0].player.default
    $('h2').html(video)
  })
})
