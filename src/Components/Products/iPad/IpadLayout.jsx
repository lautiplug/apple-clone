import { Link } from "react-router-dom";

export const IpadLayout = ({
  id,
  stock,
  img,
  colors,
  title,
  generation,
  subTitle,
  price,
  buy,
  learnMore,
  link,
  screenSize,
  screenDesc1,
  screenDesc2,
  screenDesc3,
  chip,
  chipTitle,
  iphoneScreen,
  screenMaterial,
  leftButton,
  camera,
  cameraTitle,
  cameraSpecs1,
  cameraSpecs2,
  securitySystem,
  securitySystemType,
  usb,
  usbType,
  net5G,
  net5GTitle,
  Pencil,
  PencilSpecs,
  PencilSpecs2,
  Keyboard,
  KeyboardSpec,
  width,
  height
}) => {
  return (
    <main className="main-layout">
      <section className="iphone-layout-card-container mac-layout-card-container ipad-layout-card-container">
        <picture>
          <img style={{width: {width}, height: height}} className=" ipad-img" src={img} alt={title} />
        </picture>
        <div className="iphone-description-col mac-description-col ipad-col-description">
          <img src={colors} alt="iPhone colors" />
          <p>{generation ? generation : "‎"}</p>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>

        <div className="iphone-ordering-col mac-ordering-col ipad-ordering-col">
          <p>
            From ${(price / 12).toFixed(2)}/mo. for 12 mo. or ${price}**
          </p>
          <button>
            <Link to={`/shop/macbook/${id}`}>Buy</Link>
          </button>
          <a
            className="card-layout-link iphone-link ipad-link"
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
            <h2 className="ipad-screen-h2">{screenSize}</h2>
            <li className="iphone-specs-li-col mac-specs-col screen-title">
              {screenDesc1}
            </li>
            <li className="iphone-specs-li-col mac-specs-col screen-title">
              {screenDesc2}
            </li>
            <li className="iphone-specs-li-col mac-specs-col screen-title">
              {screenDesc3}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs2">
          <ul className="iphone-specs-ul">
            <img src={chip} />
            <p className="iphone-specs-li-col mac-specs-col ipad-chip-title">
              {chipTitle}
            </p>
          </ul>
        </article>

        <article className="iphone-specs-grid specs3 ipad-grid-3">
          <picture>
            <img src={iphoneScreen} alt="ipad screen type" />
          </picture>
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col ipad-screen-material">
              {screenMaterial}
            </li>
            <li className="iphone-specs-li-col mac-specs-col ipad-screen-material">
              {leftButton}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid ipad-grid-3">
          <img src={camera} alt="ipad screen type" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">{cameraTitle}</li>
            <li className="iphone-specs-li-col mac-specs-col">
              {cameraSpecs1}
            </li>
            <li className="iphone-specs-li-col mac-specs-col">
              {cameraSpecs2}
            </li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs10">
          <picture>
            <img src={securitySystem} alt="iphone security system type image" />
          </picture>
          <p className="iphone-specs-li-col mac-specs-col ipad-security-ss">
            {securitySystemType}
          </p>
        </article>

        <article className="iphone-specs-grid specs9 ipad-usb-grid">
          <img src={usb} alt="iphone usb type image" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">{usbType}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs5 mac-specs-5">
            <img src={net5G} alt="apple iphone camera system" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col">{net5GTitle}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid-camera-zoom specs6">
          <picture>
            <img src={Pencil} alt="apple pencil" />
          </picture>
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col ipad-specs-pencil">{PencilSpecs}</li>
            <li className="iphone-specs-li-col mac-specs-col ipad-specs-pencil">{PencilSpecs2}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs7">
          <picture>
            <img src={Keyboard} alt="apple iphone SOS system" />
          </picture>
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col mac-specs-col ipad-specs-kb">{KeyboardSpec}</li>
          </ul>
        </article>

        <hr className="iphone-specs-hr" />
      </section>
    </main>
  );
};
