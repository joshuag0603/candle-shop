import { cartItem } from "../interface/cartItem";

const retrieveCartItems = async () => {
    try {
        const response = await fetch('/api/cartItem', {
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


const displayCartItems = async (body: cartItem) => {
    try {
        const response = await fetch('/api/cartItem', {
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
        console.log('Error from Tip Creation: ', err);
        return Promise.reject ('Could not create add cart items');
    }
}

export { retrieveCartItems, displayCartItems};