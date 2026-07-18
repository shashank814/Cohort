import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductsCard from "./components/ProductsCard";
import Cart from "./pages/Cart";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems);
  

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="min-h-screen p-2 flex flex-col gap-4">
      <Navbar setIsCartOpen={setIsCartOpen}/>

      {isCartOpen ? (
        <div>
          <Cart cartItems={cartItems}/>
        </div>  
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            return <ProductsCard key={elem.id} product={elem} setCartItems={setCartItems}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
