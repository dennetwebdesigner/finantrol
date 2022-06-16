import { api } from '../config/api';

class ProductsController {
  async index() {}
  // create  a new product
  async store() {
    // send data for api
    const { data } = await api.post('/products', {});
    // return response
    return data;
  }
  async update() {}
  async destroy() {}
}

export default new ProductsController();
