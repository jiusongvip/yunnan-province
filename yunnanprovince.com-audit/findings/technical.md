 # Technical SEO Findings
 
 ## 1. Deployment: Live Site Not Serving Build Content [Critical]
 
 The live domain `yunnanprovince.com` returns a 114-byte HTML page containing only:
 ```html
 <script>window.onload=function(){window.location.href="/lander"}</script>
 ```
 
 This means Googlebot and all other crawlers see an effectively blank page. The 33-page travel guide built in `dist/` is not being served at the live URL. Fix this before anything else — it's rendering the entire site invisible to search engines.
 
 **Recommendation**: Deploy the contents of `dist/` to your web server or CDN, replacing the current lander page.
 
 ## 2. Robots.txt Mismatch [Critical]
 
 | Location | Sitemap Reference |
 |----------|-------------------|
 | Live (yunnanprovince.com/robots.txt) | `Sitemap: /sitemap.xml` (does not exist) |
 | Dist (build output) | `Sitemap: https://yunnanprovince.com/sitemap-index.xml` (correct) |
 
 The live robots.txt points to a nonexistent file. The dist version correctly points to the sitemap index.
 
 **Recommendation**: Deploy dist's robots.txt to the live server.
 
 ## 3. GA4 Not Installed [Critical]
 
 Every page contains `<!-- Google Analytics 4 -->` as an HTML comment, but **zero actual tracking scripts** are present. No `gtag.js`, no `G-*` measurement ID, no `googletagmanager.com`.
 
 This means: no organic traffic data, no conversion tracking, no audience insights — flying completely blind on SEO performance.
 
 **Recommendation**: Add the Google Tag snippet to `src/layouts/BaseLayout.astro` inside the `<head>`. Example:
 ```html
 <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
 <script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', 'G-XXXXXXXXXX');
 </script>
 ```
 
 ## 4. Missing Security Headers [High]
 
 Current `public/_headers`:
 ```
 /*
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   Referrer-Policy: strict-origin-when-cross-origin
 ```
 
 Missing:
 - **HSTS** (`Strict-Transport-Security`): Prevents downgrade attacks, signals HTTPS-only commitment
 - **CSP** (`Content-Security-Policy`): Prevents XSS, controls resource loading
 
 **Recommendation**: Add HSTS and CSP headers as shown in the action plan.
 
 ## 5. Sitemap Lastmod All Identical [Medium]
 
 All 33 URLs in `sitemap-0.xml` share the same `lastmod` of `2026-08-07T00:00:00.000Z`. Google uses lastmod to prioritize re-crawling — identical dates mean Google can't tell which pages are freshest.
 
 **Recommendation**: Use actual content modification dates. The Astro sitemap integration supports this — configure `lastmod` in the sitemap integration options.
 
 ## 6. Missing AI Crawlers [Low]
 
 Current robots.txt allows: GPTBot, anthropic-ai, CCBot, PerplexityBot
 Missing: **OAI-SearchBot** (the main OpenAI search crawler) and **ClaudeBot** (Anthropic's web features)
 
 **Recommendation**: Add:
 ```
 User-agent: OAI-SearchBot
 Allow: /
 
 User-agent: ClaudeBot
 Allow: /
 ```
 
 ## 7. No IndexNow [Low]
 
 IndexNow protocol is not implemented. While Google doesn't use it, Bing, Yandex, Naver, and Seznam do. Simple to add for a static site.
 
 **Recommendation**: Add an IndexNow key file and ping endpoint. For Cloudflare Pages or similar, this can be a simple static endpoint.
