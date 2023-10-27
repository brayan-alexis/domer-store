import { useProductDetailContext } from "../../context";
import { useShoppingCartContext } from "../../context";
import { BsCart2 } from "react-icons/bs";

const discountedPrice = (price, discountPercentage) => {
  let discount = price * (discountPercentage/100);
  return (price - discount).toFixed(2);
}

export const Card = ({ category, images, title, rating, price, discountPercentage, description, stock, brand }) => {
  const { setShowProduct, toggleModal } = useProductDetailContext();
  const { addToCart, starRating } = useShoppingCartContext();

  const handleShowProduct = (productDetail) => {
    setShowProduct(productDetail);
    toggleModal();
  }
  
  return (
    <div className="card bg-white cursor-pointer w-56 h-72 rounded-lg shadow-md hover:shadow-lg"
      onClick={() => handleShowProduct({ category, images, title, rating, price, discountPercentage, description, stock, brand })}
    >
      <figure className="card__image relative mb-2 w-full h-4/6">
        <span className="absolute top-0 left-0 bg-white/80 rounded-lg text-xs m-2 px-2 py-0.5 shadow-sm hover:bg-white">
          {category}
        </span>
        <img className="w-auto h-full mx-auto my-auto object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-7 h-7 rounded-lg m-2 p-1 shadow-sm hover:bg-green-500 hover:fill-white"
          onClick={(e) => { e.stopPropagation(); addToCart(); }}
        >
          <BsCart2 className="w-5 h-5" onClick={ addToCart } />
        </button>
      </figure>

      <div className="flex items-center mx-3">
        {starRating(rating)}
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {rating.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-col mx-3 m-2">
        <span className="text-base font-light truncate">{title}</span>
        <div className="price-container flex items-baseline">
          <span className="text-lg font-medium mr-2">
            ${discountedPrice(price, discountPercentage)}
          </span>
          <span className="text-sm font-light line-through text-gray-400 mr-2">
            ${price}
          </span>
          <span className="text-sm font-semibold text-red-500">
            {discountPercentage}% off
          </span>
        </div>
      </div>
    </div>
  );
};
