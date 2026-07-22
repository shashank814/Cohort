import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductsCard = ({ product, isInCart }) => {
  let { setCartItems, increaseQuantity, decreaseQuantity } = useContext(MyStore);

  const addCart = () => {
    setCartItems((prev) => [...prev, {...product, quantity: 1}]);
    alert("Product added into cart");
  };
  return (
    <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4">
      {/* Image */}
      <div className="h-52 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Category */}
      <p className="text-xs text-gray-500 mt-3 uppercase">{product.category}</p>

      {/* Title */}
      <h2 className="text-sm font-semibold mt-1 line-clamp-2">
        {product.title}
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">
          {product.rating.rate} ★
        </span>
        <span className="text-xs text-gray-500">
          ({product.rating.count} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="mt-3 flex items-center justify-between gap-5">
        <p className="text-lg font-bold text-gray-800">₹{product.price}</p>

        {isInCart ? (
          <button className="w-full bg-gray-600 flex items-center text-black justify-center gap-5 rounded-xl">
            <span onClick={() => decreaseQuantity(product.id)} className="text-4xl">-</span> <span className="text-4xl">{isInCart.quantity}</span> <span onClick={() => increaseQuantity(product.id)} className="text-4xl">+</span>
          </button>
        ) : (
          <button
            onClick={addCart}
            className="bg-black text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
