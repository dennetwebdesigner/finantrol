import { Model, DataTypes, Sequelize } from "sequelize";

class AddressMarketplace extends Model {
  id: number;
  marketplace_id: number;
  number: number;
  street: string;
  destrict: string;
  city: string;
  state: string;
  country: string;

  static init(sequelize): any {
    super.init<any, Sequelize>(
      {
        number: DataTypes.INTEGER,
        marketplace_id: DataTypes.INTEGER,
        street: DataTypes.STRING,
        destrict: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
      },
      { sequelize, tableName: "addressesMarketplace" }
    );
  }

  static associate(models) {
    this.belongsTo(models.Marketplace, {
      foreignKey: "marketplace_id",
      as: "marketplaces",
    });
  }
}

export default AddressMarketplace;
