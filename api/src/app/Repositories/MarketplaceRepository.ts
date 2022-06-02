import Marketplace from "../models/Marketplace";
import db from "../../database";
import AddressMarketplace from "../models/AddressMarketplace";
import ContactMarketplace from "../models/ContactMarketplace";

interface iMarketplace {
  name: string;
  user_id: number;
  status: number;
  number: number;
  street: string;
  destrict: string;
  city: string;
  state: string;
  country: string;
  data: string;
  type: string;
}

class MarketplaceRepository {
  async save({
    name,
    user_id,
    status,
    number,
    street,
    destrict,
    city,
    state,
    country,
    data,
    type,
  }: iMarketplace): Promise<Marketplace> {
    const sequelize = db.connection;
    const transaction = await sequelize.transaction();

    try {
      const marketplace = await Marketplace.create(
        { name, user_id, status },
        { transaction }
      );

      await AddressMarketplace.create(
        {
          marketplace_id: marketplace.id,
          number,
          street,
          destrict,
          city,
          state,
          country,
        },
        { transaction }
      );

      await ContactMarketplace.create(
        {
          data,
          type,
          marketplace_id: marketplace.id,
        },
        { transaction }
      );

      transaction.commit();

      return marketplace;
    } catch (error) {
      transaction.rollback();
      console.log(error);
      throw new Error(JSON.stringify({ message: "", status: 500 }));
    }
  }
}

export default MarketplaceRepository;
