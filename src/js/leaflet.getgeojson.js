/* Criar a funcao que insere uma camada WMS e permita sua selecao, cria um geojson
nesta selecao, e obtem as informacoes da camada, criando um popup nesta selecao */

// Codigo obtido em: https://codepen.io/mmsmdali/pen/LWEpym/

L.TileLayer.GetGeojson = L.TileLayer.WMS.extend({

    onAdd: function(map) {
        // Triggered when the layer is added to a map.
        // Register a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onAdd.call(this, map);
        var geojson;
        map.on("popupclose", function(e) {
            if (geojson) {
                map.removeLayer(geojson);
            }
        });
        /*
        map.off('click', function(e) {
            if (geojson) {
                map.removeLayer(geojson);
                //console.log("olá");
            }
        });
        */

        //////// Criando o Geojson de selecao e o popup

        map.on("click", function(e) {
            var _layers = this._layers,
                layers = [],
                versions = [],
                propertiesName = [],
                styles = [];

            for (var x in _layers) {
                var _layer = _layers[x];
                if (_layer.wmsParams) {
                    layers.push(_layer.wmsParams.layers);
                    versions.push(_layer.wmsParams.version);
                    styles.push(_layer.wmsParams.styles);
                    propertiesName.push(_layer.wmsParams.campos); // campos declarado na criacao da variavel wms
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
                // urlWms obtida de variavel global
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

                                //html += '<br/><table><caption>' + feature.id + '</caption>';
                                html += '<thead><tr><th>Property</th><th>Value: </th></tr></thead><tbody>';
                                /*
                                for (var x in properties) {
                                    if (x != 'bbox') {
                                        html += '<tr><th>' + x + '</th><td>' + properties[x] + '</td></tr>';
                                    }
                                }
                                html += '</tbody></table>';
                                */
                                /*
                                services = properties.toString();
                                var service =
                                    services[
                                        feature.id.substring(0, feature.id.lastIndexOf("."))
                                    ];
                                //html += "<hr/><b>Service Name: </b>" + service.title;
                                */
                                /*
                                for (var x in service.properties) {
                                    html +=
                                        "<br/><b>" +
                                        service.properties[x] +
                                        ": </b>" +
                                        feature.properties[x];
                                };
                                */

                                html += propertiesName.toString();
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

            })
        })
    },


    onRemove: function(map) {
        // Triggered when the layer is removed from a map.
        //   Unregister a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onRemove.call(this, map);
        map.off('click', this.removeGeojson, this);

        function removeGeojson() {
            if (geojson) {
                this.removeLayer(geojson);
            }
        }

    }
});
L.tileLayer.getGeojson = function(url, options) {
    return new L.TileLayer.GetGeojson(url, options);
};