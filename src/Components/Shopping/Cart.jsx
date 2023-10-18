import { Link } from "react-router-dom";
import "../Shopping/Cart/ShoppingCart.css";
import { useCartContext } from "../../Context/CartContext";

export const Cart = ({ cartOpen, closeCart }) => {
  // if cart view is active deactivate layout scrolling and just activate cart scrolling

  const { cart, clearCart } = useCartContext();

  return (
    <section
className={
  !cartOpen ? "shopping-cart-section" : "shopping-cart-section--active"
}
>
<header className="shopping-cart">
  <div className="shopping-cart-details-container">
    <h1 className="shopping-cart-details-bag-title">{cart.length <= 0 ? "Your bag is empty." : "Bag"}</h1>
    <svg
          onClick={closeCart}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
    {cart.map((item, index) => (
        <section key={index} className="shopping-cart-details">
          <div key={item.id} className="shopping-cart-product">
            <img
              className="shopping-cart-product-img"
              src={item.img} alt={item.title}
            />
            <h2 className="shopping-cart-product-title">{item.title || item.proTitle}</h2>
          </div>
        </section>
    ))}
  </div>
  <div className="review-bag-container">
    <div className="button-container">
      <Link to={cart.length <= 0 ? "/" : "/shop/bag"} className="shopping-cart-product-button" onClick={closeCart}>{cart.length <= 0 ? "Start buying" : "Review bag"}</Link>
    </div>
  <button onClick={clearCart} className="button-clear">Clear cart</button>
  </div>
</header>
</section>


  );
};
