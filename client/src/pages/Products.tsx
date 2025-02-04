import { useState, useEffect } from "react";
import { retrieveProduct } from "../api/productAPI"
import type { productInfo } from "../interface/ProductData";
import CandleCards from "../components/candlecards";

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