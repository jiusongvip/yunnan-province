 # SEO Action Plan — yunnanprovince.com
 
 ## Phase 1: Critical Fixes (Week 1)
 
 1. **Fix live deployment** — Replace the JS redirect `/lander` with the actual static build from `dist/`. Currently Google sees a 114-byte JS redirect page — your entire 33-page travel guide is invisible to search engines.
 
 2. **Install GA4 tracking** — Add the gtag.js snippet to [BaseLayout.astro](/D:/workspaces/website/yunnan-province/src/layouts/BaseLayout.astro:1). Remove the misleading `<!-- Google Analytics 4 -->` comment. Without GA4, you have zero organic traffic data.
 
 3. **Sync robots.txt** — Deploy the dist version which correctly references `/sitemap-index.xml`. The live version references `/sitemap.xml` which doesn't exist.
 
 4. **Add HSTS header** — Add `Strict-Transport-Security: max-age=31536000; includeSubDomains` to `public/_headers`.
 
 5. **Add CSP header** — Add Content-Security-Policy to `public/_headers`:
   ```
   Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:
   ```
 
 ## Phase 2: High-Impact Improvements (Weeks 2-3)
 
 6. **Fix gallery alt text** — Replace all "CityName - photo 1/2/3" patterns with descriptive alt text. This is an accessibility and SEO win.
 
 7. **Standardize OG images** — Use absolute URLs everywhere. Change month pages to use `og-best-time.webp` instead of generic `hero-yunnan.webp`.
 
 8. **Add `fetchpriority="high"`** on hero LCP image for faster Largest Contentful Paint.
 
 9. **Fix RSS feed** — Remove fragment URLs (`/#itineraries/`, `/#best-time/`) and fix trailing slashes to match `trailingSlash: "never"` policy.
 
 10. **Compress oversize images** — Run all images >250 KB through compression. Target: 150-200 KB for hero images at ~85% quality WebP.
 
 11. **Shorten destination page titles** — Drop the "| Yunnan Province Travel Guide" suffix from inner pages. Use format: `"Destination Name Travel Guide 2026"` (under 60 chars).
 
 ### Phase 3: Content & Authority (Month 2)
 
 12. **Add individual author names** — Replace "Yunnan Guide Team" with real bylines. Create Author pages with credentials.
 
 13. **Add Person schema** — For each author, include name, bio, image, sameAs links.
 
 14. **Add WebSite schema** with SearchAction for site search capability.
 
 15. **Add ImageObject schema** to hero images on destination pages.
 
 16. **Create original research** — Even one original data piece (e.g., "2026 Yunnan Travel Cost Survey", "Yunnan Altitude Acclimatization Guide") dramatically boosts AI citation potential.
 
 17. **Build Wikipedia presence** — Brand entity presence on Wikipedia is the single strongest AI citation signal.
 
 18. **Add `sameAs` links** to Organization schema (social profiles, LinkedIn, any Wikipedia page).
 
 19. **Add `OAI-SearchBot` and `ClaudeBot`** to robots.txt allow list — currently only PerplexityBot is enabled.
 
 ### Phase 4: Monitoring & Iteration (Ongoing)
 
 20. **Add IndexNow** endpoint for fast Bing/Yandex indexing
 21. **Set up Google Search Console** and verify sitemap submission
 22. **Monitor GA4 organic traffic** trends
 23. **Check month-page uniqueness** — ensure the 12 `/best-time-to-visit/[month]` pages have sufficiently unique content to avoid duplicate content flags
 24. **Self-host Google Fonts** — reduces external dependency and speeds up LCP
 25. **Add unique sitemap lastmod dates** — use actual content modification timestamps
 
 ## Effort vs. Impact Matrix
 
 | Fix | Effort | Impact |
 |-----|--------|--------|
 | Deploy dist to live | Low | 🔴 Critical |
 | GA4 installation | Low | 🔴 Critical |
 | Fix gallery alt text | Medium | 🟡 High |
 | Compress images | Low | 🟡 High |
 | OG image consistency | Low | 🟡 High |
 | Security headers | Low | 🟡 High |
 | Shorten titles | Low | 🟢 Medium |
 | Fix RSS | Low | 🟢 Medium |
 | Author Person schema | Medium | 🟢 Medium |
 | Original research | High | 🔵 Strategic |
