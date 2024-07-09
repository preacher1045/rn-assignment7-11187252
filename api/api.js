import axios, { Axios } from "axios";

export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data
    } catch (error) {
        console.log(error);
        return []
    }
}