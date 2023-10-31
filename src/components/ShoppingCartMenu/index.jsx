import { useGlobalContext } from "../../context";
import { CardShoppingCart } from "../CardShoppingCart";
import { IoClose } from "react-icons/io5";

function ShoppingCartMenu() {
  const { cartProducts, showCartMenu, openCartMenu } = useGlobalContext();

  return (
    <aside
      className={`bg-white w-[400px] mt-16 px-6 py-4 shadow-md fixed top-0 right-0 rounded ${
        openCartMenu ? "visible" : "invisible"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Shopping Cart</h1>
        <IoClose
          className="absolute right-0 mr-6 w-6 h-6 cursor-pointer "
          onClick={showCartMenu}
        />
      </div>

      {cartProducts?.map((product) => (
        <CardShoppingCart key={product.id} {...product} />
      ))}

      <div className="my-order-content">
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex justify-between items-center">
            <p className="font-semibold">
              <span>Total</span>
            </p>
            <p className="font-bold">$0.00</p>
          </div>
        </div>

        <button className="bg-green-600 text-white font-bold w-full mt-4 p-2 rounded">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export { ShoppingCartMenu }; 