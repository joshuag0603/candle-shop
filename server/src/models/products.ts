import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize';


export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    declare id: CreationOptional<number>;
    declare productName: string;
    declare description: string;
    declare price: number;
    declare quantity?: number;
    declare image?: string;
}

export function ProductFactory(sequelize: Sequelize) {
    Product.init(
        {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            productName: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            description: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            price: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            quantity: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
            },
            image: {
              type: DataTypes.STRING,
              allowNull: true,
            },
          },
          {
              tableName: 'products',
              sequelize,
              timestamps: true,
              underscored: true,
              modelName: "products"
          }
    )
    
    return Product;
};