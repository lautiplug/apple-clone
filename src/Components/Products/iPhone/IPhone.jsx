import { useEffect, useState } from "react";
import { heroImgs } from "../../../Services/HeroIndex";
import { IPhoneHero } from "./IPhoneHero.jsx";
import { IPhoneLayout } from "./IPhoneLayout";
import "./iphone.css";

export const IPhone = () => {
  const heroimgs = heroImgs.slice(0, 2);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/json/products.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // jsonData contains the data from json file
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Something went wrong, check out what happened:", error);
      });
  }, []);

  return (
    <main className="iphone-main">
      <section className="iphone-header">
        <div>
          {/* Hero images */}
          {heroimgs.map(
            ({ id, img, imgMV, height, title, link, titaniumImg, color }) => (
              <IPhoneHero
                key={id}
                img={img}
                imgMV={imgMV}
                id={id}
                height={height}
                title={title}
                titaniumImg={titaniumImg}
                New={"New"}
                pricing={"From $799 or $33.29/mo. for 24 mo."}
                ordering={"Buy"}
                link={link}
                color={color}
              />
            )
          )}
        </div>
      </section>

      <section className="iphone-title-section">
        <h2>Which iPhone is right for you?</h2>
      </section>
      {/* iPhone layout */}
      <section className="card-iphone-layout">
        {data.map(({ id, img, colors, New, title, subTitle, price, buy, learnMore, link, screenSize, iphoneScreen, dynamicIsland, chip, camera, cameraZOOM, SOS, batery, usb, securitySystem, screenDesc1, screenDesc2, screenDesc3, screenMaterial, leftButton, dynamicIslandTitle, dynamicIslandBrand, chipTitle, cameraTitle, cameraSpecs1, cameraSpecs2, cameraSpecs3, SOSTitle, SOSSpecs1, SOSSpecs2, SOSSpecs3, upToBatery, usbType, supportsUsb, securitySystemType }) => (
          <IPhoneLayout
            data={data}
            id={id}
            key={id}
            img={img}
            colorProduct={colors}
            New={New}
            title={title}
            subtitle={subTitle}
            price={price}
            buy={buy}
            learnMore={learnMore}
            link={link}
            screenSize={screenSize} 
            iphoneScreen={iphoneScreen} 
            dynamicIsland={dynamicIsland} 
            chip={chip} 
            camera={camera} 
            cameraZOOM={cameraZOOM} 
            SOS={SOS} 
            batery={batery} 
            usb={usb} 
            securitySystem={securitySystem} 
            screenDesc1={screenDesc1} 
            screenDesc2={screenDesc2} 
            screenDesc3={screenDesc3} 
            screenMaterial={screenMaterial} 
            leftButton={leftButton} 
            dynamicIslandTitle={dynamicIslandTitle} 
            dynamicIslandBrand={dynamicIslandBrand} 
            chipTitle={chipTitle} 
            cameraTitle={cameraTitle} 
            cameraSpecs1={cameraSpecs1} 
            cameraSpecs2={cameraSpecs2} 
            cameraSpecs3={cameraSpecs3} 
            SOSTitle={SOSTitle} 
            SOSSpecs1={SOSSpecs1} 
            SOSSpecs2={SOSSpecs2} 
            SOSSpecs3={SOSSpecs3} 
            upToBatery={upToBatery} 
            usbType={usbType} 
            supportsUsb={supportsUsb} 
            securitySystemType={securitySystemType}
          />
        ))}
      </section>
      <div className="compare">
        <a href="/">Compare all iPhone models {">"}</a>
        <a href="/">Shop iPhone {">"}</a>
      </div>

{/*       <article className="save-money-main">
        <SaveMoney
          img={"https://i.ibb.co/qms9Gjw/icon-delivery-f4vnk0swb0eq-large.png"}
          alt={"icon-delivery"}
          title={"Fast, free delivery"}
          text={"Or pick up available items at an Apple Store."}
          link={"Learn More > "}
        />
        <SaveMoney
          img={"https://i.ibb.co/tBgrkjN/icon-financing-cz6p4nvq3a4i-large.png"}
          alt={"icon-financing"}
          title={"Pay monthly at 0% APR"}
          text={"You can pay over time when you choose to check out with Apple Card Monthly Installments.**"}
          link={"Learn More > "}
        />
        <SaveMoney
          img={"https://i.ibb.co/b61LdNT/icon-personal-session-e6a44cdlylm6-large.png"}
          alt={"icon-delivery"}
          title={"Get help buying"}
          text={"Have a question? Call a Specialist or chat online. Call 1‑800‑MY‑APPLE."}
          link={"Learn More > "}
        />
      </article>

      <p className="ios-title-section">What makes an iPhone an iPhone?</p>

      <div className="ios-17-row">
        <div className="ios-17-details">
          <h3>iOS 17</h3>
          <p>Every day. More extraordinary.</p>
          <a href="/">Learn More {">"}</a>
        </div>
        <img src="https://i.ibb.co/ZGHFPgp/ios17-glwsbqdnc6um-large.jpg" />
      </div> */}
    </main>
  );
};
