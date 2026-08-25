import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

function ProductCard({ id, Image, ImageAlt, Name, Price }) {
  const dispatch = useDispatch();
  function AddToCart (){
    dispatch(addToCart({ id, Image, Name, Price }));
    alert("Added to cart successfuly");
  }

  return (
    <div className="group bg-white dark:bg-zinc-800/50 rounded-xl border border-gray-200 dark:border-zinc-700/50 overflow-hidden shadow-sm  transition-all duration-300 flex flex-col hover:shadow-lg">
      {/* صورة المنتج */}
      <div className="h-32 md:h-48 overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <img
          src={Image}
          alt={ImageAlt || Name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="p-2 md:p-4 flex flex-col justify-between flex-1">
        <p className="text-gray-900 dark:text-white md:font-semibold text-base mb-3 line-clamp-1 group-hover:text-blue-500 dark:group-hover:text-red-400">
          {Name}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-gray-900 dark:text-white font-bold md:text-lg">
            ${Price}
          </span>
          <button
            onClick={AddToCart}
            className="px-2 md:px-4 py-2  dark:bg-zinc-800/50 hover:bg-blue-600 dark:hover:bg-red-500 hover:text-white text-blue-500 dark:text-red-400 rounded-lg text-xs font-bold shadow-md transition-colors active:scale-95 border border-blue-600 dark:border-red-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
