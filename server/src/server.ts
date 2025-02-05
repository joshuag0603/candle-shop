import express from 'express';
// import path from 'node:path';
import sequelize from './config/connection.js';
// import { fileURLToPath } from 'node:url';
import routes from "./routers/index.js"
//@ts-ignore
import {Cart, Product, User } from './models/index.js'
// const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);



const PORT = process.env.PORT || 3001;







sequelize.sync({force: false}).then(()=>{app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

});