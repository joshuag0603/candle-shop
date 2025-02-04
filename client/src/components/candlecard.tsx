import type { productInfo } from "../interface/ProductData";

interface CandleCardProps {
    candle: productInfo | null;
};

const CandleCard: React.FC<CandleCardProps> = ({ candle}) => {
    if (!candle) { 
        return <p>No candle data available.</p>
    }
    return (
        <>
            {
                <div className="card" key={candle.id}>
                    <img id="image" src={candle.image} alt="Candle"></img>
                    <h4 className="card-header">
                    {candle.productName}</h4>
                    <div className="card-body">
                        <p>{candle.description}</p>
                        <p>{candle.price}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default CandleCard;