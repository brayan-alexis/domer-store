import { createContext, useContext, useState, useEffect } from "react";
import { dummyjsonURL } from "../api/index";
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
  // Order -
  const [order, setOrder] = useState([]);
  // Products - Array of products fetched from API
  const [products, setProducts] = useState(null);
  // Product detail - Show product detail
  const [showProduct, setShowProduct] = useState({});
  // Search - Search products by title
  const [searchByTitle, setSearchByTitle] = useState("");
  // Products - Array of products filtered by title
  const [filteredProducts, setFilteredProducts] = useState(null);
  // Shopping cart - Quantity of product added to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping cart - Notification when product is added to cart
  const [cartCount, setCartCount] = useState(0);
  // Shopping cart - Array of products added to cart
  const [openNotification, setOpenNotification] = useState(false);
  // Shopping cart - Open/close shopping cart menu
  const [openCartMenu, setOpenCartMenu] = useState(false);
  // Product detail - Open/close product detail modal
  const [openModal, setOpenModal] = useState(false);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${dummyjsonURL}/products?limit=100`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }
  useEffect(() => {
    if (searchByTitle) setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
  }, [products, searchByTitle]);

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
  const toggleCartMenu = () => setOpenCartMenu(!openCartMenu);
  const toggleModal = () => setOpenModal(!openModal);
  const showNotification = () => {
    setOpenNotification(true);
    setTimeout(() => {
      setOpenNotification(false);
    }, 3000);
  }

  const decrementQuantity = (productData) => {
    const productCart = cartProducts.find(p => p.id === productData.id);
    console.log(productCart)

    if (productCart.quantity > 1) {
      productCart.quantity -= 1;
      setCartCount(cartCount - 1);
    } else {
      handleDeleteProduct(productData.id, productData.quantity);
    }
  }
  const incrementQuantity = (productData) => {
    const productCart = cartProducts.find(p => p.id === productData.id);
    console.log(productCart)
    productCart.quantity += 1;
    setCartCount(cartCount + 1);
  }
  const handleDeleteProduct = (id, quantity) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filteredProducts);
    setCartCount(cartCount - quantity);
  }

  return (
    <context.Provider value={{
      starRating,
      discountedPrice,
      productTotalPrice,

      order,
      setOrder,
      products,
      setProducts,
      showProduct,
      setShowProduct,
      searchByTitle,
      setSearchByTitle,
      filteredProducts,
      setFilteredProducts,
      cartProducts,
      setCartProducts,
      cartCount,
      setCartCount,
      openNotification,
      openCartMenu,
      openModal,

      addToCart,
      toggleCartMenu,
      toggleModal,
      decrementQuantity,
      incrementQuantity,
      handleDeleteProduct
    }}>
      {children}
    </context.Provider>
  );
};
