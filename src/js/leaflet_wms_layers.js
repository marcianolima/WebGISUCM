//wms
var urlWms = 'http://mapas.geomatica.ufpr.br/geoserver/UCM-BASE/wms?';

var ccja = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:ccja_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});

var ccjb = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:ccjb_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});

var cccb = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:cccb_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});

var ccju = L.tileLayer.wms(urlWms, {
    layers: 'UCM-BASE:ccju_base_campus',
    transparent: 'true',
    format: 'image/png8',
    maxZoom: 23,
});