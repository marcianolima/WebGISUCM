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


//Barra de pesquisa
(function() {
    var
        geocoders = {
            'Nominatim': L.Control.Geocoder.nominatim(),
            //'Bing': L.Control.Geocoder.bing('AlsFLEm5UIoF-8kfQdB-XlTCGU_pLLNliREprSZFOZfEr08UCqD0OCzhL5jWAwQn'),
            //'Mapbox': L.Control.Geocoder.mapbox(apiMapBoxToken),
            //'Photon': L.Control.Geocoder.photon(),
        },
        selector = L.DomUtil.get('geocode-selector'),
        control = new L.Control.Geocoder({ geocoder: null }),
        btn,
        selection,
        marker;

    function select(geocoder, el) {
        if (selection) {
            L.DomUtil.removeClass(selection, 'selected');
        }

        control.options.geocoder = geocoder;
        L.DomUtil.addClass(el, 'selected');
        selection = el;
    }

    for (var name in geocoders) {
        btn = L.DomUtil.create('button', '', selector);
        btn.innerHTML = name;
        (function(n) {
            L.DomEvent.addListener(btn, 'click', function() {
                select(geocoders[n], this);
            }, btn);
        })(name);

        if (!selection) {
            select(geocoders[name], btn);
        }
    }

    control.addTo(map);
    /*
        map.on('click', function(e) {
            control.options.geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
                var r = results[0];
                if (r) {
                    if (marker) {
                        map.removeLayer(marker);
                    }
                    marker = L.marker(r.center).bindPopup(r.html || r.name).addTo(map).openPopup();
                }
            })
        });
    */
})();