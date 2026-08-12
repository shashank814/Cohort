import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../apis/ProductsApi";
import { useEffect } from "react";

export const useProductApi = () => {

  const [filteredProducts, setFilteredProducts] = useState(null)

  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });

  let filterproducts = (searchParams) => {
    let filterData = data.filter((val) => val.title.toLowerCase().includes(searchParams.toLowerCase()));
    
    if(filteredProducts) {
        setFilteredProducts(filterData)
    }

    console.log(filterData)
  }

  useEffect(() => {
    setFilteredProducts(data)
  }, [data])

  return {
    isPending,
    data,
    error,
    filterproducts,
    filteredProducts
  }
};
