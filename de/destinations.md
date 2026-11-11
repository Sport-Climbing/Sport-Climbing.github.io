---
layout: page
lang: de
ref: destinations
title: Ziele
lede: Vier Gebirgsräume im Iran, die diese Website zu beschreiben bereit ist. Jeder hat eine eigene Seite, eigene Fotografien und eigene Grenzen.
description: Ziele fürs Skibergsteigen im Iran — Damavand, Alam Kuh, Zard Kuh und das Dena-Gebirge — mit Höhen nur dort, wo die Quellen genannt werden können.
image: /assets/images/destinations/damavand/south-face-polour-1800.webp
hero_image: damavand-polour
overlay_header: true
permalink: /de/destinations/
wide: true
---

Der Alborz und der Zagros sind die beiden Systeme. Darin beginnt diese Website mit vier Zielen, nach denen internationale Skibergsteiger fragen: Damavand, Alam Kuh, Zard Kuh und Dena. Andere Gebirge gibt es. Sie kommen dazu, wenn etwas Genaues zu sagen ist, nicht um eine Speisekarte zu verlängern.

Höhen stehen nur mit dem Widerspruch daneben. Zugangshinweise nennen Korridore, keine Fahrzeiten. Nichts davon ist ein Schneelagebericht.

{% assign featured = site.destinations | where: "lang", page.lang | where: "featured", true | sort: "order" %}
<ol class="dest-list">
{% for destination in featured %}
  {% include destination-card.html destination=destination index=forloop.index0 lang=page.lang %}
{% endfor %}
</ol>
