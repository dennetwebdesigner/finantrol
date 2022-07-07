import { Request, Response } from "express";
import Marketplace from "../models/Marketplace";
import MarketplaceRepository from "../Repositories/MarketplaceRepository";
import CreateMarketplaceService from "../Services/marketplace/CreateMarketplaceService";
import RemoveMarketplaceService from "../Services/marketplace/RemoveMarketplaceService";

class MarketplaceController {
  repository: MarketplaceRepository;
  constructor() {
    this.repository = new MarketplaceRepository();
  }
  async show(req: Request, res: Response): Promise<Response> {
    const marketplace = await Marketplace.findAll({
      where: { user_id: req.userId },
      include: [
        {
          association: "addresses",
        },
        {
          association: "contacts",
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

  async destroy(req: Request, res: Response): Promise<any> {
    const marketplace_id: number = req.params
      .marketplace_id as unknown as number;
    const userId = req.userId as number;

    const repository = new MarketplaceRepository();
    const service = new RemoveMarketplaceService(repository);

    try {
      const marketplaceRemove = await service.execute(marketplace_id, userId);
      return res.json(marketplaceRemove);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default new MarketplaceController();
