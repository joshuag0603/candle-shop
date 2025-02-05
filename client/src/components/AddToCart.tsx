import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

interface AddToCartProps {
  productName:string;                
  onAdded?: (message: string) => void; 
}

const AddToCart: React.FC<AddToCartProps> = ({ productName, onAdded }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  //const userId =1;

  const handleAdd = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/carts/cartItems", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName }),
      });
      if (!response.ok) {
        console.error('Failed to add product to cart');
        if (onAdded) {
          onAdded('Error adding product to cart');
        }
      } else {
        console.log('Product added to cart successfully');
        if (onAdded) {
          onAdded('Product added to cart successfully');
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (onAdded) {
        onAdded('Error adding product to cart');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
      <Input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ width: '80px' }}
      />
      <Button primary onClick={handleAdd} loading={loading}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
