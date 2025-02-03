import sequelize from "../config/connection.js";
import { CartFactory } from "./Cart.js";
import { ProductFactory } from "./Products.js";
import { UserFactory } from "./Users2.js";

const Cart = CartFactory(sequelize);
const Product = ProductFactory(sequelize);
const User = UserFactory(sequelize);

User.hasMany(Cart, {
    onDelete: 'CASCADE',
    as: 'carts'
});

Cart.hasMany(Product, {
    onDelete: 'CASCADE',
    as: 'products'
});

Cart.belongsTo(User, {
    onDelete: 'CASCADE',
});

Product.belongsTo(Cart, {
    onDelete: 'CASCADE',
});

export {Cart, Product, User};
