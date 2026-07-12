import React, { useContext } from "react";
import { MyCart } from "../context/ProductContext";

const Cart = () => {

  let {cartItems} = useContext(MyCart);

const totalPrice = cartItems.reduce(
(acc, item) => acc + item.price,
0
);

return ( <div className="min-h-screen bg-gray-100 p-5">

  {/* Heading */}
  <h1 className="text-3xl font-bold mb-6 text-center">
    🛒 Your Cart
  </h1>

  {/* Empty Cart */}
  {cartItems.length === 0 ? (
    <div className="text-center text-gray-500 text-lg">
      Your cart is empty 😔
    </div>
  ) : (

    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-gray-800">

      {/* Cart Items */}
      <div className="md:col-span-2 flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow flex gap-4 items-center"
          >

            {/* Image */}
            <div className="w-24 h-24 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 ">
              <h2 className="font-semibold line-clamp-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 capitalize">
                {item.category}
              </p>

              <p className="text-green-600 font-bold mt-1">
                ${item.price}
              </p>
            </div>

            {/* Quantity */}
            <div className="text-sm text-gray-600">
              Qty: 1
            </div>

          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white p-5 rounded-xl shadow h-fit">
        <h2 className="text-xl text-black font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between text-black mb-2">
          <span>Total Items:</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="flex justify-between text-black mb-4">
          <span>Total Price:</span>
          <span className="font-bold text-green-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>

    </div>
  )}
</div>

);
};

export default Cart;
