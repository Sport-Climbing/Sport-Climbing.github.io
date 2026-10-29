---
layout: default
title: مطالب
description: مطالب تخصصی صعودهای ورزشی
permalink: /
nav_exclude: true
---


{% assign latest_posts = site.posts | sort: "date" | reverse %}

{% assign featured_post = latest_posts | first %}

{% if featured_post %}
<section class="home-featured" dir="rtl">
  <a class="home-featured-link" href="{{ featured_post.url | relative_url }}">
    {% if featured_post.image %}
    <img
      class="home-featured-image"
      src="{{ featured_post.image | relative_url }}"
      alt="{{ featured_post.title | escape }}"
      loading="eager">
    {% endif %}
    <div class="home-featured-content">
      <h1>{{ featured_post.title | escape }}</h1>
      <p class="home-post-date">
        {{ featured_post.date | date: "%Y-%m-%d" }}
      </p>
      {% if featured_post.excerpt %}
      <p>{{ featured_post.excerpt | strip_html | strip_newlines | truncatewords: 40 }}</p>
      {% endif %}
    </div>
  </a>
</section>
{% endif %}

<div class="home-post-grid" dir="rtl">
  {% for post in latest_posts offset:1 limit:6 %}
  <article class="home-post-card">
    <a href="{{ post.url | relative_url }}">
      {% if post.image %}
      <img
        class="home-post-image"
        src="{{ post.image | relative_url }}"
        alt="{{ post.title | escape }}"
        loading="lazy">
      {% endif %}
      <h2>{{ post.title | escape }}</h2>
    </a>

    <p class="home-post-date">
      {{ post.date | date: "%Y-%m-%d" }}
    </p>

    {% if post.excerpt %}
    <p>{{ post.excerpt | strip_html | strip_newlines | truncatewords: 25 }}</p>
    {% endif %}
  </article>
  {% endfor %}
</div>
