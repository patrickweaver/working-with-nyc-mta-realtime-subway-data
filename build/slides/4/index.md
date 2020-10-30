---
layout: layouts/main.hbs
title: "Slide 4: Working with NYC MTA Real-Time Subway Data"
cardTitle: "What the GTFS Data means"
tags: slides
---

The useful data is all in the `Entity` array. This array is made up of two kinds of objects, `tripUpdate`s and `vehicle`s. These objects come in pairs, which are probably in sequence in the array. Each has an `id` property, which will not refer always to the same train between API responses.

Each `vehicle` or `tripUpdate` item will have a `trip` property that will be the same between the pairs. This has a `tripId` property which can be used to identify the train in future API responses, and shows the train's line designation, and direction (all trains in the system are classified as either `N` or `S`). It also has a frustratingly HH:MM:SS formatted timestamp for when the train started (or will start) its journey.

<pre><code>

"trip": {
  "tripId": "081600_A..N",
  "startTime": "13:36:00",
  "startDate": "20200902",
  "routeId": "A"
}

</pre></code>

### vehicle Objects
A `vehicle` object has information about the current status of the train. The `trip` property will stay consistent throughout the train's journey in future API responses. `tripUpdate` objects have a matching `trip` property. The `currentStopSequence` counts the number of stops the train has made on the current journey. This may refer to a different stop depending on things like if the train is local or express. `stopId` refers to the last station the train stopped at. The MTA mantains [a list of all the stations in the system](http://web.mta.info/developers/data/nyct/subway/Stations.csv) where this `stopId` is called the `GTFS StopId`.

<pre><code>

"vehicle": {
  "trip": {
    "tripId": "081600_A..N",
    "startTime": "13:36:00",
    "startDate": "20200902",
    "routeId": "A"
  },
  "currentStopSequence": 35,
  "stopId": "A05"
}

</pre></code>

### tripUpdate Objects

A `tripUpdate` object has information about where the train will be in the future. The `stopTimeUpdate` property is an array of future stops with arrival/departure timestamps (from what I've seen these timestamps are always the same), and a `stopId`. The example below shows a train near the end of its journey with only 2 stops to go.

<pre><code>

"tripUpdate": {
  "trip": {
    "tripId": "081600_A..N",
    "startTime": "13:36:00",
    "startDate": "20200902",
    "routeId": "A"
  },
  "stopTimeUpdate": [

    {
      "arrival": { "time": "1599074067" },
      "departure": { "time": "1599074067" },
      "stopId": "A03N"
    },
    
    {
      "arrival": { "time": "1599074262" },
      "departure": { "time": "1599074262" },
      "stopId": "A02N"
    }

  ]
}

</pre></code>