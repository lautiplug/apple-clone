export const HeroLayoutPromo = ({
  id,
  img,
  title,
  subTitle,
  available,
  icon,
  link,
  color,
  iconSide
}) => {
  return (
    <main>
      <section className="hero-layout-promo-section">
        <div className="hero-layout-card">
          <img className="hero-layout-img" src={img} alt={title} />
          <div
            key={id}
            style={{ color: id === 2 || id === 3 ? "black" : "white" }}
            className={
              id === 2
                ? "hero-layout-description--vision"
                : "hero-layout-description"
            }
          >
            <h1>
              {title}
            </h1>
            
              <h2>
                {subTitle}
              </h2>
              {available === false ? <h3>Available early next year in the U.S</h3> : null}
            <div className="hero-layout-links">
              <a href="apple.com">Learn More{">"}</a>
              {id === 2 ? null : <a href="apple.com">Buy{">"}</a>}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
