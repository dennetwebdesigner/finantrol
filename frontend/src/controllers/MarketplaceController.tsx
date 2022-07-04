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

    const data = response.data
      .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
      .map((marketplace: iMarketplaceList) => {
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
  }: iMarketplaceData): Promise<
    | {
        id: number;
        name: string;
        addresses: {
          city: string;
          state: string;
        };
      }
    | any
  > {
    if (
      name.length == 0 ||
      number.length == 0 ||
      street.length == 0 ||
      destrict.length == 0 ||
      city.length == 0 ||
      state.length == 0 ||
      country.length == 0 ||
      data.length == 0 ||
      type.length == 0
    ) {
      return {
        error: { message: 'Todos os campos devem ser preenchidos corretamente!' },
      };
    }

    // send data for api
    const response = (await api.post('/marketplaces', {
      name,
      number,
      street,
      destrict,
      city,
      state,
      country,
      data,
      type,
    })) as any;
    if (response.data) {
      // return response
      return {
        id: response.id,
        name,
        addresses: {
          city,
          state,
        },
      };
    }
  }
  async update() {}
  async destroy() {}
}

export default new MarketplaceController();
