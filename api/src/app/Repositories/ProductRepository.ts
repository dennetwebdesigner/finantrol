import Marketplace from "../models/Marketplace";
import Product from "../models/Product";
import db from "../../database";
import { Transaction } from "sequelize";

interface iProductRepository {
  marketplace_id: number;
  name: string;
  description: string;
  value: number;
  code: string;
  tags: string;
  stock: string;
}
class ProductRepository {
  async findByMarketplace(
    user_id: number,
    marketplace_id: number
  ): Promise<Pick<Marketplace, "id">> {
    const marketplace = await Marketplace.findOne({
      where: { user_id, id: marketplace_id },
      attributes: ["id"],
    });

    return marketplace;
  }

  async findByName(
    name: string,
    user_id: number,
    marketplace_id: number
  ): Promise<Pick<Product, ["id", "name"] | any>> {
    const marketplace = await this.findByMarketplace(user_id, marketplace_id);

    const product = await Product.findOne({
      where: { marketplace_id: marketplace.id, name },
      attributes: ["id", "name"],
    });

    return product;
  }

  async save({
    marketplace_id,
    name,
    description,
    value,
    code,
    tags,
    stock,
  }: iProductRepository): Promise<Product> {
    const sequelize = db.connection;
    const transaction: Transaction = await sequelize.transaction();

    try {
      const product = await Product.create(
        { marketplace_id, name, description, value, code, tags, stock },
        { transaction }
      );

      transaction.commit();

      return product;
    } catch (error) {
      transaction.rollback();
      throw new Error(error);
    }
  }
}

export default ProductRepository;
