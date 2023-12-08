// import PropTypes from "prop-types";
import { useGlobalContext } from "../../context";
import { getCurrentDateTime } from "../../utils";

function OrdersCard({
  totalPrice,
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
      <div className={"flex justify-between items-center mb-3 border border-green-500"}>
        <p>
          {/* <span>Date: {new Date().toLocaleDateString()}</span> */}
          <span>Date: {getCurrentDateTime()}</span>
          <span className="font-semibold"> -  Total: {quantity}</span>
          <span className="font-semibold">{totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export { OrdersCard }