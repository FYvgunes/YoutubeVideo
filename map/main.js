mapboxgl.accessToken = 'access-token';
var place = [28.9741287, 41.0256678]; // istanbul

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [28.9741287, 41.0256678],
    zoom: 11
});

var popup = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Bereketzade, Galata kulesi, 34421 Beyoğlu/İstanbul.'
);

new mapboxgl.Marker()
    .setLngLat(place)
    .setPopup(popup)
    .addTo(map);