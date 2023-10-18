import { useEffect } from "react";
import { IndexLayout } from "../../Layout/Grid-Index/IndexLayout";
import { heroImgs, heroPromoLayout } from "../../Services/HeroIndex";
import "./Hero.css";
import { HeroCard } from "./HeroCard";
import { HeroLayoutPromo } from "./HeroLayoutPromo";

export const Hero = () => {

  // Align content to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  return (
    <section>
      <div className="hero-index-picture">
        {heroImgs.map(({ img, imgMV, id, height, title, subTitle, link, appleLogo, series9, order, color}) => (
          <HeroCard
            key={id}
            img={img}
            imgMV={imgMV}
            id={id}
            height={height}
            title={title}
            subTitle={subTitle}
            link={link}
            appleLogo={appleLogo}
            series9={series9}
            order={order}
            color={color}
          />
          )
        )}
      </div>

      <section className="hero-promo-layout">
      {
        heroPromoLayout.map(({id, img, title, subTitle, available, icon, link, color, iconSide}) => (
          <HeroLayoutPromo
            key={id}
            img={img}
            id={id}
            title={title}
            subTitle={subTitle}
            available={available}
            iconSide={iconSide}
            icon={icon}
            link={link}
            color={color}
          />
        ))
      }
      </section>
      <IndexLayout />
      
    </section>
  );
};
