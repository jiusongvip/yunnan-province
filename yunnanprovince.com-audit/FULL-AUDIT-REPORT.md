 # Yunnan Province Travel Guide — Full SEO Audit
 
 **URL:** https://yunnanprovince.com  
 **Date:** 2026-08-07  
 **Business Type:** Publisher — Travel Guide  
 **Platform:** Astro (static HTML, server-rendered)  
 **Pages Audited:** 33 (from sitemap + dist files)
 
 ---
 
 ## Executive Summary
 
 ### Overall SEO Health Score: 62/100
 
 The static build quality is strong — clean HTML, solid schema, well-structured content — but the **live deployment is broken**, GA4 is missing despite a misleading comment, and there are notable gaps in security, image optimization, and OG consistency. Fix the deployment issue first; the rest is polish.
 
 | Category | Score | Weight | Weighted |
 |----------|-------|--------|----------|
 | Technical SEO | 52/100 | 22% | 11.4 |
 | Content Quality | 78/100 | 23% | 17.9 |
 | On-Page SEO | 68/100 | 20% | 13.6 |
 | Schema / Structured Data | 70/100 | 10% | 7.0 |
 | Performance (CWV) | 55/100 | 10% | 5.5 |
 | AI Search Readiness | 72/100 | 10% | 7.2 |
 | Images | 48/100 | 5% | 2.4 |
 | **Total** | | | **62.0** |
 
 ### Top 5 Critical Issues
 
 1. **Live deployment not serving built content** — yunnanprovince.com returns a JS redirect to `/lander`. The real 33-page travel guide from `dist/` is invisible to Google.
 2. **GA4 tracking is not actually installed** — there's a `<!-- Google Analytics 4 -->` HTML comment but zero actual tracking scripts. No organic traffic data is being collected.
 3. **robots.txt mismatch between live and dist** — live references `/sitemap.xml` (doesn't exist); dist correctly references `/sitemap-index.xml`. Live deployment is out of sync.
 4. **No HSTS security header** — only `nosniff`, `X-Frame-Options`, and `Referrer-Policy` are set. Missing CSP and HSTS headers reduce credibility signals.
 5. **Gallery images have useless alt text** — every gallery photo across all pages is labeled `CityName - photo 1` instead of describing the image content.
 
 ### Top 5 Quick Wins
 
 1. Deploy the static build from `dist/` to the live server (or remove the `/lander` redirect)
 2. Actually install GA4 by adding the `gtag.js` snippet to the base layout
 3. Add HSTS header and CSP header to `public/_headers`
 4. Fix gallery alt text (replace "photo 1/2/3" with descriptive alt text)
 5. Replace the 12 month-page OG images (currently all `hero-yunnan.webp`) with month-specific OG images or use `og-best-time.webp` for all
 
 ---
 
 ## Technical SEO: 52/100
 
 | Category | Status | Score |
 |----------|--------|-------|
 | Crawlability | ⚠️ warn | 68/100 |
 | Indexability | ✅ pass | 85/100 |
 | Security | ❌ fail | 30/100 |
 | URL Structure | ✅ pass | 88/100 |
 | Mobile | ✅ pass | 82/100 |
 | Core Web Vitals | ⚠️ warn | 50/100 |
 | Structured Data | ✅ pass | 75/100 |
 | JS Rendering | ✅ pass | 95/100 |
 | IndexNow | ❌ fail | 0/100 |
 
 ### What Works
 - Static HTML, fully server-rendered (Astro) — zero JS dependency for content: **excellent** for all search crawlers
 - Self-referencing canonical tags on every page
 - Clean, descriptive, hyphenated URLs with consistent `trailingSlash: "never"` policy
 - robots.txt in dist correctly references sitemap, allows AI crawlers (GPTBot, anthropic-ai, CCBot, PerplexityBot)
 - `llms.txt` present and well-structured
 - Mobile responsive with proper viewport meta tag
 - `_headers` provides basic security (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
 - 404 page uses `noindex, follow` and provides functional navigation
 
 ### What's Broken
 - **DEPLOYMENT**: Live site at yunnanprovince.com returns `<script>window.location.href="/lander"</script>` with 114 bytes of content — Google sees an effectively blank page
 - **robots.txt mismatch**: Live version says `Sitemap: /sitemap.xml` but dist has `Sitemap: https://yunnanprovince.com/sitemap-index.xml`
 - **No HSTS header** in `_headers` — add `Strict-Transport-Security: max-age=31536000; includeSubDomains`
 - **No CSP header** — would protect against XSS and improve security posture
 - **No IndexNow support** — missing for Bing/Yandex fast indexing
 - **Sitemap lastmod dates are all identical**: every URL stamped `2026-08-07T00:00:00.000Z`
 
 ### Recommendations
 1. Deploy dist/ content to live server
 2. Sync robots.txt between dist and live
 3. Add to `public/_headers`:
   ```
   /*
     Strict-Transport-Security: max-age=31536000; includeSubDomains
     Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:
   ```
 4. Implement IndexNow endpoint at `https://yunnanprovince.com/indexnow`
 5. Consider adding `OAI-SearchBot` and `ClaudeBot` to robots.txt allow list (only PerplexityBot is currently allowed among major AI search crawlers)
 
 ---
 
 ## Content Quality: 78/100
 
 ### E-E-A-T Breakdown
 
 | Factor | Score | Key Signals |
 |--------|-------|-------------|
 | Experience | 18/25 | First-hand knowledge evident in details (specific bus routes, prices, local customs). Destination pages show lived travel experience. |
 | Expertise | 16/25 | Deep depth on destinations. "Yunnan Guide Team" byline is generic — no individual expert names. |
 | Authoritativeness | 14/25 | No external citations or industry recognition. New site (2026), no backlink profile. |
 | Trustworthiness | 18/25 | Contact page, privacy policy, about page with transparent mission. No affiliate links. |
 
 ### Content Metrics
 - **Homepage**: ~2,500+ words of well-structured content across all sections — strong
 - **Destination pages**: Each has 8-10 content sections (Overview, Attractions, Activities, Tips, Transport, Accommodation, Food, Gallery, CTA) — excellent depth
 - **Month pages** (12 pages under `/best-time-to-visit/`): These appear to be generated from a template — check uniqueness. Each needs distinct weather data and activity recommendations.
 - **Secondary pages**: food-guide, culture-guide, itineraries, travel-tips — all have substantial content
 - **Breadcrumb markups** on all inner pages for strong site architecture signals
 
 ### What Works
 - Strong, vivid, descriptive prose that reads like it comes from actual travel experience
 - Consistent content structure across destination pages
 - Rich internal linking: every destination page links to related content, itineraries, and compare tools
 - Clear H1→H2→H3 heading hierarchy on all pages
 - Question-based H2s on content pages (e.g., "What to Eat in Kunming", "Where to Stay")
 - Natural keyword usage — never stuffy
 - FAQ section on homepage covers high-value travel queries
 
 ### What's Lacking
 - **No individual author names** — "Yunnan Guide Team" is generic and weakens E-E-A-T
 - **No author Person schema** — should be paired with author pages
 - **No original research or unique data** — first-party proprietary data is the strongest AI citation signal
 - **No publication dates on individual blog/article pages** — only visible in schema
 - **The 12 month pages** may be too similar — check for unique content on each
 
 ### AI Citation Readiness: 72/100
 - **Strong**: Clean heading hierarchy, question-based headings, FAQ format, short paragraphs (2-4 sentences), tables, lists
 - **Weak**: No unique statistics, no first-party data, author is generic
 - **Missing**: No original research cited, no Wikipedia presence for brand
 
 ---
 
 ## On-Page SEO: 68/100
 
 ### Title Tags
 | Page | Title | Length | Status |
 |------|-------|--------|--------|
 | Homepage | Yunnan Province Travel Guide 2026: Best Places, Itineraries and Insider Tips | 82 chars | ✅ Good |
 | Kunming | Kunming Travel Guide 2026: Best Attractions, Food, Hotels & Insider Tips | Yunnan Province Travel Guide | 118 chars | ⚠️ Long (over 60 char limit for SERP display) |
 | Dali | Dali Travel Guide 2026: Best Attractions, Food, Hotels & Insider Tips | Yunnan Province Travel Guide | 118 chars | ⚠️ Same issue |
 
 **Finding**: All destination page titles share the same suffix pattern `"… | Yunnan Province Travel Guide"` — this pushes most titles well past the ~60 character SERP display limit. The actual destination name and "Travel Guide 2026" are always visible, so the truncation isn't terrible, but shorter titles are more clickable.
 
 ### Meta Descriptions
 - Homepage: 256 chars — good, descriptive with call to action
 - Destination pages: ~315 chars — slightly long but content-rich
 - All pages have unique meta descriptions ✅
 
 ### Heading Structure
 - All pages follow H1 → H2 → H3 hierarchy ✅
 - H1s are descriptive and contain primary keywords ✅
 - Question-based H2s used throughout (great for AI citations) ✅
 
 ### Internal Linking
 - Strong internal link network ✅
 - Every destination page links to itineraries, compare, best-time, and other destinations
 - Footer provides comprehensive sitemap via links
 - No orphan pages detected in sitemap
 
 ### Issues
 - Titles too long on inner pages — consider dropping "Yunnan Province Travel Guide" suffix
 - `rel="alternate" hreflang="en"` is present but site is single-language — this is harmless but unnecessary
 - RSS feed links have trailing slashes (`/kunming/`) while site uses `trailingSlash: "never"` — creates potential 301 loops
 - Two RSS items link to fragment URLs (`/#itineraries/` and `/#best-time/`) which are **not valid** for RSS
 
 ---
 
 ## Schema & Structured Data: 70/100
 
 ### Current Implementation
 
 | Page | Schema Types | Status |
 |------|-------------|--------|
 | Homepage | Organization + @graph(Article, TouristDestination, BreadcrumbList, FAQPage) | ✅ Good |
 | Destination pages | Organization + @graph(Article, TouristDestination, BreadcrumbList) | ✅ Good |
 | About | Organization only | ⚠️ Missing @graph |
 | 404 | Organization only | ⚠️ Missing @graph |
 
 ### Validation Notes
 - All JSON-LD is structurally valid
 - **Organization** schema: `logo` field uses favicon.svg — should be a larger image (logo should be at least 112x112px per Google guidelines, SVG favicon doesn't meet this)
 - **TouristDestination**: well-structured with `touristType` array and `containedInPlace` ✅
 - **BreadcrumbList**: correctly implemented on destination pages ✅
 - **FAQPage**: Present on homepage — Google retired FAQ **rich results** for ALL sites May 7, 2026, but the markup still aids AI Mode / AI Overviews entity resolution. Keep it for AI, but do not expect SERP features.
 - **Author**: All Article schemas use `"name": "Yunnan Guide Team"` — a generic byline. Recommend creating a `Person` schema for real authors.
 
 ### Missing Opportunities
 - No `WebSite` schema with `SearchAction` (for site search)
 - No `Person` schema for authors
 - No `ImageObject` schema for hero images on destination pages
 - About page missing Article schema
 - No `sameAs` links in Organization schema (social profiles, Wikipedia etc.)
 
 ---
 
 ## Performance (CWV): 55/100
 
 > **Note**: No CrUX field data available (low-traffic site). Score based on lab analysis of dist build artifacts.
 
 ### Findings
 - **Font loading**: 2 Google Font families (Geist + Fraunces) loaded with `preconnect` — adds ~50KB transfer. Consider self-hosting fonts for faster LCP.
 - **CSS**: Single bundled CSS file (`_slug_.sSIOqvxK.css`) — good bundling strategy
 - **JS**: Single JS bundle (`DestinationMatcher.astro_astro_type_script_index_0_lang.DhVCvwZ4.js`) — lightweight at ~5KB
 - **No render-blocking resources tracked** — CSS is linked in `<head>` but is critical for layout, acceptable trade-off
 - **Image loading**: Hero images use `loading="eager"` (correct), gallery images use `loading="lazy"` (correct)
 - **No `fetchpriority="high"`** on hero LCP image — this is a missed optimization
 
 ### Image Size Analysis
 | Image | Size | Recommendation |
 |-------|------|---------------|
 | xishuangbanna-rainforest.webp | 492 KB | 🔴 Reduce to <200 KB |
 | lijiang-canals.webp | 421 KB | 🔴 Reduce to <200 KB |
 | yuanyang-village.webp | 386 KB | 🔴 Reduce to <200 KB |
 | xishuangbanna-dai.webp | 358 KB | 🟡 Reduce to <200 KB |
 | kunming-green-lake.webp | 330 KB | 🟡 Reduce to <200 KB |
 | lijiang-old-town.webp | 324 KB | 🟡 Reduce to <200 KB |
 
 Several images exceed 300 KB. For webp at common hero dimensions (~1920x900), 150-200 KB should be the target. Recommend running all images through compression (e.g., `sharp`, `squoosh`) to target 80-85% quality webp output.
 
 ---
 
 ## Images: 48/100
 
 ### What Works
 - All images in WebP format ✅
 - Proper `loading="lazy"` on below-fold images ✅
 - `loading="eager"` on hero images ✅
 - Aspect ratio preserved via `object-cover` ✅
 
 ### What's Broken
 
 **Gallery alt text is terrible** — every gallery image across all pages:
 ```
 alt="Kunming - photo 1"
 alt="Dali - photo 2"
 alt="Lijiang - photo 3"
 ```
 This is a significant accessibility failure and a missed keyword opportunity. Replace with descriptive alt text:
 ```
 alt="Stone Forest limestone karst formations at sunrise, Kunming"  
 alt="Three Pagodas of Dali reflected in Erhai Lake at dusk"
 alt="Jade Dragon Snow Mountain towering over Lijiang Old Town"
 ```
 
 **Hero image alt text is too generic** — all hero images just say `"Kunming, Yunnan Province"` or `"Dali, Yunnan Province"`. Make these descriptive:
 ```
 alt="Kunming city skyline with Dianchi Lake and Western Hills at sunset"
 alt="Dali Old Town with Erhai Lake and Cangshan Mountains backdrop"
 ```
 
 **OG image inconsistency**:
 - 12 month pages all use the generic `hero-yunnan.webp` — should use `og-best-time.webp`
 - Mix of relative (`/images/...`) and absolute (`https://yunnanprovince.com/images/...`) URLs across pages — standardize on absolute
 
 ---
 
 ## AI Search Readiness (GEO): 72/100
 
 | Category | Score | Notes |
 |----------|-------|-------|
 | Citability | 65/100 | Clean, extractable passages; no unique data/statistics |
 | Structural Readability | 82/100 | Excellent heading hierarchy, question-based H2s, lists |
 | Multi-Modal Content | 70/100 | Text + images on all pages, no video or interactive tools |
 | Authority & Brand Signals | 55/100 | Generic author, no Wikipedia, no Reddit/YouTube presence |
 | Technical Accessibility | 88/100 | SSR, AI crawlers allowed, llms.txt present |
 
 ### What Works
 - **llms.txt**: Present and well-structured ✅
 - **AI crawlers**: GPTBot, anthropic-ai, CCBot, PerplexityBot all allowed ✅
 - **SSR**: All content server-rendered — AI crawlers can read it ✅
 - **Self-contained answer blocks**: FAQ section, "What to Eat" sections, transport info all work as extractable passages
 - **Question-based H2s**: "What to Eat in Kunming", "How to Get to Dali" etc.
 - **Content freshness**: Updated August 2026 — well within the 3-month recency window for AI citation
 
 ### What's Missing
 - **No first-party data or unique statistics** — the strongest GEO signal
 - **No author Person schema** — AI systems want to attribute content to real people
 - **No ClaudeBot or OAI-SearchBot** in robots.txt (only PerplexityBot is allowed among major AI search crawlers)
 - **No Wikipedia presence** for brand (correlates strongly with AI citation)
 - **No `sameAs` links** in Organization schema to tie the entity across platforms
 - **No video or interactive tools** — multi-modal content boosts AI citation rates 156%
 
 ---
 
 ## Scoring Breakdown
 
 | Category | Max | Scored | Details |
 |----------|-----|--------|---------|
 | Technical SEO | 22 | 11.4 | Deployment broken (-10), security headers missing (-5) |
 | Content Quality | 23 | 17.9 | Strong content, weak E-E-A-T signals (-5.1) |
 | On-Page SEO | 20 | 13.6 | Long titles, OG inconsistency (-6.4) |
 | Schema | 10 | 7.0 | Good but missing Person/WebSite/ImageObject (-3) |
 | Performance | 10 | 5.5 | Heavy images, no fetchpriority hint (-4.5) |
 | AI Readiness | 10 | 7.2 | llms.txt + SSR, missing first-party data (-2.8) |
 | Images | 5 | 2.4 | Bad alt text, oversized, OG inconsistency (-2.6) |
 | **Total** | **100** | **62.0** | |
