import { Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare email: string;
    declare password: string;
    declare admin: number;
    declare address: string;
}

export function UserFactory(sequelize: Sequelize) {
    User.init(
        {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
            },
            email: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  isEmail: true,
              }
            },
            password: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            admin: {
              type: DataTypes.INTEGER,
              allowNull: false,
              validate: {
                  isIn: [[0, 1, 2]],
              },
            },
            address: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  isAlphanumeric: true,
              }
            },
          },
          {
              tableName: 'users',
              sequelize,
              timestamps: true,
              underscored: true,
              modelName: "users"
          }
    )
    
    return User;
};