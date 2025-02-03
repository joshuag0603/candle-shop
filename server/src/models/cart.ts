import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey} from 'sequelize';

import { CartItem } from './cartItem';
import { User } from './users2';

export class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    declare id: CreationOptional<number>;
    declare userId: ForeignKey<User['id']>;
    // declare productname: ForeignKey<CartItem['productname']>;
    // declare quantity: ForeignKey<CartItem['quantity']>;

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