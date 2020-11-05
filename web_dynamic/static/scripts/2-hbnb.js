$(document).ready(function () {
  const i = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(i, function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
