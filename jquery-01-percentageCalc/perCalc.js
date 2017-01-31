$(document).ready(function () {
  $('#f1-calculate').on('click', function () {
    var a = $('#f1-a').val()
    var b = $('#f1-b').val()
    var result = a / 100 * b
    if (isNaN(result)) {
      $('#f1').addClass('has-error')
      $('#f1-result').val('put a number!!!!')
    } else {
      $('#f1').removeClass('has-error')
      $('#f1-result').val(result)
    }
  })

  $('#f2-calculate').on('click', function () {
    var $a = $('#f2-a').val()
    var $b = $('#f2-b').val()
    var $result = $a / $b * 100
    $('#f2-result').val($result)
  })

  $('#f3-calculate').on('click', function () {
    var $a = $('#f3-a').val()
    var $b = $('#f3-b').val()
    var $result = ($b - $a) / $a * 100
    $('#f3-result').val($result)
  })
})

