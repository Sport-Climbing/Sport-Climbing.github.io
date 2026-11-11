# SKIBERGSTEIGEN

International website for ski mountaineering and ski touring in Iran. The public address this project is built for is [https://skibergsteigen.ir](https://skibergsteigen.ir).

The site introduces four mountain areas — Damavand, Alam Kuh, Zard Kuh, and the Dena crest — and asks interested visitors to send an expedition inquiry. It is not a ski resort, a shop, or a booking engine. Prices, departure dates, guide names, and company registration are omitted until they are real. Where published elevations disagree, the page says so.

English is the default language (`/`). German is the second language (`/de/`). French and Dutch are reserved in `_data/languages.yml` and are not published.

## Technology

- [Jekyll](https://jekyllrb.com/), built with the [`github-pages`](https://github.com/github/pages-gem) gem so the plugin set matches GitHub Pages
- Liquid, HTML, CSS, and a small vanilla JavaScript file
- Plugins: `jekyll-seo-tag`, `jekyll-sitemap` (both allowed on GitHub Pages)
- No React, Vue, or theme gem. The layouts in `_layouts/` are the theme

## Install and run locally

Requirements: Ruby 3.2 and Bundler.

```bash
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve
```

The site is served at `http://127.0.0.1:4000/`.

Build the static files without starting a server:

```bash
bundle exec jekyll build
```

Output is written to `_site/`, which is gitignored. A GitHub Actions workflow (`.github/workflows/jekyll.yml`) runs the same build.

## Deploy on GitHub Pages

This repository can be published by GitHub Pages from the default branch, because it uses only supported plugins and does not set a `baseurl`.

1. Merge the site to the branch Pages is configured to publish (for a `*.github.io` repository, that is usually `main`).
2. In the repository settings, under Pages, keep the source on that branch, folder `/` (root).
3. The file `CNAME` contains `skibergsteigen.ir`. In the DNS for that domain, add the records GitHub Pages asks for (an `A`/`AAAA` set or a `CNAME` to the `*.github.io` host). HTTPS is turned on in the Pages settings after DNS resolves.
4. Confirm `https://skibergsteigen.ir/` and `https://skibergsteigen.ir/de/` both respond, and that `https://skibergsteigen.ir/sitemap.xml` lists both languages.

The site is not live merely because this repository contains the files. It is live only after Pages has built the branch and the domain points at that build.

**Custom domain.** `CNAME` is `skibergsteigen.ir`, not `sportclimbing.ir`. Publishing this project from the `Sport-Climbing.github.io` repository replaces the previous sport-climbing site and its custom domain. Do not merge it into `main` if `sportclimbing.ir` must keep being served from this repository. The repository named `Sport-Climbing/skibergsteigen.ir` did not exist when this site was built, so the files are in the repository the work was assigned to.

## Directory structure

```
_config.yml                 site URL, collections, inquiry endpoint
_data/                      navigation, translations, UI strings, photographs
_layouts/                   default, home, page, destination, expedition, journal, article
_includes/                  header, footer, form, cards, gallery, SEO helpers
_destinations/              one file per language per mountain
_expeditions/               outlines, not confirmed departures
_posts/                     journal essays
assets/css, assets/js
assets/images/              photographs, mark, placeholders
assets/fonts/               self-hosted Newsreader and Source Sans 3 (OFL)
de/                         German pages that are not collection documents
index.md and the other root Markdown files   English pages
```

Permalinks are pretty (`/destinations/damavand/`). German collection documents set their own permalink under `/de/`.

## Add a destination

Create two files so both languages exist. Copy the shape of `_destinations/damavand.md` and `_destinations/de-damavand.md`.

Set at least:

```yaml
lang: en            # or de
ref: new-range      # same key in both languages
title: ...
description: ...    # unique, used as the meta description
location: ...
order: 5
featured: true      # false hides it from the homepage list
summary: ...        # the card text
card_image: some-id # key in _data/images.yml
hero_image: some-id
permalink: /destinations/new-range/    # German: /de/destinations/new-range/
latitude: 0.0       # only if you have a published coordinate; otherwise omit
longitude: 0.0
related_keys:
  - new-range-ski
facts:
  - label: Range
    value: ...
gallery:
  - id: some-id
    feature: true
```

Then add the key to `_data/translations.yml`:

```yaml
new-range:
  en: /destinations/new-range/
  de: /de/destinations/new-range/
```

Do not invent an elevation, a grade, or a snow report. If sources disagree, say so in the prose.

## Add an expedition outline

Expedition files live in `_expeditions/`. An outline is not a product. Leave `confirmed: false` until a departure, a price, and the services are real. The layout prints “Contact us for current expedition details and availability.” and hides empty commercial fields.

This block is a **template**. It is not a confirmed offering. Do not publish it with a made-up price or date.

```yaml
---
layout: expedition
lang: en
ref: exp-example          # add the same ref to _data/translations.yml
key: example-ski          # shared by the English and German files
title: Example ski outline
destination_name: Mount Damavand
destination_url: /destinations/damavand/
description: One sentence for search results.
lede: One sentence under the title.
summary: One sentence on the card.
order: 9
confirmed: false
hero_image: damavand-winter-cone
image: /assets/images/destinations/damavand/south-face-2010-1800.webp
permalink: /expeditions/example-ski/
overlay_header: true
duration: ""              # leave empty until it is a real itinerary length
difficulty: ""            # do not invent a grade
season: ""
technical: ""
physical: ""
equipment: ""
experience: ""
included: ""
excluded: ""
price: ""
availability: ""
---

Write what kind of journey this is. Do not invent a day-by-day diary.
```

The German file uses the same `key` and `ref`, `lang: de`, and a permalink under `/de/expeditions/`.

## Publish a journal article

English:

```
_posts/2026-11-11-your-title.md
```

```yaml
---
layout: article
lang: en
ref: journal-your-title     # add translations.yml if a German version exists
title: ...
description: ...
topic: destinations         # see _data/topics.yml for the keys
card_image: damavand-polour
image: /assets/images/destinations/damavand/south-face-polour-1800.webp
permalink: /journal/your-title/
---
```

German: same date is allowed, a different filename, `lang: de`, and `permalink: /de/journal/ihr-titel/`. Write the German article. Do not machine-translate the English file and commit that as the German page.

Do not publish an expedition report as if it happened. The journal index says reports appear only after a real journey.

`topic` must be one of: `ski-mountaineering`, `ski-touring`, `destinations`, `expedition-reports`, `mountain-safety`, `equipment`, `snow-avalanche`, `travel-information`.

## Images

Photographs in use are listed in `_data/images.yml` with alt text in both languages, the photographer, the licence, and the Wikimedia Commons source. The files are resized WebP derivatives in `assets/images/`.

To replace a photograph:

1. Put the new WebP files next to the old ones, at about 1800 px and 960 px wide.
2. Update `src`, `src_small`, `width`, and `height` for that `id` in `_data/images.yml`.
3. Rewrite `alt_en`, `alt_de`, `caption_en`, and `caption_de` so they describe the new frame.
4. Keep the licence and a link to the source. Say if you cropped or resized.

Placeholders live in `assets/images/placeholders/` and are registered in `_data/wanted_photos.yml`. They are labelled “Photograph needed” and are not presented as pictures of the mountains. The credits page (`/photo-credits/` and `/de/photo-credits/`) lists both.

Do not drop in a resort piste, a photograph from another country, or a generated image and caption it as an Iranian ski descent.

Suggested folders, already started:

```
assets/images/hero/
assets/images/destinations/damavand/
assets/images/destinations/alam-kuh/
assets/images/destinations/zard-kuh/
assets/images/destinations/dena/
assets/images/placeholders/
```

`assets/images/expeditions/`, `journal/`, and `equipment/` can be added the same way when you have photographs for them. Point the data file at the new path. An empty folder is not required for the build.

## Navigation, contact, languages

- Labels and URLs: `_data/navigation.yml`
- Language switcher and `hreflang`: `_data/translations.yml`, keyed by each page’s `ref`
- Enabled languages: `_data/languages.yml`. Set `enabled: true` for `fr` or `nl` only after the pages exist
- Interface strings: `_data/ui.yml`
- Email, phone, address, social URLs, and the legal name: `_data/site.yml`. Empty values stay unpublished. Do not invent them

## SEO

`url` in `_config.yml` is `https://skibergsteigen.ir`. `{% seo %}` writes the title, description, canonical URL, Open Graph tags, and Twitter card. Each page sets its own `title`, `description`, and `image`.

`hreflang` alternates for `en`, `de`, and `x-default` are added from `_data/translations.yml`. `sitemap.xml` is generated by `jekyll-sitemap`. `robots.txt` points at that sitemap.

Structured data is limited to what the pages support: `Organization` and `WebSite` on the homepages, `BreadcrumbList` on other pages, `TouristDestination` with rounded coordinates on destination pages, and the article metadata from `jekyll-seo-tag` on journal posts. There are no ratings and no reviews.

## Inquiry form

The form is on every contact page and every expedition page. It checks the fields in the browser and does not show a success message.

Delivery is **off** until you set an endpoint in `_config.yml`:

```yaml
inquiry:
  endpoint: "https://formspree.io/f/xxxxxxxx"
  provider: formspree
```

Use the provider’s public form URL. Do not put an API key or a password in the file. The field names posted are `name`, `email`, `nationality`, `destination`, `experience_type`, `experience_level`, `dates`, `participants`, and `message`. A honeypot field is named `company_website`.

While `endpoint` is empty, the form explains that nothing is stored, and a submit attempt is cancelled with the same explanation. After you set an endpoint, the browser posts the form to that URL. Point the provider’s confirmation at a page you control only if you are comfortable with what that page claims. This site does not include a fake “message sent” screen.

Rebuild after changing `_config.yml`.

## Fonts and photographs already in the repo

Newsreader and Source Sans 3 are self-hosted under the SIL Open Font License. See `assets/fonts/NOTICE.txt`.

Mountain photographs are from Wikimedia Commons, credited on the site. They show the ranges. They do not show a ski descent in Iran. Those frames are still listed as needed.
