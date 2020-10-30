class Station {
  constructor(
    stopId,
    latitude,
    longitude,
    name,
    index
  ) {
    this.stopId = stopId;
    this.latitude = latitude;
    this.longitude = longitude;
    this.name = name
    this.index = index
  }
}

function drawEachStation(stations) {
  stations.forEach((s, i) => {
    const station = new Station(s["GTFS Stop ID"], s["GTFS Latitude"], s["GTFS Longitude"], s["Stop Name"], i);
  
    drawStation(station)
  });
}