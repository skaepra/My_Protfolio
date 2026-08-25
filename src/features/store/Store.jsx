import Products from "../data/Products";
import ProductCard from "./ProductCard";

const StoreScreen = () => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 transition-colors duration-200 min-h-screen p-4 sm:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight ">
            Latest Products & <span className="text-blue-500 sm:text-[#325bb3] dark:text-red-500">Store</span>
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base">
            Discover our premium selected products built with quality and modern
            design in mind.
          </p>
        </div>
        {/* <h1 className="text-[#df3939] text-2xl font-bold mb-6">My Store</h1> */}

        {/* شبكة المنتجات responsive */}
        <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              Image={product.Image}
              Name={product.Name}
              Price={product.Price}
              ImageAlt={product.ImageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreScreen;
