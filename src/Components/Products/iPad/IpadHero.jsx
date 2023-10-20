import { TextHero } from "../Mac/TextHero";

export const IpadHero = ({ img, New, title, subtitle, price, bgc, width, height, placeItems, textColor}) => {
  return (
    <main className="ipad-hero">
      <section className="ipad-card" style={{ backgroundColor: bgc }}>
        <div style={{placeItems: placeItems}} className="ipad-details">
          <div style={{color: textColor}} className="ipad-content-description">
            <p>{New}</p>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>From ${price}</h3>
            <div className="ipad-buttons">
              <button className="button ipad-buy-btn">Buy</button>
              <a href="apple.com">Learn More {">"}</a>
            </div>
          </div>
        </div>
        <img style={{ height: height}} src={img} alt={title} />
      </section>
    </main>
  );
};
