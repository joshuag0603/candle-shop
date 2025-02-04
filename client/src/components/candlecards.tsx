import React from "react";

import type { productInfo } from "../interface/ProductData";

interface CandleCardProps {
    candles: productInfo[] | null;
};

const CandleCards: React.FC<CandleCardProps> = ({ candles }) => {
    return (
        <>
            {candles && candles.map((candle) => (
                <div className="card" key={candle.id}>
                    <img id="image" src={candle.image} alt="Candle"></img>
                    <h4 className="card-header">
                    {candle.productName}</h4>
                    <div className="card-body">
                        <p>{candle.description}</p>
                        <p>{candle.price}</p>
                        <button className="btn" type="submit"> Add To Cart </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CandleCards;