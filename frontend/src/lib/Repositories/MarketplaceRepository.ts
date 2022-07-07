import { api } from '../../config/api';

export default class MarketplaceRepository {
  async remove(marketplace: number): Promise<any> {
    const remove = await api.delete(`/marketplaces/${marketplace}`);
    return remove;
  }
}
