import { Model, DataTypes, Sequelize } from "sequelize";

class Marketplace extends Model {
  id: number;
  user_id: number;
  name: string;
  status: number;

  static init(sequelize): any {
    super.init<any, Sequelize>(
      {
        user_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        status: DataTypes.INTEGER,
      },
      { sequelize, tableName: "marketplaces" }
    );
  }

  static associate(models) {
    this.hasMany(models.Product, {
      foreignKey: "marketplace_id",
      as: "product",
    });

    this.hasMany(models.ContactMarketplace, {
      foreignKey: "marketplace_id",
      as: "contacts",
    });

    this.hasMany(models.AddressMarketplace, {
      foreignKey: "marketplace_id",
      as: "addresses",
    });
  }
}

export default Marketplace;
