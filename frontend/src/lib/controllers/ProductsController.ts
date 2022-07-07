import ProductRepository from '../Repositories/ProductRepository';
import CreateProductService from '../Services/Products/CreateProductService';
import ListProductService from '../Services/Products/ListProductService';
class ProductsController {
  async index() {}
  async show(marketplace_id: number): Promise<any> {
    const service = new ListProductService(new ProductRepository());
    const products = await service.execute(marketplace_id);
    console.log(products);
  }

  // create  a new product
  async store(
    e: any,
    data: {
      marketplace_id: number;
      name: string;
      description: string;
      value: number;
      code: string;
      stock: number;
      tags: string;
    },
    callback: Function,
  ): Promise<any> {
    e.preventDefault();

    try {
      const repository = new ProductRepository();
      const service = new CreateProductService(repository);
      const product = await service.execute(data);
      if (product.error) {
        alert(product.error.message);
        return;
      }

      if (product.response && product.response.status == 400) {
        alert(`CodeError: ${product.response.status}, Error: ${product.response.data}`);
        return;
      }
      alert(`Produto: ${product.data.name} criado com sucesso!`);
      callback();
    } catch (error) {
      console.log(error);
    }
  }
  async update() {}
  async destroy() {}
}

export default new ProductsController();
