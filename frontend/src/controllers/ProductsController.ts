import { api } from '../config/api';

class ProductsController {
  async index() {}
  // create  a new product
  async store({
    marketplace_id,
    name,
    value,
    code,
    tags,
    stock,
    description,
  }: {
    marketplace_id: number;
    name: string;
    description: string;
    value: number;
    code: string;
    stock: number;
    tags: string;
  }): Promise<any> {
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
      // send data for api
      const product: any = await api.post('/products', {
        marketplace_id,
        name,
        value,
        code,
        tags,
        stock,
        description,
      });
      return product;
    } catch (error: any) {
      return error;
    }

    // return response
  }
  async update() {}
  async destroy() {}
}

export default new ProductsController();
