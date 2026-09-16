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
- `lib/whatsapp.ts` — WhatsApp link/numara yardımcıları (tek kaynak: `WHATSAPP_PRIMARY`)
- `public/images/fleet/` — araç fotoğrafları buraya eklenir
- `public/images/services/` — hizmet kartı görselleri buraya eklenir

## Araç fotoğrafları ekleme

Filodaki 6 araç için gerçek fotoğraflar henüz eklenmedi; bu dosyalar
gelene kadar her araç kartı otomatik olarak şık bir placeholder ikonu
gösterir (`components/FleetImage.tsx` — görsel yüklenemezse `onError`
ile placeholder'a düşer). Gerçek fotoğraflar hazır olduğunda aşağıdaki
dosya adlarıyla `public/images/fleet/` klasörüne eklemeniz yeterli —
kod değişikliği gerekmez:

```
public/images/fleet/mercedes-s-class.jpg
public/images/fleet/premium-suv.jpg
public/images/fleet/premium-vip-vito.jpg
public/images/fleet/standard-vito.jpg
public/images/fleet/premium-vip-sprinter.jpg
public/images/fleet/standard-sprinter.jpg
```

## Hizmet kartı görselleri ekleme

Anasayfadaki 5 hizmet kartının (Havalimanı Transferi, Şoförlü Araç
Hizmeti, Özel Turlar, Düğün & Etkinlik Transferi, Şehirlerarası
Transfer) üst görselleri de aynı şekilde `onError` ile placeholder'a
düşer (`components/ServiceImage.tsx`). Aşağıdaki dosya adlarıyla
`public/images/services/` klasörüne eklemeniz yeterli:

```
public/images/services/1.png   → Havalimanı Transferi
public/images/services/2.png   → Şoförlü Araç Hizmeti
public/images/services/3.png   → Özel Turlar
public/images/services/4.png   → Düğün & Etkinlik Transferi
public/images/services/5.png   → Şehirlerarası Transfer
```

## Rezervasyon formu

`components/BookingSection.tsx` içindeki "Book Your Transfer" ve
"Request a Quote" formları backend gerektirmez — gönderildiğinde form
verilerini önceden doldurulmuş bir WhatsApp mesajına dönüştürüp
`https://wa.me/...` üzerinden açar. WhatsApp numarası tek bir yerden,
`lib/whatsapp.ts` içindeki `WHATSAPP_PRIMARY` sabitinden yönetilir —
sitedeki tüm WhatsApp butonları buradan besleniyor.

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
