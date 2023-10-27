import { useEffect } from "react";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import "./iphone.css";

export const IPhoneHero = ({
  id,
  img,
  imgMV,
  titaniumImg,
  title,
  New,
  pricing,
  ordering,
  link,
  color,
}) => {
  let isPageWide = useMediaQuery("(max-width: 735px)");

  // Align content to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [img, imgMV]);

  return (
    <div key={id} className="card-iphone">
      {!isPageWide ? (
        <img className="card-iphone-img" src={img} alt={title} />
      ) : (
        <img className="card-iphone-img" src={imgMV} alt={title} />
      )}
      <div className="card-details card-details-iphone">
        <span>{New}</span>
        <h1 style={{ color }} className="card-title iphone-h1">
          {title}
        </h1>
        {titaniumImg ? (
          <img
            className="titanium-img"
            src={titaniumImg}
            alt="title showing the text 'titanium'"
          />
        ) : (
          <h2 style={{ color, fontSize: "48px", fontWeight: "600" }}>
            Newphoria
          </h2>
        )}
        <h3 style={{ color }} className="card-subtitle card-iphone-pricing">
          {pricing}
        </h3>
        <button className="card-order card-iphone-ordering">{ordering}</button>
        <div className="card-links-container">
          <a className="card-link" href={link} target="_blank">
            Learn more {">"}
          </a>
        </div>
      </div>
    </div>
  );
};
