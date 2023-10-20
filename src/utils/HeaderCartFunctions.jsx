import { useState } from "react";

export const HeaderCartFunctions = () => {

    /* -------------- Mobile Navbar -------------- */

    const [mobileView, setMobileView] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
  
    // Function to toggle the menu
    const toggleMenu = () => {
      setMobileView(!mobileView);
      setMenuOpen(!menuOpen);
      // If the menu(animation) is closing, also close the cart
      if (!menuOpen && cartOpen) {
        setCartOpen(false);
      }
    };
  
    // Function to toggle the cart
    const toggleCart = () => {
      setCartOpen(!cartOpen);
      // If the cart is closing, also close the menu
      if (!cartOpen && menuOpen) {
        setMenuOpen(false);
      }
    };
  
    // Function to toggle either the menu or the cart based on their states
    const toggleMenuOrCart = () => {
      // If the cart is open, close it
      if (cartOpen) {
        setCartOpen(false);
      } else {
        // If the cart is closed, open or close the menu
        toggleMenu();
      }
    };

  return {
    mobileView, menuOpen, cartOpen, toggleCart, toggleMenu, toggleMenuOrCart, setCartOpen, setMenuOpen
  }
}