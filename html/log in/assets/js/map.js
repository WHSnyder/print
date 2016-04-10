
function initMap() {
  var myLatLng = new google.maps.LatLng(38.993779, -76.943511);
  var mapOptions = {
    zoom: 15,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var contentString = 'LET\'S FUCKING PRINT BRO';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  <!-- First check if geolocation services are turned on-->



  var markersArray = [];
  var infowindowArray =[];
  var coordinates = {lat: 38.992779, lng: -76.943511};
  var coordinates2 = {lat: 38.986766, lng: -76.938425 };
  var coordinate3 = {lat: 38.982178, lng: -76.9432 };
  var geoCoordinate;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(position.latitude);
      console.log(pos.longitude);
      console.log('hello');

      infowindow.setPosition(pos);
      infowindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infowindow, map.getCenter());
    });
  } else {
// Browser doesn't support Geolocation
console.log('hello, it\'s me!');
handleLocationError(false, infowindow, map.getCenter());
} 

console.log(navigator.geolocation);
addMarker(coordinates);
addMarker(coordinate3);
addMarker(coordinates2);


for(var i =0; i < 2; i ++){
  markersArray[i].setMap(map);
}

function addMarker(location, string){
  marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'H'
  });
  marker.info = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function(){
    $('#myModal').modal('show');
  });

  markersArray.push(marker);
}
function addInfowindow(string){
  var infowindow = new google.maps.InfoWindow({content: string});
  infowindowArray.push(infowindow);
}
}  


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}

$(document).on('ready', function() {
  $("#input-25").fileinput({
    overwriteInitial: true
  });
});
