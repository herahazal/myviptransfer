export type Service = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "airport-transfer",
    icon: "✈️",
    title: "Airport Transfer",
    summary:
      "Istanbul Airport (IST), Sabiha Gökçen (SAW), Antalya, Bodrum, Dalaman, İzmir, Ankara, Kapadokya ve diğer havalimanları.",
    points: [
      "Uçuş takibi",
      "İsimli karşılama tabelası",
      "Bagaj desteği",
      "Terminalden araca özel eşlik",
    ],
  },
  {
    slug: "chauffeur-service",
    icon: "🚘",
    title: "Chauffeur Service",
    summary:
      "Saatlik şoförlü araç, günlük şoförlü araç, business seyahat, alışveriş, toplantılar, özel programlar.",
    points: [
      "Saatlik / günlük kiralama",
      "Business & VIP programlar",
      "Esnek rota ve duraklar",
      "Profesyonel özel şoför",
    ],
  },
  {
    slug: "private-tours",
    icon: "🗺️",
    title: "Private Tours",
    summary:
      "İstanbul, Bodrum, Kapadokya, Antalya, Pamukkale, Efes, Fethiye, Marmaris, Çeşme & Alaçatı, Trabzon & Karadeniz ve diğer popüler destinasyonlar.",
    points: [
      "Size özel rota planlama",
      "Profesyonel şoför eşliğinde",
      "Fotoğraf ve mola durakları",
      "Türkiye genelinde hizmet",
    ],
  },
  {
    slug: "wedding-events",
    icon: "💍",
    title: "Wedding & Events",
    summary:
      "Düğün transferi, gelin & damat, davetli transferleri, nişan, özel davetler, kongre, fuar, kurumsal etkinlikler.",
    points: [
      "Gelin & damat özel transferi",
      "Davetli grup transferleri",
      "Zamanlamaya özel planlama",
      "VIP araç seçenekleri",
    ],
  },
  {
    slug: "intercity-transfer",
    icon: "🚗",
    title: "Intercity Transfer",
    summary:
      "Örnek rotalar: Istanbul → Bodrum, Istanbul → Bursa, Istanbul → Cappadocia, Bodrum → Dalaman, Antalya → Cappadocia.",
    points: [
      "Şehirler arası konforlu yolculuk",
      "Sabit fiyat garantisi",
      "Deneyimli şoförler",
      "Türkiye genelinde ağ",
    ],
  },
];

export type Vehicle = {
  slug: string;
  name: string;
  subtitle: string;
  slogan?: string;
  description: string;
  features: string[];
  usage: string[];
  image: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "mercedes-s-class",
    name: "Mercedes S-Class",
    subtitle: "Executive Luxury",
    slogan: "FIRST-CLASS SERVICE. EVERY JOURNEY.",
    description:
      "Prestij, konfor ve mahremiyeti bir araya getiren Mercedes-Benz S-Class ile yolculuğunuzu ayrıcalıklı bir deneyime dönüştürün. Üst düzey yöneticiler, iş insanları, özel misafirler ve maksimum konfor arayan bireysel müşteriler için tasarlanmıştır.",
    features: [
      "Mercedes-Benz S-Class",
      "Profesyonel özel şoför",
      "VIP havalimanı karşılama",
      "Saatlik / günlük kullanım",
      "Otel / villa / havalimanı transferleri",
      "Executive seyahatler",
      "Şehirler arası VIP transfer",
      "Özel şehir turları",
      "Özel davet ve organizasyonlar",
      "Kurumsal VIP ulaşım",
    ],
    usage: ["Airport Transfer", "Chauffeur Service", "Corporate Travel", "Wedding & Events"],
    image: "/images/fleet/mercedes-s-class.jpg",
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    subtitle: "Luxury & Comfort",
    slogan: "Your Journey. Your SUV. Your Chauffeur.",
    description:
      "Güç, konfor ve VIP hizmet bir arada. Şehir içi yolculuklardan havalimanı transferlerine, iş seyahatlerinden özel davetlere kadar Premium SUV araçlarımızla konforlu ve ayrıcalıklı bir ulaşım deneyimi sunuyoruz.",
    features: [
      "Premium SUV araç seçenekleri",
      "Profesyonel özel şoför",
      "Havalimanı karşılama & transfer",
      "Saatlik / günlük kullanım",
      "Özel şehir turları",
      "Şehirler arası VIP transfer",
      "İş toplantıları",
      "Otel / villa / havalimanı transferleri",
      "Düğün / davet",
      "Alışveriş",
    ],
    usage: ["Airport Transfer", "Private Tours", "Chauffeur Service", "Wedding & Events"],
    image: "/images/fleet/premium-suv.jpg",
  },
  {
    slug: "premium-vip-vito",
    name: "Premium VIP Vito",
    subtitle: "VIP Group Travel",
    description:
      "Konfor, alan ve VIP hizmet bir arada. Özel yolculuklarınız için tasarlanan Premium VIP Vito, geniş iç hacmi, konforlu kabini ve özel donanımlarıyla transfer deneyimini bir üst seviyeye taşır.",
    features: [
      "Premium Mercedes-Benz Vito",
      "Geniş ve ferah yolcu alanı",
      "VIP / Luxury iç tasarım",
      "Konforlu deri koltuklar",
      "Yıldız tavan ambiyansı",
      "Araç içi TV / eğlence sistemi",
      "Buzdolabı",
      "Wi-Fi",
      "USB & şarj noktaları",
      "Geniş bagaj kapasitesi",
      "Klima",
      "Premium ses sistemi",
    ],
    usage: [
      "Airport Transfer",
      "Chauffeur Service",
      "Private Tours",
      "Intercity Transfer",
      "Business Travel",
      "Special Events",
    ],
    image: "/images/fleet/premium-vip-vito.jpg",
  },
  {
    slug: "standard-vito",
    name: "Standard Vito",
    subtitle: "Comfort & Value",
    slogan: "Güvenilir hizmet. Konforlu yolculuk. Doğru fiyat.",
    description:
      "Konforlu, güvenilir ve ekonomik. Kalabalık aileler, arkadaş grupları ve daha fazla bagajla seyahat eden misafirler için Standart Vito hizmetimiz, konfor ve fiyat avantajını bir araya getirir.",
    features: [
      "Mercedes-Benz Vito",
      "Geniş yolcu kapasitesi",
      "Ferah iç mekân",
      "Geniş bagaj alanı",
      "Klima",
      "Konforlu koltuklar",
      "USB / şarj",
      "Temiz araç",
      "Profesyonel şoför",
    ],
    usage: [
      "Airport Transfer",
      "Private Tours",
      "Intercity Transfer",
      "Chauffeur Service",
      "Group Transfer",
      "Hotel & Villa Transfer",
    ],
    image: "/images/fleet/standard-vito.jpg",
  },
  {
    slug: "premium-vip-sprinter",
    name: "Premium VIP Sprinter",
    subtitle: "Luxury Group Travel",
    slogan: "Premium araç. Profesyonel hizmet. Ayrıcalıklı yolculuk.",
    description:
      "Group Travel, Elevated. Geniş gruplar için ferahlık, konfor ve premium hizmeti bir araya getiren Premium VIP Sprinter, özel yolculuklarınızı daha ayrıcalıklı hale getirir.",
    features: [
      "Premium Mercedes-Benz Sprinter",
      "VIP / Luxury iç tasarım",
      "Geniş yolcu alanı",
      "Konforlu VIP koltuklar",
      "Geniş bagaj kapasitesi",
      "Klima",
      "USB / şarj",
      "Wi-Fi",
      "Araç içi eğlence sistemi",
      "Premium ses sistemi",
      "Profesyonel özel şoför",
    ],
    usage: [
      "VIP Airport Transfer",
      "Private Day Tours",
      "Chauffeur-Driven Service",
      "Intercity Transfer",
      "Corporate Travel",
      "Event & Wedding Service",
    ],
    image: "/images/fleet/premium-vip-sprinter.jpg",
  },
  {
    slug: "standard-sprinter",
    name: "Standard Sprinter",
    subtitle: "Group Travel",
    slogan: "Daha Fazla Alan. Daha Rahat Yolculuk.",
    description:
      "Geniş gruplar için konforlu ve güvenilir ulaşım. Kalabalık gruplar, aileler, tur ekipleri ve fazla bagajla seyahat eden misafirler için Mercedes-Benz Sprinter ile konforlu ve güvenilir ulaşım sunuyoruz.",
    features: [
      "Mercedes-Benz Sprinter",
      "Geniş ve ferah yolcu alanı",
      "Yüksek kapasite",
      "Geniş bagaj alanı",
      "Konforlu koltuklar",
      "Klima",
      "USB / şarj",
      "Temiz iç mekân",
      "Profesyonel şoför",
    ],
    usage: [
      "Airport Transfer",
      "Group Transfer",
      "Private Tours",
      "Intercity Transfer",
      "Hotel & Villa Transfer",
      "Event & Organization",
    ],
    image: "/images/fleet/standard-sprinter.jpg",
  },
];

export type Destination = {
  slug: string;
  name: string;
  teaser: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "istanbul",
    name: "Istanbul",
    teaser:
      "Tarihi Yarımada, Boğaz, Dolmabahçe, Galataport & özel alışveriş durakları.",
    highlights: ["Tarihi Yarımada", "Boğaz turu", "Dolmabahçe Sarayı", "Galataport"],
  },
  {
    slug: "bodrum",
    name: "Bodrum",
    teaser: "Yarımada turu, koylar, plajlar, marinaya özel ziyaretler.",
    highlights: ["Bodrum Kalesi", "Gündoğan & Gümüşlük", "Marina", "Koy turları"],
  },
  {
    slug: "antalya",
    name: "Antalya",
    teaser: "Kaleiçi, Düden Şelalesi, sahil rotaları & çevre destinasyonlar.",
    highlights: ["Kaleiçi", "Düden Şelalesi", "Akdeniz sahili", "Konyaaltı"],
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    teaser: "Göreme, Uçhisar, Avanos, vadiler & panoramik noktalar.",
    highlights: ["Göreme", "Uçhisar Kalesi", "Avanos", "Panoramik vadiler"],
  },
  {
    slug: "fethiye",
    name: "Fethiye",
    teaser: "Ölüdeniz, Kayaköy, Saklıkent & çevre güzellikleri.",
    highlights: ["Ölüdeniz", "Kayaköy", "Saklıkent Kanyonu", "Babadağ"],
  },
  {
    slug: "marmaris",
    name: "Marmaris",
    teaser: "Koylar, marina, sahil rotaları & çevre destinasyonlar.",
    highlights: ["Marmaris Marina", "İçmeler", "Turunç", "Koy turları"],
  },
  {
    slug: "dalaman",
    name: "Dalaman",
    teaser: "Bölgenin havalimanı kapısı — Fethiye, Marmaris ve Göcek'e hızlı geçiş.",
    highlights: ["Dalaman Havalimanı", "Göcek", "Sarigerme", "Transfer bağlantıları"],
  },
  {
    slug: "izmir",
    name: "Izmir",
    teaser: "Ege'nin incisi — Kordon, Konak ve çevre destinasyonlara geçiş noktası.",
    highlights: ["Kordon", "Konak Saat Kulesi", "Alsancak", "Ege sahili"],
  },
  {
    slug: "cesme",
    name: "Çeşme",
    teaser: "Alaçatı sokakları, plajlar, restoranlar & alışveriş.",
    highlights: ["Alaçatı", "Ilıca Plajı", "Çeşme Kalesi", "Butik oteller"],
  },
  {
    slug: "alacati",
    name: "Alaçatı",
    teaser: "Taş sokaklar, rüzgar sörfü ve Ege mutfağıyla butik bir destinasyon.",
    highlights: ["Taş sokaklar", "Rüzgar sörfü", "Butik restoranlar", "Alışveriş"],
  },
  {
    slug: "kusadasi",
    name: "Kuşadası",
    teaser: "Efes'e yakınlığı ve marinasıyla Ege'nin gözde limanı.",
    highlights: ["Kuşadası Marina", "Güvercinada", "Efes'e yakınlık", "Sahil şeridi"],
  },
  {
    slug: "pamukkale",
    name: "Pamukkale",
    teaser: "Travertenler, Hierapolis & çevresindeki özel noktalar.",
    highlights: ["Travertenler", "Hierapolis Antik Kenti", "Kleopatra Havuzu", "Panoramik seyir"],
  },
  {
    slug: "ephesus",
    name: "Ephesus",
    teaser: "Antik Efes, Şirince & Ege'nin kültürel rotaları.",
    highlights: ["Antik Efes", "Meryem Ana Evi", "Şirince", "Selçuk"],
  },
  {
    slug: "trabzon",
    name: "Trabzon",
    teaser: "Uzungöl, Sümela Manastırı & Karadeniz'in doğal güzellikleri.",
    highlights: ["Uzungöl", "Sümela Manastırı", "Ayder Yaylası", "Karadeniz sahili"],
  },
  {
    slug: "black-sea",
    name: "Black Sea",
    teaser: "Karadeniz'in yaylaları, vadileri ve saklı köyleri.",
    highlights: ["Yaylalar", "Yeşil vadiler", "Saklı köyler", "Doğa turları"],
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What happens if my flight is delayed?",
    a: "Uçuşunuz gerçek zamanlı olarak takip edilir. Gecikme durumunda şoförünüz karşılama saatine göre otomatik olarak ayarlanır — ek ücret talep edilmez.",
  },
  {
    q: "Where will my driver meet me?",
    a: "Şoförünüz terminal çıkışında, adınızın yazılı olduğu özel karşılama tabelasıyla sizi bekler. Tam buluşma noktası rezervasyon onayınızda belirtilir.",
  },
  {
    q: "Do you provide child seats?",
    a: "Evet, talep üzerine çocuk koltuğu sağlanır. Rezervasyon sırasında ihtiyacınızı belirtmeniz yeterlidir.",
  },
  {
    q: "Can I book a vehicle for the whole day?",
    a: "Evet, günlük ve saatlik şoförlü araç hizmetimiz ile aracınız ve şoförünüz gün boyunca programınıza eşlik eder.",
  },
  {
    q: "Can I travel between different cities?",
    a: "Evet, İstanbul → Bodrum, İstanbul → Kapadokya gibi şehirler arası transferler sunuyoruz. Rota ve fiyat için teklif talep edebilirsiniz.",
  },
  {
    q: "Do you provide wedding transfers?",
    a: "Evet, gelin & damat özel transferi ile davetli grup transferlerini kapsayan kapsamlı düğün ulaşım çözümleri sunuyoruz.",
  },
  {
    q: "Can I request a specific vehicle?",
    a: "Evet, filomuzdaki 6 araç seçeneğinden dilediğinizi rezervasyon sırasında belirtebilirsiniz. Müsaitlik durumuna göre onaylanır.",
  },
  {
    q: "Do you operate 24/7?",
    a: "Evet, rezervasyon ve müşteri desteğimiz WhatsApp üzerinden 7/24 aktif.",
  },
];

export const testimonials: { name: string; text: string; rating: number }[] = [
  {
    name: "Misafirimiz",
    text: "Professional driver, beautiful vehicle and a very smooth airport experience.",
    rating: 5,
  },
];

export const navLinks: { href: string; label: string }[] = [
  { href: "/#services", label: "Hizmetler" },
  { href: "/#fleet", label: "Filo" },
  { href: "/destinations", label: "Destinasyonlar" },
  { href: "/wedding", label: "Düğün" },
  { href: "/#booking", label: "Rezervasyon" },
  { href: "/#about", label: "Hakkımızda" },
];
