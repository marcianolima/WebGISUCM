function muda_campus(campus) {
    console.log("Campus vale: " + campus);
    var coordenadas = [];
    //Se nada for selecionado coord[0], o valor padrão será a coordenada do Centro Politécnico';

    coordenadas[1] = [-25.412514664006, -49.249012107671, 17]; //Cabral 
    coordenadas[2] = [-25.451074538848, -49.234051701336, 16]; //Politecnico
    coordenadas[3] = [-25.447480991432, -49.238791324753, 17]; //Jardim Botanico
    coordenadas[4] = [-25.41409716389, -49.252904021155, 19]; //Juveve

    if (campus != null) {
        var x = campus;
        console.log("Campus foi Preenchido com: " + campus);

    } else {
        //se não houve uma escolha, assuma por padrão o Campus Centro Politécnico
        console.log("Campus" + campus);
        var x = 1;
    }
    console.log("Campus" + campus);
    var lat = coordenadas[x][0];
    var lng = coordenadas[x][1];
    var zoom_level = coordenadas[x][2];
    map.panTo(L.latLng(lat, lng));
    map.setView(L.latLng(lat, lng), zoom_level);
    //map.dragging.disable();


}

//Ajax que muda o Campus de acordo com a escolha efetuada no Menu

$('#liCampus a').click(function(e) {
    e.preventDefault();
    var value = $(this).data('value');
    if (value != undefined) {
        if (value >= 1 || value <= 37) {
            muda_campus(value);
            switch (value) {
                case 1:
                    map.removeLayer(ccja);
                    map.removeLayer(ccjb);
                    map.removeLayer(ccju);
                    cccb.addTo(map);
                    break;
                case 2:
                    map.removeLayer(cccb);
                    map.removeLayer(ccjb);
                    map.removeLayer(ccju);
                    ccja.addTo(map);
                    break;
                case 3:
                    map.removeLayer(ccja);
                    map.removeLayer(cccb);
                    map.removeLayer(ccju);
                    ccjb.addTo(map);
                    break;
                case 4:
                    map.removeLayer(ccja);
                    map.removeLayer(ccjb);
                    map.removeLayer(cccb);
                    ccju.addTo(map);
                    break;
            }
        }
    } else {
        console.log("Erro escolha Campus");
    }
});