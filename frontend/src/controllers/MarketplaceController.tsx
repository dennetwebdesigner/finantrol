import { AxiosResponse } from 'axios';

import { api } from '../config/api';
interface iMarketplaceData {
  name: string;
  number: string;
  street: string;
  destrict: string;
  city: string;
  state: string;
  country: string;
  data: string;
  type: string;
}

export interface iMarketplaceList {
  id: number;
  name: string;
  addresses: Array<{
    number: number;
    street: string;
    city: string;
    district: string;
    state: string;
    country: string;
  }>;
  contacts: Array<{
    types: string;
    data: string;
  }>;
}
class MarketplaceController {
  async index() {}

  async list() {
    const response = await api.get('/marketplaces');

    const data = response.data.map((marketplace: iMarketplaceList) => {
      return {
        id: marketplace.id,
        name: marketplace.name,
        addresses: marketplace.addresses[0],
        contacts: marketplace.contacts[0],
      };
    });

    return data;
  }

  // create  a new product
  async store({
    name,
    number,
    street,
    destrict,
    city,
    state,
    country,
    data,
    type,
  }: iMarketplaceData): Promise<AxiosResponse<any, any>> {
    // send data for api
    const response = await api.post('/marketplaces', {
      name,
      number,
      street,
      destrict,
      city,
      state,
      country,
      data,
      type,
    });
    // return response
    return response;
  }
  async update() {}
  async destroy() {}
}

export default new MarketplaceController();
