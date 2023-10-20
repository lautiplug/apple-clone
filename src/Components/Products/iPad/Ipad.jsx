import { useEffect, useState } from "react";
import { iPadImages } from "../../../utils/iPadHero/iPadHero";
import { IpadHero } from "./IpadHero";
import "./iPad.css";
import { TextHero } from "../Mac/TextHero";
import { IpadLayout } from "./IpadLayout";
import { Footer } from "../../Footer/Footer";

export const Ipad = ({title}) => {
  // Align content to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // page title
  document.title = title
  
  const [ipadData, setIpadData] = useState([]);

  useEffect(() => {
    fetch("/json/ipad.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // jsonData contains the data from json file
        setIpadData(jsonData);
      })
      .catch((error) => {
        console.error("Something went wrong, check out what happened:", error);
      });
  }, []);

  return (
    <>
     {/* Need to add mobile styles */}
       <TextHero>
        Get 3% Daily Cash back with Apple Card. And pay for your new iPad over
        12 months, interest-free when you choose to check out with Apple Card
        Monthly Installments.*
      </TextHero>
      {iPadImages.map(
        ({
          id,
          img,
          New,
          title,
          subtitle,
          price,
          bgc,
          width,
          height,
          placeItems,
          textColor,
        }) => (
          <IpadHero
            key={id}
            img={img}
            New={New}
            title={title}
            subtitle={subtitle}
            price={price}
            bgc={bgc}
            width={width}
            height={height}
            placeItems={placeItems}
            textColor={textColor}
          />
        )
      )} 

      <section className="iphone-title-section ipad-title-section">
        <h2>Which iPad is right for you?</h2>
        <div className="compare">
          <a href="/">Compare all iPhone models {">"}</a>
          <a href="/">Shop iPhone {">"}</a>
        </div>
      </section>

      <section className="card-iphone-layout card-ipad-layout">
        {ipadData.map(
          ({
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
          }) => (
            <IpadLayout
              key={id}
              id={id}
              stock={stock}
              img={img}
              colors={colors}
              title={title}
              generation={generation}
              subTitle={subTitle}
              price={price}
              buy={buy}
              learnMore={learnMore}
              link={link}
              screenSize={screenSize}
              screenDesc1={screenDesc1}
              screenDesc2={screenDesc2}
              screenDesc3={screenDesc3}
              chip={chip}
              chipTitle={chipTitle}
              iphoneScreen={iphoneScreen}
              screenMaterial={screenMaterial}
              leftButton={leftButton}
              camera={camera}
              cameraTitle={cameraTitle}
              cameraSpecs1={cameraSpecs1}
              cameraSpecs2={cameraSpecs2}
              securitySystem={securitySystem}
              securitySystemType={securitySystemType}
              usb={usb}
              usbType={usbType}
              net5G={net5G}
              net5GTitle={net5GTitle}
              Pencil={Pencil}
              PencilSpecs={PencilSpecs}
              PencilSpecs2={PencilSpecs2}
              Keyboard={Keyboard}
              KeyboardSpec={KeyboardSpec}
              width={width}
              height={height}
            />
          )
        )}
      </section>
      <Footer title={title}/>
    </>
  );
};
