import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TextHero } from "./TextHero";

export const MacBuyDetail = ({ product }) => {
  const { addProduct } = useCartContext();
  const [selectedIphone, setSelectedIphone] = useState([]);
  const [proType, setProType] = useState("");
  const { id } = useParams();
  const productId = parseInt(id, 10);

  useEffect(() => {
    fetch("/json/mac.json")
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

  const handleAddToCart = () => {
    let productToAdd = {
      ...product,
      id: selectedIphone.id,
      price: selectedIphone.price,
      stock: selectedIphone.stock,
    };

    if (proType === "pro") {
      productToAdd = {
        ...productToAdd,
        id_model: selectedIphone.variants[0].id_model,
        img: selectedIphone.variants[0].img,
        title: selectedIphone.variants[0].title,
        type: selectedIphone.variants[0].type,
        price: selectedIphone.price,
      };
    } else if (proType === "proMax") {
      productToAdd = {
        ...productToAdd,
        id_model: selectedIphone.variants[1].id_model,
        img: selectedIphone.variants[0].img,
        title: selectedIphone.variants[1].title,
        type: selectedIphone.variants[1].type,
        price: selectedIphone.proPrice,
      };
    } else if (!proType) return;
    addProduct(productToAdd);
  };

  const handlePro = (e) => {
    e.preventDefault();
    setProType(e.target.value);
  };

  return (
    <main className="iphone-detail-main mac-detail-main">
      <TextHero>
      Pay for your new Mac over 12 months at 0% APR with Apple Card.◊ Just choose Apple Card Monthly Installments when you check out to apply.
      </TextHero>
      <div className="iphone-detail-pricing">
        <p>{selectedIphone.New}</p>
        <h1 className="mac-detail-h1">{proType === "proMax" ? selectedIphone.proTitle : selectedIphone.title}</h1>
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
      <article className="iphone-detail-article mac-detail-article">
        <img
          className="mac-img-detail"
          src={selectedIphone.imgPurchase}
          alt={selectedIphone.title}
        />
        <section className="iphone-detail-info mac-detail-info">
          <h3 className="mac-detail-h3">
            <span>Model.</span> Which is best for you?
          </h3>
          <div
            className="rf-configuration-productsummary"
            data-autom="productSummary"
          >
              <ul className="rf-configuration-subheader typography-body-reduced">
                <li>{selectedIphone.CPU}</li>
                <li>{selectedIphone.GPU}</li>
                <li>{selectedIphone.NeuralEngine}</li>
                <li>{selectedIphone.Memory}</li>
                <li>{selectedIphone.Storage}</li>
                <li>{selectedIphone.Display}</li>
                <li>{selectedIphone.Ports}</li>
                <li>{selectedIphone.TouchBar}</li>
                <li>{selectedIphone.Keyboard}</li>
                <li>{selectedIphone.Trackpad}</li>
              </ul>
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "start", gap: "20px"}}>
          <button
            value="pro"
            onClick={handlePro}
            id="pro"
            className="iphone-select-specs mac-select-specs"
            style={proType === "pro" ? { outline: "2px solid #0071e3" } : {}}
          >
            <div>
              <span>{selectedIphone.title}</span>
              <p>{selectedIphone.screenSize}- inch display</p>
            </div>
            <p>
              From ${selectedIphone.price} or $
              {(selectedIphone.price / 12).toFixed(2)}/mo for 12 mo.*
            </p>
          </button>
          {!selectedIphone.proPrice ? (
            ""
          ) : (
            <button
              value="proMax"
              onClick={handlePro}
              id="proMax"
              className="iphone-select-specs mac-select-specs"
              style={
                proType === "proMax" ? { outline: "2px solid #0071e3" } : {}
              }
            >
              <div>
                <span>{selectedIphone.proTitle}</span>
                <p>{selectedIphone.proScreenSize}- inch display</p>
              </div>
              <p>
                From ${selectedIphone.proPrice} or $
                {(selectedIphone.proPrice / 12).toFixed(2)}/mo for 12 mo.*
              </p>
            </button>
          )}
          <button style={{width: "100%"}} className="button-checking-out button-block" onClick={handleAddToCart}>Add to cart</button>
          </div>

        </section>
      </article>
    </main>
  );
};
