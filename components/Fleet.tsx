import Link from "next/link";
import { vehicles } from "@/lib/content";
import FleetImage from "./FleetImage";

export default function Fleet() {
  return (
    <section className="section section-dark" id="fleet">
      <div className="container">
        <p className="eyebrow">Premium Fleet</p>
        <h2 className="section-title">Her Yolculuğa Uygun Araç</h2>
        <p className="section-lede">
          Executive sedanlardan geniş grup araçlarına kadar, özenle seçilmiş
          Mercedes-Benz filomuzla konforlu ve güvenli bir yolculuk.
        </p>

        <div className="fleet-grid">
          {vehicles.map((vehicle) => (
            <Link href={`/fleet/${vehicle.slug}`} className="fleet-card" key={vehicle.slug}>
              <div className="fleet-card-media">
                <FleetImage src={vehicle.image} alt={vehicle.name} />
              </div>
              <div className="fleet-card-body">
                <p className="fleet-card-subtitle">{vehicle.subtitle}</p>
                <h3 className="fleet-card-title">{vehicle.name}</h3>
                <span className="fleet-card-link">View Vehicle →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
