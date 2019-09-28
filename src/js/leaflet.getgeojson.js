/* Criar a funcao que insere uma camada WMS e permita sua selecao, cria um geojson
nesta selecao, e obtem as informacoes da camada, criando um popup nesta selecao */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Codigo obtido em: https://codepen.io/mmsmdali/pen/LWEpym/

var geojson;
L.TileLayer.GetGeojson = L.TileLayer.WMS.extend({

    onAdd: function(map) {
        // Triggered when the layer is added to a map.
        //   Register a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onAdd.call(this, map);
        map.on('click', this.getFeatureInfo, this);
    },

    onRemove: function(map) {
        // Triggered when the layer is removed from a map.
        //   Unregister a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onRemove.call(this, map);
        map.off('click', this.getFeatureInfo, this);
        map.on("popupclose", function(e) {
            if (geojson) {
                map.removeLayer(geojson);
            }
        });
    },

    getFeatureInfo: function(evt) {
        // Make an AJAX request to the server and hope for the best
        var url = this.getFeatureInfoUrl(evt.latlng),
            showResults = L.Util.bind(this.showGetFeatureInfo, this);
        $.ajax({
            url: url,
            success: function(data, status, xhr) {
                var err = typeof data === 'string' ? null : data;
                /*
                showResults(err, evt.latlng, data);
            },*/
                // Fix for blank popup window
                var doc = (new DOMParser()).parseFromString(data, "text/html");
                if (doc.body.innerHTML.trim().length > 0)
                    showResults(err, evt.latlng, data);

            },
            error: function(xhr, status, error) {
                showResults(error);
            }
        });
    },

    getFeatureInfoUrl: function(latlng) {
        // Construct a GetFeatureInfo request URL given a point
        var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
            size = this._map.getSize(),

            params = {
                request: 'GetFeatureInfo',
                service: 'WMS',
                srs: 'EPSG:4326',
                styles: this.wmsParams.styles,
                transparent: this.wmsParams.transparent,
                version: this.wmsParams.version,
                format: this.wmsParams.format,
                bbox: this._map.getBounds().toBBoxString(),
                height: size.y,
                width: size.x,
                layers: this.wmsParams.layers,
                query_layers: this.wmsParams.layers,
                info_format: 'text/html'
            };

        params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
        params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;

        return this._url + L.Util.getParamString(params, this._url, true);
    },

    showGetFeatureInfo: function(err, latlng, content) {
        if (err) { console.log(err); return; } // do nothing if there's an error

        ////////

        map.on("click", function(e) {
            var _layers = this._layers,
                layers = [],
                versions = [],
                styles = [];

            for (var x in _layers) {
                var _layer = _layers[x];
                if (_layer.wmsParams) {
                    layers.push(_layer.wmsParams.layers);
                    versions.push(_layer.wmsParams.version);
                    styles.push(_layer.wmsParams.styles);
                }
            }

            var loc = e.latlng,
                xy = e.containerPoint, // xy = this.latLngToContainerPoint(loc,this.getZoom())
                size = this.getSize(),
                bounds = this.getBounds(),
                crs = this.options.crs,
                sw = crs.project(bounds.getSouthWest()),
                ne = crs.project(bounds.getNorthEast()),
                obj = {
                    service: "WMS", // WMS (default)
                    version: versions[0],
                    request: "GetFeatureInfo",
                    layers: layers,
                    styles: styles[0],
                    // bbox: bounds.toBBoxString(), // works only with EPSG4326, but not with EPSG3857
                    bbox: sw.x + "," + sw.y + "," + ne.x + "," + ne.y, // works with both EPSG4326, EPSG3857
                    width: size.x,
                    height: size.y,
                    query_layers: layers,
                    info_format: "application/json", // text/plain (default), application/json for JSON (CORS enabled servers), text/javascript for JSONP (JSONP enabled servers)
                    feature_count: 5 // 1 (default)
                        //exceptions: 'application/json', // application/vnd.ogc.se_xml (default)
                        // format_options: 'callback: parseResponse' // callback: parseResponse (default), use only with JSONP enabled servers, when you want to change the callback name
                };
            if (parseFloat(obj.version) >= 1.3) {
                obj.crs = crs.code;
                obj.i = xy.x;
                obj.j = xy.y;
            } else {
                obj.srs = crs.code;
                obj.x = xy.x;
                obj.y = xy.y;
            }


            $.ajax({
                // urlWms definifa em leaflet_mymap.js
                url: urlWms + L.Util.getParamString(obj, urlWms, true),
                // dataType: 'jsonp', // use only with JSONP enabled servers
                // jsonpCallback: 'parseResponse', // parseResponse (default), use only with JSONP enabled servers, change only when you changed the callback name in request using format_options: 'callback: parseResponse'
                success: function(data, status, xhr) {
                    //var html = "Você clicou em: " + loc.lat.toFixed(2) + "," + loc.lng.toFixed(2) + "<br/>";
                    var html = "Você clicou em: ";

                    if (geojson) {
                        map.removeLayer(geojson);
                    }

                    if (data.features) {
                        var features = data.features;
                        if (features.length) {
                            //html += "Feature(s) Found: " + features.length;
                            // vector = L.geoJSON(data).addTo(map); // works only with EPSG4326, but EPSG3857 doesn't highlights geometry, so we used proj4, proj4leaflet to convert geojson from EPSG3857 to EPSG4326
                            geojson = L.Proj.geoJson(data).addTo(map); // works with both EPSG4326, EPSG3857
                            map.fitBounds(geojson.getBounds());



                            for (var i in features) {

                                var feature = features[i];


                                var properties = feature.properties;

                                html += '<br/><table><caption>' + feature.id + '</caption>';
                                html += '<thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>';
                                for (var x in properties) {
                                    if (x != 'bbox') {
                                        html += '<tr><th>' + x + '</th><td>' + properties[x] + '</td></tr>';
                                    }
                                }
                                html += '</tbody></table>';

                                /*
                                var service =
                                    services[
                                        feature.id.substring(0, feature.id.lastIndexOf("."))
                                    ];
                                //html += "<hr/><b>Service Name: </b>" + service.title;
                                for (var x in service.properties) {
                                    html +=
                                        "<br/><b>" +
                                        service.properties[x] +
                                        ": </b>" +
                                        feature.properties[x];
                                };
                                */
                                map.openPopup(html, loc, {
                                    maxHeight: 500
                                });




                            }
                        } else {
                            html += "No Features Found.";
                            //alert(JSON.stringify(html, null, 4));

                        }
                    } else {
                        html += "Failed to Read the Feature(s).";
                        //alert(JSON.stringify(html, null, 4));
                    }


                },
                error: function(xhr, status, err) {
                    if (geojson) {
                        map.removeLayer(geojson);
                    }
                    html += "Unable to Complete the Request.: " + err;
                    map.openPopup(html, loc);
                }
            });
        });
        ///////


        // Otherwise show the content in a popup, or something.
        /*
        L.popup({ maxWidth: 800 })
            .setLatLng(latlng)
            .setContent(content)
            .openOn(this._map);
        */
    }
});

L.tileLayer.getGeojson = function(url, options) {
    return new L.TileLayer.GetGeojson(url, options);
};