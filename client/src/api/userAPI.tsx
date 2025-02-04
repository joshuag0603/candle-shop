import { UserLogin } from "../interface/UserLogin";

const retrieveUserData = async () => {
    try {
        const response = await fetch('/api/userData', {
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


const displayUserData = async (body: UserLogin) => {
    try {
        const response = await fetch('/api/userData', {
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

export { retrieveUserData, displayUserData};