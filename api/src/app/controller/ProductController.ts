import { Request, Response } from "express";
import ProductRepository from "../Repositories/ProductRepository";
import CreateProductService from "../Services/Product/CreateProductService";

class ProductController {
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
