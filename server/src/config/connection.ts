import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

let sequelize: Sequelize;

if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME || 'candleshop_db',
      process.env.DB_USER || 'postgres',
      process.env.DB_PW,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        }, 
      },
    );
  }

export default sequelize;