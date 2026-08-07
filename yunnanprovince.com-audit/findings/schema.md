 # Schema & Structured Data Findings
 
 ## Current Implementation Summary
 
 The dist build has comprehensive schema coverage:
 
 | Page Type | Schema Types | Format |
 |-----------|-------------|--------|
 | Homepage | Organization + @graph(Article, TouristDestination, BreadcrumbList, FAQPage) | JSON-LD |
 | Destination pages (×6) | Organization + @graph(Article, TouristDestination, BreadcrumbList) | JSON-LD |
 | Secondary pages | Organization only | JSON-LD |
 | 404 page | Organization only | JSON-LD |
 
 ## Issues Found
 
 ### 1. Logo Uses Favicon SVG [Medium]
 
 All Organization schema instances use `"logo": "https://yunnanprovince.com/favicon.svg"`. Google's logo guidelines require a minimum 112×112 px image. An SVG favicon, while valid markup, may not be treated as a logo by Google's rich result parser.
 
 **Recommendation**: Create a proper logo image (PNG or WebP, at least 112×112 px, ideally 600×60 or 600×180) and reference it in the Organization schema.
 
 ### 2. FAQPage Rich Results Retired [Info]
 
 Google retired FAQ rich results for ALL sites on May 7, 2026. The homepage still includes FAQPage markup. This is not harmful — the markup still aids AI Mode / AI Overviews entity resolution — but you should not expect any SERP expansion from it.
 
 **Recommendation**: Keep the FAQPage markup for AI citation purposes. No action needed.
 
 ### 3. Missing WebSite Schema [Medium]
 
 No `WebSite` schema with `SearchAction` is present. This enables the Sitelinks Search Box in SERPs, which can improve click-through rates.
 
 **Recommendation**: Add to all pages:
 ```json
 {
   "@context": "https://schema.org",
   "@type": "WebSite",
   "name": "Yunnan Province Travel Guide",
   "url": "https://yunnanprovince.com",
   "potentialAction": {
     "@type": "SearchAction",
     "target": "https://yunnanprovince.com/search?q={search_term_string}",
     "query-input": "required name=search_term_string"
   }
 }
 ```
 
 ### 4. Missing Person Schema for Authors [Medium]
 
 All articles use `"author": {"@type": "Person", "name": "Yunnan Guide Team"}`. This is structurally valid but semantically weak — "Yunnan Guide Team" is not a real person. For E-E-A-T, individual author schemas with `url`, `sameAs`, and `jobTitle` carry more weight.
 
 **Recommendation**: If you add individual authors, implement full Person schema:
 ```json
 "author": {
   "@type": "Person",
   "name": "Sarah Chen",
   "url": "https://yunnanprovince.com/authors/sarah-chen",
   "sameAs": ["https://linkedin.com/in/sarahchen"],
   "jobTitle": "Travel Writer",
   "description": "Lived in Dali for 3 years, traveled to all 16 Yunnan prefectures."
 }
 ```
 
 ### 5. About Page Missing @graph Schema [Low]
 
 The About page only has Organization schema — it's missing the Article and BreadcrumbList that appear on all other content pages. This is inconsistent.
 
 **Recommendation**: Add Article and BreadcrumbList schema to the About page.
 
 ### 6. Missing ImageObject Schema [Low]
 
 Hero images on destination pages don't have corresponding ImageObject markup. This could help with image search visibility.
 
 **Recommendation**: Add ImageObject schema to hero images, or add `image` array to Article schema with ImageObject references.
 
 ### 7. No sameAs Links in Organization [Low]
 
 The Organization schema has no `sameAs` array. This is how you tell search engines "this entity on my site is the same as this entity on Wikipedia/Social" — critical for entity resolution, especially for AI search systems.
 
 **Recommendation**: Add `sameAs` pointing to any social profiles, Wikipedia pages, or other web presences.
