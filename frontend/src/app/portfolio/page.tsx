import Gallery from "../../components/Gallery";

const IMAGES = [
  "/images/portfolio_imgs/ArtsyMantle.JPEG",
  "/images/portfolio_imgs/bed-port.JPEG",
  "/images/portfolio_imgs/kitchtab.JPEG",
  "/images/portfolio_imgs/bed-starboard.JPEG",
  "/images/portfolio_imgs/KitchTab-FDoor.JPEG",
  "/images/portfolio_imgs/livingspaceangle.JPEG",
  "/images/portfolio_imgs/livingspaceheadon.JPEG",
  "/images/portfolio_imgs/openkitchen.JPEG",
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-card portfolio">
        <h1>Portfolio</h1>
        <Gallery images={IMAGES} />
      </section>
    </main>
  );
}
