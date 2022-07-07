import MarketplaceRepository from "../../Repositories/MarketplaceRepository";

export default class RemoveMarketplaceService {
  private repository: MarketplaceRepository;
  constructor(repository: MarketplaceRepository) {
    this.repository = repository;
  }

  async execute(marketplace_id: number, user_id: number): Promise<any> {
    if (!marketplace_id || !user_id)
      throw new Error(
        JSON.stringify({
          error: { status: 400, message: "Loja não pode ser indentificada." },
        })
      );

    const markeplaceRemove = await this.repository.remove(
      user_id,
      marketplace_id
    );

    return markeplaceRemove;
  }
}
