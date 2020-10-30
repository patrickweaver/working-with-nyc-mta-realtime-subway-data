let estimateMarkers = [];
let currentIndex = 0;
const tripEstimatesOverTime = [];

function update() {
  currentIndex += 1;
  plotSTUs(currentIndex);
}

function plotSTUs(index) {
  clearSTUMarkers()
  tripEstimatesOverTime[index].forEach(e => {
    var timeIcon = L.divIcon({
      className: 'time-icon',
      html: `<p>${e.time} min</p>`
    });
    estimateMarkers.push(
      L.marker([e.latitude, e.longitude], {icon: timeIcon}).addTo(map)
    );
  });
}

function clearSTUMarkers() {
  estimateMarkers.forEach(i => map.removeLayer(i));
}


function main() {

  drawMap("map");

  drawTracks(gLineShape);

  drawEachStation(gStationData);


  STUs.forEach((stuArray, stuIndex) => {
    const tripEstimates = [];

    stuArray.forEach((stu) => {
      const s = gStationData.filter(i => {
        return i["GTFS Stop ID"] === stu.stopId.slice(0, 3);
      })[0];
      const station = new Station(s["GTFS Stop ID"], s["GTFS Latitude"], s["GTFS Longitude"], s["Stop Name"], 0);
      //console.log(stu.arrival.time, parseInt(timestamps[stuIndex]), stu.arrival.time - parseInt(timestamps[stuIndex]))
      tripEstimates.push({
        stopId: stu.stopId,
        latitude: station.latitude,
        longitude: station.longitude,
        time: Math.floor((stu.arrival.time - parseInt(timestamps[stuIndex])) / 60)
      })
    })
    tripEstimatesOverTime.push(tripEstimates);
  });


  plotSTUs(currentIndex);

  

  // const table = document.getElementById("stop-time-updates");

  // const stops = STUs[0].reduce((stopString, stu) => {
  //   const stopId = stu["stopId"];
  //   const station = gStationData.filter(i => {
  //     return i["GTFS Stop ID"] === stopId.slice(0, 3);
  //   })[0];

  //   const updates = STUs.reduce((updatesString, stuArray) => {
  //     const update = stuArray.filter(i => {
  //       return i.stopId === stopId;
  //     })[0]
  //     updatesString += `<td>${update ? (update.arrival ? (tsToHM(update.arrival.time)) : "") : ""}</td>`

  //     return updatesString;
  //   }, "");


  //   stopString += `<tr><td>${station["Stop Name"]}</td>${updates}</tr>`
  //   return stopString;
  // }, "");

  
  // const stuHeaders = timestamps.reduce((a, c) => {
  //   a += `<th>${tsToHM(c)}</th>`
  //   return a
  // }, "")

  // table.innerHTML = `
  //   <tr><th>Stop Name</th>${stuHeaders}</tr>${stops}
  // `
}

main();