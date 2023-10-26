import { createContext, useContext, useState } from "react";

const context = createContext();
export const useShoppingCartContext = () => useContext(context);
export const useProductDetailContext = () => useContext(context);

export const ShoppingCartProvider = ({ children }) => {
  // Products in cart counter
  const [productsInCart, setProductsInCart] = useState(0);
  // Product detail modal
  const [openModal, setOpenModal] = useState(false);
  const [showProduct, setShowProduct] = useState({});

  const addToCart = () => {
    setProductsInCart(productsInCart + 1);
  }

  return (
    <context.Provider value={{
      productsInCart,
      setProductsInCart,
      addToCart,
      openModal,
      setOpenModal,
      showProduct,
      setShowProduct
    }}>
      {children}
    </context.Provider>
  );
};
