import { useGlobalContext } from "../../context";
import { BsCart2 } from "react-icons/bs";

function Notification() {
  const { openNotification } = useGlobalContext();

  return (
    <div
      class={`flex items-center justify-center bg-green-400/80 hover:bg-green-500 hover:shadow-lg transition duration-150 ease-linear backdrop-blur-xl z-20 max-w-md fixed right-0 bottom-0 rounded-lg p-4 m-4 shadow ${
        openNotification ? "opacity-100" : "opacity-0"
      }`}
    >
      <span class="text-xl text-black font-medium">Product added to cart!</span>
      <BsCart2 className="w-5 h-5 text-black ml-2" />
    </div>
  );
}

export { Notification };
