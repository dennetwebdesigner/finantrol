import ProductRepository from '../../Repositories/ProductRepository';
export default class ListProductService {
  private repository;
  constructor(repository: ProductRepository) {
    this.repository = repository;
  }
  async execute(marketplace_id: number): Promise<any> {
    const products = await this.repository.getAllbyMarketplace(marketplace_id);
    return products;
  }
}
