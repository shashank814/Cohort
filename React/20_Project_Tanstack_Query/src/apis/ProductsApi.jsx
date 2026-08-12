import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async () => {
    try {
      let res = await axiosInstance.get("https://dummyjson.com/products");
      return res.data.products
    } catch (error) {
      console.log("error in products api", error);
    } 
  };