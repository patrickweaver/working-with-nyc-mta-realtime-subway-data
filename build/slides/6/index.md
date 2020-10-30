---
layout: layouts/map.hbs
title: "Slide 6: Working with NYC MTA Real-Time Subway Data"
cardTitle: "Showing subway data on a map"
tags: slides
---

Buried within\* the non-real-time GTFS files the MTA provides shape arrays for each line. The arrays have thousands of Latitude/Longitude points that describe the physical tracks.

\* "New York City Transit Subway" link on [this page](http://web.mta.info/developers/developer-data-terms.html#data) after clicking through TOS.

<pre><code>
{
  "shape_id": "G..N13R",
  "shape_pt_lat": "40.744766",
  "shape_pt_lon": "-73.948280",
  "shape_pt_sequence": "515",
  "shape_dist_traveled": ""
},
{
  "shape_id": "G..N13R",
  "shape_pt_lat": "40.744817",
  "shape_pt_lon": "-73.948164",
  "shape_pt_sequence": "516",
  "shape_dist_traveled": ""
},
{
  "shape_id": "G..N13R",
  "shape_pt_lat": "40.744866",
  "shape_pt_lon": "-73.948049",
  "shape_pt_sequence": "517",
  "shape_dist_traveled": ""
},

</pre></code>


These can be used to draw the line on the map.


<script src="../../station.js"></script>



