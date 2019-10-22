var map = L.map('map', {
    fullscreenControl: { pseudoFullscreen: false },
    // Tell the map to use a loading control
    loadingControl: true
}).setView([-25.4505, -49.2341], 16);
var hash = new L.Hash(map);
//token Mapbox
var apiMapBoxToken = 'pk.eyJ1IjoidWZwcmNhbXB1c21hcCIsImEiOiJjazEzdXZwbHAwZGgxM2hzOWF0cWJiNTk3In0.NnTFiv-QZDY9LIExmwfscQ';
var basemaps = [
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 23,
        id: 'mapbox.light',
        attributionControl: false,
        accessToken: apiMapBoxToken,
        label: 'Light',
        loadingControl: true
    }),
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 23,
        id: 'mapbox.satellite',
        attributionControl: false,
        accessToken: apiMapBoxToken,
        label: 'Satelite',
        loadingControl: true
    }),

]
map.addControl(
    L.control.basemaps({
        basemaps: basemaps,
        tileX: 0,
        tileY: 0,
        tileZ: 1
    })
);