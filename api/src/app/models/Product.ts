import { Model, DataTypes, Sequelize } from "sequelize";

class Product extends Model {
  id: number;
  marketplace_id: number;
  name: string;
  description: string;
  value: string;
  code: number;
  tags: string;
  stock: string;

  static init(sequelize): any {
    super.init<any, Sequelize>(
      {
        marketplace_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        value: DataTypes.DECIMAL,
        code: DataTypes.STRING,
        tags: DataTypes.STRING,
        stock: DataTypes.STRING,
      },
      { sequelize, tableName: "products" }
    );
  }

  static associate(models) {
    this.belongsTo(models.Marketplace, {
      foreignKey: "marketplace_id",
      as: "marketplace",
    });
  }
}

export default Product;
