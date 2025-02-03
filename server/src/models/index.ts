import sequelize from "../config/connection.js";
import { CartFactory } from "./cart.js";
import { ProductFactory } from "./products.js";
import { UserFactory } from "./users2.js";
import { CartItemFactory } from "./cartItem.js";

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

CartItem.hasMany(Product, {
    onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
    onDelete: 'CASCADE',
});

CartItem.belongsTo(Cart, {
    onDelete: 'CASCADE',
});

Product.belongsTo(CartItem, {
    onDelete: 'CASCADE',
});

export {Cart, Product, User, CartItem};
