import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey} from 'sequelize';

import { CartItem } from './CartItem.js';
import { User } from './Users2.js';

export class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    declare id: CreationOptional<number>;
    declare userId: ForeignKey<User['id']>;
    declare cartItemId: ForeignKey<CartItem['id']>;

}

export function CartFactory(sequelize: Sequelize) {
    Cart.init(
        {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
          },
          {
              tableName: 'carts',
              sequelize,
              timestamps: true,
              underscored: true,
              modelName: "carts"
          }
    )
    
    return Cart;
};