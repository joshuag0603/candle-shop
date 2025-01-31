import sequelize from "../config/connection";
import { CartFactory } from "./cart";
import { ProductFactory } from "./products";
import { UserFactory } from "./users2";

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
})

export {Cart, Product, User};
