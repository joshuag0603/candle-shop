import sequelize from "../config/connection";
import { CartFactory } from "./cart";
import { ProductFactory } from "./products";
import { UserFactory } from "./users2";
import { CartItemFactory } from "./cartItem";

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
