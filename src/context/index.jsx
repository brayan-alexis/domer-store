import { createContext, useContext, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const context = createContext();
export const useGlobalContext = () => useContext(context);

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

  const starRating = (rating) => {
    let stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (rating >= 0.95) {
        stars.push(<BsStarFill key={i} className="w-4 h-4 text-yellow-300" />);
      } else if (rating >= 0.5) {
        stars.push(<BsStarHalf key={i}  className="w-4 h-4 text-yellow-300" />);
      } else {
        stars.push(<BsStar key={i}  className="w-4 h-4 text-yellow-300" />);
      }
      rating--;
    }
    return stars;
  }

  return (
    <context.Provider value={{
      productsInCart,
      addToCart,
      starRating,
      openModal,
      setOpenModal,
      toggleModal,
      showProduct,
      setShowProduct
    }}>
      {children}
    </context.Provider>
  );
};
