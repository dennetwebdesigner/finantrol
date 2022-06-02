import { Request, Response } from "express";
import Marketplace from "../models/Marketplace";
import MarketplaceRepository from "../Repositories/MarketplaceRepository";
import CreateMarketplaceService from "../Services/marketplace/CreateMarketplaceService";

class MarketplaceController {
  async show(req: Request, res: Response): Promise<Response> {
    const marketplace = await Marketplace.findAll({
      include: [
        {
          association: "addresses",
        },
      ],
    });

    return res.json(marketplace);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, number, street, destrict, city, state, country, data, type } =
      req.body;
    const user_id = req.userId;

    try {
      const service = new CreateMarketplaceService(new MarketplaceRepository());

      const marketplace = await service.execute({
        name,
        user_id,
        number,
        street,
        destrict,
        city,
        state,
        country,
        data,
        type,
      });

      return res.status(201).json(marketplace);
    } catch (error) {
      const { message, status } = JSON.parse(error.message);
      return res.status(status).json(message);
    }
  }
}

export default new MarketplaceController();
