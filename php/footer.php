<!-- Rodape -->
<section id="footer">
</section>

<!-- Menu Toggle Script -->
<script>
    //chama a janela toggle ao clique do botao no nabar
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        // corrige a janela do mapa
        setTimeout(function() {
            map.invalidateSize()
        }, 100);
    });
    
    var legend = L.control({
        position: 'topleft',
    });
    legend.onAdd = function(map) {
        var d = "This Leaflet plugin makes it easier to create indoor" +
            "maps. This example pulls in the data for a particular" +
            "building, and then displays it on the map, you can" +
            "change the level displayed by using the selector at" +
            "the bottom right of the map."
        var div = L.DomUtil.create('div', 'info legend');
        div.appendChild(document.createTextNode(d));
        return div;
    };
    //legend.addTo(map);
    
</script>