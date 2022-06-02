import ProductRepository from "../../Repositories/ProductRepository";

interface iCreateProductService {
  user_id: number;
  name: string;
  description: string;
  value: number;
  code: string;
  tags: string;
  stock: string;
}
class CreateProductService {
  private repository: ProductRepository;

  constructor(repository) {
    this.repository = repository;
  }

  async execute({ user_id, name, description, value, code, tags, stock }) {
    if (
      !user_id ||
      !name ||
      !description ||
      !value ||
      !code ||
      !tags ||
      !stock
    ) {
      throw new Error(
        JSON.stringify({ message: "Campos Vazios.", status: 400 })
      );
    }

    const marketplace = await this.repository.findByMarketplace(user_id);

    if (!marketplace) {
      throw new Error(
        JSON.stringify({ message: "Esta loja não existe", status: 400 })
      );
    }

    const productExist = await this.repository.findByName(name, user_id);

    if (productExist) {
      throw new Error(
        JSON.stringify({ message: "Produto já esta cadastrado!", status: 400 })
      );
    }

    try {
      const product = await this.repository.save({
        marketplace_id: marketplace.id,
        name,
        description,
        value,
        code,
        tags,
        stock,
      });

      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CreateProductService;
