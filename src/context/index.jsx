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
};

const discountedPrice = (price, discountPercentage) => {
  let discount = price * (discountPercentage/100);
  return (price - discount).toFixed(2);
};
const productTotalPrice = (quantity, price, discountPercentage) => {
  const total = discountedPrice(price, discountPercentage) * quantity;
  return total.toFixed(2);
};


export const GlobalContextProvider = ({ children }) => {
  // Shopping cart - Quantity of product added to cart
  const [cartCount, setCartCount] = useState(0);
  // Shopping cart - Array of products added to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping cart - Quantity of product added to cart
  // const [cartProductQuantity, setCartProductQuantity] = useState(1);
  // Shopping cart - Notification when product is added to cart
  const [openNotification, setOpenNotification] = useState(false);
  // Shopping cart - Open/close shopping cart menu
  const [openCartMenu, setOpenCartMenu] = useState(false);
  // Product detail - Open/close product detail modal
  const [openModal, setOpenModal] = useState(false);
  // Product detail - Show product detail
  const [showProduct, setShowProduct] = useState({});

  const showNotification = () => {
    setOpenNotification(true);
    setTimeout(() => {
      setOpenNotification(false);
    }, 3000);
  }
  const toggleCartMenu = () => setOpenCartMenu(!openCartMenu);
  const toggleModal = () => setOpenModal(!openModal);

  const addToCart = (productData) => {
    // Check if product already exists in cart
    const productExists = cartProducts.some(p => p.id === productData.id);

    // If product exists, increase quantity by 1. Else, add product to cart, and set quantity to 1.
		if (productExists) {
			const productCart = cartProducts.find(p => p.id === productData.id);
			productCart.quantity += 1; 
		} else {
			productData.quantity = 1; 
			setCartProducts([...cartProducts, productData]);
		}

    // Increase cart count by 1 and show notification
    setCartCount(cartCount + 1);
    showNotification();
  }

  const decrementQuantity = (productData) => {
    const productCart = cartProducts.find(p => p.id === productData.id);
    console.log(productCart)

    if (productCart.quantity > 1) {
      productCart.quantity -= 1;
      setCartCount(cartCount - 1);
    }
  }
  
  const incrementQuantity = (productData) => {
    const productCart = cartProducts.find(p => p.id === productData.id);
    console.log(productCart)
    productCart.quantity += 1;
    setCartCount(cartCount + 1);
  }

  return (
    <context.Provider value={{
      cartCount,
      cartProducts,
      addToCart,
      starRating,
      discountedPrice,
      productTotalPrice,
      decrementQuantity,
      incrementQuantity,
      openNotification,
      openCartMenu,
      openModal,
      toggleCartMenu,
      toggleModal,
      showProduct,
      setShowProduct
    }}>
      {children}
    </context.Provider>
  );
};
