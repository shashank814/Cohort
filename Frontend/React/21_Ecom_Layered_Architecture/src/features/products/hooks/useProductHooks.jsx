import { useQuery } from "@tanstack/react-query"
import { getAllProductApi, getProductsByCategory, getProductsCategories } from "../api/productApi"
import { useEffect, useState } from "react"
import { data } from "react-router"

export const useAllProduct = () => {
    const [search, setSearch] = useState(null)
    const [debounceSearch, setDebounceSearch] = useState(null)

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceSearch(search)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [search])

    let { data, isPending, errors } = useQuery({
        queryKey: ["products", debounceSearch],
        queryFn: () => getAllProductApi(debounceSearch),
    } )

    // console.log("products data ",data);
    return {
        data,
        isPending,
        errors,
        search,
        setSearch
    }
}

export const useAllCategories = () => {
    return useQuery({
        queryKey: ["AllCategories"],
        queryFn: getProductsCategories,
    })
}

export const useProductByCategory = () => {

    const [category, setCategory] = useState(null)
    
    let { data } = useQuery({
        queryKey: ["productsByCategory", category],
        queryFn: () => getProductsByCategory(category),
    })

    return {
        data,
        category,
        setCategory
    }
}

