import { DataTypes, Model, Sequelize } from 'sequelize';
import db from '../config/sequelize';

interface ProductAttributes {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public code!: number;
  public name!: string;
  public cost_price!: number;
  public sales_price!: number;
}

Product.init(
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    sales_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'products',
  }
);

export default Product;
