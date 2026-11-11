---
layout: page
lang: en
ref: privacy
title: Privacy policy
lede: What this static site does with information, and what it does not do yet.
description: Privacy policy for SKIBERGSTEIGEN. A static site, no accounts, and an inquiry form that stores nothing until a form service is connected.
permalink: /privacy-policy/
---

SKIBERGSTEIGEN is a static website. It does not offer accounts, and it does not run its own database.

## Pages you read

The pages are files. Reading them does not create a profile on this server. This release does not embed an analytics service and does not set a cookie of its own for tracking. If that changes, this page will name the service before it is switched on.

## The inquiry form

The form in this release is not connected to a delivery service. Submitting it does not store your message. The page tells you that, and it tells you again if you try to send. When the site owner sets `inquiry.endpoint` in `_config.yml` to a form provider, the fields you submit are sent to that provider, under that provider's terms. The fields are your name, email, nationality, destination, type of experience, experience level, dates, number of participants, and message. A hidden field exists to catch automated submissions. Do not connect the form until you have read the provider's privacy terms and named the provider on this page.

## Contact details

Email, phone, and address are shown only if they have been entered in `_data/site.yml`. An empty field is described as unpublished. It is not replaced with a guess.

## Operator

The legal name of the operator is unpublished until it is entered in `_data/site.yml`. A privacy contact will be added with it. Until then, the [contact page](/contact/) is the only door, and it is honest about being unconnected.
