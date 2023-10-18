import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import "./iphone.css";

export const IPhoneLayout = ({id, img, colorProduct, New, title, subtitle, price, buy, learnMore, link, screenSize, iphoneScreen, dynamicIsland, chip, camera, cameraZOOM,   SOS, batery, usb, securitySystem, screenDesc1, screenDesc2, screenDesc3, screenMaterial, leftButton, dynamicIslandTitle, dynamicIslandBrand, chipTitle, cameraTitle, cameraSpecs1, cameraSpecs2, cameraSpecs3, SOSTitle, SOSSpecs1, SOSSpecs2, SOSSpecs3, upToBatery, usbType, supportsUsb, securitySystemType
}) => {

  return (
    <main className="main-layout">
      <section className="iphone-layout-card-container">
        <picture>
          <img fetchpriority="high" className="iphone-img" src={img} alt={title} />
        </picture>
        <div className="iphone-description-col">
          <img src={colorProduct} alt="iPhone colors" />
          {New ? <span>{New}</span> : <span style={{ opacity: "0" }}>.</span>}
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className={buy ? "iphone-ordering-col" : "iphone-ordering-col--no-button"}>
          <p>From ${price}*</p>
          <button><Link to={`/shop/iphone/${id}`}>{buy}</Link></button>
          <a
            className="card-layout-link iphone-link"
            href={link}
            target="_blank"
          >
            {learnMore}
          </a>
        </div>
      </section>
      <section key={id} className="iphone-specs-container">
        <article className="iphone-specs-grid specs1">
          <h3>{screenSize}</h3>
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col screen-title">{screenDesc1}</li>
            <li className="iphone-specs-li-col screen-title">{screenDesc2}</li>
            <li className="iphone-specs-li-col screen-title">{screenDesc3}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs2">
          <ul className="iphone-specs-ul">
            <img src={iphoneScreen} alt={screenMaterial}/>
            <li className="iphone-specs-li-col">{screenMaterial}</li>
            <li className="iphone-specs-li-col">{leftButton}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs3">
          {dynamicIsland ? (
            <>
              <img src={dynamicIsland} alt="dynamic island img" />
              <ul className="iphone-specs-ul">
                <li className="iphone-specs-li-col">{dynamicIslandTitle}</li>
                <li className="iphone-specs-li-col">{dynamicIslandBrand}</li>
              </ul>
            </>
          ) : (
            <p className="specs-not-found">-</p>
          )}
        </article>

        <article className="iphone-specs-grid specs4">
          <img src={chip} alt="apple iphone chip" />
          <p className="iphone-specs-li-col">{chipTitle}</p>
        </article>

        <article className="iphone-specs-grid specs5">
          <ul className="iphone-specs-ul">
          <img src={camera} alt="apple iphone camera system" />
            <li className="iphone-specs-p-camera-system">{cameraTitle}</li>
            <li className="iphone-specs-li-col">{cameraSpecs1}</li>
            <li className="iphone-specs-li-col">{cameraSpecs2}</li>
            <li className="iphone-specs-li-col">{cameraSpecs3}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid-camera-zoom specs6">
          <h4>{cameraZOOM}</h4>
          <p className="iphone-specs-li-col">optical zoom range</p>
        </article>

        <article className="iphone-specs-grid specs7">
          <img src={SOS} alt="apple iphone SOS system" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-p-sos">{SOSTitle}</li>
            <li className="iphone-specs-li-col">{SOSSpecs1}</li>
            <li className="iphone-specs-li-col">{SOSSpecs2}</li>
            <li className="iphone-specs-li-col">{SOSSpecs3}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs8">
          <img src={batery} alt="iphone batery image" />
          <p className="iphone-specs-p-battery">{upToBatery}</p>
        </article>

        <article className="iphone-specs-grid specs9">
          <img src={usb} alt="iphone usb type image" />
          <ul className="iphone-specs-ul">
            <li className="iphone-specs-li-col">{usbType}</li>
            <li className="iphone-specs-li-col">{supportsUsb}</li>
          </ul>
        </article>

        <article className="iphone-specs-grid specs10">
          <img src={securitySystem} alt="iphone security system type image" />
          <p className="iphone-specs-li-col">{securitySystemType}</p>
        </article>
        <hr className="iphone-specs-hr"/>
      </section>
    </main>
  );
};
