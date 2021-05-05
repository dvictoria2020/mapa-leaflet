    // Mapa Leaflet
        var mapa = L.map('mapid').setView([10, -84],7);

    // Capa base OSM
	var osm = L.tileLayer(
	  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
	  {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }
	).addTo(mapa);

    // Otra capa base esri
    var esri = L.tileLayer(
	  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
	  {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  }
	).addTo(mapa);

    // Otra capa base stamen
    var stamen = L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	    subdomains: 'abcd',
	    minZoom: 0,
	    maxZoom: 20,
	    ext: 'png'
        }
    ).addTo(mapa);

    // Otra capa base natgeo
    var natgeo = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	    maxZoom: 16
        }
    ).addTo(mapa);

    // Otra capa base Topomap
    var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	    maxZoom: 17,
	    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }
    ).addTo(mapa);

	// Marcadores
	liberia = L.marker([10.633333, -85.433333]);
    liberia.bindTooltip("Cantón Liberia").openTooltip();
    liberia.bindPopup ("<h1>Liberia</h1> Enlace a <a href='https://es.wikipedia.org/wiki/Liberia_(Costa_Rica)'>Wkipedia<a/a>").openPopup();
    liberia.addTo(mapa);

    limon = L.marker([10.002216, -83.084037]);
	limon.bindTooltip("Cantón Limón").openTooltip();
    limon.bindPopup ("<h1>Limón</h1> Enlace a <a href='https://es.wikipedia.org/wiki/Lim%C3%B3n_(Costa_Rica)'>Wkipedia<a/a>").openPopup();
	limon.addTo(mapa);

    puntarenas = L.marker([9.966667, -84.833333]);
	puntarenas.bindTooltip("Cantón Puntarenas").openTooltip();
    puntarenas.bindPopup ("<h1>Puntarenas</h1> Enlace a <a href='https://es.wikipedia.org/wiki/Provincia_de_Puntarenas'>Wkipedia<a/a>").openPopup();
	puntarenas.addTo(mapa);	

    SanJosé = L.marker([9.566667, -84.0833]);
	SanJosé.bindTooltip("Cantón San José").openTooltip();
    SanJosé.bindPopup ("<h1>San José</h1> Enlace a <a href='https://es.wikipedia.org/wiki/San_Jos%C3%A9_(Costa_Rica)'>Wkipedia<a/a>").openPopup();
    SanJosé.bindPopup('<h2>San Jose</h2>Enlace a <a href="https://es.wikipedia.org/wiki/San_Jos%C3%A9_(Costa_Rica)">San Jose</a><p><img src="img/Ciudad_de_San_José.png" alt="San Jose" height="100" width="100"></p>').openPopup();
    SanJosé.addTo(mapa);

    // Conjunto de capas base
	var mapasBase = {
	    "ESRI": esri,		
	    "OSM": osm,
        "Stamen":stamen,
        "OpenTopoMap": OpenTopoMap,
        "Natgeo": natgeo
	};	    
	    
	// Control de capas
        L.control.layers(mapasBase).addTo(mapa);

    // Control de escala
        L.control.scale({position: 'topright'}).addTo(mapa);