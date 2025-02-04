import { useState, useEffect } from "react";
import type { productInfo } from "../interface/ProductData.js";
import CandleCard from "../components/candlecard.js";
import { retrieveCartItems } from "../api/cartAPI.js";

const CandleCartItem = () => {
    const [products, setProducts] = useState<productInfo | null>(null);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const data = await retrieveCartItems();

            if (Array.isArray(data) && data.length > 0) {
                setProducts(data[0]);
            } else {
                setProducts(null);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            setProducts(null);
        }
    };

    return (
        <>
            {products ? <CandleCard candle={products} /> : <p>Loading...</p>}
        </>
    ); 
};

export default CandleCartItem;