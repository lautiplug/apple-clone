import React, { useContext, useEffect, useState } from "react"

const CartContext = React.createContext('')

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children, id }) => {

  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(cartLS);

  // add item to cart //

  const addProduct = (item) => {
    if (isInCart(item.id, item.id_model)) { // verifica por id y id_model
      setCart(cart.map((product) => {
        if (product.id === item.id && product.id_model === item.id_model) { // verifica por id y id_model
          if (product.quantity < item.stock) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        } else {
          return product;
        }
      }));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // update cart quantity
  const updateCart = (productId, newQuantity) => {
    // Encuentra el producto en el carrito y actualiza la cantidad
    const updatedCart = cart.map((item) =>
      item.id_model === productId ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart); // Actualiza el estado del carrito
  };

  // Show quantity in cart //

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  // Decrement quantity of items //

  const decrementItem = (item) => {
    if (isInCart(item.id)) {
      setCart(cart.map((product) => {
        return product.id === item.id && item.quantity > 1 ? { ...product, quantity: product.quantity - 1 }
          : product
      }));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // clear cart //

  const clearCart = () => {
    setCart([])
  }

  // check if product is already in cart //

  const isInCart = (id, id_model) => {
    return cart.some((product) => product.id === id && product.id_model === id_model)
  }
  // remove product from cart //

  const removeProduct = (id) => {
    const arr = cart.filter((item) => item.id_model !== id);
    setCart(arr);
  }

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      quantity,
      decrementItem,
      updateCart,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}
