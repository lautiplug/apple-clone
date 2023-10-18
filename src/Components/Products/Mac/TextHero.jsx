export const TextHero = ({children}) => {
  return (
    <div className="ac-ribbon__bts-2023-content-wrapper">
      <div className="ac-ribbon__bts-2023-content row">
        <div className="row large-12 large-centered ac-ribbon__bts-2023-container">
          <p className="ac-ribbon__bts-2023-content-copy">
            {children}
            <span className="bts-2023-footnote footnote footnote-diamond ribbon-link">
              <a href="#footnote-bts-2023" aria-label="Footnote ◊ symbol">
                ◊
              </a>
            </span>
            <a
              href="/us-hed/shop/back-to-school"
              data-analytics-title="shop now - back to school 2023"
              aria-label="Shop now, back to school 2023"
              className="icon-wrapper ac-ribbon__bts-2023-link bts-2023-link"
            >
              <span className="icon-copy">Shop now {">"}</span>
              <span className="icon icon-after more"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
