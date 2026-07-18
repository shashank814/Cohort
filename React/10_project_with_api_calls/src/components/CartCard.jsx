import React from "react";
import { Trash2 } from "lucide-react";

const CartCard = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain bg-gray-100 p-2 rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>

        <p className="text-blue-600 font-bold mt-1">
          ₹{product.price}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => onDecrease(product.id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>

          <span className="font-medium">{product.quantity}</span>

          <button
            onClick={() => onIncrease(product.id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartCard;