import { createContext, useContext, useState } from "react";

const ShoppingContext = createContext(null);

export const ShoppingProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId)
    );
  };

  return (
    <ShoppingContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(ShoppingContext);
};