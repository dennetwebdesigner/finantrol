import { Model, DataTypes, Sequelize } from "sequelize";

class ContactMarketplace extends Model {
  id: number;
  marketplace_id: number;
  data: string;
  type: string;

  static init(sequelize): any {
    super.init<any, Sequelize>(
      {
        marketplace_id: DataTypes.INTEGER,
        data: DataTypes.STRING,
        type: DataTypes.ENUM(
          "instagram",
          "facebook",
          "whatsapp",
          "celular",
          "email"
        ),
      },
      { sequelize, tableName: "contactMarketplace" }
    );
  }

  static associate(models) {
    this.belongsTo(models.Marketplace, {
      foreignKey: "marketplace_id",
      as: "marketplaces",
    });
  }
}

export default ContactMarketplace;
