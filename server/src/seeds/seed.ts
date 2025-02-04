import { User, Product } from '../models/index.js';

import productSeedData from './productSeedData.json' with {type: 'json'};
import userSeedData from './userSeedData.json' with {type: 'json'};

export const seedDatabase = async () => {
    try{
        // console.log("product data:", productSeedData)

        await Product.bulkCreate(productSeedData, {
            validate:true,
        });

        await User.bulkCreate(userSeedData, {
            validate:true,
        });
    
        console.log('\n----- PRODUCTS AND USERS SEEDED -----\n');

    }catch(error){
        console.log(error)
     };
};
