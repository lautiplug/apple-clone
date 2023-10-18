import { Link } from "react-router-dom";
import "./Navbar.css";
import appleLogo from "../../assets/logotipo-de-apple.png";
import { Cart } from "../Shopping/Cart";
import { HeaderCartFunctions } from "../../Services/HeaderCartFunctions";
import { useCartContext } from "../../Context/CartContext";

export const Navbar = () => {

  const {mobileView, menuOpen, cartOpen, toggleCart, toggleMenuOrCart, setCartOpen} = HeaderCartFunctions()

  const {quantity} = useCartContext()

  return (
    <header className="header">
      <div className="icons-flex-mobile">
        <Link to={"/"}>
        <img
          className="icon-mobile icon-tabler-brand-apple"
          src={appleLogo}
          alt="Apple logo"
        />
        </Link>
        <section className="side-right-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-mobile icons-flex-mobile icon-tabler icon-tabler-search"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <svg
            onClick={toggleCart}
            className="icon-mobile icons-flex-mobile icon-tabler icon-tabler-shopping-bag"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          </svg>     
          <div className="circle desktop" onClick={toggleCart}>{quantity}</div>
          <Cart
            toggleCart={toggleCart}
            cartOpen={cartOpen}
            closeCart={() => setCartOpen(false)}
          />
          <div
            className={menuOpen || cartOpen ? "change" : "container"}
            onClick={toggleMenuOrCart}
          >
            <div className="bar1"></div>
            <div className="invis"></div>
            <div className="bar3"></div>
          </div>
        </section>
      </div>
      <nav className="nav">
        <img
          className="icon icon-tabler-brand-apple"
          src={appleLogo}
          alt="Apple logo"
        />
        <ul className={mobileView ? "nav__ul--show" : "nav__ul"}>
          <li to={"/"} className="nav__li">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/shop/iphone"}>iPhone</Link>
            <Link to={"/shop/ipad"}>iPad</Link>
            <Link to={"/shop/mac"}>Macbook</Link>
            <Link>Watch</Link>
            <Link>Accessories</Link>
            <Link target="_blank" to={"https://lautiplug.netlify.app"}>How I've created this</Link>
            <Link target="_blank" to={"https://github.com/lautiplug"}>Github</Link>
            <Link>Contact</Link>
          </li>
        </ul>
        <section className="side-right-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <svg
            onClick={toggleCart}
            className="icon icon-tabler icon-tabler-shopping-bag"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          </svg>
          <div className="circle mobile" onClick={toggleCart}>{quantity}</div>
          <Cart
            toggleCart={toggleCart}
            cartOpen={cartOpen}
            closeCart={() => setCartOpen(false)}
          />
        </section>
      </nav>
    </header>
  );
};
