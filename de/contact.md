---
layout: page
lang: de
ref: contact
title: Kontakt
lede: Expeditionsanfragen und die Kontaktdaten, die wirklich veröffentlicht sind.
description: Kontakt zu SKIBERGSTEIGEN fürs Skibergsteigen im Iran. Das Formular sagt selbst, wenn noch kein Zustelldienst angeschlossen ist.
permalink: /de/contact/
---

Nutzen Sie das Formular für eine Reise, die Sie wirklich erwägen. Es fragt nach Namen, E-Mail, Staatsangehörigkeit, einem Ziel, der Art des Skifahrens, Ihrer Erfahrung, den Daten, der Gruppengröße und einer Nachricht. Das ist der Wunsch nach einem Gespräch.

{% assign info = site.data.site %}
<h2>Veröffentlichte Kontaktdaten</h2>
<ul>
  <li>{{ site.data.ui.de.contact_email }}: {% if info.contact.email != "" %}<a href="mailto:{{ info.contact.email }}">{{ info.contact.email }}</a>{% else %}{{ site.data.ui.de.contact_missing }}{% endif %}</li>
  <li>{{ site.data.ui.de.contact_phone }}: {% if info.contact.phone != "" %}{{ info.contact.phone }}{% else %}{{ site.data.ui.de.contact_missing }}{% endif %}</li>
  <li>{{ site.data.ui.de.contact_address }}: {% if info.contact.address != "" %}{{ info.contact.address }}{% else %}{{ site.data.ui.de.contact_missing }}{% endif %}</li>
</ul>
<p>Profile in sozialen Medien erscheinen erst, wenn eine Adresse in <code>_data/site.yml</code> eingetragen ist. Hier wird keines erfunden.</p>

{% include inquiry-form.html %}
