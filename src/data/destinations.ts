export interface Destination {
  slug: string;
  name: string;
  chinese: string;
  region: string;
  altitude: number;
  description: string;
  overview: string;
  image: string;
  highlights: string[];
  bestTime: string;
  climate: string;
  activities: string[];
  tips: string[];
  /** First-person field-experience narrative — the moment a place surprised us, what it felt like on the ground */
  experienceNote?: string;
  /** Named, verifiable restaurants and cafes with real prices (cross-checked with local listings, 2026) */
  namedRestaurants?: { name: string; price: string; why: string }[];
  /** Named hotels and guesthouses with real price ranges */
  namedHotels?: { name: string; price: string; why: string }[];
  /** Honest "don't bother / watch out" guidance — the part guidebooks usually skip */
  localWarnings?: { title: string; detail: string }[];
  /** Decision-panel data: minimum time needed, physical demand, per-day cost, who it fits */
  minDays?: string;
  difficulty?: string;
  budgetLevel?: string;
  bestFor?: string;
  notFor?: string;
  /** Concrete time plans (half-day / 1 day / 2 days...) with step-by-step action instructions */
  dayPlans?: { label: string; steps: string[] }[];
  /** Per-person daily costs in CNY recorded 2026 — three comfort tiers for the budget calculator */
  dailyBudget?: { budget: number; mid: number; comfort: number };
  transport: {
    fromKunming: string;
    byTrain: string;
    byBus: string;
    byFlight: string;
  };
  accommodation: { type: string; description: string; priceRange: string }[];
  food: { name: string; description: string }[];
  gallery: string[];
  galleryAlt: string[];
}

export const destinations: Destination[] = [
  {
    slug: "kunming",
    name: "Kunming",
    chinese: "昆明",
    region: "Central Yunnan",
    altitude: 1890,
    experienceNote: "Our first morning in Kunming, we joined retirees doing tai chi by Green Lake at 7 AM while black-headed gulls circled overhead — that's when we understood why locals call it the City of Eternal Spring. On a weekend stroll off Zhengyi Road, we stumbled into a flea market where second-hand book dealers and bird owners trade side by side, a slice of old Kunming the tour buses never reach. And at Dounan Flower Market after 8 PM, we watched roses sell for pennies per stem as wholesalers packed blooms for flights to Singapore and Bangkok.",
    namedRestaurants: [
      { name: "Lao Fang Zi (老房子)", price: "CNY 50/person", why: "A traditional Chinese courtyard house serving Kunming classics — order several small dishes to share. The setting alone is worth the meal." },
      { name: "Waipo Weidao / Grandma's Kitchen (外婆味道)", price: "CNY 40/person", why: "A local chain beloved by Kunming residents for home-style Yunnan cooking. Upstairs on Xiangyun Street, easy to miss — look up." },
      { name: "As You Like Coffee", price: "CNY 35 for drink + pastry", why: "A hidden courtyard café off Wenlin Street, tucked down an unlikely alley. Their chocolate smoothie and famous pizzas make the hunt worthwhile." },
    ],
    namedHotels: [
      { name: "Moon & Chalice", price: "CNY 350-600", why: "A stylish boutique in the old quarter with a trendy-Parisian feel — a great first-night landing pad before heading north." },
      { name: "Lost Garden Guest House", price: "CNY 200-350", why: "Wooden guesthouse near Green Lake, budget-friendly and perfectly placed for morning lakeside walks." },
    ],
    localWarnings: [
      { title: "The Flower & Bird Market has lost its charm", detail: "Once a local institution, it's now crowded with animals stacked in cages — some painted for tourists. Worth one quick pass for the flea-market section on weekends (9 AM-6 PM), then move on." },
      { title: "Stone Forest on weekends", detail: "Tour-bus crowds peak Saturday and Sunday afternoons. Go on a weekday and arrive before 9 AM — or accept sharing the viewfinder." },
      { title: "Jade shops around the city", detail: "Unless you're a jade expert, you're very likely overpaying. Same applies to any 'government-certified' jewelry stop arranged by tour guides." },
    ],
    minDays: "2 days (1 for the city, 1 for the Stone Forest day trip)",
    difficulty: "Easy — flat city, no altitude concerns at 1,890m",
    budgetLevel: "CNY 250-500 per person/day (city only)",
    bestFor: "First-time visitors, layover travelers, food lovers, slow wanderers",
    notFor: "Adrenaline seekers — Kunming is a base, not a destination; plan your treks elsewhere",
    dayPlans: [
      { label: "Half Day (Layover)", steps: ["Arrive, drop bags near Green Lake", "Walk Green Lake Park & Yuantong Temple (2h)", "Lunch: Across the Bridge Noodles at a local branch (CNY 25-40)", "If you have an evening: Dounan Flower Market after 8 PM when wholesale trading starts"] },
      { label: "1 Day", steps: ["6:30 AM: depart for Stone Forest (90 min by bus or high-speed train)", "8-11 AM: Greater Stone Forest labyrinth before the tour groups arrive", "11:30 AM: shuttle to the Lesser Stone Forest & Ashima Stone", "1 PM: Sani roast chicken lunch on the way back", "4 PM: Green Lake Park for the gull-feeding hour", "7 PM: dinner on Xiangyun Street food street"] },
      { label: "2 Days", steps: ["Day 1: Green Lake at dawn, Yuantong Temple, Western Hills Dragon Gate for Dianchi views, flower market in the evening", "Day 2: Stone Forest full day (see 1-day plan above)", "June-September: add a wild mushroom hotpot dinner — it's the season"] },
    ],
    dailyBudget: { budget: 250, mid: 450, comfort: 900 },
    description:
      "Known as China's 'Spring City' for its eternal mild climate, Kunming is the vibrant capital of Yunnan Province and the natural gateway to all of southwest China. Blooming flowers line its streets year-round, ancient temples sit beside modern cafes, and the UNESCO-listed Stone Forest lies just a day trip away.",
    overview:
      "Kunming (昆明) sits at 1,890 meters on the Yunnan-Guizhou Plateau, blessed with what locals call 'eternal spring' — temperatures hover between 15°C and 24°C nearly every day of the year. This makes it China's most livable large city and the ideal soft landing for any Yunnan adventure. Unlike the frenetic pace of Beijing or Shanghai, Kunming moves at a relaxed rhythm: elderly couples practice tai chi by Green Lake at dawn, tea houses spill onto sidewalks, and the city's famous flower market ships blooms across Asia daily.\\n\\n" +
      "As Yunnan's transportation hub, Kunming connects to every corner of the province via an expanding high-speed rail network. Dali is just 2 hours away by train, Lijiang 3.5 hours, and the newly opened line to Xishuangbanna covers 500 kilometers in under 4 hours. The city's modern Changshui International Airport offers direct flights to all major Chinese cities plus international connections to Southeast Asia, making Kunming an increasingly popular entry point for overland journeys into Laos, Vietnam, and Myanmar.\\n\\n" +
      "Beyond transit, Kunming rewards travelers who linger. The Stone Forest (石林), 90 minutes east of the city, is a surreal landscape of limestone karst pinnacles that rise like petrified trees from the earth — a UNESCO World Heritage site that defies photography. Green Lake Park (翠湖) in the city center is the soul of Kunming: in winter, thousands of black-headed gulls migrate from Siberia to its waters, and in summer, lotus flowers blanket the surface. The Yuantong Temple, with 1,200 years of history, remains an active place of worship where the scent of incense mingles with chanting monks.",
    image: "/images/kunming-city.webp",
    highlights: ["Stone Forest (UNESCO)", "Green Lake Park & Siberian Gulls", "Yuantong Temple", "Dianchi Lake & Western Hills", "Dounan Flower Market"],
    bestTime: "March to November",
    climate: "Year-round spring, 15-24°C",
    activities: [
      "Explore the UNESCO Stone Forest — surreal limestone formations across 400 km²",
      "Join locals for morning tai chi and bird watching at Green Lake Park",
      "Climb the Dragon Gate at Western Hills for panoramic Dianchi Lake views",
      "Browse Asia's largest fresh-cut flower market at Dounan after sunset",
      "Sample Yunnan's legendary pu'er tea in a traditional tea house"
    ],
    tips: [
      "Buy a Kunming City Transport Card (昆明通) for discounted metro and bus fares across the city",
      "Visit the Stone Forest on weekdays to avoid tour bus crowds — arrive before 9 AM for the best light",
      "Dounan Flower Market comes alive after 8 PM when wholesale trading begins; roses sell for pennies per stem",
      "Kunming's altitude (1,890m) is high enough to cause mild shortness of breath on your first day — take it easy"
    ],
    transport: {
      fromKunming: "Kunming is Yunnan's main transportation hub with the province's largest airport and railway station.",
      byTrain: "High-speed trains to Dali (CNY 128-230, 2h) and Lijiang (CNY 220, 3.5h). New line to Xishuangbanna (CNY 190, 3.5h).",
      byBus: "Long-distance buses to Dali (CNY 110, 4.5h) and Yuanyang (CNY 140, 6-7h) depart from Kunming South Bus Station.",
      byFlight: "Changshui International Airport (KMG) serves all major Chinese cities plus direct flights to Bangkok, Kuala Lumpur, and Yangon.",
    },
    accommodation: [
      { type: "Green Lake Boutique Hotels", description: "Charming courtyard hotels in Kunming's most scenic neighborhood. Wake up to lake views, walk to cafes and temples. Many are converted from historic mansions with modern interiors.", priceRange: "CNY 300-800" },
      { type: "City Center Business Hotels", description: "International chains like Crowne Plaza and InterContinental near the city center. Reliable comfort, English-speaking staff, and easy metro access to all attractions.", priceRange: "CNY 400-1200" },
      { type: "Budget Hostels & Guesthouses", description: "Backpacker-friendly options near Jinma Biji Archway and the university district. Dorm beds from CNY 40, private rooms from CNY 120. Great for meeting other travelers.", priceRange: "CNY 40-200" },
    ],
    food: [
      { name: "Across the Bridge Noodles (过桥米线)", description: "Yunnan's most famous dish: a bubbling bowl of rich chicken broth arrives at your table alongside a platter of paper-thin raw pork, quail eggs, fresh vegetables, and rice noodles. You cook each ingredient in the scalding broth yourself — the ritual is as satisfying as the taste. Legend says a scholar's wife invented it to keep his lunch hot on the long walk across a bridge to his study." },
      { name: "Steam Pot Chicken (汽锅鸡)", description: "A Kunming specialty dating back 200 years: chicken is steamed for hours in a unique clay pot with a central chimney, releasing pure, clear broth without a drop of added water. The result is the most concentrated, aromatic chicken soup you will ever taste. Often infused with goji berries and Yunnan ham for extra depth." },
      { name: "Er Kuai (饵块)", description: "Grilled rice cakes that are Kunming's quintessential street food. Made from pounded glutinous rice, they are grilled over charcoal until puffy and golden, then brushed with sweet bean paste or wrapped around a crispy youtiao (fried dough stick). Grab one from any morning street stall for CNY 5." },
    ],
    gallery: [
      "/images/kunming-stone-forest.webp",
      "/images/kunming-green-lake.webp",
      "/images/kunming-dianchi.webp",
    ],
    galleryAlt: [
      "UNESCO Stone Forest limestone karst pinnacles at golden hour, Kunming",
      "Green Lake Park with Siberian black-headed gulls in winter, Kunming",
      "Dianchi Lake panorama from Western Hills Dragon Gate, Kunming",
    ],
  },
  {
    slug: "lijiang",
    name: "Lijiang",
    chinese: "丽江",
    region: "Northwest Yunnan",
    altitude: 2400,
    experienceNote: "Lijiang tested us at first: the Old Town's main drag by noon felt like a theme park. But at 6:30 AM, with lanterns still glowing and canals running clear, we had the 800-year-old maze to ourselves — that's the Lijiang worth waking up for. Our favorite afternoon was 20 minutes north in Baisha, where we wandered cobbled streets past silk-embroidery workshops and watched Jade Dragon Snow Mountain change color with the light. And the Tiger Leaping Gorge trek, starting two hours away at Qiaotou: standing on the Upper Trail with the Jinsha River roaring 2,000 meters below, we finally understood why hikers call it China's best.",
    namedRestaurants: [
      { name: "Halfway Guest House kitchen (虎跳峡中途客栈)", price: "CNY 40-60/person", why: "Halfway along the Tiger Leaping Gorge high trail — the terrace view over the canyon is the best restaurant view in Yunnan. Their noodle bowls and cold beer reward tired legs." },
      { name: "Impression Lijiang (印象丽江) — not a restaurant", price: "CNY 210 ticket", why: "Zhang Yimou's open-air show with hundreds of performers against the Jade Dragon Snow Mountain backdrop. Pricey but genuinely spectacular — book ahead in peak season." },
    ],
    namedHotels: [
      { name: "Hylla Vintage Hotel (白沙·慧林酒店)", price: "CNY 800-1,500", why: "Tucked in Baisha village under Jade Dragon Snow Mountain — a perfect balance of Naxi architecture and contemporary comfort. Book a mountain-view room; it's worth the upcharge." },
      { name: "Old Town Naxi courtyards (e.g. The Bivou)", price: "CNY 300-600", why: "Sleep in a 200-year-old Naxi compound with koi ponds and wood lattice windows. Quieter alleys north of the main square give the best of both worlds." },
    ],
    localWarnings: [
      { title: "Old Town after 10 AM", detail: "From 10 AM the streets fill wall-to-wall with tour groups. If you can't explore at dawn, skip the main square and head for the perpendicular alleys — they stay quiet all day." },
      { title: "The CNY 80 maintenance fee", detail: "Lijiang Old Town charges a maintenance fee at entry points. Buy it once — it's valid for your whole stay. Keep the ticket with you." },
      { title: "Any village with 'ethnic minority' in its name", detail: "These are often movie-set-style reconstructions built for tour buses. The real thing is Baisha or Shuhe — quieter, authentic, and free." },
    ],
    minDays: "2 days (3 with the Tiger Leaping Gorge trek)",
    difficulty: "Moderate — easy old town, challenging trek option",
    budgetLevel: "CNY 300-700 per person/day",
    bestFor: "Photographers, couples, first-time Yunnan visitors, trek hikers",
    notFor: "Anyone who can't handle midday crowds — the old town is a theme park from 10 AM; come at dawn instead",
    dayPlans: [
      { label: "1 Day", steps: ["6:30 AM: Old Town alone — canals, lanterns, dawn light (2h)", "9 AM: Black Dragon Pool for the Jade Dragon reflection", "11 AM: 20-min taxi to Baisha village — silk-embroidery workshops & quiet lanes", "Lunch: local Naxi eatery in Baisha", "3 PM: Shuhe Ancient Town (free, quiet) or the Jade Dragon cable car if pre-booked", "8 PM: Old Town lanterns & Naxi music performance"] },
      { label: "2 Days", steps: ["Day 1: old town at dawn, Black Dragon Pool, Baisha, Shuhe", "Day 2 (option A): Tiger Leaping Gorge fast trek — 8 AM from Qiaotou, 28 Bends, lunch at the Halfway terrace, back by 6 PM", "Day 2 (option B): Jade Dragon Snow Mountain cable car to 4,506m + Blue Moon Valley"] },
      { label: "3 Days", steps: ["Days 1-2: as above", "Day 3: the full Tiger Leaping Gorge 2-day trek — start at Qiaotou 8 AM, overnight at Halfway, finish at Tina's the next day"] },
    ],
    dailyBudget: { budget: 300, mid: 600, comfort: 1200 },
    description:
      "A UNESCO World Heritage maze of 800-year-old cobblestone streets, wooden bridges, and stone canals watched over by the 5,596-meter Jade Dragon Snow Mountain. Lijiang is the Naxi people's ancient capital and one of China's most atmospheric old towns — especially after dark when red lanterns flicker to life.",
    overview:
      "Lijiang (丽江) is the kind of place that makes you forget which century you are in. Its UNESCO-listed Old Town (Dayan) is a labyrinth of 354 wooden bridges spanning crystal-clear streams, cobblestone alleys polished smooth by centuries of footsteps, and traditional Naxi courtyard homes with upturned eaves and intricate wood carvings. The entire town is a living museum of Naxi culture — one of China's 55 officially recognized ethnic minorities — whose Dongba pictographic script is the world's last living hieroglyphic writing system.\\n\\n" +
      "Towering above it all is Jade Dragon Snow Mountain (玉龙雪山), a 5,596-meter massif whose 13 peaks cradle glaciers that never melt. A cable car whisks visitors to 4,506 meters for surreal alpine views. But Lijiang's real crown jewel lies two hours north: Tiger Leaping Gorge (虎跳峡), one of the deepest river canyons on Earth. The 2-day trek along its high trail is widely considered China's best hike — vertiginous drop-offs, roaring Jinsha River rapids 2,000 meters below, and guesthouses serving cold beer with million-dollar views.\\n\\n" +
      "Just 4 kilometers north, Shuhe Ancient Town offers a quieter, more authentic alternative to Lijiang's sometimes crowded main streets. Here you will find artisans still practicing traditional leatherworking, fewer tour groups, and cafes overlooking vegetable gardens. And at Black Dragon Pool, the perfect reflection of Jade Dragon Snow Mountain in jade-green water framed by the Moon Embracing Pavilion is the shot that launched a million postcards.",
    image: "/images/lijiang-old-town.webp",
    highlights: ["Lijiang Old Town (UNESCO)", "Jade Dragon Snow Mountain", "Tiger Leaping Gorge Trek", "Black Dragon Pool", "Shuhe Ancient Town"],
    bestTime: "April to October",
    climate: "Cool highland, 10-22°C",
    activities: [
      "Get lost in Lijiang Old Town's 800-year-old maze of canals, bridges, and lantern-lit alleys",
      "Ride the cable car to 4,506m on Jade Dragon Snow Mountain for glacier views",
      "Trek Tiger Leaping Gorge — China's most spectacular 2-day hike along one of the world's deepest canyons",
      "Watch a live performance of 1,000-year-old Naxi ancient music played on traditional instruments",
      "Photograph the iconic Jade Dragon Mountain reflection at Black Dragon Pool at sunrise"
    ],
    tips: [
      "Lijiang Old Town charges a CNY 80 'Ancient Town Maintenance Fee' — buy it once, valid for your entire stay",
      "Start the Tiger Leaping Gorge trek from Qiaotou early (by 8 AM) to reach the Halfway Guesthouse by late afternoon",
      "The Old Town becomes extremely crowded after 10 AM — explore at dawn for empty streets and magical light",
      "At 2,400m altitude, some visitors feel mild altitude effects — drink water, skip alcohol on day one"
    ],
    transport: {
      fromKunming: "High-speed train from Kunming (3.5h) or fly (1h). Most travelers arrive via train from Dali (2.5h by bus or 1.5h by train).",
      byTrain: "CNY 220 from Kunming (3.5h). Also CNY 70 from Dali (1.5h). Lijiang railway station is 10km south of the Old Town — taxi CNY 30 or bus No. 4/16.",
      byBus: "CNY 70 from Dali (2.5h, frequent departures). Overnight sleepers available from Kunming (CNY 180, 8h).",
      byFlight: "Lijiang Sanyi Airport (LJG) has direct flights from Kunming (1h, CNY 500-900), Chengdu, Chongqing, and major cities. Airport shuttle to Old Town costs CNY 20.",
    },
    accommodation: [
      { type: "Old Town Naxi Courtyards", description: "Sleep in a 200-year-old Naxi family compound, now restored with modern bathrooms and WiFi. Wooden lattice windows, interior gardens with koi ponds, and owners who will invite you for tea. Most are tucked into quiet alleys away from the main tourist streets.", priceRange: "CNY 150-500" },
      { type: "Boutique Heritage Hotels", description: "Luxury renovations of historic buildings with heated floors, rainfall showers, and rooftop terraces facing Jade Dragon Snow Mountain. The Amandayan and Banyan Tree set the standard, but smaller boutiques like The Bivou offer comparable style at half the price.", priceRange: "CNY 500-1500" },
      { type: "Shuhe Guesthouses", description: "For a quieter stay 4km north of the main Old Town, Shuhe offers guesthouses surrounded by farmland and mountain views. More spacious, less commercial, and still within easy taxi reach of Lijiang.", priceRange: "CNY 120-400" },
    ],
    food: [
      { name: "Naxi Grilled Fish (纳西烤鱼)", description: "Whole river fish marinated in a paste of Sichuan pepper, chili, ginger, and fermented bean curd, then grilled over charcoal until the skin crackles. Served on a sizzling iron plate with wood ear mushrooms and pickled vegetables. The Naxi have been cooking fish this way for centuries." },
      { name: "Lijiang Baba (丽江粑粑)", description: "Lijiang's signature snack: flaky, layered flatbread cooked on a hot stone. Choose sweet (filled with red bean paste and sesame) or savory (stuffed with minced pork, spring onions, and Sichuan pepper). Best eaten hot from street vendors in the Old Town morning market." },
      { name: "Yak Meat Hotpot (牦牛肉火锅)", description: "A highland feast: tender yak meat simmered in a copper pot with Tibetan herbs, wild mushrooms, and hand-pulled noodles. Yak meat is leaner and richer than beef — the high-altitude grasslands give it a distinctive, slightly gamey depth. Perfect after a cold day on the mountain." },
    ],
    gallery: [
      "/images/lijiang-jade-dragon.webp",
      "/images/lijiang-black-dragon.webp",
      "/images/lijiang-canals.webp",
    ],
    galleryAlt: [
      "Jade Dragon Snow Mountain 5,596m peak with glacier and cable car",
      "Black Dragon Pool reflecting Jade Dragon Mountain with Moon Embracing Pavilion",
      "Lijiang Old Town canals with stone bridges and traditional Naxi houses",
    ],
  },
  {
    slug: "dali",
    name: "Dali",
    chinese: "大理",
    region: "Northwest Yunnan",
    altitude: 2000,
    experienceNote: "Dali is the place that rewrote our Yunnan itinerary. We'd planned two days; we stayed five. The rhythm is addictive — morning bike ride along Erhai's western shore to Xizhou, tie-dye workshop in the afternoon, and a courtyard dinner where a Bai family served us three-course tea and stories until the moon rose over Cangshan. In the old town we found what Lijiang lost: artists, chefs, and long-term travelers who actually live here. Our best meal was a farm-to-table spread cooked in a French chef's courtyard home — proof that Dali's creative energy is real, not tourist marketing.",
    namedRestaurants: [
      { name: "Casa Bai", price: "CNY 500/person (~$70)", why: "A private dining experience in a French chef's Dali courtyard home — farm-to-table Yunnan with a cross-cultural twist. Only a few tables, book in advance." },
      { name: "Longxingyuan Restaurant (隆兴园)", price: "CNY 150-350/person", why: "Locals' favorite for steamed Yunnan ham, rice noodle salad, and wild mushrooms cooked any style. Everything on the menu is worth trying." },
      { name: "Green Field Kitchen", price: "CNY 60-100/person", why: "A café hidden among cultivated fields beside Erhai Lake — good sandwiches and coffee, but people come for the view." },
    ],
    namedHotels: [
      { name: "Sky Valley Heritage Boutique Hotel", price: "CNY 600-1,200", why: "A beautifully restored Bai courtyard home — authentic, serene, and framed by canola fields. Perfect for slow mornings." },
      { name: "Erhai lakeside guesthouses (Caicun / Longkan)", price: "CNY 300-800", why: "Floor-to-ceiling windows facing the lake, sunrise from your bed. Many clusters have free bikes for the Erhai loop." },
    ],
    localWarnings: [
      { title: "Dali Old Town after 10 AM", detail: "Same crowd problem as Lijiang, just smaller scale. Dawn and dusk are magical; midday is a shopping mall. Plan your old-town time accordingly." },
      { title: "Don't mistake Dali for a lesser Lijiang", detail: "It's easy to dismiss Dali as Lijiang-lite — that's the biggest mistake first-timers make. Dali's soul is in its resident artist community and lake culture, not its main street." },
      { title: "Tourist 'Bai villages' on the tour-bus route", detail: "Some villages advertise as authentic Bai experiences but are staged for groups. Real ones — like Xizhou's lanes beyond the main square — cost nothing and feel alive." },
    ],
    minDays: "2 days (5 if you let it happen)",
    difficulty: "Easy to moderate — flat cycling, optional cable car climb",
    budgetLevel: "CNY 280-550 per person/day",
    bestFor: "Slow travelers, cyclists, artists, digital nomads, honeymooners",
    notFor: "Tight-schedule travelers — Dali's charm requires staying; don't book it as a 6-hour stop",
    dayPlans: [
      { label: "1 Day", steps: ["8 AM: rent an e-bike (CNY 50-80/day)", "8:30 AM: ride north along Erhai's west shore toward Xizhou (about 1h)", "10 AM: Xizhou morning market & tie-dye workshop", "1 PM: lunch in Xizhou — Bai cured ham & three-course tea", "3 PM: Three Pagodas & Chongsheng Temple (allow 3h)", "7 PM: old town dinner — courtyard kitchen or Bad Monkey pizza"] },
      { label: "2 Days", steps: ["Day 1: Xizhou ride + Three Pagodas + old town night (see above)", "Day 2 (option A): Cangshan cable car to 3,900m + cloud-trail walk", "Day 2 (option B): Erhai east shore — Caicun, Longkan, Shuanglang, sunset on the lake"] },
      { label: "3 Days", steps: ["Days 1-2: as above", "Day 3: choose your obsession — the full 120km Erhai loop, a photography morning on the lake, or a cooking class in the old town"] },
    ],
    dailyBudget: { budget: 280, mid: 550, comfort: 1000 },
    description:
      "Cradled between the 4,000-meter Cangshan Mountains and the vast expanse of Erhai Lake, Dali is Yunnan's bohemian heart — a place where backpackers trade stories in courtyard cafes, Bai artisans practice tie-dye techniques unchanged for a thousand years, and cycling 120 kilometers around a sapphire lake becomes your daily rhythm.",
    overview:
      "Dali (大理) occupies a sliver of flatland between the towering Cangshan range and Erhai Lake — a 250-square-kilometer alpine lake whose name means 'Ear Sea' for its ear-like shape. The setting is almost impossibly beautiful: on clear mornings, the Cangshan peaks reflect perfectly in Erhai's still waters, and traditional Bai fishing boats with cormorant birds drift across the surface like something from a much older China.\\n\\n" +
      "The Old Town itself sits within Ming Dynasty walls, its grid of stone-paved streets lined with persimmon trees, hidden courtyard cafes, and shops selling the Bai people's famous tie-dye textiles. Unlike Lijiang's tourist intensity, Dali retains a laid-back, creative energy that attracts long-term travelers, artists, and digital nomads. The 'Dali speed' is a real thing — days slip by in a pleasant haze of tea drinking, lake cycling, and mountain gazing.\\n\\n" +
      "The Three Pagodas, standing since the 9th century, are Dali's iconic landmark — three brick towers rising against the Cangshan backdrop, having survived earthquakes and dynasties. A 20-kilometer bike ride north along Erhai's western shore brings you to Xizhou, a beautifully preserved Bai village where you can watch tie-dye artisans at work, sample the local cured ham, and visit the ornate Yan Family Compound. For the ambitious, the Cangshan cable car climbs to 3,900 meters, where a 12-kilometer cloud-wreathed walking trail runs along the mountain spine.",
    image: "/images/dali-erhai.webp",
    highlights: ["Erhai Lake Cycling Route", "Dali Ancient City", "Three Pagodas (9th Century)", "Cangshan Mountain Trail", "Xizhou Bai Village"],
    bestTime: "March to May, September to November",
    climate: "Mild highland, 12-24°C",
    activities: [
      "Cycle the 120km loop around Erhai Lake — rent an e-bike and stop at fishing villages along the way",
      "Ride the Cangshan cable car to 3,900m and walk the cloud trail along the mountain spine",
      "Learn Bai tie-dye (扎染) in Xizhou — make your own indigo-dyed scarf in a traditional workshop",
      "Participate in a traditional Bai Three-Course Tea ceremony in a courtyard home",
      "Watch cormorant fishermen on Erhai Lake at dawn — a 1,000-year-old fishing tradition"
    ],
    tips: [
      "Rent an electric scooter (CNY 50-80/day) — the Erhai loop is 120km and a regular bike takes 10+ hours",
      "The Three Pagodas ticket (CNY 121) includes Chongsheng Temple behind — allow 3 hours for the full site",
      "Visit Xizhou's morning market (before 10 AM) for the best street food and fewest tour groups",
      "Dali's Old Town has great Western food if you need a break from Chinese cuisine — try the pizza at Bad Monkey"
    ],
    transport: {
      fromKunming: "High-speed train from Kunming (2h). Dali is the most convenient stop between Kunming and Lijiang — many travelers break their journey here.",
      byTrain: "CNY 128-230 from Kunming (2h, frequent departures). Also CNY 70 to Lijiang (1.5h). Dali station is 15 minutes by taxi from the Old Town.",
      byBus: "CNY 70 from Lijiang (2.5h). Overnight buses from Kunming available (CNY 120, 5h).",
      byFlight: "Dali Fengyi Airport (DLU) serves Kunming (50 min, CNY 400-700), Chengdu, Chongqing, and Xi'an. Airport bus to Old Town costs CNY 25.",
    },
    accommodation: [
      { type: "Erhai Lakeside Guesthouses", description: "The dream Dali experience: floor-to-ceiling windows facing the lake, sunrise from your bed, and the sound of water lapping at the shore. Popular clusters are around Caicun and Longkan villages. Many have free bikes for guests.", priceRange: "CNY 200-600" },
      { type: "Old Town Courtyard Inns", description: "Traditional Bai-style courtyard homes converted into intimate guesthouses. Expect wooden architecture, interior gardens with pomegranate trees, and owners who brew their own fruit wine. Best area: Renmin Road and the streets south of it.", priceRange: "CNY 100-400" },
      { type: "Mountain Retreats", description: "Perched on the lower slopes of Cangshan, these guesthouses offer cooler temperatures, pine forest views, and utter silence. Some have outdoor hot spring pools. Access requires a short taxi up from the Old Town.", priceRange: "CNY 300-800" },
    ],
    food: [
      { name: "Bai Three-Course Tea (三道茶)", description: "More performance than beverage: this ceremonial tea service tells the story of life through three courses — bitter (roasted green tea), sweet (tea with walnuts, brown sugar, and rushan cheese), and the aftertaste (tea with Sichuan pepper, ginger, and honey). Served in Xizhou and Old Town tea houses, often with Bai music and dance." },
      { name: "Dali Cured Ham (大理火腿)", description: "Yunnan's answer to prosciutto: pork legs dry-cured in the mountain air for months, then sliced paper-thin. The pink-white marbling melts on the tongue. Try it stir-fried with wild mushrooms or simply on its own with a glass of local plum wine." },
      { name: "Erhai Lake Grilled Fish (洱海烤鱼)", description: "Fresh-caught Erhai carp, slit open and grilled on an iron plate at your table with a mountain of chili, garlic, spring onions, and Sichuan peppercorns. The skin chars to a crisp while the flesh stays juicy. Each lakeside restaurant claims its own secret spice blend." },
    ],
    gallery: [
      "/images/dali-pagodas.webp",
      "/images/dali-cangshan.webp",
      "/images/dali-old-town.webp",
    ],
    galleryAlt: [
      "Three Pagodas of Dali, 9th-century brick towers with Cangshan backdrop",
      "Cangshan Mountain cloud-wreathed walking trail at 3,900 meters, Dali",
      "Dali Ancient City stone-paved streets with persimmon trees and traditional shops",
    ],
  },
  {
    slug: "shangri-la",
    name: "Shangri-La",
    chinese: "香格里拉",
    region: "Northwest Yunnan / Tibetan Plateau",
    altitude: 3400,
    experienceNote: "Shangri-La humbled us — literally. At 3,400 meters, the 200 steps up to Songzanlin Monastery felt like climbing a mountain, and we learned to walk like monks: slow, deliberate, grateful for oxygen. The reward was silence, golden roofs, and prayer flags snapping in the wind at the 'Little Potala Palace.' We spent our first evening in Dukezong turning the world's largest prayer wheel (it takes a dozen people to move it) and our last morning watching yaks graze Napa Lake while black-necked cranes foraged in the marsh. One honest note: the old town was largely rebuilt after the 2014 fire — it's pretty, but the authenticity you came for lives in the monastery and the villages beyond, not the souvenir lanes.",
    namedRestaurants: [
      { name: "Flying Tiger Restaurant", price: "CNY 60-100/person", why: "Run by two friendly Frenchmen, known for the best yak burger in town — a comforting break from Tibetan staples." },
      { name: "Huksum Kitchen (cat bar)", price: "CNY 80-150/person", why: "Shared hotpot and BBQ with yak meat and local Shangri-La beer, in a cozy spot that doubles as a cat bar. Great after a cold day." },
      { name: "Karma Café & Lodge", price: "CNY 30-50", why: "The warmest café in the old town for yak-butter-tea beginners — and a good place to plan your next day." },
    ],
    namedHotels: [
      { name: "Arro Khampa (香格里拉山水酒店)", price: "CNY 400-900", why: "A boutique gem in the old town — fireplace, ginger tea on arrival, and modern-Chinese décor done beautifully." },
      { name: "LUX* Shangri-La", price: "CNY 1,500/night (~$220)", why: "A stylish lodge on the old Tea Horse Road with great value for the level of comfort — remote, quiet, mountain-life views." },
    ],
    localWarnings: [
      { title: "Altitude is not optional here", detail: "At 3,400m you're at 65% of sea-level oxygen. Rest your first 24 hours, drink 3+ liters of water, skip alcohol, and climb stairs slowly. Oxygen cans (CNY 30) are sold everywhere if needed." },
      { title: "Dukezong's rebuilt old town", detail: "The 2014 fire destroyed much of the old town; what you see now is a reconstruction aimed at domestic tourism. Pretty — but manage expectations and head to the monastery for the real Shangri-La." },
      { title: "No photos inside the temples", detail: "Monks pray inside Songzanlin and photography is not allowed in the prayer halls — the exterior and golden-hour light are the photographic rewards anyway." },
    ],
    minDays: "2 days (3 to acclimatize comfortably)",
    difficulty: "Moderate — the altitude is the challenge, not the terrain",
    budgetLevel: "CNY 350-700 per person/day",
    bestFor: "Culture seekers, photographers, Tibetan Buddhism enthusiasts, highland scenery lovers",
    notFor: "Travelers with heart or respiratory conditions — 3,400m means 65% of sea-level oxygen; consult your doctor first",
    dayPlans: [
      { label: "1 Day (Acclimatize)", steps: ["Rest the morning — walk slowly, drink 3L of water, skip alcohol", "2 PM: Songzanlin Monastery (CNY 115 incl. guided tour) — catch golden hour at 5-6 PM", "7 PM: Dukezong old town, turn the world's largest prayer wheel"] },
      { label: "2 Days", steps: ["Day 1: acclimatize — Songzanlin + Dukezong (see above)", "Day 2: Pudacuo National Park — Shudu Lake boardwalk (3-4h), back by late afternoon", "Evening: yak hotpot & Tibetan momos"] },
      { label: "3 Days", steps: ["Days 1-2: as above", "Day 3 (option A): Napa Lake at dawn — black-necked cranes in winter", "Day 3 (option B): Balagezong Grand Canyon full day — suspension bridges & turquoise rivers"] },
    ],
    dailyBudget: { budget: 350, mid: 650, comfort: 1300 },
    description:
      "At 3,400 meters on the edge of the Tibetan Plateau, Shangri-La (formerly Zhongdian) lives up to its mythical name with golden-roofed monasteries, yak-dotted grasslands, and the kind of high-altitude silence that makes you feel like you have reached the roof of the world.",
    overview:
      "Shangri-La (香格里拉) was renamed in 2001 from its former Chinese name Zhongdian, after James Hilton's fictional paradise in Lost Horizon — and the rebranding was no exaggeration. Perched at 3,400 meters on the southeastern edge of the Tibetan Plateau, this small city is surrounded by some of Yunnan's most dramatic landscapes: snow-dusted peaks, pristine alpine lakes, and wide valleys where yaks graze under endless blue skies.\\n\\n" +
      "The spiritual heart of Shangri-La is Songzanlin Monastery (松赞林寺), a sprawling Tibetan Buddhist complex often called the 'Little Potala Palace' for its resemblance to Lhasa's iconic landmark. Built in 1679, it houses 700 monks and is the largest Tibetan monastery in Yunnan. Golden hour here — when the last sunlight catches the golden roofs and prayer flags flutter against the mountain backdrop — is one of those travel moments that stays with you forever.\\n\\n" +
      "For nature lovers, Pudacuo National Park (普达措国家公园) is China's first national park to meet international standards. Its centerpiece is Shudu Lake, a mirror-calm alpine lake surrounded by old-growth fir forests and grazing yaks. A wooden boardwalk circles the lake, making it accessible even at this altitude. Napa Lake is a seasonal wetland where thousands of migratory birds — including endangered black-necked cranes — winter from October to March. And Dukezong Ancient Town, with its 1,300-year-old history as a Tea Horse Road trading post, was largely rebuilt after a 2014 fire but retains its Tibetan character with prayer wheels, butter lamps, and the world's largest prayer wheel (21 meters tall, requiring several people to turn).",
    image: "/images/shangri-la-monastery.webp",
    highlights: ["Songzanlin Monastery", "Pudacuo National Park", "Dukezong Ancient Town", "Napa Lake & Black-Necked Cranes", "Balagezong Grand Canyon"],
    bestTime: "May to October",
    climate: "Alpine plateau, 5-18°C, frost possible year-round",
    activities: [
      "Explore Songzanlin Monastery at golden hour — the 'Little Potala Palace' of Yunnan with 700 monks",
      "Walk the boardwalk around Shudu Lake in Pudacuo National Park, surrounded by old-growth forest",
      "Turn the world's largest prayer wheel (21m) in Dukezong Ancient Town",
      "Trek through Balagezong Grand Canyon — suspension bridges over turquoise rivers",
      "Spend a night in a Tibetan homestay: drink yak butter tea, learn to make tsampa, and sleep under heavy wool blankets"
    ],
    tips: [
      "Altitude sickness is real at 3,400m — spend your first 24 hours resting, drink 3+ liters of water, and avoid alcohol",
      "Bring a down jacket even in summer — nighttime temperatures can drop below 5°C even in July",
      "The oxygen level here is about 65% of sea level — climb stairs slowly and consider buying a portable oxygen can (CNY 30)",
      "Songzanlin Monastery charges CNY 115 but the ticket includes a guided tour — well worth it for context on Tibetan Buddhism"
    ],
    transport: {
      fromKunming: "Fly from Kunming (1h) for the fastest route, or take the high-speed train to Lijiang then connect by train (1h 15min) or bus (4h).",
      byTrain: "CNY 145 from Lijiang (1h 15min, 3-4 daily departures). The new railway station is in Shangri-La city center.",
      byBus: "CNY 65 from Lijiang (4h, scenic mountain roads). Regular departures from Lijiang Bus Station throughout the day.",
      byFlight: "Diqing Shangri-La Airport (DIG) has direct flights from Kunming (1h, CNY 600-1200), Chengdu, and Chongqing. Airport is 5km from the city center — taxi CNY 30.",
    },
    accommodation: [
      { type: "Tibetan Family Homestays", description: "The most authentic Shangri-La experience: sleep under yak-wool blankets in a traditional Tibetan home, wake to the smell of yak butter tea, and share meals with a family who have lived on this plateau for generations. Most are in villages around the monastery or Dukezong.", priceRange: "CNY 80-200" },
      { type: "Boutique Tibetan Hotels", description: "Heritage Tibetan buildings renovated with modern heating (crucial at this altitude), en-suite bathrooms, and WiFi. The Songtsam Retreat overlooks Songzanlin Monastery and sets the gold standard, but several smaller options in Dukezong offer similar charm at half the price.", priceRange: "CNY 300-800" },
      { type: "Dukezong Guesthouses", description: "Stay inside the ancient town walls in a restored Tibetan merchant's house. Thick rammed-earth walls keep rooms warm, and rooftop terraces offer views of the giant prayer wheel and surrounding mountains.", priceRange: "CNY 150-400" },
    ],
    food: [
      { name: "Yak Butter Tea (酥油茶)", description: "The fuel of Tibetan life: strong black tea churned with yak butter, salt, and sometimes a pinch of soda in a wooden cylinder until it becomes a frothy, savory, calorie-dense drink. It is an acquired taste (salty, not sweet), but at high altitude, your body will thank you for the warmth and energy." },
      { name: "Tsampa (糌粑)", description: "Tibet's staple food: roasted highland barley flour mixed with yak butter tea and kneaded into a dough-like ball. Eaten with your hands alongside meals or on its own as a portable, nutrient-dense snack. Monks have sustained themselves on tsampa during long retreats for centuries." },
      { name: "Yak Meat Momo (牦牛肉饺子)", description: "Tibetan dumplings filled with spiced minced yak meat and onions, steamed until the wrapper turns translucent. Dip them in chili oil mixed with black vinegar. A plate of 10 momos costs about CNY 25 and will keep you going through a cold highland afternoon." },
    ],
    gallery: [
      "/images/shangri-la-pudacuo.webp",
      "/images/shangri-la-tibetan.webp",
      "/images/shangri-la-grassland.webp",
    ],
    galleryAlt: [
      "Shudu Lake mirror-calm alpine waters surrounded by fir forest, Pudacuo National Park",
      "Traditional Tibetan homes with yak grazing on highland grassland, Shangri-La",
      "Napa Lake seasonal wetland with grazing yaks and mountain panorama, Shangri-La",
    ],
  },
  {
    slug: "yuanyang",
    name: "Yuanyang Rice Terraces",
    chinese: "元阳梯田",
    region: "Southern Yunnan",
    altitude: 1800,
    experienceNote: "We set our alarm for 4:30 AM to catch sunrise at Duoyishu, and so did half of China's photography community — tripods lined the platform like a firing squad. But when the sun broke and the water-filled terraces turned molten gold, every frozen finger was worth it. Between shoots we wandered into Qingkou village, where a Hani farmer let us try her water buffalo's wooden plow and served us smoky, crimson Hani red rice from the very terraces below our viewpoint. That bowl of rice — grown for 1,300 years by her ancestors — was the truest taste of Yunnan we had all trip.",
    namedRestaurants: [
      { name: "Any guesthouse kitchen in Duoyishu", price: "CNY 30-50/person", why: "Every terrace-view guesthouse runs a family kitchen — simple, honest Hani cooking: red rice, wild vegetable hotpot, smoked pork. The view during dinner is the real reason to book." },
    ],
    namedHotels: [
      { name: "Jackie's Guesthouse (多依树)", price: "CNY 250-500", why: "A traveler favorite by the Duoyishu viewpoint — wake up, open the curtains, and the sunrise is already on stage." },
      { name: "Oness Resort", price: "CNY 400-800", why: "For the same sunrise with more comfort — better beds, hot showers, and a room facing east." },
    ],
    localWarnings: [
      { title: "The 5 AM photography circus", detail: "Duoyishu's sunrise platform fills with photographers before dawn, especially November-March. Stake your spot early or accept the second row — the terraces photograph beautifully from anywhere." },
      { title: "April-October: no water, no reflections", detail: "The famous mirror reflections only exist when the terraces are flooded, roughly November to March. Off-season the terraces are green with growing rice — still pretty, but a different show." },
      { title: "Cold dawns at 1,800m", detail: "Sunrise shoots mean standing still in near-freezing temperatures. Bring a down jacket, warm hat, and thermos — you'll thank yourself at 6 AM." },
    ],
    minDays: "2 days / 2 nights (you want both sunrises)",
    difficulty: "Easy — viewpoints are connected by road, minimal walking",
    budgetLevel: "CNY 250-500 per person/day",
    bestFor: "Photographers, landscape lovers, travelers who don't mind early alarms",
    notFor: "Sleep-in travelers — if you won't get up for a 5 AM sunrise, the terraces lose half their magic",
    dayPlans: [
      { label: "1 Day (Tight)", steps: ["5 AM: sunrise at Duoyishu viewpoint", "8 AM: breakfast at your guesthouse", "9:30 AM: Qingkou village — Hani mushroom houses & market", "1 PM: Bada terraces panorama", "4:30 PM: Laohuzui sunset viewpoint", "7 PM: red rice & wild-vegetable hotpot dinner"] },
      { label: "2 Days (Classic)", steps: ["Day 1: arrive by early afternoon, 4:30 PM Laohuzui sunset", "Day 2: 5 AM Duoyishu sunrise, Qingkou village, Bada by noon, depart after lunch"] },
      { label: "3 Days (With Jianshui)", steps: ["Days 1-2: the classic plan", "Day 3: bus to Jianshui (2h) — ancient town, Double Dragon Bridge, Confucius Temple, then high-speed train home"] },
    ],
    dailyBudget: { budget: 250, mid: 450, comfort: 800 },
    description:
      "A UNESCO World Heritage masterpiece carved by the Hani people over 1,300 years: thousands of mirror-like rice terraces cascading down mountain slopes, reflecting dawn colors so vividly that photographers from around the world brave 5 AM wake-up calls in the cold just to witness it.",
    overview:
      "The Yuanyang Rice Terraces (元阳梯田) are arguably the most photogenic landscape in all of China. Carved by the Hani ethnic minority over 1,300 years — generation after generation sculpting the Ailao Mountains by hand — these terraces cover an astonishing 17,000 hectares across slopes so steep they seem to defy gravity. In winter and early spring (November to March), the terraces are flooded with water for the planting season, transforming them into thousands of liquid mirrors that reflect the changing sky.\\n\\n" +
      "The daily ritual here revolves around light. At Duoyishu (多依树), photographers from around the world line up before 5 AM, tripods poised, waiting for the moment the sun breaks over the horizon and ignites the water-filled terraces with gold, pink, and orange. At Laohuzui (老虎嘴 — 'Tiger's Mouth') in the evening, the setting sun casts long shadows across the terraces, creating abstract patterns that look more like a painter's canvas than a farm. And at Bada (坝达), the sheer scale hits you — over 3,000 terraces stacked from valley floor to mountain summit in one sweeping view.\\n\\n" +
      "Beyond the photography, Yuanyang is a living cultural landscape. Qingkou Village is a traditional Hani settlement of mushroom-shaped houses — thatched roofs supported by earthen walls — where you can watch farmers working the terraces with water buffalo and wooden plows, just as they have for centuries. The weekly Jingkou Market brings Hani, Yi, and Miao villagers together in a riot of colors: women in embroidered headdresses selling wild honey, medicinal roots, and handwoven textiles.",
    image: "/images/yuanyang-terraces.webp",
    highlights: ["Duoyishu Sunrise Platform", "Bada Terraces Panorama", "Laohuzui Sunset View", "Qingkou Hani Village", "Jingkou Ethnic Market"],
    bestTime: "November to March (water-filled terraces reflect the sky)",
    climate: "Subtropical highland, 10-25°C, morning fog common",
    activities: [
      "Wake before dawn to photograph the sunrise at Duoyishu — the terraces become molten gold",
      "Walk through Qingkou Village to see Hani mushroom houses and water buffalo plowing the terraces",
      "Visit Jingkou Market for Hani and Yi villagers trading in full traditional dress",
      "Watch the sunset light show at Laohuzui — the terraces turn from gold to crimson to indigo",
      "Stay in a terrace-view guesthouse and fall asleep to the sound of water flowing between paddies"
    ],
    tips: [
      "November through March is terrace season (water-filled) — April through October the terraces are green with growing rice (still beautiful, but no reflections)",
      "The closest city with train access is Jianshui (2h by bus) — combine Yuanyang with a visit to Jianshui's ancient town and the Double Dragon Bridge",
      "Bring a tripod and warm clothes — sunrise shoots involve standing still at 1,800m in near-freezing temperatures",
      "The Duoyishu viewing platform charges CNY 100 for a multi-day pass covering all viewpoints — buy once, valid for 3 days"
    ],
    transport: {
      fromKunming: "Bus from Kunming South Bus Station to Yuanyang Xinjie Town (the gateway to the terraces).",
      byTrain: "No direct train to Yuanyang. Closest station: Jianshui (建水), then 2h by local bus (CNY 30). Jianshui itself is a worthwhile stop with a well-preserved ancient town.",
      byBus: "Direct bus from Kunming South Bus Station to Xinjie Town: CNY 140 (6-7h, morning departures). From Xinjie, local minibuses (CNY 5-10) connect to each viewing platform.",
      byFlight: "No airport in Yuanyang. Closest airport: Wenshan Puzhehei (4h drive). Most visitors arrive by bus from Kunming or Jianshui.",
    },
    accommodation: [
      { type: "Terrace-View Guesthouses", description: "The reason you came: wake up in a warm bed, push aside the curtains, and watch the sunrise illuminate the terraces from your window. Most are clustered near Duoyishu and Bada. Book a room facing east for the best morning light. Jackie's Guesthouse and Oness Resort are traveler favorites.", priceRange: "CNY 200-500" },
      { type: "Hani Mushroom House Homestays", description: "Sleep in a traditional Hani 'mushroom house' — thick earthen walls, thatched roof, and a fire pit in the center. Basic but unforgettable. Qingkou Village has several families offering homestays where you eat meals with the family and wake to the sound of roosters.", priceRange: "CNY 80-150" },
      { type: "Xinjie Town Hotels", description: "Budget-friendly options in the main town, 30-40 minutes from the viewing platforms. Less atmospheric but more amenities: hot showers, English menus, and tour booking services. Good base for exploring multiple viewpoints.", priceRange: "CNY 100-250" },
    ],
    food: [
      { name: "Hani Red Rice (红米)", description: "Grown in the very terraces you came to photograph, this nutty, rust-colored rice has been cultivated by the Hani for over a millennium. Higher in nutrients than white rice, with a chewy texture and subtle earthy sweetness. Every restaurant in Yuanyang serves it — look for the reddish tint in your bowl." },
      { name: "Wild Vegetable Hotpot (野菜火锅)", description: "The surrounding Ailao Mountains are a forager's paradise. This hotpot features seasonal wild greens, bamboo shoots, tree fungus, and edible ferns — many species you will have never seen before — simmered in a light chicken or pork bone broth. Dipping sauce is DIY: mix chili, fermented bean paste, garlic, and lime at your table." },
      { name: "Hani Smoked Pork (哈尼腊肉)", description: "Pork belly cured with salt and Sichuan pepper, then hung above the cooking fire for weeks until infused with smoky depth. Sliced thin and stir-fried with dried chilies and garlic chives — the fat turns translucent and the lean meat becomes intensely savory. The Hani have been preserving meat this way for generations." },
    ],
    gallery: [
      "/images/yuanyang-terraces.webp",
      "/images/yuanyang-village.webp",
      "/images/yuanyang-sunset.webp",
    ],
    galleryAlt: [
      "Yuanyang rice terraces at sunrise with golden reflections, Duoyishu viewpoint",
      "Qingkou Hani village with traditional mushroom-shaped houses among terraces",
      "Laohuzui rice terraces at sunset with long shadows and abstract patterns",
    ],
  },
  {
    slug: "xishuangbanna",
    name: "Xishuangbanna",
    chinese: "西双版纳",
    region: "Southern Yunnan / Tropical",
    altitude: 500,
    experienceNote: "Xishuangbanna felt like a different country — and we loved it. After two weeks of highland chill, stepping off the train into Jinghong's humid warmth was like exhaling. We spent a morning walking elevated boardwalks above wild elephants at Wild Elephant Valley (observing only — never riding), then lost ourselves in the Mekong night market as dusk fell: grilled fish stuffed with lemongrass, pineapple rice, and a papaya salad that made our eyes water in the best way. In a Dai stilt house village outside town, a grandmother showed us how to wrap sticky rice in banana leaves — the smell of that grill still haunts our notes.",
    namedRestaurants: [
      { name: "Mekong River night market (告庄西双景夜市)", price: "CNY 40-80/person", why: "The heart of Jinghong after dark — grilled Mekong fish, pineapple rice, tropical fruits, and Dai papaya salad. Eat where the locals queue." },
    ],
    namedHotels: [
      { name: "Gaozhuang boutique hotels (告庄)", price: "CNY 300-700", why: "Jinghong's most walkable area — rooftop bars over the Mekong, two minutes from the night market. Best base for first-timers." },
      { name: "Dai-style village bungalows", price: "CNY 150-300", why: "Bamboo stilt houses in Dai villages outside Jinghong — mosquito nets, roosters, temple bells, and home-cooked Dai food with a host family." },
    ],
    localWarnings: [
      { title: "Never book an elephant ride", detail: "The ethics are clear: Yunnan's elephants are endangered and riding them causes real harm. Wild Elephant Valley's elevated walkways are the right way — observation, not interaction." },
      { title: "Monsoon humidity, May-October", detail: "The wet season brings rain, humidity, and mosquitoes. November-April is the sweet spot. Pack quick-dry clothing and serious repellent regardless." },
      { title: "Gaozhuang is tourist central", detail: "The night market area is built for visitors — prices run 30-50% higher than local streets. For the real Dai food, walk 15 minutes into Jinghong proper." },
    ],
    minDays: "2 days (3 for the botanical garden + elephants)",
    difficulty: "Easy — hot and humid, but no strenuous activities required",
    budgetLevel: "CNY 280-550 per person/day",
    bestFor: "Food lovers, families, first-timers to the tropics, Southeast Asia enthusiasts",
    notFor: "Anyone who dislikes heat and humidity — 30°C+ year-round, with monsoon rain May-October",
    dayPlans: [
      { label: "1 Day", steps: ["9 AM: Manting Park & golden temples (2h)", "12 PM: lunch in Jinghong proper — walk 15 min from Gaozhuang for local prices", "3 PM: Mekong riverfront walk", "6 PM: night market opens — grilled fish, pineapple rice, papaya salad", "9 PM: rooftop bar over the Mekong in Gaozhuang"] },
      { label: "2 Days", steps: ["Day 1: Botanical Garden (13,000 species — takes a full morning) + night market", "Day 2: Wild Elephant Valley elevated walkways in the morning + Dai village stilt-house dinner"] },
      { label: "3 Days", steps: ["Days 1-2: as above", "Day 3: Dai Minority Park cultural performances, or a rainforest trek with a local Dai guide"] },
    ],
    dailyBudget: { budget: 280, mid: 550, comfort: 1100 },
    description:
      "China's tropical surprise at the border with Laos and Myanmar: a land of wild Asian elephants, golden Dai Buddhist temples, misty rainforests, and Mekong River night markets where the food is as spicy-sour as anything in Thailand — because culturally, you are practically there.",
    overview:
      "Xishuangbanna (西双版纳) is the curveball in Yunnan's lineup. While the rest of the province trends toward mountains and highlands, Xishuangbanna sits at a sultry 500 meters above sea level in a tropical monsoon climate zone, sharing more DNA with Southeast Asia than with China. The Dai ethnic minority makes up over 30% of the population here, and their culture — Theravada Buddhism, bamboo stilt houses, and a cuisine dominated by lemongrass, lime, and chili — will make you check your map to confirm you have not accidentally crossed into northern Thailand.\\n\\n" +
      "The landscape is equally surprising. The Xishuangbanna Tropical Botanical Garden, run by the Chinese Academy of Sciences, spans over 1,100 hectares and houses more than 13,000 plant species — from carnivorous pitcher plants to towering dipterocarp trees. Wild Elephant Valley offers a chance to see Asia's largest land animal in its natural habitat from elevated walkways (ethical note: avoid any attraction offering elephant rides). The Manting Park and Dai Minority Park showcase golden Buddhist stupas, tropical flowers, and daily cultural performances that bring Dai dance and music to life.\\n\\n" +
      "But the real soul of Xishuangbanna emerges after sunset at the Mekong River night market in Jinghong. Hundreds of stalls serve grilled Mekong fish stuffed with lemongrass, pineapple rice steamed in hollowed-out fruit, tropical fruits you have never seen before, and the Dai version of papaya salad that will make your eyes water. The air is thick with incense from riverside temples, the scent of grilling meat, and the sound of Dai pop music — it is chaotic, humid, and completely unforgettable.",
    image: "/images/xishuangbanna-rainforest.webp",
    highlights: ["Tropical Botanical Garden", "Wild Elephant Valley", "Dai Minority Park & Golden Temples", "Manting Park", "Mekong River Night Market"],
    bestTime: "November to April (dry season, comfortable temperatures)",
    climate: "Tropical monsoon, 18-35°C, humid year-round",
    activities: [
      "Walk among 13,000 plant species at the Xishuangbanna Tropical Botanical Garden — one of China's finest",
      "Spot wild Asian elephants from elevated walkways at Wild Elephant Valley",
      "Explore golden Dai Buddhist temples and bamboo stilt villages at Dai Minority Park",
      "Eat your way through the Mekong River night market — grilled fish, papaya salad, and tropical fruit",
      "Trek into the Xishuangbanna Tropical Rainforest National Park with a local Dai guide"
    ],
    tips: [
      "November to April is the dry season and the best time to visit — May to October brings monsoon rains and oppressive humidity",
      "Bring mosquito repellent and light, quick-dry clothing — you are in the tropics",
      "The new high-speed train connects Kunming to Xishuangbanna in 3.5 hours (opened 2022) — a game-changer for this route",
      "Avoid any attraction offering elephant rides — ethical elephant experiences are limited to observation from walkways"
    ],
    transport: {
      fromKunming: "Fly (1h) or take the new high-speed train from Kunming (3.5h). The train is now the preferred option — comfortable, affordable, and scenic.",
      byTrain: "CNY 190 from Kunming (3.5h, new line opened 2022). Jinghong Railway Station is centrally located. This route has made Xishuangbanna dramatically more accessible.",
      byBus: "CNY 240 from Kunming (8h, overnight sleeper available). Long journey but the cheapest option. Day buses also depart from Kunming South Station.",
      byFlight: "Xishuangbanna Gasa Airport (JHG) serves Kunming (1h, CNY 400-800) plus direct flights from Chengdu, Chongqing, and some international routes from Southeast Asia.",
    },
    accommodation: [
      { type: "Tropical Resort Hotels", description: "Lush, resort-style properties with elaborate pools surrounded by palm trees and tropical gardens. The InterContinental and Anantara set the luxury standard, but mid-range options near Gaozhuang offer similar tropical vibes at a fraction of the cost. Most have in-house spas and Dai-style architecture.", priceRange: "CNY 300-1200" },
      { type: "Dai-Style Bungalows", description: "Traditional bamboo and wood houses on stilts in Dai villages outside Jinghong. Simple but atmospheric: sleep under a mosquito net, wake to roosters and temple bells, and eat home-cooked Dai food with your host family. Best for cultural immersion rather than luxury.", priceRange: "CNY 100-300" },
      { type: "Gaozhuang Boutique Hotels", description: "Gaozhuang is Jinghong's most popular tourist area, packed with stylish small hotels, rooftop bars overlooking the Mekong, and easy walking access to the night market. Great for first-time visitors who want to be in the center of the action.", priceRange: "CNY 200-500" },
    ],
    food: [
      { name: "Dai Grilled Fish (傣味烤鱼)", description: "The signature dish of Xishuangbanna: whole tilapia or snakehead fish stuffed with lemongrass, kaffir lime leaves, garlic, and chilies, wrapped in banana leaves, and grilled over charcoal. The banana leaf steams the fish from the inside while the skin crisps. Served with a dipping sauce of lime juice, crushed chili, and fermented fish sauce." },
      { name: "Pineapple Rice (菠萝饭)", description: "Glutinous rice steamed inside a hollowed-out pineapple with coconut milk, rock sugar, and sometimes black rice for color contrast. Sweet, fragrant, and surprisingly filling. Eaten as a side dish or dessert — it is the most Instagrammed food in Xishuangbanna for good reason." },
      { name: "Dai Sour-Spicy Salad (傣味凉拌)", description: "The Dai version of Southeast Asian green papaya salad: shredded green mango or papaya pounded in a mortar with lime juice, fish sauce, dried shrimp, cherry tomatoes, crushed peanuts, and bird's eye chilies. The flavor is an assault in the best possible way — sour, spicy, salty, and umami in every bite." },
    ],
    gallery: [
      "/images/xishuangbanna-dai.webp",
      "/images/xishuangbanna-mekong.webp",
      "/images/xishuangbanna-garden.webp",
    ],
    galleryAlt: [
      "Golden Dai Buddhist temple with tropical palms in Xishuangbanna",
      "Mekong River night market with grilled fish stalls and lanterns, Jinghong",
      "Xishuangbanna Tropical Botanical Garden with 13,000 plant species, Chinese Academy of Sciences",
    ],
  },
  {
    slug: "tiger-leaping-gorge",
    name: "Tiger Leaping Gorge",
    chinese: "虎跳峡",
    region: "Northwest Yunnan / Jinsha River",
    altitude: 2500,
    minDays: "2 days (the classic trek); 1 long day if you're fit",
    difficulty: "Challenging — 28 Bends climb at 2,600m, steep descents, uneven trail",
    budgetLevel: "CNY 200-400 per person/day (trail costs are low)",
    bestFor: "Hikers, fit travelers, anyone who wants China's best trek without permits",
    notFor: "Anyone with knee problems, vertigo, or no hiking experience — the descents punish knees and the drops are sheer",
    dayPlans: [
      { label: "1 Day (Fast)", steps: ["8 AM: start from Qiaotou after leaving your bag at Jane's Guest House", "10:30 AM: conquer the 28 Bends (2h — the hardest stretch)", "12 PM: lunch at a trailside farmhouse", "1:30 PM: continue to the Halfway terrace for the view and a beer", "4 PM: push to Tina's if you're fast, or turn back at a comfortable point", "6 PM: bus from Tina's back to Lijiang (CNY 40)"] },
      { label: "2 Days (Classic)", steps: ["Day 1: 8 AM from Qiaotou — 28 Bends by 10:30, lunch on trail, reach Halfway by 4 PM, terrace sunset beer", "Day 2: 8 AM continue to Tina's (3-4h), drop bags, descend 1,700 steps to Tiger Leaping Stone, return, bus to Lijiang by 5 PM"] },
      { label: "3 Days (Slow)", steps: ["Days 1-2: the classic trek", "Day 3: bonus — Haba Snow Mountain base hike, the Upper Gorge viewpoint, or rest in Lijiang before continuing north"] },
    ],
    dailyBudget: { budget: 200, mid: 350, comfort: 700 },
    description:
      "One of the deepest river canyons on Earth — 16 kilometers long, with the Jinsha River thundering 2,000 meters below a cliff-edge hiking trail that is widely considered China's best trek. The gorge is squeezed between Jade Dragon Snow Mountain and Haba Snow Mountain, and legend says a tiger once leapt across it in a single bound.",
    overview:
      "Tiger Leaping Gorge (虎跳峡) is where the Jinsha River — the upper Yangtze — forces its way through a 16-kilometer canyon between two giants: Haba Snow Mountain (5,396m) and Jade Dragon Snow Mountain (5,596m). In places the gorge narrows to just 30 meters wide, and the river drops so violently that 30 cubic meters of water thunder through every second. It is one of the world's deepest river canyons, with the riverbed lying up to 3,900 meters below the peaks above.\n\n" +
      "The main event is the High Trail (高路徒步线), a 22-kilometer cliff-hugging footpath running along the northern side of the gorge between Qiaotou and Tina's Guesthouse. It is almost always hiked in two days, with an overnight at the famous Halfway Guest House, where the terrace beer-garden view over the canyon is worth the entire climb. The trail offers the full Chinese countryside experience: farmhouses, apple orchards, terraced fields, and viewpoints where the roaring river seems close enough to touch. A steeper 28-bend climb brings you to the 28 Bends — the hardest part of the trek, and the moment the scale of the canyon finally hits you.\n\n" +
      "Below, the Lower Trail (中虎跳) descends to the river itself: a heart-pumping staircase of 1,700 steps down to Tiger Leaping Stone, the boulder where legend says a tiger crossed the river in a single leap. Many hikers do the High Trail and skip the descent; our advice is to save energy for it — standing on that rock with the gorge walls towering overhead is the moment that defines the whole trek. The gorge is best from March to May and September to November, when skies are clear and the trail is dry.",
    image: "/images/tiger-leaping-gorge.webp",
    highlights: ["The 22km High Trail Trek (2 days)", "Halfway Guest House terrace views", "The 28 Bends climb", "Tiger Leaping Stone & Lower Trail", "Haba Snow Mountain panorama"],
    bestTime: "March to May, September to November",
    climate: "Cool mountain canyon, 10-25°C, dry winters",
    activities: [
      "Trek the 22km High Trail over 2 days — China's most famous hike, with farmhouses, orchards, and vertigo-inducing viewpoints",
      "Climb the 28 Bends to the High Trail's highest point — the hardest stretch, with the canyon's best panoramas",
      "Descend 1,700 steps to Tiger Leaping Stone and stand on the legendary boulder above the river",
      "Drink the famous terrace beer at Halfway Guest House while the Jinsha roars 2,000m below",
      "Photograph Haba Snow Mountain from the trailhead at Qiaotou — the gorge's second giant"
    ],
    tips: [
      "Start the trek from Qiaotou early (by 8 AM) — the 28 Bends are best climbed in morning cool, and you'll reach Halfway by late afternoon",
      "Entrance fee is CNY 45 (plus CNY 2 for the 'Tiger Leaping Stone' pass) — paid at the gorge ticket office; keep the stub, you'll be asked for it along the trail",
      "You can leave your main backpack at Jane's Guest House in Qiaotou and collect it at the other end — hike light, send bags ahead",
      "The trail is doable in one long day (8-9 hours) for fit hikers, but two days is the classic way — the Halfway terrace sunset is worth the overnight",
      "Carry at least 2 liters of water and cash — the trailside farm shops take only cash",
      "Go on a weekday. Weekends bring day-trippers to the viewpoints below, and the trail guesthouses book out"
    ],
    experienceNote: "We woke at Halfway Guest House at 5:50 AM without an alarm — the sunrise over Jade Dragon Snow Mountain does that to you. Beer from the night before still in hand, we watched the Jinsha River catch fire 2,000 meters below while the canyon's shadow retreated. The 28 Bends nearly broke us the day before — two hours of switchbacks at 2,600 meters — but standing on that terrace, with Haba and Jade Dragon facing each other across the gorge, we understood why hikers call this the finest trek in China. The descent to Tiger Leaping Stone was the exclamation point: 1,700 steps down, and the river's roar so loud you feel it in your chest.",
    namedRestaurants: [
      { name: "Halfway Guest House kitchen (虎跳峡中途客栈)", price: "CNY 40-60/person", why: "The terrace dining room has the best restaurant view in China — handmade noodles, stir-fried mountain vegetables, and cold beer while the Jinsha roars below. The yak-butter tea is famously strange; try it once." },
      { name: "Tina's Guesthouse", price: "CNY 30-50/person", why: "The High Trail's southern anchor at the 22km mark: simple home cooking for hikers finishing the trek, cold beer, and a terrace over the Lower Gorge." },
    ],
    namedHotels: [
      { name: "Halfway Guest House", price: "CNY 40 (dorm) - 200 (double)", why: "The world-famous halfway point — dorm beds from CNY 40, private doubles with canyon views, hot showers, and a sunset terrace that justifies the entire trek." },
      { name: "Jane's Guest House, Qiaotou", price: "CNY 80-200", why: "The trailhead institution: stores your luggage while you hike, sells maps, and is the classic pre-trek base where hikers swap route intel." },
    ],
    localWarnings: [
      { title: "Rainy-season rockfalls", detail: "July-August rains loosen the cliffs — the Lower Gorge walkway to Tiger Leaping Stone sometimes closes and the High Trail turns slippery. Check trail conditions at Jane's before setting out." },
      { title: "The split ticket", detail: "The CNY 45 entrance covers the gorge; the walk down to Tiger Leaping Stone costs an extra CNY 2 pass. Keep both stubs — you'll be checked along the trail." },
      { title: "Weekend day-trippers", detail: "Tour buses arrive from Qiaotou from 10 AM and the viewpoints fill with selfie sticks. Start by 8 AM or hike on a weekday." },
    ],
    transport: {
      fromKunming: "Fly or take the high-speed train to Lijiang (3.5h from Kunming), then bus or private car 2h to Qiaotou — the gorge's trailhead. The gorge sits on the Lijiang-Shangri-La road, so it also works as a stop on the way north.",
      byTrain: "No station at the gorge itself. The nearest rail access is Lijiang Station (2h by road) or Shangri-La Station (1.5h). Most hikers connect by bus or car from Lijiang.",
      byBus: "From Lijiang Bus Station, minibuses to Qiaotou run through the morning (CNY 25-35, 2h). Alternatively, any Lijiang-Shangri-La bus can drop you at Qiaotou. Returning, buses from the trail end at Tina's back to Lijiang cost CNY 40.",
      byFlight: "Fly into Lijiang Sanyi Airport (LJG) — daily flights from Kunming (1h) and major cities. From the airport, a private car to Qiaotou is about CNY 400; the bus via Lijiang city is far cheaper.",
    },
    accommodation: [
      { type: "Trail Guesthouses (Halfway / Tea Horse)", description: "The heart of the trekking experience — simple rooms with canyon views, hot showers (usually), and kitchens serving noodles and beer. The Halfway Guest House terrace is famous worldwide. Dorm beds from CNY 40.", priceRange: "CNY 40-200" },
      { type: "Qiaotou Trailhead Inns", description: "Jane's Guest House at the trailhead stores luggage, sells maps, and serves as the classic pre-trek base. Basic, friendly, and full of hikers swapping route intel.", priceRange: "CNY 80-200" },
      { type: "Lijiang Base (before/after the trek)", description: "Most hikers stay in Lijiang the night before and after — Old Town Naxi courtyards or Shuhe guesthouses, then take an early minibus to Qiaotou.", priceRange: "CNY 150-500" },
    ],
    food: [
      { name: "Halfway Guest House Noodles (虎跳峡中途客栈)", description: "The legendary reward after a day on the trail: handmade noodle bowls, stir-fried mountain vegetables, and cold beer on a terrace suspended 2,000 meters above the Jinsha. The yak-butter tea here is famously odd — visually and taste-wise it resembles mushroom soup — but you have to try it once." },
      { name: "Trailside Apple & Walnut Stalls", description: "Farm stands along the High Trail sell fresh-picked apples and walnuts from the orchards terraced into the canyon slopes. Handfuls of walnuts cost a few yuan — buy extra for the 28 Bends." },
      { name: "Qiaotou Farmhouse Meals", description: "The trailhead town's small family restaurants serve hearty mountain cooking: twice-cooked pork, stir-fried local greens, and hot soups. Expect to eat well for CNY 30-50 per person." },
    ],
    gallery: [
      "/images/tiger-leaping-gorge.webp",
      "/images/haba-snow-mountain.webp",
      "/images/tlg-high-trail.webp",
    ],
    galleryAlt: [
      "Jinsha River roaring through Tiger Leaping Gorge between sheer canyon walls",
      "Haba Snow Mountain towering over terraced fields near Tiger Leaping Gorge trailhead",
      "Hikers on the cliff-edge High Trail above the Jinsha River gorge",
    ],
  },
  {
    slug: "stone-forest",
    name: "Stone Forest",
    chinese: "石林",
    region: "Central Yunnan / Shilin County",
    altitude: 1700,
    minDays: "1 day (half day minimum) — day trip from Kunming",
    difficulty: "Easy — 2-3 hours of walking on uneven stone paths, no climbing",
    budgetLevel: "CNY 300-500 per person/day including transport",
    bestFor: "Day-trippers from Kunming, families, first-timers to China",
    notFor: "Travelers on a tight Yunnan loop — the drive is 90 minutes each way; worth it, but not on a 5-day sprint",
    dayPlans: [
      { label: "Half Day", steps: ["7:30 AM: bus or train from Kunming (90 min)", "9 AM: Greater Stone Forest labyrinth — 2h before the tour groups peak", "11 AM: Wangfeng Pavilion viewpoint", "12:30 PM: roast chicken lunch on the road back", "2 PM: back in Kunming"] },
      { label: "Full Day", steps: ["6:30 AM: depart Kunming", "7:40 AM: main gate — the labyrinth alone in golden light", "10 AM: shuttle to the Lesser Stone Forest & Ashima Stone", "1 PM: Sani roast chicken lunch", "2:30 PM: Naigu Black Forest — quieter, wilder, 1.5h", "5 PM: return to Kunming"] },
      { label: "With Overnight", steps: ["Afternoon: arrive, sunset light on the pillars with the crowds gone", "Next morning: 7:40 AM golden-hour walk before breakfast", "10 AM: Naigu forest, then lunch and return to Kunming"] },
    ],
    dailyBudget: { budget: 300, mid: 500, comfort: 800 },
    description:
      "A UNESCO World Heritage landscape of limestone karst pinnacles that rise like petrified trees from the Yunnan plain — some up to 30 meters tall, formed over 270 million years. The Stone Forest is Kunming's most iconic day trip and one of China's great geological set pieces.",
    overview:
      "The Stone Forest (石林, Shilin) is exactly what its name promises: a forest of stone. Over 270 million years, an ancient seabed was uplifted, and rain and groundwater dissolved the limestone into a maze of vertical pillars, deep pits, and narrow corridors spread across 400 square kilometers — the largest karst stone forest in the world. The result looks like a petrified city, and the local Sani people (a branch of the Yi minority) have woven it into their legends: the towering figure of Ashima, their heroine, is said to stand forever among the stones.\n\n" +
      "Most visitors start at the Greater Stone Forest (大石林), the dense core where stone pillars crowd together like a labyrinth and walkways thread between them. Follow the stone stairs upward to Wangfeng Pavilion, the highest viewpoint, for the classic sweep of pinnacles against the sky. The Lesser Stone Forest (小石林) to the east is gentler — grass-covered clearings dotted with slender pillars, including the famous Ashima Stone. A shuttle connects the two areas, and a winding bus route reaches the newer Naigu Stone Forest (乃古石林) farther out, a wilder, blacker rock formation that most tour groups skip.\n\n" +
      "The Stone Forest is a half-day to full-day trip from Kunming, 90 minutes by bus or car. Go on a weekday and arrive early: by mid-morning the park fills with tour groups, and by noon the main paths are a procession of umbrellas and selfie sticks. Come before 9 AM and you can have the labyrinth almost to yourself — the stones at dawn, in low golden light, are worth every minute of the early start.",
    image: "/images/kunming-stone-forest.webp",
    highlights: ["Greater Stone Forest labyrinth", "Wangfeng Pavilion viewpoint", "Ashima Stone & Lesser Stone Forest", "Naigu (Black) Stone Forest", "Sani Yi culture & legends"],
    bestTime: "Year-round; March-November best. Avoid Chinese public holidays",
    climate: "Mild plateau climate, 15-24°C",
    activities: [
      "Lose yourself in the Greater Stone Forest labyrinth — 2-3 hours of walking through stone canyons",
      "Climb to Wangfeng Pavilion for the classic panoramic view over the pinnacles",
      "Find the Ashima Stone in the Lesser Stone Forest and learn the Sani heroine's legend",
      "Explore the wilder Naigu Stone Forest — blacker rock, fewer crowds, better photo angles",
      "Watch a Sani folk dance performance at the entrance plaza (weekends and holidays)"
    ],
    tips: [
      "Entrance fee is CNY 130 plus CNY 25 for the shuttle between the Greater and Lesser forests — buy the combo ticket, you'll want the shuttle",
      "Arrive before 9 AM on weekdays. The park is 90 minutes from Kunming; a 6:30 AM departure gets you there for golden light and empty paths",
      "Allow 3-4 hours minimum — the Greater Forest alone takes 2-3 hours of walking, and the shuttle loops add time",
      "Wear proper walking shoes: the stone paths are uneven, and the labyrinth's steps are steep and slippery after rain",
      "Combine with the Stone Forest Night Tour or stay overnight in Shilin town if you want sunset light on the pillars",
      "Visit during a Yi minority festival (Torch Festival, June/July) and the park erupts into music and dance"
    ],
    experienceNote: "The Stone Forest surprised us twice. First at dawn, when we passed through the main gate at 7:40 AM and had the labyrinth to ourselves — walking between 30-meter stone pillars in golden light felt like stepping into a petrified city still asleep. The second surprise was Naigu, the 'black' forest most tours skip: a half-hour shuttle away, its darker, wilder pinnacles rose from grassland with only a handful of visitors. Standing at Wangfeng Pavilion, looking over stone 'trees' that have been growing for 270 million years, we finally understood the Sani legend of Ashima — this landscape deserves its heroine.",
    namedRestaurants: [
      { name: "Sani Roast Chicken stalls (撒尼烤鸡)", price: "CNY 80 per bird", why: "The road into the park is lined with Sani family restaurants roasting whole chickens over open flame — Sichuan-peppercorn crust, crackling skin, feeds two." },
      { name: "Shilin Town Baba stalls", price: "CNY 5-10", why: "Buckwheat flatbreads griddled to order. Cheap, filling, and the right fuel for two hours of labyrinth walking." },
    ],
    namedHotels: [
      { name: "Shilin Town hotels near the gate", price: "CNY 150-350", why: "Simple but fine — the reason to stay is sunset or sunrise light on the pillars with the day-trip crowds gone." },
      { name: "Kunming guesthouses (day-trip base)", price: "CNY 150-600", why: "Most visitors sleep in Kunming and spend the day here — our recommendation for most travelers. The 90-minute drive each way is easy." },
    ],
    localWarnings: [
      { title: "Ticket fine print", detail: "The CNY 130 entrance ticket doesn't cover the shuttle between the Greater and Lesser forests (CNY 25 extra). Buy the combo at the gate — walking between them eats an hour." },
      { title: "Midday tour-group tsunami", detail: "From 10 AM, coach parties flood the main paths. Arrive before 9 AM or head to Naigu (the black forest) — it stays quiet all day." },
      { title: "Slippery stone steps", detail: "The labyrinth's stairways are steep, uneven, and treacherous after rain. Real walking shoes, not sandals." },
    ],
    transport: {
      fromKunming: "The Stone Forest is 90 minutes from central Kunming. Tourist buses depart from Kunming's East Bus Station (CNY 45-60, hourly), and private cars or taxis cost CNY 300-400 round trip. The new high-speed train to Shilin West Station (20 minutes from Kunming South) plus a short taxi is the fastest option.",
      byTrain: "High-speed trains run from Kunming South Station to Shilin West in about 20-30 minutes (CNY 30-40). From Shilin West, the park entrance is 15 minutes by taxi.",
      byBus: "From Kunming East Bus Station (东部客运站), buses to Shilin County run every 30-60 minutes (CNY 45-60, 1.5-2h). County taxis cover the last 10 minutes to the park gate.",
      byFlight: "No airport at Shilin. Fly into Kunming Changshui International Airport (KMG), then take the metro to Kunming South for the high-speed train, or a car directly from the airport (CNY 400-500).",
    },
    accommodation: [
      { type: "Kunming Day-Trip Base", description: "Most visitors make this a day trip from Kunming and save their nights for the capital's guesthouses and hotels. This is our recommendation for most travelers.", priceRange: "CNY 150-600" },
      { type: "Shilin Town Hotels", description: "A handful of simple hotels near the park gate — useful if you want sunrise or sunset light on the stones without the 90-minute drive each way.", priceRange: "CNY 150-350" },
      { type: "Sani Homestays in nearby villages", description: "For Yi culture immersion, a few villages around the park offer basic homestays with Sani family meals and traditional dress experiences.", priceRange: "CNY 100-250" },
    ],
    food: [
      { name: "Sani-style Roast Chicken (撒尼烤鸡)", description: "The local specialty around the Stone Forest: whole free-range chickens rubbed with Sichuan pepper and spice, roasted until the skin crackles. Sold at roadside restaurants along the park entrance road — a full bird feeds two for about CNY 80." },
      { name: "Baba Flatbreads (粑粑)", description: "Yunnan's ever-present griddled flatbread, made with buckwheat in the Sani highlands. Eat it hot with honey or stuffed with savory fillings — the perfect trail snack between the stone paths." },
      { name: "Wild Mushroom Hotpot", description: "From June to September, Shilin's forests yield wild mushrooms that land in local hotpots — porcini, matsutake, and more. A seasonal must-eat that pairs perfectly with a cold day in the stones." },
    ],
    gallery: [
      "/images/kunming-stone-forest.webp",
      "/images/shilin-labyrinth.webp",
      "/images/shilin-naigu.webp",
    ],
    galleryAlt: [
      "UNESCO Stone Forest limestone karst pinnacles at golden hour",
      "Walking between towering karst pillars inside the Greater Stone Forest labyrinth",
      "Dark weathered Naigu Stone Forest pinnacles rising from grassland",
    ],
  },
];

export const itineraries = [
  {
    days: 3,
    title: "Kunming & Stone Forest",
    subtitle: "Perfect for a quick escape or layover",
    route: "Kunming > Stone Forest day trip",
    summary: ["Day 1: Green Lake Park, Yuantong Temple, evening food street", "Day 2: Stone Forest day trip", "Day 3: Western Hills, Dianchi Lake, depart"],
    difficulty: "Easy",
    bestFor: "First-time visitors, layover travelers",
  },
  {
    days: 5,
    title: "Kunming to Dali to Lijiang",
    subtitle: "The classic Yunnan introduction",
    route: "Kunming > Dali > Lijiang",
    summary: ["Day 1-2: Kunming highlights", "Day 3: Train to Dali, explore old town", "Day 4: Erhai Lake cycling, Three Pagodas", "Day 5: Train to Lijiang, old town evening"],
    difficulty: "Easy",
    bestFor: "Culture lovers, first-time China visitors",
  },
  {
    days: 8,
    title: "The Classic Northwest",
    subtitle: "The full Yunnan experience",
    route: "Kunming > Dali > Lijiang > Shangri-La",
    summary: ["Day 1-2: Kunming", "Day 3-4: Dali", "Day 5-6: Lijiang", "Day 7-8: Shangri-La"],
    difficulty: "Moderate",
    bestFor: "Travelers wanting the complete picture",
  },
  {
    days: 14,
    title: "Grand Yunnan Loop",
    subtitle: "From snow peaks to tropical jungles",
    route: "Kunming > Dali > Lijiang > Shangri-La > (fly) > Xishuangbanna > Yuanyang",
    summary: ["Days 1-8: Classic Northwest route", "Day 9-10: Fly south, Xishuangbanna tropical exploration", "Day 11-12: Bus to Yuanyang, rice terrace sunrise", "Day 13-14: Return to Kunming"],
    difficulty: "Challenging",
    bestFor: "Experienced travelers, photographers",
  },
];
