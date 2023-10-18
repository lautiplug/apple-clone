import "./iphone.css";

export const WhatsInTheBoxIphone = ({
  backImg,
  usbCimg,
  iphoneName,
  usbType,
}) => {
  return (
    <section className="whats-in-the-box">
      <div className="wib-row">
        <div>
          <img
            className="back-iphone-img"
            src={backImg}
            alt="back part of the iPhone"
          />
          <h1>{iphoneName}</h1>
        </div>
        <div>
          <img className="usb-img" src={usbCimg} alt="Usb image" />
          <h2>{usbType} Charger Cable</h2>
        </div>
      </div>

      <div className="rf-flagship-buyflow-witbfooter">
        <p>
          <strong>Our environmental goals.</strong>
          <br />
          <br />
          As part of our efforts to reach&nbsp;
          <a
            href="https://www.apple.com/environment"
            data-slot-name="main-11"
            data-feature-name="Astro Link"
            data-display-name="AOS: environment"
          >
            carbon neutrality by 2030
          </a>
          , iPhone 15 Pro and iPhone 15 Pro Max do not include a
          power adapter or EarPods. Included in the box is a USB‑C Charge Cable
          that supports fast charging and is compatible with USB‑C power
          adapters and computer ports.
          <br />
          <br />
          We encourage you to use any compatible USB‑C power adapter. If you
          need a new Apple power adapter or headphones, they are available for
          purchase.
        </p>
      </div>
    </section>
  );
};
