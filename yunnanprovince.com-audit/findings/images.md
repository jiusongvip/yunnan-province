 # Images Findings
 
 ## Summary
 
 All images are in WebP format (excellent), properly lazy-loaded below the fold (good), and served with responsive `object-cover` styling. The main issues are alt text quality, file sizes, and OG image inconsistency.
 
 ## Critical Issues
 
 ### 1. Gallery Alt Text is Useless [High]
 
 Every gallery image across every destination page follows the same pattern:
 ```
 alt="Kunming - photo 1"
 alt="Dali - photo 2"
 alt="Lijiang - photo 3"
 ```
 
 This is an accessibility failure (screen readers get zero context) and a missed keyword opportunity. Every image should describe what it shows.
 
 **Recommendation**: Replace with descriptive alt text. Examples:
 ```
 alt="Stone Forest limestone karst formations at sunrise, Kunming"
 alt="Three Pagodas of Dali with Cangshan Mountain backdrop"
 alt="Jade Dragon Snow Mountain viewed from Lijiang Old Town"
 ```
 
 ### 2. Hero Image Alt Text Too Generic [Medium]
 
 Hero images all say `"Kunming, Yunnan Province"` or `"Dali, Yunnan Province"` — just the city name. For above-the-fold hero images (the LCP element), descriptive alt text matters.
 
 **Recommendation**: Add scene descriptions:
 ```
 alt="Dali Old Town ancient stone streets with Cangshan Mountains and Erhai Lake panorama at sunset"
 ```
 
 ## Image Size Issues
 
 | Image | Size | Recommendation |
 |-------|------|---------------|
 | xishuangbanna-rainforest.webp | 492 KB | Compress to <200 KB |
 | lijiang-canals.webp | 421 KB | Compress to <200 KB |
 | yuanyang-village.webp | 386 KB | Compress to <200 KB |
 | xishuangbanna-dai.webp | 358 KB | Compress to <200 KB |
 | kunming-green-lake.webp | 330 KB | Compress to <200 KB |
 | lijiang-old-town.webp | 324 KB | Compress to <200 KB |
 | xishuangbanna-garden.webp | 302 KB | Compress to <200 KB |
 
 **Recommendation**: Run all images >200 KB through compression. For a static site, `sharp` or `squoosh` CLI can batch-process images. Target 80-85% quality WebP.
 
 ## OG Image Inconsistency [High]
 
 There is a mix of relative and absolute URLs for `og:image` across pages:
 - Homepage, destination pages: relative (`/images/hero-yunnan.webp`)
 - About, contact, FAQ, 404, month pages: absolute (`https://yunnanprovince.com/images/hero-yunnan.webp`)
 
 Additionally, all 12 month pages under `/best-time-to-visit/[month]` use the generic `hero-yunnan.webp` instead of `og-best-time.webp` which exists in the images folder.
 
 **Recommendation**: 
 1. Standardize all `og:image` to absolute URLs
 2. Point month pages to `og-best-time.webp`
 3. Create specific OG images for secondary pages (itineraries, hotels, tickets, weather, travel-tips) instead of using the generic hero
 
 ## What's Working Well
 
 - All images in WebP format ✅
 - Proper `loading="lazy"` on below-fold images ✅
 - `loading="eager"` on hero images ✅
 - Responsive styling with `object-cover` ✅
 - Custom OG images for main content categories (best-time, compare, culture, food) — good practice
 - OG images are reasonably sized (160-230 KB) ✅
