import { Link } from "react-router-dom";
import "../iPhone/iphone.css";
import { useCartContext } from "../../../Context/CartContext";

export const MacLayout = ({
  id,
  img,
  colors,
  New,
  title,
  subTitle,
  description,
  price,
  link,
  screenSize,
  screenDesc1,
  chip,
  chipName,
  coreCPU,
  coreCPUName,
  coreGPU,
  coreGPUName,
  memoryRAM,
  memoryRAMUpTo,
  spaceTB,
  spaceTBUpTo,
  batery,
  upToBatery,
  faceTime,
  faceTimeUpTo,
  speaker,
  speakerName2,
  speakerName3,
  speakerName,
  weight,
  weightText,
  securitySystem,
  securitySystemType,
}) => {

  return (
    <main className="main-layout">
      <section className="iphone-layout-card-container mac-layout-card-container">
        <picture>
          <img className="iphone-img mac-img" src={img} alt={title} />
        </picture>
        <div className="iphone-description-col mac-description-col">
          <img src={colors} alt="iPhone colors" />
          {New ? <span>{New}</span> : <span style={{ opacity: "0" }}>.</span>}
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>

        <div className="iphone-ordering-col mac-ordering-col">
          <div>
            <h3>{description}</h3>
          </div>
          <p>
            From ${(price / 12).toFixed(2)}/mo. for 12 mo. or ${price}**
          </p>
          <button>
            <Link to={`/shop/macbook/${id}`}>Buy</Link>
          </button>
          <a
            className="card-layout-link iphone-link"
            href={link}
            target="_blank"
          >
            Learn more {">"}
          </a>
        </div>
      </section>
      <section
        key={id}
        className="iphone-specs-container macbook-specs-container"
      >
        <article className="iphone-specs-grid specs1">
          <ul className="iphone-specs-ul">
            <h2>{screenSize}</h2>
            <li className="iphone-specs-li-col mac-specs-col screen-title">
              {screenDesc1}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs2">
          <ul className="iphone-specs-ul">
            <img src={chip} />
            <p className="iphone-specs-li-col mac-specs-col">{chipName}</p>
          </ul>
        </article>

        <article className="iphone-specs-grid specs3">
          <h2 className="mac-h2" alt="dynamic island img">{coreCPU}</h2>
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">{coreCPUName}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs3">
          <h2 className="mac-h2" alt="dynamic island img">{coreGPU}</h2>
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">{coreGPUName}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs5 mac-specs-5">
          <ul className="iphone-specs-ul">
            <img src={memoryRAM} alt="apple iphone camera system" />
            <li className="iphone-specs-li-col mac-specs-col">
              {memoryRAMUpTo}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid-camera-zoom specs6">
          <h2 className="mac-h2">{spaceTB}</h2>
          <p className="iphone-specs-li-col mac-specs-col">{spaceTBUpTo}</p>
        </article>

        <article className="iphone-specs-grid specs8">
          <img src={batery} alt="iphone batery image" />
          <p className="iphone-specs-p-battery">{upToBatery}</p>
        </article>

        <article className="iphone-specs-grid specs7">
          <img src={faceTime} alt="apple iphone SOS system" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">
              {faceTimeUpTo}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs9 mac-specs-9">
          <img src={speaker} alt="iphone usb type image" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">{speakerName}</li>
            <li className="iphone-specs-li-col mac-specs-col">
              {speakerName2}
            </li>
            <li className="iphone-specs-li-col mac-specs-col">
              {speakerName3}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs10 mac-specs10">
          <p style={{fontWeight: "bold"}}>{weight}</p>
          <p className="iphone-specs-li-col mac-specs-col">{weightText}</p>
        </article>

        <article className="iphone-specs-grid specs10">
          <img src={securitySystem} alt="iphone security system type image" />
          <p className="iphone-specs-li-col mac-specs-col">
            {securitySystemType}
          </p>
        </article>
        <hr className="iphone-specs-hr" />
      </section>
    </main>
  );
};
