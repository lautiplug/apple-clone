import { imgs } from "../../Services/LayoutIndex";
import { BrainExplodingEmoji } from "../BrainExplodingEmoji";
import { HowToBuy } from "../HowToBuy";
import { CardLayout } from "./CardLayout";
import "./IndexLayout.css";

export const IndexLayout = () => {
  return (

  // if cart view is active deactivate layout scrolling and just activate cart scrolling

    // title, textDescr, link
    <section>
      <article className="trade-buy-info">
        <HowToBuy
          title={"Finance is an option."}
          textDesc={ "We have all payment methods so that you can pay for your product in the way that is most convenient for you." }
          link={"Payment options."}
        />
        <BrainExplodingEmoji/>
        <HowToBuy
          title={"Trade In."}
          textDesc={"With our Trade In system, you can get a credit for the purchase of your next product, it's easy and fast."}
          link={"Get a quote for your iPhone."}
        />
      </article>
      <article className="card-layout">
        {imgs.map(({ img, id, title, desc, link}) => (
          <CardLayout key={id} img={img} id={id} title={title} desc={desc} link={link} />
        ))}
      </article>
    </section>
  );
};
