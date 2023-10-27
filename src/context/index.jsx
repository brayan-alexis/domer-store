import { createContext, useContext, useState } from "react";

const context = createContext();
export const useShoppingCartContext = () => useContext(context);
export const useProductDetailContext = () => useContext(context);

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart - add to cart
  const [productsInCart, setProductsInCart] = useState(0);
  // Product detail - toggle modal
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);
  // Product detail - show product
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
