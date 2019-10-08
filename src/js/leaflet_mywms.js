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

var edificacaoGeo = L.tileLayer.getGeojson(urlWms, {
    layers: 'UCM-BASE:ccja_edificacao',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
    campos: 'setor, edificacao'
});
var edificacaoBetter = L.tileLayer.betterWms(urlWms, {
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

var predios1 = L.tileLayer.wms('http://200.17.225.167:9888/geoserver/UCM-USINASOLAR/wms?', {
    layers: 'UCM-USINASOLAR:PredioS1',
    transparent: 'true',
    format: 'image/png',
    maxZoom: 23,
});

basemap = [];
overlays = {
    "EdificaçãoGeo": edificacaoGeo,
    "EdificaçãoBetter": edificacaoBetter,
    "Calçada": calcada,
    "Arruamento": trechoRua,
    "Predio": predios1

};
L.control.layers(basemap, overlays).addTo(map);