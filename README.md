# offmap
An HTML5 map module for displaying a map of internet connected devices.
OffMap is an easy way to visualize a network of connected devices, such as datacenter locations. Using an array of locations <br />
linked their names and ip addresses, OffMap will automatically place diffrently colored markers on a map that will automatically ping their respective ip addresses to check if they are online.

# Dependencies
OffMap uses Leaflet to provide the maos, and requires a mapbox api key to operate.

# Using OffMap
Their are a few examples of my uses for OffMap, check out example.html for complete usage. I created OffMap to show the status of my different server locations on my personal website.<br />
<br />
First, include the JavaScript: <br />
```html
<script src="offmap.js"></script>
```
<br />
Make sure that Leaflet is already included in your site, check their site to find out how.
<br /><br />
Next, setup your locations:<br />
```javascript
var pinglist = [
     {"location": [37.422119, -122.082287], "formalname": "googleplex", "formatname": "The Google Plex", "pingsite": "google.com"},   
     {"location": [37.332170, -122.029771], "formalname": "infiniteloop", "formatname": "Apple Park", "pingsite": "apple.com/"}   
];
```
<br />
<br />
Finally, make a map instance of Leaflet, and turn it into an offmap: <br />
```javascript
var mymap = L.map('pmap').setView([YOUR STARTING LAT, YOUR STARTING LONG], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'YOUR ATTRIBUTION',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'YOUR LONG ACCESS TOKEN'
}).addTo(mymap);

mymap.setZoom(YOUR ZOOM LEVEL, I LIKE EIGHT);
```
<br />
<br />
Your instance of offmap should now work, refer to the Leaflet website for more detailed map-setup.
