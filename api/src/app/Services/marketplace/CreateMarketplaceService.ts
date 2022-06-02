import MarketplaceRepository from "../../Repositories/MarketplaceRepository";

interface iMarketplace {
  name: string;
  user_id: number;
  number: number;
  street: string;
  destrict: string;
  city: string;
  state: string;
  country: string;
  data: string;
  type: string;
}

class CreateMarketplace {
  private repository: MarketplaceRepository;

  constructor(repository) {
    this.repository = repository;
  }

  async execute({
    name,
    user_id,
    number,
    street,
    destrict,
    city,
    state,
    country,
    data,
    type,
  }: iMarketplace) {
    if (
      !name ||
      !user_id! ||
      !number ||
      !street ||
      !destrict ||
      !city ||
      !state ||
      !country ||
      !data ||
      !type
    )
      throw new Error(
        JSON.stringify({ message: "Campos vazios são invalidos.", status: 400 })
      );

    const status: number = 1;
    const marketplace = await this.repository.save({
      name,
      user_id,
      status,
      number,
      street,
      destrict,
      city,
      state,
      country,
      data,
      type,
    });

    return marketplace;
  }
}

export default CreateMarketplace;
