/*
var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/

var controlRoute = L.Routing.control(L.extend(window.lrmConfig, {

    waypoints: [
        L.latLng(-25.4502, -49.2341),
        L.latLng(-25.4507, -49.2341)
    ],

    geocoder: L.Control.Geocoder.nominatim(),
    routeWhileDragging: true,
    reverseWaypoints: true,
    showAlternatives: true,
    language: 'pt-BR',

    altLineOptions: {
        styles: [
            { color: 'black', opacity: 0.15, weight: 9 },
            { color: 'white', opacity: 0.8, weight: 6 },
            { color: 'blue', opacity: 0.5, weight: 2 }
        ]
    }
})).addTo(map);


L.Routing.errorControl(controlRoute).addTo(map);