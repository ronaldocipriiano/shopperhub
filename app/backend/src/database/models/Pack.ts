import { DataTypes, Model } from 'sequelize';
import db from '../config/sequelize';
import Product from './Products';

interface PackAttributes {
  id: number;
  pack_id: number;
  product_id: number;
  qty: number;
}

class Pack extends Model<PackAttributes> implements PackAttributes {
  public id!: number;
  public pack_id!: number;
  public product_id!: number;
  public qty!: number;
}

Pack.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    pack_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'packs',
  }
);

Pack.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
Pack.belongsTo(Product, { foreignKey: 'pack_id', as: 'pack' });

export default Pack;
