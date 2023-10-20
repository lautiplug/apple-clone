import { Link } from "react-router-dom";
import { useMediaQuery } from "../../utils/useMediaQuery";

export const HeroCard = ({ img, imgMV, id, height, title, subTitle, link, appleLogo, series9, order, color}) => {

  let isPageWide = useMediaQuery('(max-width: 735px)')

  return (
    <div key={id} className="card">
      {!isPageWide ? <img fetchpriority="high" style={{ height }} src={img} alt={title}/> : <img fetchpriority="high" style={{ height }} src={imgMV} alt={title}/> }
      
      <div className="card-details">
        <h1 className="card-title" style={{ color }}>
          {appleLogo} {title}
        </h1>
        {series9 ? <h2 className="card-h2">{series9}</h2> : ""}
        <h2 className="card-subtitle" style={{ color }}>
          {subTitle}
        </h2>
        {order ? <h4 className="card-order">{order}</h4> : ""}
        <div className="card-links-container">
          <a href={link} className="card-link">
            Learn more {">"}
          </a>
          <Link to={"/shop/iphone/1 "} className="card-link">
            Buy {">"}
          </Link>
        </div>
      </div>
    </div>
  );
};
