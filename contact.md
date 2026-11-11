---
layout: page
lang: en
ref: contact
title: Contact
lede: Expedition inquiries, and the contact details that have actually been published.
description: Contact SKIBERGSTEIGEN about ski mountaineering in Iran. The inquiry form explains itself when no delivery service is connected.
permalink: /contact/
---

Use the form for a journey you are actually considering. It asks for your name, email, nationality, a destination, the kind of skiing, your experience, dates, the size of the party, and a message. That is a request for a conversation.

{% assign info = site.data.site %}
<h2>Published contact details</h2>
<ul>
  <li>{{ site.data.ui.en.contact_email }}: {% if info.contact.email != "" %}<a href="mailto:{{ info.contact.email }}">{{ info.contact.email }}</a>{% else %}{{ site.data.ui.en.contact_missing }}{% endif %}</li>
  <li>{{ site.data.ui.en.contact_phone }}: {% if info.contact.phone != "" %}{{ info.contact.phone }}{% else %}{{ site.data.ui.en.contact_missing }}{% endif %}</li>
  <li>{{ site.data.ui.en.contact_address }}: {% if info.contact.address != "" %}{{ info.contact.address }}{% else %}{{ site.data.ui.en.contact_missing }}{% endif %}</li>
</ul>
<p>Social profiles are listed in the footer only when an address has been added to <code>_data/site.yml</code>. None are invented here.</p>

{% include inquiry-form.html %}
