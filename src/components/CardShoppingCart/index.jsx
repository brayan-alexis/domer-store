import PropTypes from "prop-types";
import { useGlobalContext } from "../../context";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

function CardShoppingCart({
  id,
  title,
  price,
  category,
  images,
  discountPercentage,
  quantity,
  editable = true, 
}) {
  CardShoppingCart.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    quantity: PropTypes.number.isRequired,
  };

  const {
    discountedPrice,
    productTotalPrice,
    decrementQuantity,
    incrementQuantity,
    handleDeleteProduct,
  } = useGlobalContext();

  return (
    <div className="my-2 mr-2">
      <div className={`flex justify-between items-center ${editable ? "gap-0" : "gap-10" }`}>
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
        {editable && (
          <p className="font-semibold">
            ${discountedPrice(price, discountPercentage)}
          </p>
        )}

          <div className="flex gap-1 items-center">
            {editable && (
              <button
                className="text-sm p-0.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full"
                onClick={() =>
                  decrementQuantity({
                    id,
                    title,
                    price,
                    category,
                    images,
                    discountPercentage,
                    quantity,
                  })
                }
              >
                <AiOutlineMinus />
              </button>
            )}
            <p className="text-sm">{quantity}</p>
            {!editable && (
              <>
                <p className="text-sm">
                  x ${discountedPrice(price, discountPercentage)}
                </p>
                <p className="text-sm">=</p>
                <p className="font-semibold">
                  ${productTotalPrice(quantity, price, discountPercentage)}
                </p>
              </>
            )}
            {editable && (
              <>
                <button
                  className="text-sm p-0.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full"
                  onClick={() =>
                    incrementQuantity({
                      id,
                      title,
                      price,
                      category,
                      images,
                      discountPercentage,
                      quantity,
                    })
                  }
                >
                  <AiOutlinePlus />
                </button>

                <button onClick={() => handleDeleteProduct(id, quantity)}>
                  <AiFillDelete className="text-gray-400 hover:text-red-500" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export { CardShoppingCart }