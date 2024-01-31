import { Link } from "react-router-dom";
import { useGlobalContext } from '../../context';
import { OrdersCard } from '../../components/OrdersCard';

function MyOrders() {
  const { order, cartProducts } = useGlobalContext();

  return (
    <>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>

      <div className="flex flex-col">
        {order?.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              products={cartProducts}
              totalPrice={order.totalPrice}
              articles={order.products.length}
              {...order}
            />
          </Link>
        ))}
        {console.log(order)}
      </div>
    </>
  )
}

export { MyOrders }