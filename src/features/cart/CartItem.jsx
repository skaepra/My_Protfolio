import { useSelector } from "react-redux";
import { selectCartItems } from "./cartSelectors";

function CartScreen() {
  const cartItems = useSelector(selectCartItems);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-zinc-900 transition-colors duration-200 min-h-screen items-center justify-center flex ">
       The cartItems is empty.
      </div>
    );
  }
  const cartItemsQuntity=cartItems.reduce((sum,item)=>sum+item.quantity,0)

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 transition-colors duration-200 min-h-screen items-center justify-center p-5  mx-auto space-y-4">

      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Shopping Cart ({cartItemsQuntity})
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800/60 rounded-xl border border-gray-200 dark:border-zinc-700/50 shadow-sm transition-colors"
        >
          {/* صورة واسم المنتج */}
          <div className="flex items-center gap-4">
            <img
              src={item.Image}
              alt={item.Name}
              className="w-16 h-16 object-cover rounded-lg border border-gray-100 dark:border-zinc-700"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-base">
                {item.Name}
              </p>
              <p className="text-sm text-gray-500 dark:text-zinc-400">
                ${item.Price} × {item.quantity}
              </p>
            </div>
          </div>

          {/* السعر الإجمالي للمنتج */}
          <div className="text-right">
            <p className="font-bold text-gray-900 dark:text-white text-lg">
              ${item.Price * item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartScreen;