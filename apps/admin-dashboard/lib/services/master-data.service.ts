import { MasterDataRepository } from '../repositories/master-data.repository';

export class MasterDataService {
  private repo: MasterDataRepository;

  constructor() {
    this.repo = new MasterDataRepository();
  }

  async getMasterDataCollections() {
    // Dipakai untuk Mobile API (misal fetching state awal aplikasi untuk local storage HP)
    const allPlants = await this.repo.getAllPlants();
    const allPests = await this.repo.getAllPests();
    const allSops = await this.repo.getAllSops();

    return {
      plants: allPlants,
      pests: allPests,
      sops: allSops,
    };
  }

  async getPlant(id: string) {
    return await this.repo.getPlantDetails(id);
  }
}
