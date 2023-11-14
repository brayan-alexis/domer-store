import React from 'react';
import { useGlobalContext } from '../../context';
import { Layout } from '../../components/Layout';
import { CardShoppingCart } from '../../components/CardShoppingCart';

function MyOrder() {
  const { order } = useGlobalContext();

  return (
    <div className="flex flex-col items-center">
      My Order
      <div className="flex flex-col">
        {order?.slice(-1)[0]?.products?.map((product) => (
          <CardShoppingCart key={product.id} {...product} editable={false} />
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