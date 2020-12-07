$('#location-button').click(() => {
  $.ajax({
    url: "./php/getLocationSearch.php",
    type: 'POST',
    dataType: 'json',
    data: {
      loc: $('#location-input').val()
    },
    success: function (result) {
      console.log(result);

      if (result.status.name === 'ok') {
        $('#result-1').empty();
        for (i = 0; i < result['data'].length; i++) {
          $('#result-1').append(`<div class="result"> Name: ${result['data'][i]['name']} <br> Population: ${result['data'][i]['population']}</div>`);
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('Error !');
    }
  });
});

$('#clear-result1').click(() => {
  console.log('clicked');
  $('#result-1').empty();
});

$('#weather-button').click(() => {
  $.ajax({
    url: './php/getWeatherSearch.php',
    type: 'POST',
    dataType: 'json',
    data: {
      north: $('#lat-input').val() + 10,
      south: $('#lat-input').val() - 10,
      west: $('#lng-input').val() - 10,
      east: $('#lng-input').val() + 10
    },
    success: function (result) {
      console.log(result);

      if (result.status.name === 'ok') {
        $('#result-2').empty();
        for (i = 0; i < result['data'].length; i++) {
          $('#result-2').append(`<div class="result">Station Name: ${result['data'][i]['stationName']} <br>Lat: ${result['data'][i]['lat']}<br> Long: ${result['data'][i]['lng']} <br>Temperature: ${result['data'][i]['temperature']}</div>`);
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('Error!');
    }
  });
});

$('#clear-result2').click(() => {
  $('#result-2').empty();
});

$('#post-button').click(() => {
  $.ajax({
    url: './php/postcodeSearch.php',
    type: 'POST',
    dataType: 'json',
    data: {
      postcode: $('#postcode-input').val()
    },
    success: function (result) {
      console.log(result);
      $('#result-3').empty();
      for (i = 0; i < result['data'].length; i++) {
        $('#result-3').append(`<div class="result"> Postal Code: ${result['data'][i]['postalCode']} <br> lat: ${result['data'][i]['lat']} <br> lng: ${result['data'][i]['lng']} </div>`)
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log('Error!');
    }
  })
});

$('#clear-result3').click(() => {
  $('#result-3').empty();
});