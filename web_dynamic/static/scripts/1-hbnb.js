$(document).ready(function () {
  const arr = [];
  const i = {};

  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      i[$(this).data('id')] = $(this).data('name');
      arr.push($(this).data('name'));
    }
    if ($(this).prop('checked') === false) {
      delete i[$(this).data('id')];
      arr.splice($.inArray($(this).data('name'), arr), 1);
    }
    $('body > div > section.filters > div.amenities > h4').text(arr.join(', '));
  });
});
