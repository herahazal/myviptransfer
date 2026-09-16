import type { Bi } from "./i18n";

export type Service = {
  slug: string;
  icon: string;
  title: Bi;
  image: string;
  summary: Bi;
  points: Bi[];
};

export const services: Service[] = [
  {
    slug: "airport-transfer",
    icon: "✈️",
    title: { tr: "Havalimanı Transferi", en: "Airport Transfer" },
    image: "/images/services/1.png",
    summary: {
      tr: "Istanbul Airport (IST), Sabiha Gökçen (SAW), Antalya, Bodrum, Dalaman, İzmir, Ankara, Kapadokya ve diğer havalimanları.",
      en: "Istanbul Airport (IST), Sabiha Gökçen (SAW), Antalya, Bodrum, Dalaman, Izmir, Ankara, Cappadocia and other airports.",
    },
    points: [
      { tr: "Uçuş takibi", en: "Flight tracking" },
      { tr: "İsimli karşılama tabelası", en: "Personalized name sign" },
      { tr: "Bagaj desteği", en: "Luggage assistance" },
      { tr: "Terminalden araca özel eşlik", en: "Private escort from terminal to vehicle" },
    ],
  },
  {
    slug: "chauffeur-service",
    icon: "🚘",
    title: { tr: "Şoförlü Araç Hizmeti", en: "Chauffeur Service" },
    image: "/images/services/2.png",
    summary: {
      tr: "Saatlik şoförlü araç, günlük şoförlü araç, business seyahat, alışveriş, toplantılar, özel programlar.",
      en: "Hourly chauffeur service, daily chauffeur-driven car, business travel, shopping, meetings, private programs.",
    },
    points: [
      { tr: "Saatlik / günlük kiralama", en: "Hourly / daily rental" },
      { tr: "Business & VIP programlar", en: "Business & VIP programs" },
      { tr: "Esnek rota ve duraklar", en: "Flexible route and stops" },
      { tr: "Profesyonel özel şoför", en: "Professional private chauffeur" },
    ],
  },
  {
    slug: "private-tours",
    icon: "🗺️",
    title: { tr: "Özel Turlar", en: "Private Tours" },
    image: "/images/services/3.png",
    summary: {
      tr: "İstanbul, Bodrum, Kapadokya, Antalya, Pamukkale, Efes, Fethiye, Marmaris, Çeşme & Alaçatı, Trabzon & Karadeniz ve diğer popüler destinasyonlar.",
      en: "Istanbul, Bodrum, Cappadocia, Antalya, Pamukkale, Ephesus, Fethiye, Marmaris, Çeşme & Alaçatı, Trabzon & the Black Sea and other popular destinations.",
    },
    points: [
      { tr: "Size özel rota planlama", en: "Route planning tailored to you" },
      { tr: "Profesyonel şoför eşliğinde", en: "Accompanied by a professional chauffeur" },
      { tr: "Fotoğraf ve mola durakları", en: "Photo and rest stops" },
      { tr: "Türkiye genelinde hizmet", en: "Service across Turkey" },
    ],
  },
  {
    slug: "wedding-events",
    icon: "💍",
    title: { tr: "Düğün & Etkinlik Transferi", en: "Wedding & Events" },
    image: "/images/services/4.png",
    summary: {
      tr: "Düğün transferi, gelin & damat, davetli transferleri, nişan, özel davetler, kongre, fuar, kurumsal etkinlikler.",
      en: "Wedding transfers, bride & groom, guest transfers, engagements, private receptions, congresses, fairs, corporate events.",
    },
    points: [
      { tr: "Gelin & damat özel transferi", en: "Private bride & groom transfer" },
      { tr: "Davetli grup transferleri", en: "Guest group transfers" },
      { tr: "Zamanlamaya özel planlama", en: "Timing-focused planning" },
      { tr: "VIP araç seçenekleri", en: "VIP vehicle options" },
    ],
  },
  {
    slug: "intercity-transfer",
    icon: "🚗",
    title: { tr: "Şehirlerarası Transfer", en: "Intercity Transfer" },
    image: "/images/services/5.png",
    summary: {
      tr: "Örnek rotalar: Istanbul → Bodrum, Istanbul → Bursa, Istanbul → Cappadocia, Bodrum → Dalaman, Antalya → Cappadocia.",
      en: "Example routes: Istanbul → Bodrum, Istanbul → Bursa, Istanbul → Cappadocia, Bodrum → Dalaman, Antalya → Cappadocia.",
    },
    points: [
      { tr: "Şehirler arası konforlu yolculuk", en: "Comfortable intercity travel" },
      { tr: "Sabit fiyat garantisi", en: "Fixed price guarantee" },
      { tr: "Deneyimli şoförler", en: "Experienced drivers" },
      { tr: "Türkiye genelinde ağ", en: "Nationwide network" },
    ],
  },
];

export type Vehicle = {
  slug: string;
  name: string;
  subtitle: string;
  slogan?: string;
  description: Bi;
  features: Bi[];
  usage: string[];
  image: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "mercedes-s-class",
    name: "Mercedes S-Class",
    subtitle: "Executive Luxury",
    slogan: "FIRST-CLASS SERVICE. EVERY JOURNEY.",
    description: {
      tr: "Prestij, konfor ve mahremiyeti bir araya getiren Mercedes-Benz S-Class ile yolculuğunuzu ayrıcalıklı bir deneyime dönüştürün. Üst düzey yöneticiler, iş insanları, özel misafirler ve maksimum konfor arayan bireysel müşteriler için tasarlanmıştır.",
      en: "Mercedes-Benz S-Class brings together prestige, comfort and privacy, turning your journey into an exclusive experience. Designed for senior executives, business travelers, special guests and individual clients seeking maximum comfort.",
    },
    features: [
      { tr: "Mercedes-Benz S-Class", en: "Mercedes-Benz S-Class" },
      { tr: "Profesyonel özel şoför", en: "Professional private chauffeur" },
      { tr: "VIP havalimanı karşılama", en: "VIP airport meet & greet" },
      { tr: "Saatlik / günlük kullanım", en: "Hourly / daily use" },
      { tr: "Otel / villa / havalimanı transferleri", en: "Hotel / villa / airport transfers" },
      { tr: "Executive seyahatler", en: "Executive travel" },
      { tr: "Şehirler arası VIP transfer", en: "Intercity VIP transfer" },
      { tr: "Özel şehir turları", en: "Private city tours" },
      { tr: "Özel davet ve organizasyonlar", en: "Private events and functions" },
      { tr: "Kurumsal VIP ulaşım", en: "Corporate VIP transportation" },
    ],
    usage: ["Airport Transfer", "Chauffeur Service", "Corporate Travel", "Wedding & Events"],
    image: "/images/fleet/mercedes-s-class.jpeg",
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    subtitle: "Luxury & Comfort",
    slogan: "Your Journey. Your SUV. Your Chauffeur.",
    description: {
      tr: "Güç, konfor ve VIP hizmet bir arada. Şehir içi yolculuklardan havalimanı transferlerine, iş seyahatlerinden özel davetlere kadar Premium SUV araçlarımızla konforlu ve ayrıcalıklı bir ulaşım deneyimi sunuyoruz.",
      en: "Power, comfort and VIP service together. From city rides to airport transfers, business trips to private events, our Premium SUV vehicles offer a comfortable and exclusive transportation experience.",
    },
    features: [
      { tr: "Premium SUV araç seçenekleri", en: "Premium SUV vehicle options" },
      { tr: "Profesyonel özel şoför", en: "Professional private chauffeur" },
      { tr: "Havalimanı karşılama & transfer", en: "Airport meet & transfer" },
      { tr: "Saatlik / günlük kullanım", en: "Hourly / daily use" },
      { tr: "Özel şehir turları", en: "Private city tours" },
      { tr: "Şehirler arası VIP transfer", en: "Intercity VIP transfer" },
      { tr: "İş toplantıları", en: "Business meetings" },
      { tr: "Otel / villa / havalimanı transferleri", en: "Hotel / villa / airport transfers" },
      { tr: "Düğün / davet", en: "Weddings / receptions" },
      { tr: "Alışveriş", en: "Shopping" },
    ],
    usage: ["Airport Transfer", "Private Tours", "Chauffeur Service", "Wedding & Events"],
    image: "/images/fleet/premium-suv.jpeg",
  },
  {
    slug: "premium-vip-vito",
    name: "Premium VIP Vito",
    subtitle: "VIP Group Travel",
    description: {
      tr: "Konfor, alan ve VIP hizmet bir arada. Özel yolculuklarınız için tasarlanan Premium VIP Vito, geniş iç hacmi, konforlu kabini ve özel donanımlarıyla transfer deneyimini bir üst seviyeye taşır.",
      en: "Comfort, space and VIP service in one. Designed for your private journeys, the Premium VIP Vito elevates the transfer experience with its spacious interior, comfortable cabin and premium fittings.",
    },
    features: [
      { tr: "Premium Mercedes-Benz Vito", en: "Premium Mercedes-Benz Vito" },
      { tr: "Geniş ve ferah yolcu alanı", en: "Spacious, roomy passenger area" },
      { tr: "VIP / Luxury iç tasarım", en: "VIP / luxury interior design" },
      { tr: "Konforlu deri koltuklar", en: "Comfortable leather seats" },
      { tr: "Yıldız tavan ambiyansı", en: "Starlight headliner ambience" },
      { tr: "Araç içi TV / eğlence sistemi", en: "In-car TV / entertainment system" },
      { tr: "Buzdolabı", en: "Mini fridge" },
      { tr: "Wi-Fi", en: "Wi-Fi" },
      { tr: "USB & şarj noktaları", en: "USB & charging points" },
      { tr: "Geniş bagaj kapasitesi", en: "Large luggage capacity" },
      { tr: "Klima", en: "Air conditioning" },
      { tr: "Premium ses sistemi", en: "Premium sound system" },
    ],
    usage: [
      "Airport Transfer",
      "Chauffeur Service",
      "Private Tours",
      "Intercity Transfer",
      "Business Travel",
      "Special Events",
    ],
    image: "/images/fleet/premium-vip-vito.jpeg",
  },
  {
    slug: "standard-vito",
    name: "Standard Vito",
    subtitle: "Comfort & Value",
    slogan: "Güvenilir hizmet. Konforlu yolculuk. Doğru fiyat.",
    description: {
      tr: "Konforlu, güvenilir ve ekonomik. Kalabalık aileler, arkadaş grupları ve daha fazla bagajla seyahat eden misafirler için Standart Vito hizmetimiz, konfor ve fiyat avantajını bir araya getirir.",
      en: "Comfortable, reliable and economical. For large families, groups of friends and guests travelling with extra luggage, our Standard Vito service combines comfort with value for money.",
    },
    features: [
      { tr: "Mercedes-Benz Vito", en: "Mercedes-Benz Vito" },
      { tr: "Geniş yolcu kapasitesi", en: "Large passenger capacity" },
      { tr: "Ferah iç mekân", en: "Roomy interior" },
      { tr: "Geniş bagaj alanı", en: "Large luggage space" },
      { tr: "Klima", en: "Air conditioning" },
      { tr: "Konforlu koltuklar", en: "Comfortable seats" },
      { tr: "USB / şarj", en: "USB / charging" },
      { tr: "Temiz araç", en: "Clean vehicle" },
      { tr: "Profesyonel şoför", en: "Professional chauffeur" },
    ],
    usage: [
      "Airport Transfer",
      "Private Tours",
      "Intercity Transfer",
      "Chauffeur Service",
      "Group Transfer",
      "Hotel & Villa Transfer",
    ],
    image: "/images/fleet/standard-vito.jpeg",
  },
  {
    slug: "premium-vip-sprinter",
    name: "Premium VIP Sprinter",
    subtitle: "Luxury Group Travel",
    slogan: "Premium araç. Profesyonel hizmet. Ayrıcalıklı yolculuk.",
    description: {
      tr: "Group Travel, Elevated. Geniş gruplar için ferahlık, konfor ve premium hizmeti bir araya getiren Premium VIP Sprinter, özel yolculuklarınızı daha ayrıcalıklı hale getirir.",
      en: "Group travel, elevated. Bringing together space, comfort and premium service for larger groups, the Premium VIP Sprinter makes your private journeys even more exclusive.",
    },
    features: [
      { tr: "Premium Mercedes-Benz Sprinter", en: "Premium Mercedes-Benz Sprinter" },
      { tr: "VIP / Luxury iç tasarım", en: "VIP / luxury interior design" },
      { tr: "Geniş yolcu alanı", en: "Spacious passenger area" },
      { tr: "Konforlu VIP koltuklar", en: "Comfortable VIP seats" },
      { tr: "Geniş bagaj kapasitesi", en: "Large luggage capacity" },
      { tr: "Klima", en: "Air conditioning" },
      { tr: "USB / şarj", en: "USB / charging" },
      { tr: "Wi-Fi", en: "Wi-Fi" },
      { tr: "Araç içi eğlence sistemi", en: "In-car entertainment system" },
      { tr: "Premium ses sistemi", en: "Premium sound system" },
      { tr: "Profesyonel özel şoför", en: "Professional private chauffeur" },
    ],
    usage: [
      "VIP Airport Transfer",
      "Private Day Tours",
      "Chauffeur-Driven Service",
      "Intercity Transfer",
      "Corporate Travel",
      "Event & Wedding Service",
    ],
    image: "/images/fleet/premium-vip-sprinter.jpeg",
  },
  {
    slug: "standard-sprinter",
    name: "Standard Sprinter",
    subtitle: "Group Travel",
    slogan: "Daha Fazla Alan. Daha Rahat Yolculuk.",
    description: {
      tr: "Geniş gruplar için konforlu ve güvenilir ulaşım. Kalabalık gruplar, aileler, tur ekipleri ve fazla bagajla seyahat eden misafirler için Mercedes-Benz Sprinter ile konforlu ve güvenilir ulaşım sunuyoruz.",
      en: "Comfortable and reliable transportation for large groups. We provide comfortable, reliable transport with the Mercedes-Benz Sprinter for large groups, families, tour teams and guests travelling with extra luggage.",
    },
    features: [
      { tr: "Mercedes-Benz Sprinter", en: "Mercedes-Benz Sprinter" },
      { tr: "Geniş ve ferah yolcu alanı", en: "Spacious, roomy passenger area" },
      { tr: "Yüksek kapasite", en: "High capacity" },
      { tr: "Geniş bagaj alanı", en: "Large luggage space" },
      { tr: "Konforlu koltuklar", en: "Comfortable seats" },
      { tr: "Klima", en: "Air conditioning" },
      { tr: "USB / şarj", en: "USB / charging" },
      { tr: "Temiz iç mekân", en: "Clean interior" },
      { tr: "Profesyonel şoför", en: "Professional chauffeur" },
    ],
    usage: [
      "Airport Transfer",
      "Group Transfer",
      "Private Tours",
      "Intercity Transfer",
      "Hotel & Villa Transfer",
      "Event & Organization",
    ],
    image: "/images/fleet/standard-sprinter.jpeg",
  },
];

export type Destination = {
  slug: string;
  name: string;
  teaser: Bi;
  highlights: Bi[];
};

export const destinations: Destination[] = [
  {
    slug: "istanbul",
    name: "Istanbul",
    teaser: {
      tr: "Tarihi Yarımada, Boğaz, Dolmabahçe, Galataport & özel alışveriş durakları.",
      en: "Historic Peninsula, the Bosphorus, Dolmabahçe, Galataport & private shopping stops.",
    },
    highlights: [
      { tr: "Tarihi Yarımada", en: "Historic Peninsula" },
      { tr: "Boğaz turu", en: "Bosphorus tour" },
      { tr: "Dolmabahçe Sarayı", en: "Dolmabahçe Palace" },
      { tr: "Galataport", en: "Galataport" },
    ],
  },
  {
    slug: "bodrum",
    name: "Bodrum",
    teaser: {
      tr: "Yarımada turu, koylar, plajlar, marinaya özel ziyaretler.",
      en: "Peninsula tour, coves, beaches, private marina visits.",
    },
    highlights: [
      { tr: "Bodrum Kalesi", en: "Bodrum Castle" },
      { tr: "Gündoğan & Gümüşlük", en: "Gündoğan & Gümüşlük" },
      { tr: "Marina", en: "The marina" },
      { tr: "Koy turları", en: "Cove tours" },
    ],
  },
  {
    slug: "antalya",
    name: "Antalya",
    teaser: {
      tr: "Kaleiçi, Düden Şelalesi, sahil rotaları & çevre destinasyonlar.",
      en: "Kaleiçi, Düden Waterfalls, coastal routes & nearby destinations.",
    },
    highlights: [
      { tr: "Kaleiçi", en: "Kaleiçi" },
      { tr: "Düden Şelalesi", en: "Düden Waterfalls" },
      { tr: "Akdeniz sahili", en: "Mediterranean coast" },
      { tr: "Konyaaltı", en: "Konyaaltı" },
    ],
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    teaser: {
      tr: "Göreme, Uçhisar, Avanos, vadiler & panoramik noktalar.",
      en: "Göreme, Uçhisar, Avanos, valleys & panoramic viewpoints.",
    },
    highlights: [
      { tr: "Göreme", en: "Göreme" },
      { tr: "Uçhisar Kalesi", en: "Uçhisar Castle" },
      { tr: "Avanos", en: "Avanos" },
      { tr: "Panoramik vadiler", en: "Panoramic valleys" },
    ],
  },
  {
    slug: "fethiye",
    name: "Fethiye",
    teaser: {
      tr: "Ölüdeniz, Kayaköy, Saklıkent & çevre güzellikleri.",
      en: "Ölüdeniz, Kayaköy, Saklıkent & the surrounding scenery.",
    },
    highlights: [
      { tr: "Ölüdeniz", en: "Ölüdeniz" },
      { tr: "Kayaköy", en: "Kayaköy" },
      { tr: "Saklıkent Kanyonu", en: "Saklıkent Canyon" },
      { tr: "Babadağ", en: "Babadağ" },
    ],
  },
  {
    slug: "marmaris",
    name: "Marmaris",
    teaser: {
      tr: "Koylar, marina, sahil rotaları & çevre destinasyonlar.",
      en: "Coves, marina, coastal routes & nearby destinations.",
    },
    highlights: [
      { tr: "Marmaris Marina", en: "Marmaris Marina" },
      { tr: "İçmeler", en: "İçmeler" },
      { tr: "Turunç", en: "Turunç" },
      { tr: "Koy turları", en: "Cove tours" },
    ],
  },
  {
    slug: "dalaman",
    name: "Dalaman",
    teaser: {
      tr: "Bölgenin havalimanı kapısı — Fethiye, Marmaris ve Göcek'e hızlı geçiş.",
      en: "The region's airport gateway — quick connections to Fethiye, Marmaris and Göcek.",
    },
    highlights: [
      { tr: "Dalaman Havalimanı", en: "Dalaman Airport" },
      { tr: "Göcek", en: "Göcek" },
      { tr: "Sarigerme", en: "Sarigerme" },
      { tr: "Transfer bağlantıları", en: "Transfer connections" },
    ],
  },
  {
    slug: "izmir",
    name: "Izmir",
    teaser: {
      tr: "Ege'nin incisi — Kordon, Konak ve çevre destinasyonlara geçiş noktası.",
      en: "The pearl of the Aegean — Kordon, Konak and a gateway to nearby destinations.",
    },
    highlights: [
      { tr: "Kordon", en: "Kordon" },
      { tr: "Konak Saat Kulesi", en: "Konak Clock Tower" },
      { tr: "Alsancak", en: "Alsancak" },
      { tr: "Ege sahili", en: "Aegean coast" },
    ],
  },
  {
    slug: "cesme",
    name: "Çeşme",
    teaser: {
      tr: "Alaçatı sokakları, plajlar, restoranlar & alışveriş.",
      en: "Alaçatı's streets, beaches, restaurants & shopping.",
    },
    highlights: [
      { tr: "Alaçatı", en: "Alaçatı" },
      { tr: "Ilıca Plajı", en: "Ilıca Beach" },
      { tr: "Çeşme Kalesi", en: "Çeşme Castle" },
      { tr: "Butik oteller", en: "Boutique hotels" },
    ],
  },
  {
    slug: "alacati",
    name: "Alaçatı",
    teaser: {
      tr: "Taş sokaklar, rüzgar sörfü ve Ege mutfağıyla butik bir destinasyon.",
      en: "A boutique destination of cobbled streets, windsurfing and Aegean cuisine.",
    },
    highlights: [
      { tr: "Taş sokaklar", en: "Cobbled streets" },
      { tr: "Rüzgar sörfü", en: "Windsurfing" },
      { tr: "Butik restoranlar", en: "Boutique restaurants" },
      { tr: "Alışveriş", en: "Shopping" },
    ],
  },
  {
    slug: "kusadasi",
    name: "Kuşadası",
    teaser: {
      tr: "Efes'e yakınlığı ve marinasıyla Ege'nin gözde limanı.",
      en: "The Aegean's favourite port, prized for its closeness to Ephesus and its marina.",
    },
    highlights: [
      { tr: "Kuşadası Marina", en: "Kuşadası Marina" },
      { tr: "Güvercinada", en: "Pigeon Island" },
      { tr: "Efes'e yakınlık", en: "Close to Ephesus" },
      { tr: "Sahil şeridi", en: "Coastal promenade" },
    ],
  },
  {
    slug: "pamukkale",
    name: "Pamukkale",
    teaser: {
      tr: "Travertenler, Hierapolis & çevresindeki özel noktalar.",
      en: "Travertines, Hierapolis & the special sites around them.",
    },
    highlights: [
      { tr: "Travertenler", en: "Travertines" },
      { tr: "Hierapolis Antik Kenti", en: "Hierapolis Ancient City" },
      { tr: "Kleopatra Havuzu", en: "Cleopatra's Pool" },
      { tr: "Panoramik seyir", en: "Panoramic viewpoints" },
    ],
  },
  {
    slug: "ephesus",
    name: "Ephesus",
    teaser: {
      tr: "Antik Efes, Şirince & Ege'nin kültürel rotaları.",
      en: "Ancient Ephesus, Şirince & the Aegean's cultural routes.",
    },
    highlights: [
      { tr: "Antik Efes", en: "Ancient Ephesus" },
      { tr: "Meryem Ana Evi", en: "House of the Virgin Mary" },
      { tr: "Şirince", en: "Şirince" },
      { tr: "Selçuk", en: "Selçuk" },
    ],
  },
  {
    slug: "trabzon",
    name: "Trabzon",
    teaser: {
      tr: "Uzungöl, Sümela Manastırı & Karadeniz'in doğal güzellikleri.",
      en: "Uzungöl, Sümela Monastery & the natural beauty of the Black Sea.",
    },
    highlights: [
      { tr: "Uzungöl", en: "Uzungöl" },
      { tr: "Sümela Manastırı", en: "Sümela Monastery" },
      { tr: "Ayder Yaylası", en: "Ayder Plateau" },
      { tr: "Karadeniz sahili", en: "Black Sea coast" },
    ],
  },
  {
    slug: "black-sea",
    name: "Black Sea",
    teaser: {
      tr: "Karadeniz'in yaylaları, vadileri ve saklı köyleri.",
      en: "The plateaus, valleys and hidden villages of the Black Sea.",
    },
    highlights: [
      { tr: "Yaylalar", en: "Plateaus" },
      { tr: "Yeşil vadiler", en: "Green valleys" },
      { tr: "Saklı köyler", en: "Hidden villages" },
      { tr: "Doğa turları", en: "Nature tours" },
    ],
  },
];

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: { tr: "Uçuşum gecikirse ne olur?", en: "What happens if my flight is delayed?" },
    a: {
      tr: "Uçuşunuz gerçek zamanlı olarak takip edilir. Gecikme durumunda şoförünüz karşılama saatine göre otomatik olarak ayarlanır — ek ücret talep edilmez.",
      en: "Your flight is tracked in real time. If it's delayed, your driver's pickup time adjusts automatically — no extra charge.",
    },
  },
  {
    q: { tr: "Şoförüm beni nerede karşılayacak?", en: "Where will my driver meet me?" },
    a: {
      tr: "Şoförünüz terminal çıkışında, adınızın yazılı olduğu özel karşılama tabelasıyla sizi bekler. Tam buluşma noktası rezervasyon onayınızda belirtilir.",
      en: "Your driver will be waiting at the terminal exit with a personalized name sign. The exact meeting point is confirmed with your booking.",
    },
  },
  {
    q: { tr: "Çocuk koltuğu sağlıyor musunuz?", en: "Do you provide child seats?" },
    a: {
      tr: "Evet, talep üzerine çocuk koltuğu sağlanır. Rezervasyon sırasında ihtiyacınızı belirtmeniz yeterlidir.",
      en: "Yes, child seats are provided on request. Just let us know when you book.",
    },
  },
  {
    q: { tr: "Bir aracı tüm gün için kiralayabilir miyim?", en: "Can I book a vehicle for the whole day?" },
    a: {
      tr: "Evet, günlük ve saatlik şoförlü araç hizmetimiz ile aracınız ve şoförünüz gün boyunca programınıza eşlik eder.",
      en: "Yes — with our daily/hourly chauffeur service, your vehicle and driver accompany your schedule for the whole day.",
    },
  },
  {
    q: { tr: "Farklı şehirler arasında seyahat edebilir miyim?", en: "Can I travel between different cities?" },
    a: {
      tr: "Evet, İstanbul → Bodrum, İstanbul → Kapadokya gibi şehirler arası transferler sunuyoruz. Rota ve fiyat için teklif talep edebilirsiniz.",
      en: "Yes, we offer intercity transfers such as Istanbul → Bodrum and Istanbul → Cappadocia. Request a quote for your route and price.",
    },
  },
  {
    q: { tr: "Düğün transferi sağlıyor musunuz?", en: "Do you provide wedding transfers?" },
    a: {
      tr: "Evet, gelin & damat özel transferi ile davetli grup transferlerini kapsayan kapsamlı düğün ulaşım çözümleri sunuyoruz.",
      en: "Yes, we offer comprehensive wedding transportation covering private bride & groom transfers and guest group transfers.",
    },
  },
  {
    q: { tr: "Belirli bir araç talep edebilir miyim?", en: "Can I request a specific vehicle?" },
    a: {
      tr: "Evet, filomuzdaki 6 araç seçeneğinden dilediğinizi rezervasyon sırasında belirtebilirsiniz. Müsaitlik durumuna göre onaylanır.",
      en: "Yes, you can specify any of the 6 vehicles in our fleet when booking; it's confirmed subject to availability.",
    },
  },
  {
    q: { tr: "7/24 hizmet veriyor musunuz?", en: "Do you operate 24/7?" },
    a: {
      tr: "Evet, rezervasyon ve müşteri desteğimiz WhatsApp üzerinden 7/24 aktif.",
      en: "Yes, our booking and customer support are active on WhatsApp around the clock.",
    },
  },
];

export const testimonials: { name: Bi; text: Bi; rating: number }[] = [
  {
    name: { tr: "Misafirimiz", en: "Our Guest" },
    text: {
      tr: "Profesyonel şoför, güzel bir araç ve çok akıcı bir havalimanı deneyimi.",
      en: "Professional driver, beautiful vehicle and a very smooth airport experience.",
    },
    rating: 5,
  },
];

export const navLinks: { href: string; label: Bi }[] = [
  { href: "/#services", label: { tr: "Hizmetler", en: "Services" } },
  { href: "/#fleet", label: { tr: "Filo", en: "Fleet" } },
  { href: "/destinations", label: { tr: "Destinasyonlar", en: "Destinations" } },
  { href: "/wedding", label: { tr: "Düğün", en: "Wedding" } },
  { href: "/#booking", label: { tr: "Rezervasyon", en: "Booking" } },
  { href: "/#about", label: { tr: "Hakkımızda", en: "About" } },
];
