import { useEffect } from "react";
import "./Mac.css";
import { useMediaQuery } from "../../../Services/useMediaQuery";

export const MacHero = ({id, img, New, title, subTitle, price, link, width, height, marginTop}) => {

  /* media query to resize img hero */
  let isPageWide = useMediaQuery('(max-width: 1000px)');
  
  // Align content to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [img]); 

  return (
    <main>
      <section
        className="section section-macbook-air section-hero-product"
        data-analytics-section-engagement="name:macbook air hero"
      >
        <div className="section-content">
          <div className="product-wrapper macbook-air large-12 large-centered">
            <h2>
              <span className="typography-body section-hero-product-violator violator-frameless">
                {New}
              </span>
              <span className="typography-hero-product-headline hero-eyebrow">
                {title}
              </span>
            </h2>
            <p className="typography-callout hero-copy ">{subTitle}</p>
            <div className="hero-pricing">
              <p
                className="typography-body hero-price pricing-variant has-dynamic-content"
                data-pricing-hide="macbook-air-15"
              ></p>
              <p
                className="typography-body hero-price has-dynamic-content"
                data-pricing-hide="macbook-air-15"
              >
                <span
                  data-pricing-product="macbook-air-15"
                  data-product-template="${price.display.monthlyFrom}"
                  data-acmi-idx="1"
                >
                  {price}
                </span>
                <span className="footnote footnote-supglyph">
                  <a
                    href="#footnote-2"
                    aria-label="Footnote ** symbol"
                    data-modal-close=""
                  >
                    **
                  </a>
                </span>
              </p>
            </div>
            <div className="cta-links">
              <div className="link-container">
                <p className="typography-hero-product-link hero-product-link">
                  <a
                    href="/us/shop/goto/buy_mac/macbook_air/15_inch_m2"
                    data-analytics-title="buy - macbook air 15 inch m2"
                    aria-label="Buy, MacBook Air 15 inch with M2 chip"
                    className="button button hero-button"
                  >
                    Buy
                  </a>
                </p>
              </div>
              <div className="link-container">
                <p className="typography-body hero-link">
                  <a
                    href="/macbook-air-13-and-15-m2/"
                    data-analytics-title="learn more - 15 inch macbook air"
                    aria-label="Learn more about MacBook Air 15 inch"
                    className="icon-wrapper"
                  >
                    <span className="icon-copy">Learn more {">"}</span>
                    <span className="icon icon-after more"></span>
                  </a>
                </p>
              </div>
            </div>

            <div className="large-12 hero-image-wrapper">
              {
                isPageWide 
                ? 
                <img
                  style={ {width: {width}, height:{height}}}
                  src={img}
                  alt="macbook-air"
                />
                :
                <img
                  style={ {width: {width}, height:{height}, marginTop: marginTop}}
                  src={img}
                  alt="macbook-air"
                />
              }
                
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
