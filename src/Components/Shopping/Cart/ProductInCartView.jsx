import React, { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";

export const ProductInCartView = () => {
  const { updateCart, cart, removeProduct } = useCartContext();

	const handleQuantityChange = (productId, newQuantity) => {
			// Call to the function updateCart to update the quantity
			updateCart(productId, newQuantity);
		};


  return (
    <main className="main-row">
      {cart.map((item, index) => (
        <div key={index} className="product-row">
          <picture>
            <img className="img-complete-purchase" src={item.img} alt={item.title} />
          </picture>
          <section className="column">
            <div className="products-row">
              <div className="product-selected-info">
                <h1>{item.title}</h1>
                <h2>Carrier: </h2>
                <h3>Connect with any carrier after you get your new iPhone</h3>
              </div>
              <div className="bottom-desc">
                <div className="product-select-quantity">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id_model,
                        parseInt(e.target.value)
                      )
                    }
                    name={`selectQ_${item.id_model}`}
                  > 
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="product-price-delete">
                  <h4>${(item.price * item.quantity).toLocaleString() || (item.proPrice * item.quantity.toLocaleString())}</h4>
                  <h5 onClick={() => removeProduct(item.id_model)}>Remove</h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </main>
  );
};
