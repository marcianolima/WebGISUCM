//wms
var urlWms = 'http://200.17.225.167:9888/geoserver/UCM-BASE/wms?';

/*
var ortofoto5cm = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:UFPR_CPJA_5cm',
    format: 'image/png',
    transparent: 'true',
    maxZoom: 23,
    minZoom: 20,
}).addTo(map); */

var edificacao = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:ccja_edificacao',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});
var calcada = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:ccja_calcada',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});
var trechoRua = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:ccja_trecho_arruamento',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});

basemap = [];
overlays = {
    "Edificação": edificacao,
    "Calçada": calcada,
    "Arruamento": trechoRua

};
L.control.layers(basemap, overlays).addTo(map);