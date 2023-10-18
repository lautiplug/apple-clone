import { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import { ProductInCartView } from "./ProductInCartView";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const CartDetail = () => {
  const { cart, clearCart } = useCartContext();
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Calcular el total cuando el carrito cambia
  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.quantity * (item.price || item.proPrice);
    });
    setTotal(newTotal);
  }, [cart]);

  const handleClearCart = () => {
    setIsLoading(true); // Establece isLoading en true al hacer clic en el botón

    setTimeout(() => {
      clearCart();
      setIsLoading(false); // Establece isLoading en false después de 3 segundos
    }, 3000);
  };

  useEffect(() => {
    AOS.init();
  }, [cart])
  

  return (
    <main className="rs-bag-main" data-aos="zoom-in">
      {<section className="rs-bag-button-header large-12">
        <h1 className="rs-bag-header" data-autom="bag-header" tabIndex="-1">
          {cart.length === 0
            ? "Your bag is empty."
            : `Your bag total is $${total.toLocaleString("en-US")}.`}
        </h1>
        <span className="visuallyhidden" aria-live="polite"></span>
        <div className="rs-bag-headermessage">
          <span className="pd-util-weight-semibold" data-aos="zoom-in">
            {cart.length === 0 ? (
              <Link
                to={"/shop/iphone"}
                style={{ textDecoration: "none", color: "#0071e3" }}
              >
                Start buying something
              </Link>
            ) : (
              "Free delivery and free returns."
            )}
          </span>
        </div>
        <div className="row rs-bag-checkoutbutton-header">
          <div className="small-12 small-offset-0 large-12">
            <div className="rs-bag-checkoutbuttons-wrapper rs-bag-applepay-enabled rs-bag-checkout-mainbutton-show">
              <div className="rs-bag-checkoutbutton rs-bag-checkout-mainbutton">
                {cart.length === 0 ? null : (
                  <button
                    onClick={handleClearCart}
                    id="shoppingCart.actions.navCheckout"
                    type="button"
                    className={isLoading ? "button-block--loading" : "button-block"}
                    data-autom="checkout"
                    >
                    <span>
                      {isLoading ? (
                        <div className="button-checking-out">
                          <div class="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          Check Out
                        </div>
                      ) : (
                        "Check Out"
                      )}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>}
      <section className="rs-bag-product">
        <ProductInCartView />
      </section>
    </main>
  );
};
