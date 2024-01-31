// import PropTypes from "prop-types";
import { useGlobalContext } from "../../context";
import { getCurrentDateTime } from "../../utils";
import { FaChevronRight } from "react-icons/fa";

function OrdersCard({
  totalPrice,
  articles,
  id,
  title,
  price,
  category,
  images,
  discountPercentage,
  quantity,
}) {
  OrdersCard.propTypes = {
    // title: PropTypes.string.isRequired,
    // category: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // images: PropTypes.arrayOf(PropTypes.string).isRequired,
    // quantity: PropTypes.number.isRequired,
  };

  const {
    productTotalPrice,
  } = useGlobalContext();

  return (
    <div className="my-2 mr-2">
      <div className={"flex justify-between items-center mb-3 border rounded-lg border-green-500 p-4 w-96"}>
        <p className="flex justify-between w-full">
          <div className="flex flex-col">
            <span>Date: {getCurrentDateTime()}</span>
            <span>{articles} articles</span>
          </div>
          <span className="font-semibold">${totalPrice}</span>
          <FaChevronRight className="w-6 h-6 cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

export { OrdersCard }