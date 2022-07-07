import { Request, Response } from "express";
import ProductRepository from "../Repositories/ProductRepository";
import CreateProductService from "../Services/Product/CreateProductService";
import ListProductsByMarketplaceService from "../Services/Product/ListProductsByMarketplaceService";

class ProductController {
  async show(req: Request, res: Response): Promise<Response> {
    const marketplace_id = req.params.marketplace_id as unknown as number;
    const service = new ListProductsByMarketplaceService(
      new ProductRepository()
    );

    try {
      const products = await service.execute(marketplace_id);

      return res.json(products);
    } catch (error) {
      const responseError = JSON.parse(error.message);
      if (responseError.status)
        return res.status(responseError.status).json(responseError.message);
      console.log(error);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { marketplace_id, name, description, value, code, tags, stock } =
      req.body;
    const user_id = req.userId;

    try {
      const service = new CreateProductService(new ProductRepository());

      const product = await service.execute({
        marketplace_id,
        user_id,
        name,
        description,
        value,
        code,
        tags,
        stock,
      });

      return res.status(201).json(product);
    } catch (error) {
      const { message, status } = JSON.parse(error.message);

      if (status && message) {
        return res.status(status).json(message);
      } else {
        return res.status(status).json(error);
      }
    }
  }
}

export default new ProductController();
