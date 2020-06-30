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
`<script src="offmap.js"` <br />
Make sure that Leaflet is already included in your site, check their site to find out how.
<br /><br />
Next, setup your locations:<br />
`var pinglist = [
                  <lat>       <long>                      <formal name>               <formatted name>               <ip / url>
     {"location": [37.422119, -122.082287], "formalname": "googleplex", "formatname": "The Google Plex", "pingsite": "google.com"},
     {"location": [37.332170, -122.029771], "formalname": "infiniteloop", "formatname": "Apple Park", "pingsite": "apple.com/"}
];`
<br />
<br />
Finally, make a map instance of Leaflet, and turn it into an offmap: <br />
`var mymap = L.map('pmap').setView([<starting lat>, <starting long>], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: '<your long access token>'
}).addTo(mymap);

mymap.setZoom(<zoom level, i like 8>);`
<br />
<br />
Your instance of offmap should now work, refer to the Leaflet website for more detailed map-setup.
