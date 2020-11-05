$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  contentType: 'application/json',
  type: 'POST',
  data: '{}',
  dataType: 'json',
  success: function (i) {
    for (const place of i) {
      $('SECTION.places').append(`<article>
            <div class="title">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
            <div class="max_guest">${place.max_guest} ${place.max_guest === 1 ? 'Guest' : 'Guests'}</div>
            <div class="number_rooms">${place.number_rooms} ${place.number_rooms !== 1 ? 'Bedrooms' : 'Bedroom'}</div>
            <div class="number_bathrooms">${place.number_bathrooms} ${place.number_bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</div>
            </div>
          </article>`);
    }
  }
});
