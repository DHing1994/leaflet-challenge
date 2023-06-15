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
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create the json for use
d3.json(url).then(function (response) {
  for (let i = 0; i < response.features.length; i++) {
    let location = response.features[i].geometry.coordinates;
    let markerColor = "";
    console.log(response.features[i].geometry.coordinates[2]);
    if (
      response.features[i].geometry.coordinates[2] >= 0 &&
      response.features[i].geometry.coordinates[2] <= 10
    ) {
      markerColor = "#ffffd9";
    } else if (
      response.features[i].geometry.coordinates[2] >= 10 &&
      response.features[i].geometry.coordinates[2] <= 20
    ) {
      markerColor = "#edf8b1";
    } else if (
      response.features[i].geometry.coordinates[2] >= 20 &&
      response.features[i].geometry.coordinates[2] <= 30
    ) {
      markerColor = "#c7e9b4";
    } else if (
      response.features[i].geometry.coordinates[2] >= 30 &&
      response.features[i].geometry.coordinates[2] <= 40
    ) {
      markerColor = "#7fcdbb";
    } else if (
      response.features[i].geometry.coordinates[2] >= 40 &&
      response.features[i].geometry.coordinates[2] <= 50
    ) {
      markerColor = "##41b6c4";
    } else if (
      response.features[i].geometry.coordinates[2] >= 50 &&
      response.features[i].geometry.coordinates[2] <= 60
    ) {
      markerColor = "#1d91c0";
    } else if (
      response.features[i].geometry.coordinates[2] >= 60 &&
      response.features[i].geometry.coordinates[2] <= 70
    ) {
      markerColor = "#225ea8";
    } else if (
      response.features[i].geometry.coordinates[2] >= 70 &&
      response.features[i].geometry.coordinates[2] <= 80
    ) {
      markerColor = "#253494";
    } else if (
      response.features[i].geometry.coordinates[2] >= 80 &&
      response.features[i].geometry.coordinates[2] <= 90
    ) {
      markerColor = "#081d58";
    } else {
      markerColor = "black";
    }

    if (location) {
      L.circle([location[1], location[0]], {
        color: markerColor,
        radius: response.features[i].properties.mag * 100000,
      })
        .bindPopup(response.features[i].properties.place)
        .addTo(myMap);
    }
  }
});

// Plot the markers on map from json

// Magnitude = Size, Depth = Color,

// Popups include additional info

// legend with context
