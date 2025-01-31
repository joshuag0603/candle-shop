import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey} from 'sequelize';

// import in whatever class you need
import { Product } from './products';
import { User } from './users2';
// declare userId: ForeignKey<User['id']>

export class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    declare id: CreationOptional<number>;
    declare userId: ForeignKey<User['id']>;
    declare productId: ForeignKey<Product['id']>;

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