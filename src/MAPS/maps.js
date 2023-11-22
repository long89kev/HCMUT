function initMap() {
    const mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng(10.772611497561723, 106.65948295143602),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create a custom style to hide roads, parks, and waterways
    const customMapStyle = [
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        },
        {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
        },
        {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
        }
    ];

    // Apply the custom style to the map
    map.setOptions({ styles: customMapStyle });

    // Add markers to the map for buildings and facilities
    const markers = [
        {
            position: new google.maps.LatLng(10.763312, 106.680302),
            title: 'Building A'
        },
        {
            position: new google.maps.LatLng(10.763327, 106.680187),
            title: 'Building B'
        },
        // Add more markers for other buildings and facilities...
    ];

    // Create and display markers on the map
    for (const markerData of markers) {
        const marker = new google.maps.Marker({
            position: markerData.position,
            map: map,
            title: markerData.title
        });
    }
}

window.onload = initMap;
