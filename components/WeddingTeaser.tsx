import Link from "next/link";

export default function WeddingTeaser() {
  return (
    <section className="section">
      <div className="container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Wedding & Events</p>
          <h2 className="section-title">Your Special Day, Our Special Care</h2>
          <p className="section-lede">
            Gelin & damat özel transferinden davetli grup ulaşımına kadar,
            düğün gününüzün tüm transfer detaylarını profesyonelce
            planlıyoruz.
          </p>
        </div>
        <Link href="/wedding" className="btn-outline whitespace-nowrap">
          Düğün Transferini İnceleyin →
        </Link>
      </div>
    </section>
  );
}
