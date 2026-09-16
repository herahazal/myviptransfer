import { vehicles } from "@/lib/content";
import FleetImage from "./FleetImage";

export default function Gallery() {
  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow">Fotoğraf Galerisi</p>
        <h2 className="section-title">Filomuzdan Kareler</h2>
        <div className="gallery-grid">
          {vehicles.map((v) => (
            <div className="gallery-tile" key={v.slug}>
              <FleetImage src={v.image} alt={v.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
