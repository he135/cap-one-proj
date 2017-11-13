var map;

function initMap() {
    var uluru = new google.maps.LatLng(37.7749,-122.4194);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    
    $.getJSON('/listings', function (listings) { //jquery
       for (var i = 0; i < listings.length; i++) {

           var lat = listings[i].latitude;
           var long = listings[i].longitude;
           //var coords = results.features[i].geometry.coordinates;
           //var latLong = new google.maps.LatLng(coords[1], coords[0]);
           var latLong = new google.maps.LatLng(lat, long);

           var marker = new google.maps.Marker({
               position: latLong,
               opacity: 1,
               icon: "",
               map: map
           });
        }
    });
}