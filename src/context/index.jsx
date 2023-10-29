import { createContext, useContext, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const context = createContext();
export const useGlobalContext = () => useContext(context);

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

const discountedPrice = (price, discountPercentage) => {
  let discount = price * (discountPercentage/100);
  return (price - discount).toFixed(2);
}

export const GlobalContextProvider = ({ children }) => {
  // Shopping cart - Cart count
  const [cartCount, setCartCount] = useState(0);
  // Shopping cart - Cart products
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping cart - Notification
  const [openNotification, setOpenNotification] = useState(false);
  // Product detail - Modal
  const [openModal, setOpenModal] = useState(false);
  // Product detail - Show product
  const [showProduct, setShowProduct] = useState({});

  const showNotification = () => {
    setOpenNotification(true);
    setTimeout(() => {
      setOpenNotification(false);
    }, 3000);
  }
  const toggleModal = () => setOpenModal(!openModal);

  const addToCart = (productData) => {
    setCartCount(cartCount + 1);
    setCartProducts([...cartProducts, productData]);
    console.log(cartProducts);
    showNotification();
  }

  return (
    <context.Provider value={{
      productsInCart: cartCount,
      addToCart,
      starRating,
      discountedPrice,
      openNotification,
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
