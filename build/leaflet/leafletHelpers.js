
const RAD_TO_DEG = 57.2958;

var map;

const markers = {
  stationCircle: {
    color: 'black',
    fillColor: 'white',
    fillOpacity: 0.5,
    radius: 50,
    draggable:"true"
  },

  trainCircle: {
    color: 'white',
    fillColor: 'black',
    fillOpacity: 1,
    radius: 100,
    weight: 2,
  }
}

function drawStation(station) {
  return L.circle([station.latitude, station.longitude], markers.stationCircle).addTo(map);
}

function drawMap(mapId) {
  map = L.map(mapId)
    .setView(MAP_CENTER, MAP_ZOOM);
  map.zoomControl.setPosition('bottomleft');
  L.tileLayer(TILE_LAYER, {
    attribution: '<a href="/map-attribution" target="_blank">Map Attribution</a> &#124; <a href="/terms-of-use" target="_blank">Terms of Use</a>',
    maxZoom: 18
  }).addTo(map);
  
  return map
}

function drawTracks(lineShape) {

  lineShape.forEach((point, index) => {
    if (index > 0) {
      const prevPoint = lineShape[index - 1];
      const a = [parseFloat(prevPoint["shape_pt_lat"]), parseFloat(prevPoint["shape_pt_lon"])];
      const b = [parseFloat(point["shape_pt_lat"]), parseFloat(point["shape_pt_lon"])];
      // Draw a line connecting station 1 to station 2:
      L.polyline([a, b], { color: "lightGreen" }).addTo(map);
    }
  });
}



function drawTrain(lat, lng) {
  const trainPosition = [lat, lng];
  const trainMarker = L.circle(trainPosition, markers.trainCircle).addTo(map);
  return trainMarker;
}

function moveTrain(marker, destinations, totalDuration) {
  const numberOfDestinations = destinations.length;
  const durationEach = totalDuration / numberOfDestinations;

  let durationElapsed = 0;

  destinations.forEach((loc) => {
    const timer = durationElapsed;
    setTimeout(() => {
      marker.slideTo([loc[0], loc[1]], {
        duration: durationEach,
        keepAtCenter: false,
      });
    }, timer);
    durationElapsed += durationEach;
  });
}

// Extrat lat/lng and convert to meters:
function dLatLng(s0, s1) {
  if (!s0 || !s1) {
    return [0, 0];
  }
  return [
    (s1.latitude - s0.latitude) / METER_LAT_OFFSET, 
    (s1.longitude - s0.longitude) / METER_LNG_OFFSET
  ];
}

// Convert meter vector back to Lat/Lng and find offset from set point (Station B):
function offsetFromPoint(pointLat, pointLng, normalizedOffsetMetersX, normalizedOffsetMetersY, offsetLength = 1) {
  return [
    pointLat + (METER_LAT_OFFSET * normalizedOffsetMetersX * offsetLength),
    pointLng + (METER_LNG_OFFSET * normalizedOffsetMetersY * offsetLength)
  ];
}

function findOffsetPoints(stationA, stationB, stationC) {
  // Length of offset line
  const offsetLength = 70;

  const pos = {};
  pos.a = stationA ? [stationA.latitude, stationA.longitude] : null;
  pos.b = stationB ? [stationB.latitude, stationB.longitude] : null;
  pos.c = stationC ? [stationC.latitude, stationC.longitude] : null;

  // Distance between stations A & B and stations B & C in meters:
  let dLatAB, dLngAB, dLatCB, dLngCB;
  [dLatAB, dLngAB] = dLatLng(stationB, stationA);
  [dLatCB, dLngCB] = dLatLng(stationB, stationC);

  // Turn station distances into vectors using Victor: http://victorjs.org/
  const abVector = new Victor(dLatAB, dLngAB);
  const cbVector = new Victor(dLatCB, dLngCB);

  // B is last station on line:
  if (!stationC) {
    const offsetAVector = abVector.clone().normalize().rotate(Math.PI / 2);
    stationB.nOffset = offsetFromPoint(pos.b[0], pos.b[1], offsetAVector.x, offsetAVector.y, offsetLength);
    stationB.sOffset = offsetFromPoint(pos.b[0], pos.b[1], offsetAVector.x, offsetAVector.y, -offsetLength);
    return [stationB.nOffset, stationB.sOffset];

    // B is first station on line
  } else if (!stationA) {
    const offsetCVector = cbVector.clone().normalize().rotate(Math.PI / 2);
    // Swap N and S for first station:
    stationB.sOffset = offsetFromPoint(pos.b[0], pos.b[1], offsetCVector.x, offsetCVector.y, offsetLength);
    stationB.nOffset = offsetFromPoint(pos.b[0], pos.b[1], offsetCVector.x, offsetCVector.y, -offsetLength);
    return [stationB.nOffset, stationB.sOffset];
  }

  // Create equal magnitude vectors with the same directions:
  const abVectorEqLen = abVector.clone().multiply(new Victor(cbVector.length(), cbVector.length()));
  const cbVectorEqLen = cbVector.clone().multiply(new Victor(abVector.length(), abVector.length()));

  // Create new vector of magnitude 1 meter that bisects abVector and cbVector:
  const offsetBVector = abVectorEqLen.clone().add(cbVectorEqLen).normalize();

  
  
  // Create 2 points on opposite sides of Station B 50 meters away
  // where the angles bisect the lines to Station A and C:
  const oPos = offsetFromPoint(pos.b[0], pos.b[1], offsetBVector.x, offsetBVector.y, offsetLength);
  const oPosNeg = offsetFromPoint(pos.b[0], pos.b[1], offsetBVector.x, offsetBVector.y, -offsetLength);

  const crossProduct = abVector.cross(cbVector);

  if (crossProduct < 0) {
    return [oPosNeg, oPos];
  } else {
    return [oPos, oPosNeg];
  }
  
}