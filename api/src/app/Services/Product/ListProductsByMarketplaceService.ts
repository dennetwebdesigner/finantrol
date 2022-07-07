import ProductRepository from "../../Repositories/ProductRepository";
export default class ListProductsByMarketplaceService {
  private repository: ProductRepository;
  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async execute(marketplace_id: number): Promise<ProductRepository> {
    const products = await this.repository.listAllbyMarketplace(marketplace_id);
    console.log(products);
    if (!products) {
      throw new Error(JSON.stringify({ message: products, status: 400 }));
    } else if (products.length < 1) {
      throw new Error(
        JSON.stringify({
          message: "Não há produtos cadastrados nessa loja",
          status: 404,
          products,
        })
      );
    }

    return products;
  }
}
