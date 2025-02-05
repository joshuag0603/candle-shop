import { cartItem } from "../interface/cartItem";
import { productInfo } from "../interface/ProductData";

const retrieveCartItems = async () => {
    try {
        const response = await fetch('/api/carts/cartItems', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid user API response, check network tab!');
        }

        return data;
    } catch (err) {
        console.log("Error from data retrieval:", err);
        return [];
    }
}

const productCartItem = async (body: productInfo ) => {
    try {
        const response = await fetch('/api/carts/cartItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    ) 
    const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }
        return data;

    } catch (err) {
        console.log('Error from Cart addition: ', err);
        return Promise.reject ('Could not create add cart items');
    }
};

const addCartItems = async (body: cartItem) => {
    try {
        const response = await fetch('/api/carts/cartItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    ) 
    const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }
        return data;

    } catch (err) {
        console.log('Error from Cart addition: ', err);
        return Promise.reject ('Could not create add cart items');
    }
}

const deleteCartItem = async (cartItemId: number | string): Promise<boolean> => {
    try {
      const response = await fetch(`/api/carts/cartItems/${cartItemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Invalid API response, check network tab!');
      }
      return true;
    } catch (err) {
      console.log('Error deleting cart item:', err);
      return Promise.reject('Could not delete cart item');
    }
  };


export { retrieveCartItems, addCartItems, productCartItem, deleteCartItem};