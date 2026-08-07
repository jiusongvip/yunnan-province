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
