import { useProductDetailContext } from "../../context";
import { BsCart2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const discountedPrice = (price, discountPercentage) => {
  let discount = price * (discountPercentage/100);
  return (price - discount).toFixed(2);
}

const starRating = (rating) => {
  let stars = [];
  
  for (let i = 0; i < 5; i++) {
    if (rating >= 0.95) {
      stars.push(<BsStarFill key={i} className="w-4 h-4 text-yellow-300" />);
    } else if (rating >= 0.5) {
      stars.push(<BsStarHalf key={i}  className="w-4 h-4 text-yellow-300" />);
    } else {
      stars.push(<BsStar key={i}  className="w-4 h-4 text-yellow-300" />);
    }
    rating--;
  }
  return stars;
}

export const ProductDetail = () => {
  const { setOpenModal, showProduct } = useProductDetailContext();

  const onCancel = () => { setOpenModal(false) };

  return (
    <div className='flex flex-row fixed bg-white rounded-lg w-[988px] h-[calc(100vh-140px)] max-h-[80vh] p-10 overflow-hidden shadow-lg'>
      <div 
        className='absolute top-0 right-0 flex justify-center items-center hover:bg-gray-200 rounded-full m-4 p-1 font-bold cursor-pointer'
        onClick={onCancel}
      >
        <IoClose className='h-6 w-6'></IoClose>
      </div>

      <div className='flex flex-col w-1/6 h-full px-4'>
        {showProduct.images.map((image, index) => (
          <figure className='flex justify-center items-center relative mb-2 w-full h-1/5'>
            <img 
              className='w-auto h-full object-cover rounded-lg' 
              src={image} 
              alt={showProduct.title}
            />
          </figure>
        ))}
      </div>

      <figure className='flex flex-col justify-center items-center relative mb-2 w-3/5 h-5/6'>
        <img 
          className='w-auto h-full object-cover rounded-lg' 
          src={showProduct.images[0]} 
          alt={showProduct.title}
        />
        <p className='absolute top-0 left-0 bg-white/80 rounded-lg text-xs m-2 px-2 py-0.5 shadow-sm hover:bg-white'>
          {showProduct.category}
        </p>
      </figure> 

      <div className='p-5 w-2/5'>
        <p className='text-2xl font-bold'>
          {showProduct.title}
        </p>
        <div className="flex items-center mt-1">
          {starRating(showProduct.rating)}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {showProduct.rating.toFixed(1)}
          </span>
        </div>
        <div className="price-container flex items-baseline mt-3">
          <span className="text-2xl font-medium mr-2">
            ${discountedPrice(showProduct.price, showProduct.discountPercentage)}
          </span>
          <span className="text-lg font-light line-through text-gray-400 mr-2">
            ${showProduct.price}
          </span>
          <span className="text-lg font-semibold text-red-500">
            {showProduct.discountPercentage}% off
          </span>
        </div>

        {console.log(showProduct) }
        
        <p className='mt-3 text-base font-semibold'>
          About this item:
        </p>
        <p className='text-base font-light'>
          {showProduct.description}
        </p>
        <div class="relative inline-block my-2 py-1 text-xs">
          <div class="absolute inset-0 text-blue-100 dark:text-blue-200 flex">
            <svg height="100%" viewBox="0 0 50 100">
              <path
                d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                fill="currentColor" />
            </svg>
            <div class="flex-grow h-full -ml-px bg-blue-100 dark:bg-blue-200 rounded-md rounded-l-none"></div>
          </div>
          <span className="relative text-blue-800 dark:text-blue-800 uppercase font-semibold pr-px">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{showProduct.brand}<span>&nbsp;</span>
          </span>
        </div>

        <hr className='my-4' />

        <p className='mt-2 text-red-500'>
          {showProduct.stock} left in stock
        </p>

        <div className='flex flex-row mt-5'>
          <button className='flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>
            Add to Cart <BsCart2 className='ml-2' />
          </button>
          <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-5'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}