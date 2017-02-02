
 /* eslint no-undef: "off" */

$('#search-beer-brands form').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    console.log(response)
    var listBeerBrands = response
    var beerOption = "<img class='img-responsive' src='' <h2 value='<%ID-BEER%>'><%NAME-BEER%></h2>"
    var previewBeerBrands = listBeerBrands.map(function (beerBrand) {
      var currentBeer = beerOption.replace('<%ID-BEER%>', beerBrand.id)
      currentBeer = currentBeer.replace('<%NAME-BEER%>', beerBrand.name)
      currentBeer = currentBeer.replace('<%IMG-ID%>', beerBrand.imagesicon)
      return currentBeer
    })
    $('#list-beer-brand').html(previewBeerBrands)
    $('#select-beer-brand').removeClass('hidden')
    $('#beer-info').addClass('hidden')
  })
})

$('#select-beer-brand').on('click', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/beer/<%ID-BEER%>'
  var valueSearched = $(this).find('#list-beer-brand').val()
  var urlFilled = urlSearch.replace('<%ID-BEER%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    console.log(response)
    var beerInfo = response
    // var beerProps = beerInfo['id'] {
      // return "<h2 value='" + key + "'>" + key + ':' + beerInfo[key] + '</h2>'
    $('#beer-name').html(beerInfo['name'])
    $('#beer-desc').html(beerInfo['description'])

    var iconDefault = 'https://www.spreadshirt.com/image-server/v1/designs/12649875,width=178,height=178/404-error-beer-not-found.png'
    var icon = beerInfo.labels ? beerInfo.labels['medium'] : iconDefault
    $('#beer-icon').attr('src', icon)
    $('#beer-info').removeClass('hidden')
    $('#beer-info').modal('show')
  })
})
