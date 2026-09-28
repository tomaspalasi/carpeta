import SiteLayout from "@/components/SiteLayout";

export default function Home() {
  return (
    <SiteLayout className="home-page" showFooter={false}>
      <section className="home-sculpture" aria-label="Tomás Palasi — carpeta creativa">
        <img
          src={`${import.meta.env.BASE_URL}images/tomas-sculpture.webp`}
          alt="Retrato escultórico de Tomás con gorro, antiparras y la lengua afuera, sostenido por una mano roja"
          width="1024"
          height="1536"
          fetchPriority="high"
        />
      </section>
      <div className="contour-band" aria-hidden="true" />
    </SiteLayout>
  );
}
