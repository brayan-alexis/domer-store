import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function CardShoppingCart({ title, category, price, images }) {
  return (
    <div className="my-4">
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
          <p className="font-semibold">${price}</p>
          <div className="flex gap-1 items-center">
            <button className="text-sm p-0.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full">
              <AiOutlineMinus />
            </button>
            <p className="text-sm">1</p>
            <button className="text-sm p-0.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full">
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  )
}

export { CardShoppingCart }