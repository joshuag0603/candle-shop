import { User, Product } from '../models/index.js';

import productSeedData from './productSeedData.json';
import userSeedData from './userSeedData.json';

export const seedDatabase = async () => {
    await Product.bulkCreate(productSeedData, {
        validate:true,
    });

    await User.bulkCreate(userSeedData, {
        validate:true,
    });

    console.log('\n----- PRODUCTS AND USERS SEEDED -----\n');
}
