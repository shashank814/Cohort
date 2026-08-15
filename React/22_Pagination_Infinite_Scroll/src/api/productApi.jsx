import axios from "axios";

export const getAllProducts = async (limit, page = 1) => {
    try {
        let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
        return res.data
    } catch (error) {
        console.log("api error", error);
    }
}

export const getAllProductsForInfiniteScroll = async (limit, pageParams) => {
    try {
        console.log("page params data", pageParams);
        let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`)
        return res.data
    } catch (error) {
        console.log("api error", error);
    }
}