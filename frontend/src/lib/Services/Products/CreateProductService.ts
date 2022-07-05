import ProductRepository from '../../Repositories/ProductRepository';

interface iCreateProducts {
  marketplace_id: number;
  name: string;
  description: string;
  value: number;
  code: string;
  stock: number;
  tags: string;
}

class CreateProductService {
  private repository;
  constructor(repository: ProductRepository) {
    this.repository = repository;
  }
  async execute({
    marketplace_id,
    name,
    value,
    code,
    tags,
    stock,
    description,
  }: iCreateProducts): Promise<any> {
    if (!marketplace_id)
      return {
        error: {
          message: 'Nescessario selecionar a loja, Feche este painel selecione e volte!',
        },
      };
    else if (!name || !value || !stock || !description || !code || !tags) {
      return { error: { message: 'todos os campos devem ser preenchidos corretamente' } };
    }

    try {
      const product = await this.repository.save({
        marketplace_id,
        name,
        value,
        code,
        tags,
        stock,
        description,
      });

      return product;
    } catch (error) {
      return error;
    }
  }
}

export default CreateProductService;
