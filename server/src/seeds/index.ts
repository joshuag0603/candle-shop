import { seedDatabase } from "./seed.js";

import sequelize from "../config/connection.js";

const seedAll = async (): Promise<void> => {
    try {
        // console.log('im being hit ')
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

        await seedDatabase();
        // console.log('\n----- PRODUCTS AND USERS SEEDED -----\n');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
      }
};

seedAll();