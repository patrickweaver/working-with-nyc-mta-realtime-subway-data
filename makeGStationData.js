const fs = require("fs");

var stationData = require("./fullStationData.js");

main();

async function main() {

  const gStations = stationData.reduce((gStations, station) => {
    if(String(station["Daytime Routes"]).split(" ").includes("G")) {
      gStations.push(station);
    }
    return gStations;
  }, []);

  try {
    const gStationsCopy = `// Stations on the G line

    module.exports = `

    const filename = "./gStationData.js";
    fs.writeFile(filename, gStationsCopy + JSON.stringify(gStations), function (err) {
      if (err) return console.log("Error:\n", err);
      console.log(`G line stations written to ${filename}`);
    });
  } catch (error) {
    console.log("Error writing file")
  }
}