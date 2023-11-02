import React, { useState } from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../context";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function CardShoppingCart({ id, title, price, category, images, discountPercentage, quantity }) {
  CardShoppingCart.propTypes = {
		title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    quantity: PropTypes.number.isRequired,
	};

  const { cartProductQuantity, productTotalPrice, decrementQuantity, incrementQuantity } = useGlobalContext();

  return (
    <div className="my-2 mr-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-16 h-16 object-cover rounded"
            src={images[0]}
            alt={title}
          />
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-400">{category}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <p className="font-semibold">
            ${productTotalPrice(quantity, price, discountPercentage)}
          </p>
          <div className="flex gap-1 items-center">
            <button 
              className="text-sm p-0.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full"
              onClick={() => decrementQuantity({ id, title, price, category, images, discountPercentage, quantity })}
            >
              <AiOutlineMinus />
            </button>
            <p className="text-sm">{quantity}</p>
            <button 
              className="text-sm p-0.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full"
              onClick={() => incrementQuantity({ id, title, price, category, images, discountPercentage, quantity })}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export { CardShoppingCart }