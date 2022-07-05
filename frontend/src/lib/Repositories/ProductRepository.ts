import { api } from '../../config/api';

interface iDataProduct {
  marketplace_id: number;
  name: string;
  description: string;
  value: number;
  code: string;
  stock: number;
  tags: string;
}

class ProductRepository {
  async save({
    marketplace_id,
    name,
    value,
    code,
    tags,
    stock,
    description,
  }: iDataProduct): Promise<any> {
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
  }
}

export default ProductRepository;
