---
layout: page
lang: de
ref: legal
title: Impressum
lede: Die Angaben zur Betreiberin oder zum Betreiber, die diese Website drucken darf. Leere Felder sind absichtlich leer.
description: Impressum für SKIBERGSTEIGEN. Die Identität der verantwortlichen Stelle bleibt unveröffentlicht, bis sie in der Konfiguration steht.
permalink: /de/legal-notice/
---

Dieser Hinweis ist der Platz für die Angaben, die ein Impressum braucht. Er erfindet kein Unternehmen, um vollständig zu wirken.

{% assign op = site.data.site.operator %}
<ul>
  <li>Name: {% if op.legal_name != "" %}{{ op.legal_name }}{% else %}Nicht veröffentlicht. Eintrag in <code>_data/site.yml</code>.{% endif %}</li>
  <li>Verantwortliche Person: {% if op.responsible_person != "" %}{{ op.responsible_person }}{% else %}Nicht veröffentlicht.{% endif %}</li>
  <li>Register: {% if op.registration != "" %}{{ op.registration }}{% else %}Nicht veröffentlicht.{% endif %}</li>
  <li>Umsatzsteuer- oder Steuerkennzeichen: {% if op.vat_id != "" %}{{ op.vat_id }}{% else %}Nicht veröffentlicht.{% endif %}</li>
  <li>Land: {% if op.country != "" %}{{ op.country }}{% else %}Nicht veröffentlicht.{% endif %}</li>
</ul>

Die für dieses Projekt vorgesehene Adresse ist [https://skibergsteigen.ir](https://skibergsteigen.ir). Fotografien sind auf der Seite [Bildnachweise](/de/photo-credits/) unter ihrer eigenen Lizenz genannt. Die Texte veröffentlicht das Projekt. Nichts davon ist eine Genehmigung, ein Angebot mit Preis oder eine amtliche Aussage einer Behörde.

Für ein vollständiges Impressum nach deutschem Recht fehlen, solange die Felder leer sind, Name und Anschrift der verantwortlichen Stelle. Tragen Sie sie ein, bevor die Website sich an ein deutschsprachiges Publikum als geschäftlicher Auftritt wendet. Diese Seite ersetzt diese Pflicht nicht.
