import express from 'express';
// import path from 'node:path';
import sequelize from './config/connection.js';
// import { fileURLToPath } from 'node:url';
// const __filename = fileURLToPath(import.meta.url);

//@ts-ignore
import {Cart, Product, User } from './models/index.js'
// import routes from "./routers/index.js"
// const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3001;







sequelize.sync({force:true}).then(()=>{app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

});