import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('products', {
      code: {
        type: DataTypes.BIGINT,
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
    });

    await queryInterface.createTable('packs', {
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
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('packs');
    await queryInterface.dropTable('products');
  },
}
