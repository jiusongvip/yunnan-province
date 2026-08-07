import rss from "@astrojs/rss";

export const GET = () =>
  rss({
    title: "Yunnan Province Travel Guide",
    description: "Comprehensive travel guide to Yunnan Province, China — destinations, itineraries, food, culture, and practical advice for English-speaking visitors.",
    site: "https://yunnan-province.com",
    items: [
      { title: "Kunming Travel Guide", description: "The Spring City: gateway to Yunnan Province.", link: "/kunming/", pubDate: new Date("2026-08-07") },
      { title: "Lijiang Travel Guide", description: "UNESCO old town beneath Jade Dragon Snow Mountain.", link: "/lijiang/", pubDate: new Date("2026-08-07") },
      { title: "Dali Travel Guide", description: "Between Cangshan Mountains and Erhai Lake.", link: "/dali/", pubDate: new Date("2026-08-07") },
      { title: "Shangri-La Travel Guide", description: "Tibetan highland town in northwest Yunnan.", link: "/shangri-la/", pubDate: new Date("2026-08-07") },
      { title: "Yuanyang Rice Terraces Guide", description: "Hani rice terraces — a photographer's dream.", link: "/yuanyang/", pubDate: new Date("2026-08-07") },
      { title: "Xishuangbanna Travel Guide", description: "Tropical Yunnan — rainforests, elephants, and Dai culture.", link: "/xishuangbanna/", pubDate: new Date("2026-08-07") },
      { title: "Yunnan Itineraries: 3 to 14 Day Plans", description: "Suggested routes for every type of traveler.", link: "/itineraries", pubDate: new Date("2026-08-07") },
      { title: "Best Time to Visit Yunnan", description: "Seasonal guide: when to go where in Yunnan.", link: "/best-time-to-visit", pubDate: new Date("2026-08-07") },
    ],
    customData: "<language>en-us</language>",
  });
