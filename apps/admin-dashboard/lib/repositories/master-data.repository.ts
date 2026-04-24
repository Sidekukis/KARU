import { eq } from 'drizzle-orm';
import { db } from '../db';
import { plants, pestsDiseases, sops, plantPestRelations, sopPlantRelations, sopPestRelations } from '../db/schema';

export class MasterDataRepository {
  // --------- Kategori Tanaman ---------
  async getAllPlants() {
    return await db.select().from(plants);
  }

  // Menarik detail tanaman beserta daftar Hama yang menyerang
  async getPlantDetails(plantId: string) {
    const plant = await db.select().from(plants).where(eq(plants.id, plantId));
    if (!plant.length) return null;

    // Join query manual via Drizzle Query
    const pestsList = await db.select({
      pestId: pestsDiseases.id,
      nama: pestsDiseases.nama,
      jenis: pestsDiseases.jenis,
      risiko: pestsDiseases.tingkatRisiko
    })
    .from(plantPestRelations)
    .innerJoin(pestsDiseases, eq(plantPestRelations.pestDiseaseId, pestsDiseases.id))
    .where(eq(plantPestRelations.plantId, plantId));

    return {
      ...plant[0],
      pests: pestsList
    };
  }

  // --------- Kategori Penyakit/Hama ---------
  async getAllPests() {
    return await db.select().from(pestsDiseases);
  }

  // --------- Kategori SOP ---------
  async getAllSops() {
    return await db.select().from(sops);
  }
}
