# myviptransfer.com

Next.js (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş,
myviptransfer markası için VIP transfer / özel tur / şoförlü araç kiralama
web sitesi.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açın.

## Proje yapısı

- `app/` — sayfalar ve route'lar (`/`, `/wedding`, `/destinations`,
  `/destinations/[slug]`, `/fleet/[slug]`, legal sayfalar)
- `components/` — Header, Footer, Hero (pencere aperture animasyonu),
  ve tüm anasayfa bölümleri
- `lib/content.ts` — hizmetler, filo, destinasyonlar, SSS, yorumlar verisi
  (tek yerden güncellenir)
- `lib/whatsapp.ts` — WhatsApp link/numara yardımcıları
- `public/images/fleet/` — araç fotoğrafları buraya eklenir

## Araç fotoğrafları ekleme

Filodaki 6 araç için gerçek fotoğraflar henüz eklenmedi; bu dosyalar
gelene kadar her araç kartı otomatik olarak şık bir placeholder ikonu
gösterir (`components/FleetImage.tsx`, `lib/media.ts`). Gerçek
fotoğraflar hazır olduğunda aşağıdaki dosya adlarıyla
`public/images/fleet/` klasörüne eklemeniz yeterli — kod değişikliği
gerekmez:

```
public/images/fleet/mercedes-s-class.jpg
public/images/fleet/premium-suv.jpg
public/images/fleet/premium-vip-vito.jpg
public/images/fleet/standard-vito.jpg
public/images/fleet/premium-vip-sprinter.jpg
public/images/fleet/standard-sprinter.jpg
```

## Rezervasyon formu

`components/BookingSection.tsx` içindeki "Book Your Transfer" ve
"Request a Quote" formları backend gerektirmez — gönderildiğinde form
verilerini önceden doldurulmuş bir WhatsApp mesajına dönüştürüp
`https://api.whatsapp.com/send` üzerinden açar. WhatsApp numarası
`lib/whatsapp.ts` içinde `WHATSAPP_PRIMARY` olarak tanımlıdır; ikinci
numara (`WHATSAPP_SECONDARY`) teyit edildiğinde gerekirse kullanılabilir.

## Vercel'e deploy

1. Bu klasörü bir GitHub reposuna push edin:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <repo-url>
   git push -u origin main
   ```
2. [vercel.com/new](https://vercel.com/new) üzerinden GitHub reponuzu
   import edin — Next.js projesi otomatik algılanır, ekstra ayar
   gerekmez.
3. Deploy sonrası, alan adını (myviptransfer.com) Vercel proje
   ayarlarından "Domains" sekmesine ekleyip DNS kayıtlarını
   yönlendirin.
4. Her `main` branch'e push sonrasında Vercel otomatik olarak yeniden
   deploy eder.

## SEO

- Her destinasyon (`/destinations/[slug]`) ve araç (`/fleet/[slug]`)
  sayfası kendi meta title/description'ına sahiptir.
- `app/sitemap.ts` ve `app/robots.ts` otomatik olarak `/sitemap.xml`
  ve `/robots.txt` üretir.
