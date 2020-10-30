console.log("Slide 5");

function main() {
  const table = document.getElementById("stop-time-updates");

  const stops = STUs[0].reduce((stopString, stu) => {
    const stopId = stu["stopId"];
    const station = gStationData.filter(i => {
      return i["GTFS Stop ID"] === stopId.slice(0, 3);
    })[0];

    const updates = STUs.reduce((updatesString, stuArray) => {
      const update = stuArray.filter(i => {
        return i.stopId === stopId;
      })[0]
      updatesString += `<td>${update ? (update.arrival ? (tsToHM(update.arrival.time)) : "") : ""}</td>`

      return updatesString;
    }, "");


    stopString += `<tr><td>${station["Stop Name"]}</td>${updates}</tr>`
    return stopString;
  }, "");

  
  const stuHeaders = timestamps.reduce((a, c) => {
    a += `<th>${tsToHM(c)}</th>`
    return a
  }, "")

  table.innerHTML = `
    <tr><th>Stop Name</th>${stuHeaders}</tr>${stops}
  `
}

main();