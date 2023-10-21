import { createContext, useContext, useState } from "react";

const context = createContext();
export const useShoppingCartContext = () => useContext(context);

export const ShoppingCartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState(0);

  const addToCart = () => {
    setProductsInCart(productsInCart + 1);
  }

  return (
    <context.Provider value={{
      productsInCart,
      setProductsInCart,
      addToCart
    }}>
      {children}
    </context.Provider>
  );
};
