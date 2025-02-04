import { useState, useEffect } from "react";
import { retrieveProduct } from "../api/productAPI.js"
import type { productInfo } from "../interface/ProductData.js";
import CandleCards from "../components/candlecards.js";

const ProductsPage = () => {

    const [products, setProducts] = useState<productInfo[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        const data = await retrieveProduct();

        setProducts(data);
    };

    return (
        <>
        <CandleCards candles={products} />
        </>
    );
};

export default ProductsPage;