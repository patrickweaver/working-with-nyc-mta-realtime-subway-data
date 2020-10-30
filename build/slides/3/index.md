---
layout: layouts/main.hbs
title: "Slide 3: Working with NYC MTA Real-Time Subway Data"
cardTitle: "API Feed Responses"
tags: slides
---

The API Responses are based on the [GTFS Realtime specification](https://developers.google.com/transit/gtfs-realtime), which is based on Protocol Buffers, or “Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data”.

If you're working with the subway data on the web, you may want to easily convert it to JSON. I use the [gtfs-realtime-bindings npm module](https://www.npmjs.com/package/gtfs-realtime-bindings). This may or may not be an efficient or smart thing to do, but you probably want to get straight to exploring the real-time data and not a mechanism for serializing structured data.

Converted to JSON, it looks like this:

<pre><code>
{
  "header": {
    "gtfsRealtimeVersion": "1.0",
    "timestamp": "1599073154"
  },
  "entity": [

    {
      "id": "000001A",
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
    },

    {
      "id": "000002A",
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
    }

  ]
}
</pre></code>