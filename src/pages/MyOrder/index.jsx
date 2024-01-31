import { Link } from "react-router-dom";
import { useGlobalContext } from '../../context';
import { OrderCard } from '../../components/OrderCard';
import { FaChevronLeft } from "react-icons/fa";

function MyOrder() {
  const { order } = useGlobalContext();
  const currentPath = window.location.pathname;
  const orderId = currentPath.split("/").slice(-1)[0];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <FaChevronLeft className="w-6 h-6 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      
      <div className="flex flex-col">
        {order?.slice(-1)[0]?.products?.map((product) => (
          <OrderCard key={product.id} {...product} editable={false} />
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <div className="flex justify-between items-center">
          <p className="font-bold">
            <span className="font-semibold">Total:</span> ${order?.slice(-1)[0]?.totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export { MyOrder }