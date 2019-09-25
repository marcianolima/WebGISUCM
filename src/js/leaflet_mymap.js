var map = L.map('map', { fullscreenControl: { pseudoFullscreen: false } }).setView([-25.4505, -49.2341], 16);
var hash = new L.Hash(map);

var basemaps = [
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 23,
        id: 'mapbox.light',
        attributionControl: false,
        accessToken: 'pk.eyJ1IjoibWFyY2lhbm9kYWNvc3RhbGltYSIsImEiOiJjamV5eGsxZ3IwNGFrMndxb216dWwwenB1In0.maLUDU8v7Xi5PAOkjzPwMg',
        label: 'Light'
    }),
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 23,
        id: 'mapbox.satellite',
        attributionControl: false,
        accessToken: 'pk.eyJ1IjoibWFyY2lhbm9kYWNvc3RhbGltYSIsImEiOiJjamV5eGsxZ3IwNGFrMndxb216dWwwenB1In0.maLUDU8v7Xi5PAOkjzPwMg',
        label: 'Satelite'
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