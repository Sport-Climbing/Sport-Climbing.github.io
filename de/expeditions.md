---
layout: page
lang: de
ref: expeditions
title: Expeditionen
lede: Übersichten, wie Skireisen in diesen Bergen aufgebaut sind. Keine davon ist eine bestätigte Abreise.
description: Übersichten zu Skibergsteigen und Skitouren im Iran. Keine Preise oder Termine, solange sie nicht bestätigt sind. Verfügbarkeit auf Anfrage.
image: /assets/images/destinations/alam-kuh/glacial-lake-1800.webp
hero_image: alam-kuh-lake
overlay_header: true
permalink: /de/expeditions/
wide: true
---

Eine Expeditionsseite auf dieser Website zeigt die Form einer Reise, bevor Sie schreiben. Sie ist kein Produkt mit einem Preis. Wo Abreise, Bergführer oder Kosten nicht bestätigt sind, sagt die Seite das in klaren Worten: Aktuelle Expeditionsdetails und die Verfügbarkeit teilen wir auf Anfrage mit.

## Skibergsteigen-Expeditionen {#skibergsteigen}

Skibergsteigen, so wie diese Website das Wort benutzt, ist eine Reise, bei der Aufstieg und Skiaabfahrt ein Vorhaben sind, meist über mehrere Tage, in Gelände, das niemand sichert. Die Übersichten zum [Damavand](/de/expeditions/damavand-ski-mountaineering/) und zum [Alam Kuh](/de/expeditions/alam-kuh-ski-mountaineering/) sind die beiden Bezüge. Sie sind keine Buchungen.

## Skitouren {#skitouren}

Skitouren heißen hier das Gehen auf Fellen, einen Tag oder mehrere, auf Schnee, den niemand präpariert hat. [Zard Kuh](/de/expeditions/zard-kuh-ski-touring/) und die [Dena](/de/expeditions/dena-ski-touring/) sind die Bezüge im Zagros. Eine Piste im Alborz, wo es sie gibt, ist eine andere Sache und nicht das, was diese Seiten beschreiben.

## Skihochtouren {#skihochtouren}

Die Höhe verändert den Tag, bevor es die Steilheit tut. Der Damavand ist auf dieser Website das Ziel, an dem das offensichtlich ist. Lesen Sie die [Damavand-Übersicht](/de/expeditions/damavand-ski-mountaineering/) und die [Bergseite](/de/destinations/damavand/) zusammen. Der Streit um die Höhe gehört zur Planung.

## Skitouren im ungesicherten Gelände {#backcountry}

Ungesichertes Gelände heißt hier: keine Markierung, keine Sicherung, keine Pistenrettung, deren Eintreffen man annehmen darf. Jede Übersicht oben ist in diesem Sinn Gelände. Es entscheidet der Schnee und die Konsequenz.

## Technische alpine Winterreisen {#technisch}

Manches Gelände verlangt, dass die Ski vom Fuß kommen. Der Alam Kuh ist der Bezug, weil Wand, Gletscherkar und Zustiege kein Schneedom sind. Die [Übersicht zum Alam Kuh](/de/expeditions/alam-kuh-ski-mountaineering/) ist bei Graden absichtlich kurz.

## Die vorliegenden Übersichten

{% assign trips = site.expeditions | where: "lang", page.lang | sort: "order" %}
{% for trip in trips %}
  {% include expedition-card.html expedition=trip %}
{% endfor %}
