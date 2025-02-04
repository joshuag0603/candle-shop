import {productData} from '../interface/ProductData';

const retrieveProduct = async () => {
    try {
        const response = await fetch ('api/products',{
            headers: {
                'content-Type': 'application/json',
            }
        });
        const data =await response.json();

        if (!response.ok) {
            throw new Error ('Invalid Product API response, check network tab!');

        }

        return data;
    } catch (err) {
        console.log('Error from data retrieval:',err);
        return [];
    }

}

const addProduct = async (body: productData) => {
    try {
      const response = await fetch(
        '/api/product/', {
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
      console.log('Error from Product Creation: ', err);
      return Promise.reject('Could not create feedback');
    }
  }
  
  export { retrieveProduct, addProduct };
  