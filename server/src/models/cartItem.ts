import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey} from 'sequelize';

import { Product } from './Products.js';

import { Cart } from './cart';

export class CartItem extends Model<InferAttributes<CartItem>, InferCreationAttributes<CartItem>> {
    declare id: CreationOptional<number>;
    declare quantity: number;
    declare productId: ForeignKey<Product['id']>;
}

    export function CartItemFactory(sequelize: Sequelize) {
    CartItem.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            quantity: {  
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'cartitems',
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: "cartitems"  
        }
    );

    return CartItem;
}