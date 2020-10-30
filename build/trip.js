const trip = {
  "tripId": "084513_G..N",
  "startTime": "14:05:08",
  "startDate": "20201030",
  "routeId": "G"
}

const timestamps = [
  "1604081798",
  "1604081918",
  "1604082038",
  "1604082158",
  "1604082278",
  "1604082398",
  "1604082639",
  "1604082879",
  "1604083114",
  "1604083234",

]

const STUs = [
  [
    {
      "arrival": { "time": "1604081853" },
      "departure": { "time": "1604081853" },
      "stopId": "F21N"
    },
    {
      "arrival": { "time": "1604081943" },
      "departure": { "time": "1604081943" },
      "stopId": "F20N"
    },
    {
      "arrival": { "time": "1604082093" },
      "departure": { "time": "1604082093" },
      "stopId": "A42N"
    },
    {
      "arrival": { "time": "1604082243" },
      "departure": { "time": "1604082243" },
      "stopId": "G36N"
    },
    {
      "arrival": { "time": "1604082333" },
      "departure": { "time": "1604082333" },
      "stopId": "G35N"
    },
    {
      "arrival": { "time": "1604082423" },
      "departure": { "time": "1604082423" },
      "stopId": "G34N"
    },
    {
      "arrival": { "time": "1604082483" },
      "departure": { "time": "1604082483" },
      "stopId": "G33N"
    },
    {
      "arrival": { "time": "1604082573" },
      "departure": { "time": "1604082573" },
      "stopId": "G32N"
    },
    {
      "arrival": { "time": "1604082663" },
      "departure": { "time": "1604082663" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082753" },
      "departure": { "time": "1604082753" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082813" },
      "departure": { "time": "1604082813" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082993" },
      "departure": { "time": "1604082993" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604083083" },
      "departure": { "time": "1604083083" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083233" },
      "departure": { "time": "1604083233" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083293" },
      "departure": { "time": "1604083293" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604081901" },
      "departure": { "time": "1604081901" },
      "stopId": "F21N"
    },
    {
      "arrival": { "time": "1604081907" },
      "departure": { "time": "1604081907" },
      "stopId": "F20N"
    },
    {
      "arrival": { "time": "1604082057" },
      "departure": { "time": "1604082057" },
      "stopId": "A42N"
    },
    {
      "arrival": { "time": "1604082207" },
      "departure": { "time": "1604082207" },
      "stopId": "G36N"
    },
    {
      "arrival": { "time": "1604082297" },
      "departure": { "time": "1604082297" },
      "stopId": "G35N"
    },
    {
      "arrival": { "time": "1604082387" },
      "departure": { "time": "1604082387" },
      "stopId": "G34N"
    },
    {
      "arrival": { "time": "1604082447" },
      "departure": { "time": "1604082447" },
      "stopId": "G33N"
    },
    {
      "arrival": { "time": "1604082537" },
      "departure": { "time": "1604082537" },
      "stopId": "G32N"
    },
    {
      "arrival": { "time": "1604082627" },
      "departure": { "time": "1604082627" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082717" },
      "departure": { "time": "1604082717" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082777" },
      "departure": { "time": "1604082777" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082957" },
      "departure": { "time": "1604082957" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604083047" },
      "departure": { "time": "1604083047" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083197" },
      "departure": { "time": "1604083197" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083257" },
      "departure": { "time": "1604083257" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604082027" },
      "departure": { "time": "1604082027" },
      "stopId": "A42N"
    },
    {
      "arrival": { "time": "1604082171" },
      "departure": { "time": "1604082171" },
      "stopId": "G36N"
    },
    {
      "arrival": { "time": "1604082261" },
      "departure": { "time": "1604082261" },
      "stopId": "G35N"
    },
    {
      "arrival": { "time": "1604082351" },
      "departure": { "time": "1604082351" },
      "stopId": "G34N"
    },
    {
      "arrival": { "time": "1604082411" },
      "departure": { "time": "1604082411" },
      "stopId": "G33N"
    },
    {
      "arrival": { "time": "1604082501" },
      "departure": { "time": "1604082501" },
      "stopId": "G32N"
    },
    {
      "arrival": { "time": "1604082591" },
      "departure": { "time": "1604082591" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082681" },
      "departure": { "time": "1604082681" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082741" },
      "departure": { "time": "1604082741" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082921" },
      "departure": { "time": "1604082921" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604083011" },
      "departure": { "time": "1604083011" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083161" },
      "departure": { "time": "1604083161" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083221" },
      "departure": { "time": "1604083221" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604082146" },
      "departure": { "time": "1604082146" },
      "stopId": "G36N"
    },
    {
      "arrival": { "time": "1604082226" },
      "departure": { "time": "1604082226" },
      "stopId": "G35N"
    },
    {
      "arrival": { "time": "1604082316" },
      "departure": { "time": "1604082316" },
      "stopId": "G34N"
    },
    {
      "arrival": { "time": "1604082376" },
      "departure": { "time": "1604082376" },
      "stopId": "G33N"
    },
    {
      "arrival": { "time": "1604082466" },
      "departure": { "time": "1604082466" },
      "stopId": "G32N"
    },
    {
      "arrival": { "time": "1604082556" },
      "departure": { "time": "1604082556" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082646" },
      "departure": { "time": "1604082646" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082706" },
      "departure": { "time": "1604082706" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082886" },
      "departure": { "time": "1604082886" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604082976" },
      "departure": { "time": "1604082976" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083126" },
      "departure": { "time": "1604083126" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083186" },
      "departure": { "time": "1604083186" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604082266" },
      "departure": { "time": "1604082266" },
      "stopId": "G35N"
    },
    {
      "arrival": { "time": "1604082333" },
      "departure": { "time": "1604082333" },
      "stopId": "G34N"
    },
    {
      "arrival": { "time": "1604082393" },
      "departure": { "time": "1604082393" },
      "stopId": "G33N"
    },
    {
      "arrival": { "time": "1604082483" },
      "departure": { "time": "1604082483" },
      "stopId": "G32N"
    },
    {
      "arrival": { "time": "1604082573" },
      "departure": { "time": "1604082573" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082663" },
      "departure": { "time": "1604082663" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082723" },
      "departure": { "time": "1604082723" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082903" },
      "departure": { "time": "1604082903" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604082993" },
      "departure": { "time": "1604082993" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083143" },
      "departure": { "time": "1604083143" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083203" },
      "departure": { "time": "1604083203" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604082386" },
      "departure": { "time": "1604082386" },
      "stopId": "G34N"
    },
    {
      "arrival": { "time": "1604082453" },
      "departure": { "time": "1604082453" },
      "stopId": "G33N"
    },
    {
      "arrival": { "time": "1604082543" },
      "departure": { "time": "1604082543" },
      "stopId": "G32N"
    },
    {
      "arrival": { "time": "1604082633" },
      "departure": { "time": "1604082633" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082723" },
      "departure": { "time": "1604082723" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082783" },
      "departure": { "time": "1604082783" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082963" },
      "departure": { "time": "1604082963" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604083053" },
      "departure": { "time": "1604083053" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083203" },
      "departure": { "time": "1604083203" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083263" },
      "departure": { "time": "1604083263" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604082625" },
      "departure": { "time": "1604082625" },
      "stopId": "G31N"
    },
    {
      "arrival": { "time": "1604082693" },
      "departure": { "time": "1604082693" },
      "stopId": "G30N"
    },
    {
      "arrival": { "time": "1604082753" },
      "departure": { "time": "1604082753" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082933" },
      "departure": { "time": "1604082933" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604083023" },
      "departure": { "time": "1604083023" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083173" },
      "departure": { "time": "1604083173" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083233" },
      "departure": { "time": "1604083233" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604082865" },
      "departure": { "time": "1604082865" },
      "stopId": "G29N"
    },
    {
      "arrival": { "time": "1604082953" },
      "departure": { "time": "1604082953" },
      "stopId": "G28N"
    },
    {
      "arrival": { "time": "1604083043" },
      "departure": { "time": "1604083043" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083193" },
      "departure": { "time": "1604083193" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083253" },
      "departure": { "time": "1604083253" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604083105" },
      "departure": { "time": "1604083105" },
      "stopId": "G26N"
    },
    {
      "arrival": { "time": "1604083201" },
      "departure": { "time": "1604083201" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083261" },
      "departure": { "time": "1604083261" },
      "stopId": "G22N"
    }
  ],
  [
    {
      "arrival": { "time": "1604083226" },
      "departure": { "time": "1604083226" },
      "stopId": "G24N"
    },
    {
      "arrival": { "time": "1604083293" },
      "departure": { "time": "1604083293" },
      "stopId": "G22N"
    }
  ],
]

function tsToHM(timestamp) {
  const d = new Date(parseInt(timestamp) * 1000);
  let hour = d.getHours();
  let m = "am";
  if (hour > 12) {
    hour = hour - 12;
    m = "pm";
  }

  const min = d.getMinutes();

  return `${hour}:${min} ${m}`
}