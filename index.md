---
layout: default
title: مطالب
description: مطالب تخصصی صعودهای ورزشی
permalink: /
nav_exclude: true
---

{% assign latest_posts = site.posts | sort: "date" | reverse %}

{% for post in latest_posts limit:20 %}
## [{{ post.title }}]({{ post.url | relative_url }})

<small>{{ post.date | date: "%Y-%m-%d" }}</small>

{% if post.excerpt %}
{{ post.excerpt | strip_html | truncatewords: 45 }}
{% endif %}

{% unless forloop.last %}

---

{% endunless %}
{% endfor %}
