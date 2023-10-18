import { useEffect, useState } from "react";
import { macHeroImgs } from "../../../Services/MacHero";
import { MacHero } from "./MacHero";
import { TextHero } from "./TextHero";
import "./Mac.css";
import { MacLayout } from "./MacLayout";

export const Mac = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/json/mac.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // jsonData contains the data from json file
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Something went wrong, check out what happened:", error);
      });
  }, []);

  // Title
  const title = "Mac - Apple Clone"
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <>
      <TextHero>
        Save on Mac or iPad with education pricing and get a gift card up to
        $150. Gift card offer ends October&nbsp;2.
      </TextHero>
      {/* Hero images */}
      {macHeroImgs.map(
        ({
          id,
          img,
          New,
          title,
          subTitle,
          price,
          link,
          height,
          width,
          marginTop,
        }) => (
          <MacHero
            key={id}
            img={img}
            id={id}
            title={title}
            subTitle={subTitle}
            price={price}
            New={New}
            link={link}
            height={height}
            width={width}
            marginTop={marginTop}
          />
        )
      )}

      <section className="iphone-title-section">
        <h2>Which Mac is right for you?</h2>
      </section>

      <section className="card-iphone-layout">
        {data.map(
          ({
            id,
            img,
            colors,
            New,
            title,
            subTitle,
            description,
            price,
            link,
            carouselImg1,
            carouselImg2,
            carouselImg3,
            carouselImg4,
            carouselImg5,
            screenSize,
            proScreenSize,
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
          }) => (
            <MacLayout
              key={id}
              id={id}
              img={img}
              colors={colors}
              New={New}
              title={title}
              subTitle={subTitle}
              description={description}
              price={price}
              link={link}
              carouselImg1={carouselImg1}
              carouselImg2={carouselImg2}
              carouselImg3={carouselImg3}
              carouselImg4={carouselImg4}
              carouselImg5={carouselImg5}
              screenSize={screenSize}
              proScreenSize={proScreenSize}
              screenDesc1={screenDesc1}
              chip={chip}
              chipName={chipName}
              coreCPU={coreCPU}
              coreCPUName={coreCPUName}
              coreGPU={coreGPU}
              coreGPUName={coreGPUName}
              memoryRAM={memoryRAM}
              memoryRAMUpTo={memoryRAMUpTo}
              spaceTB={spaceTB}
              spaceTBUpTo={spaceTBUpTo}
              batery={batery}
              upToBatery={upToBatery}
              faceTime={faceTime}
              faceTimeUpTo={faceTimeUpTo}
              speaker={speaker}
              speakerName2={speakerName2}
              speakerName3={speakerName3}
              speakerName={speakerName}
              weight={weight}
              weightText={weightText}
              securitySystem={securitySystem}
              securitySystemType={securitySystemType}
            />
          )
        )}
      </section>
    </>
  );
};

/* 

  -.-.-.-layout-.-.-.-
  img
  colors
  title
  model
  description
  price
  buy btn
  learn more
  -.-.-.-layout-.-.-.- 

  inch screen
  chip/s {detail/s}
  coresCPU {detail}
  coresGPU {detail}
  memory {up to}
  space {maximum}
  battery {up to}
  videoCamera {detail}
  speaker {detail}
  weight {weight}
  securitySystem {security system}
*/
