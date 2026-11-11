---
layout: page
lang: en
ref: legal
title: Legal notice
lede: The operator details this site is allowed to print. Empty fields are empty on purpose.
description: Legal notice for SKIBERGSTEIGEN. Operator identity is unpublished until it is added to the site configuration.
permalink: /legal-notice/
---

This notice is a placeholder for the facts a legal notice needs. It does not invent a company to look complete.

{% assign op = site.data.site.operator %}
<ul>
  <li>Legal name: {% if op.legal_name != "" %}{{ op.legal_name }}{% else %}Not published. Add it to <code>_data/site.yml</code>.{% endif %}</li>
  <li>Responsible person: {% if op.responsible_person != "" %}{{ op.responsible_person }}{% else %}Not published.{% endif %}</li>
  <li>Registration: {% if op.registration != "" %}{{ op.registration }}{% else %}Not published.{% endif %}</li>
  <li>VAT or tax identifier: {% if op.vat_id != "" %}{{ op.vat_id }}{% else %}Not published.{% endif %}</li>
  <li>Country: {% if op.country != "" %}{{ op.country }}{% else %}Not published.{% endif %}</li>
</ul>

The website address intended for this project is [https://skibergsteigen.ir](https://skibergsteigen.ir). Photographs are credited on the [credits page](/photo-credits/) under their own licences. The text of the site is published by the project. Nothing here is a permit, an offer with a price, or an official statement of any government.
