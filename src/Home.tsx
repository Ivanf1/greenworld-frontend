// import hero from "./assets/hero.jpg";
import eventBanner from "./assets/evento-banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="evento-banner" style={{ background: `url(${eventBanner})` }}>
        <div className="evento-banner-grid">
          <div className="evento-banner-grid-text">
            <h2>Evento sulle montagne di avellino</h2>
            <p>montagne, avellino</p>
            <button>vedi testimonianze</button>
          </div>
        </div>
        <div className="evento-banner-overlay"></div>
      </div>
    </div>
  );
};

export default Home;
