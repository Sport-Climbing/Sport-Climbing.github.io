---
layout: page
lang: en
ref: destinations
title: Destinations
lede: Four Iranian mountain areas this site is willing to describe. Each has its own page, its own photographs, and its own limits.
description: Ski mountaineering destinations in Iran — Mount Damavand, Alam Kuh, Zard Kuh and the Dena mountains — with elevations only where sources can be named.
image: /assets/images/destinations/damavand/south-face-polour-1800.webp
hero_image: damavand-polour
overlay_header: true
permalink: /destinations/
wide: true
---

The Alborz and the Zagros are the two systems. Inside them, this site starts with four objectives that international ski mountaineers ask about: Damavand, Alam Kuh, Zard Kuh, and Dena. Other ranges exist. They will be added when there is something accurate to say, not to lengthen a menu.

Elevations are printed only with the disagreement attached. Access notes name corridors, not driving times. Nothing below is a snow report.

{% assign featured = site.destinations | where: "lang", page.lang | where: "featured", true | sort: "order" %}
<ol class="dest-list">
{% for destination in featured %}
  {% include destination-card.html destination=destination index=forloop.index0 lang=page.lang %}
{% endfor %}
</ol>
