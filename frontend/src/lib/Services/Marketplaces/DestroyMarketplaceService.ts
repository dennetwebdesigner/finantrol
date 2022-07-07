import { Err } from '../../helpers/ErrorValidate';
import MarketplaceRepository from '../../Repositories/MarketplaceRepository';
export default class RemoveMarketplacesService {
  repository: MarketplaceRepository;
  constructor(repository: MarketplaceRepository) {
    this.repository = repository;
  }

  async execute(marketplace: number): Promise<any> {
    if (!marketplace) throw new Error('Qual Loja desja excluir?');
    const removed = await this.repository.remove(marketplace);

    if (removed.status == 200 && removed.data == 0)
      throw new Error(Err(404, 'Essa Loja não existe ou já foi excluida.'));

    return { marketplace: removed, message: 'A loja foi excluida com sucesso.' };
  }
}
