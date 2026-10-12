---
layout: default
title: صفحه اصلی
description: مرجع تخصصی صعودهای ورزشی
permalink: /
nav_exclude: true
---

# صعودهای ورزشی

مرجع تخصصی آموزش، دانش علمی و پژوهش در سنگ‌نوردی ورزشی.

## موضوعات اصلی

- [بولدر](/topics/bouldering/)
- [لید](/topics/lead/)
- [سرعت](/topics/speed/)
- [تجهیزات و تکنیک‌ها](/topics/techniques/)
- [علم و پژوهش](/topics/science/)
- [قوانین و مسابقات](/topics/competitions/)

## آخرین مطالب

{% assign latest_posts = site.posts | sort: "date" | reverse %}

{% for post in latest_posts limit:10 %}
### [{{ post.title }}]({{ post.url | relative_url }})

{% if post.date %}
<small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endif %}

{% if post.excerpt %}
{{ post.excerpt | strip_html | truncatewords: 35 }}
{% endif %}

{% endfor %}

---

مطالب این سایت با هدف ارائه اطلاعات معتبر و قابل ارجاع درباره صعودهای ورزشی منتشر می‌شوند.

- [درباره ما](/about/)
- [سیاست تحریریه و منابع](/editorial-policy/)
