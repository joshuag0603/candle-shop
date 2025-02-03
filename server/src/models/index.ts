import sequelize from "../config/connection.js";
import { CartFactory } from "./Cart.js";
import { ProductFactory } from "./Products.js";
import { UserFactory } from "./Users2.js";
import { CartItemFactory } from "./CartItem";

const Cart = CartFactory(sequelize);
const Product = ProductFactory(sequelize);
const User = UserFactory(sequelize);
const CartItem = CartItemFactory(sequelize);

User.hasMany(Cart, {
    onDelete: 'CASCADE',
    as: 'carts'
});

Cart.hasMany(CartItem, {
    onDelete: 'CASCADE',
    as: 'products'
});

CartItem.hasOne(Product, {
    onDelete: 'CASCADE',
    as: 'products'
});

Cart.belongsTo(User, {
    onDelete: 'CASCADE',
});

CartItem.belongsTo(Cart, {
    onDelete: 'CASCADE',
});

Product.belongsTo(Cart, {
    onDelete: 'CASCADE',
});

export {Cart, Product, User, CartItem};
