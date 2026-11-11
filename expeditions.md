---
layout: page
lang: en
ref: expeditions
title: Expeditions
lede: Outlines of how ski travel in these mountains is organised. None of them is a confirmed departure.
description: Ski mountaineering and ski touring expedition outlines in Iran. No prices or dates until they are confirmed. Inquire for availability.
image: /assets/images/destinations/alam-kuh/glacial-lake-1800.webp
hero_image: alam-kuh-lake
overlay_header: true
permalink: /expeditions/
wide: true
---

An expedition page on this site is a way to see the shape of a journey before you write. It is not a product with a price. Where a departure, a guide, or a cost is not confirmed, the page says so in those words: contact us for current expedition details and availability.

## Ski mountaineering expeditions {#ski-mountaineering}

Ski mountaineering, as this site uses the phrase, is a journey in which the ascent and the ski descent are one project, usually over several days, in terrain that is not patrolled. The [Damavand](/expeditions/damavand-ski-mountaineering/) and [Alam Kuh](/expeditions/alam-kuh-ski-mountaineering/) outlines are the two references. They are not bookings.

## Ski touring {#ski-touring}

Ski touring here means travel on skins, for a day or for several, on snow that nobody has prepared. [Zard Kuh](/expeditions/zard-kuh-ski-touring/) and the [Dena](/expeditions/dena-ski-touring/) are the Zagros references. A resort piste in the Alborz, where those exist, is a different activity and is not what these pages describe.

## High-altitude ski ascents {#high-altitude}

Height changes the day before steepness does. Damavand is the objective on this site where that is obviously true. Read the [Damavand outline](/expeditions/damavand-ski-mountaineering/) and the [destination page](/destinations/damavand/) together. The elevation dispute is part of the planning, not a footnote to skip.

## Backcountry skiing {#backcountry}

Backcountry, on this site, means unsecured slopes: no markers, no control work, no ski patrol you can assume will arrive. Every outline above is backcountry in that sense. The decision is about snow and consequence.

## Technical alpine winter travel {#technical}

Some ground asks for the skis to come off. Alam Kuh is the reference, because the wall, the glacier basin, and the approaches are not a snow dome. The [Alam Kuh outline](/expeditions/alam-kuh-ski-mountaineering/) is deliberately short on grades.

## Current outlines

{% assign trips = site.expeditions | where: "lang", page.lang | sort: "order" %}
{% for trip in trips %}
  {% include expedition-card.html expedition=trip %}
{% endfor %}
