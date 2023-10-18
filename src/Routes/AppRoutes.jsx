import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Hero } from "../Components/Index-Hero/Hero";
import { IPhone } from "../Components/Products/iPhone/IPhone";
import { CartProvider } from "../Context/CartContext";
import { IphoneBuyDetail } from "../Components/Products/iPhone/IphoneBuyDetail";
import { CartDetail } from "../Components/Shopping/Cart/CartDetail";
import { Mac } from "../Components/Products/Mac/Mac";
import { MacBuyDetail } from "../Components/Products/Mac/MacBuyDetail";
import { Ipad } from "../Components/Products/iPad/Ipad";

export const AppRoutes = () => {
  return (
    <CartProvider value={"ll"}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/shop/iphone" element={<IPhone />} />
        <Route exact path="/shop/ipad" element={<Ipad />} />
        <Route exact path="/shop/iphone/:id" element={<IphoneBuyDetail/>}/>
        <Route exact path="/shop/mac" element={<Mac />} />
        <Route exact path="/shop/macbook/:id" element={<MacBuyDetail/>}/>
        <Route exact path="/shop/bag" element={<CartDetail/>}/>
        <Route />
      </Routes>
    </CartProvider>
  );
};
