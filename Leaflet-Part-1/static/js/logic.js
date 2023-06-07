// Create a map object
let myMap = L.map("map", {
  center: [0, 120],
  zoom: 3,
});

// Adding the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// Create the json for use
d3.json(url).then(function (response) {
  for (let i = 0; i < response.features.length; i++) {
    let location = response.features[i].geometry.coordinates;
    if (location) {
      L.circle([location[1], location[0]], {
        color: "YlOrRd",
        radius: response.features[i].properties.mag * 100000,
      })
        .bindPopup(response.features[i].properties.place)
        .addTo(myMap);
      console.log(response.features[i].properties);
    }
  }
});

// Plot the markers on map from json

// Magnitude = Size, Depth = Color,

// Popups include additional info

// legend with context
