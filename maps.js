let map;

async function initMap() {
    const position = { lat: 38.987122, lng: -94.668488 };   //  Lifted Logic
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: position,
        mapId: "90fc9a085c7345a9",
    });

    const pin = new PinElement({
        background: "#42a418",  //  Green
        borderColor: "#42a418",
        glyphColor: "#d9f0d0"   //  Pale Green
    });

    new AdvancedMarkerElement({
        map: map,
        position: position,
        content: pin.element
    });
}

initMap();