import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../Shopping/Cart/ShoppingCart.css'

import { Pagination, Navigation } from "swiper/modules";
import { WhatsInTheBoxIphone } from "./WhatsInTheBoxIphone";
import { IPhoneLayout } from "./IPhoneLayout";
import { TextHero } from "../Mac/TextHero";

export const IphoneBuyDetail = ({ product }) => {
  // Align content to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 



  const { addProduct } = useCartContext();
  const [selectedIphone, setSelectedIphone] = useState([]);
  const [proType, setProType] = useState("");
  const { id } = useParams();
  const productId = parseInt(id, 10);

  useEffect(() => {
    fetch("/json/products.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const product = jsonData.find((item) => item.id === productId);
        if (product) {
          setSelectedIphone(product);
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Algo salió mal. Error:", error);
      });
  }, [productId]);

  /* Getting all the products to show IphoneLayout */
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/json/products.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setProducts(jsonData);
      })
      .catch((error) => {
        console.error("Algo salió mal. Error:", error);
      });
  }, []);

  // this function get all the specific data to add to the cart
  const handleAddToCart = () => {
    let productToAdd = {
      ...product,
      id: selectedIphone.id,
      img: selectedIphone.img,
      price: selectedIphone.price,
      stock: selectedIphone.stock,
    };

    if (proType === "pro") { // if model is pro / normal get variants in position 0
      productToAdd = {
        ...productToAdd,
        id_model: selectedIphone.variants[0].id_model,
        title: selectedIphone.variants[0].title,
        type: selectedIphone.variants[0].type,
        price: selectedIphone.price,
      };
    } else if (proType === "proMax") { // if model is proMax / or best version get variants in position 1
      productToAdd = {
        ...productToAdd,
        id_model: selectedIphone.variants[1].id_model,
        title: selectedIphone.variants[1].title,
        type: selectedIphone.variants[1].type,
        price: selectedIphone.proPrice,
      };
    } else if (!proType) return;
    addProduct(productToAdd);
  };

  const handlePro = (e) => { // this function stores the selection. in a future this will store more data, like storage, color, carrier, etc.
    e.preventDefault();
    setProType(e.target.value);
  };

  return (
    <main className="iphone-detail-main">
      <TextHero>
      Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.◊◊
      </TextHero>
      <div className="iphone-detail-pricing">
        <p>{selectedIphone.New}</p>
        <h1>{proType === "proMax" ? selectedIphone.proTitle : selectedIphone.title}</h1>
        {proType ? (
          <h2>
            From $
            {proType === "pro" ? selectedIphone.price : selectedIphone.proPrice}
            Or $
            {proType === "pro"
              ? (selectedIphone.price / 12).toFixed(2)
              : (selectedIphone.proPrice / 12).toFixed(2)}
            for 12 mo.
          </h2>
        ) : (
          <h2>
            From ${selectedIphone.price} Or $
            {(selectedIphone.price / 12).toFixed(2)} for 12 mo.
          </h2>
        )}
      </div>
      <article className="iphone-detail-article">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className={
                proType === "proMax"
                  ? "proMaxImageContainer"
                  : "proImageContainer"
              }
            >
              <img
                src={selectedIphone.carouselImg1}
                alt={selectedIphone.title}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                proType === "proMax"
                  ? "proMaxImageContainer"
                  : "proImageContainer"
              }
            >
              <img
                src={selectedIphone.carouselImg2}
                alt={selectedIphone.title}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                proType === "proMax"
                  ? "proMaxImageContainer"
                  : "proImageContainer"
              }
            >
              <img
                src={selectedIphone.carouselImg3}
                alt={selectedIphone.title}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={selectedIphone.carouselImg4} alt={selectedIphone.title} />
          </SwiperSlide>
          {!selectedIphone.carouselImg5 ? (
            ""
          ) : (
            <SwiperSlide>
              <img
                src={selectedIphone.carouselImg5}
                alt={selectedIphone.title}
              />
            </SwiperSlide>
          )}
        </Swiper>
        <section className="iphone-detail-info">
          <h3>
            <span>Model.</span> Which is best for you?
          </h3>
          <button
            value="pro"
            onClick={handlePro}
            id="pro"
            className="iphone-select-specs"
            style={proType === "pro" ? { outline: "2px solid #0071e3" } : {}}
          >
            <div>
              <span>{selectedIphone.title}</span>
              <p>{selectedIphone.screenSize}-inch display</p>
            </div>
            <p>
              From ${selectedIphone.price} or $
              {(selectedIphone.price / 12).toFixed(2)}/mo for 12 mo.*
            </p>
          </button>

          <button
            value="proMax"
            onClick={handlePro}
            id="proMax"
            className="iphone-select-specs"
            style={proType === "proMax" ? { outline: "2px solid #0071e3" } : {}}
          >
            <div>
              <span>{selectedIphone.proTitle}</span>
              <p>6.7-inch-display</p>
            </div>
            <p>
              From ${selectedIphone.proPrice} or $
              {selectedIphone.price?.toFixed(2)}/mo for 12 mo.*
            </p>
          </button>
          <button style={{width: "100%"}} className="button-checking-out button-block" onClick={handleAddToCart}>Add to cart</button>
        </section>
      </article>

      {/* What's in the box */}
      <WhatsInTheBoxIphone iphoneName={selectedIphone.title} usbType={selectedIphone.usbType} backImg={selectedIphone.backiPhone} usbCimg={selectedIphone.usbC}/>

      
      <section style={{paddingBottom: '0px'}} className="iphone-title-section">
        <h2>Which iPhone is right for you?</h2>
      </section>

      <section style={{marginTop: '0px'}} className="card-iphone-layout">
      {products.map(({ id, img, colors, New, title, subTitle, price, link, screenSize, iphoneScreen, dynamicIsland, chip, camera, cameraZOOM, SOS, batery, usb, securitySystem, screenDesc1, screenDesc2, screenDesc3, screenMaterial, leftButton, dynamicIslandTitle, dynamicIslandBrand, chipTitle, cameraTitle, cameraSpecs1, cameraSpecs2, cameraSpecs3, SOSTitle, SOSSpecs1, SOSSpecs2, SOSSpecs3, upToBatery, usbType, supportsUsb, securitySystemType }) => (
          <IPhoneLayout
            id={id}
            key={id}
            img={img}
            colorProduct={colors}
            New={New}
            title={title}
            subtitle={subTitle}
            price={price}
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
    </main>
  );
};
