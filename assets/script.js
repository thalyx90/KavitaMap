
//snazzymap styling

var mapStyle=[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#76787d"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#42464e"
            },
            {
                "lightness": "-23"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f7f8f9"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#acd5cb"
            },
            {
                "visibility": "on"
            },
            {
                "lightness": "49"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#3c3f45"
            },
            {
                "lightness": "49"
            }
        ]
    }
]




function initMap(){

	//put your stores in a array []
	var stores = [{
					latlng:{lat: -36.7879462, lng: 174.7726528},
					name: 'Movenpick Takapuna',
					address: '33-45 Hurstmere Rd, Takapuna',
					icon: 'marker1.png'
				},


				{
					latlng:{lat: -36.8484344, lng: 174.8298158},
					name: 'Movenpick Misson Bay',
					address: '75 Tamaki Dr, Mission Bay',
					icon: 'marker2.png'
				},

				{
				
					latlng:{lat: -36.8680645, lng: 174.7784261},
					name: 'Movenpick New Market',
					address: '160 Broadway, New Market',
					icon: 'marker3.png'	
			 	}]


	var map = new google.maps.Map(document.getElementById('map'), {

		zoom: 12,
		center: {lat: -36.7879462, lng: 174.7726528},
		styles: mapStyle
	});

	for(var i=0;i<stores.length;i++){
		
		var store = stores[i];
		var markerIcon = {
					//change icon to url for your own icons
					icon:'assets/'+store.icon,
					size: new google.maps.Size(30,30),
		};
		let storeMarker = new google.maps.Marker({
							position:store.latlng,
							map: map,
							icon: markerIcon
						});
		var storeInfoWindow = new google.maps.InfoWindow({
							content:'<div class="content">Movenpick</div>'
						});	

		storeMarker.addListener('click',function(){
			storeInfoWindow.open(map,storeMarker);
		});	

	}
											
};			 	