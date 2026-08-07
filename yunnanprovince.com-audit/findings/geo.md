 # AI Search Readiness (GEO) Findings
 
 ## Overall GEO Readiness: 72/100
 
 | Platform | Readiness | Notes |
 |----------|-----------|-------|
 | Google AI Overviews | 75/100 | Strong ranking-correlated signals; needs more citability |
 | Google AI Mode | 68/100 | Good entity structure; missing first-party data is a gap |
 | ChatGPT | 55/100 | No Wikipedia presence, generic author byline |
 | Perplexity | 60/100 | Reddit/community presence missing |
 | Bing Copilot | 70/100 | IndexNow missing, but Bing can still index |
 
 ## What's Working Well
 
 - **llms.txt**: Present with well-structured page hierarchy — good signal for AI crawlers
 - **AI crawlers allowed**: GPTBot, anthropic-ai, CCBot, PerplexityBot all have `Allow: /`
 - **SSR**: Content is fully server-rendered (Astro static build) — AI crawlers don't execute JS
 - **Clean heading hierarchy**: Question-based H2s, short paragraphs, and proper H1→H2→H3 flow
 - **Self-contained answer blocks**: FAQ, food sections, transport info all work as extractable passages
 - **Content freshness**: Updated August 2026 — well within the 3-month AI citation recency window
 - **FAQ format**: Question-answer pairs with clear structure — 92% of AIO citations come from top-10 pages, but 47% from positions 5+, so structure matters independently of rank
 
 ## Gaps to Address
 
 ### 1. Missing First-Party Data [High]
 
 The strongest AI citation signal is unique statistics and proprietary data. The site has zero original research — all information is compiled/curated.
 
 **Recommendation**: Create at least one original data piece. For a travel guide, consider:
 - "Yunnan Travel Cost Index 2026" comparing budgets across destinations
 - "Altitude Acclimatization in Yunnan: What 50 Travelers Told Us"
 - Transport price comparison with verified current data
 
 ### 2. Weak Brand Entity Resolution [Medium]
 
 - No Wikipedia page or Wikidata entry
 - No `sameAs` links in Organization schema
 - No Reddit, YouTube, or LinkedIn presence
 - "Yunnan Guide Team" is not a recognizable brand
 
 **Recommendation**: 
 - Create a Wikipedia page for the guide (if notable enough) or at minimum a Wikidata entry
 - Add `sameAs` to Organization schema
 - Build one social channel (YouTube travel videos work best for travel content — strongest correlation with AI citations per the Ahrefs study)
 
 ### 3. Missing ClaudeBot and OAI-SearchBot [Medium]
 
 Current robots.txt explicitly allows PerplexityBot but does NOT explicitly allow OAI-SearchBot (OpenAI's search crawler) or ClaudeBot (Anthropic's web features). These are the two most important AI search crawlers alongside PerplexityBot.
 
 **Recommendation**: Add explicit Allow directives for both.
 
 ### 4. No Multi-Modal Content [Low]
 
 Content with multi-modal elements sees 156% higher AI selection rates. The site is text + images only — no video, no interactive tools, no calculators.
 
 **Recommendation**: Consider adding at least one interactive element — a "Which Yunnan Destination Is Right for You?" quiz or a budget calculator for trip planning. Even embedded YouTube videos would help.
 
 ### 5. Passage-Level Citability Audit [Info]
 
 For informational queries, AI systems favor **optimal passage length of 134-167 words** that are self-contained, factual, and contain specific numbers. The site's destination overviews tend toward narrative prose rather than extractable fact blocks.
 
 **Recommendation**: For key pages, add a "Quick Facts" section near the top with:
 - Altitude: X meters
 - Best season: Month range
 - Getting there: Train X hours, CNY Y
 - Must-see: 3-5 items
 
 This creates an extractable, citable block that AI systems can lift directly.
