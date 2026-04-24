import { db } from '../db';
import { aiScanLogs } from '../db/schema';

export class AiScanRepository {
  /**
   * Menyimpan log pindaian AI
   * location: format tuple [lng, lat]
   */
  async saveScanLog(data: {
    userId: string;
    workspaceId: string;
    qrNodeId?: string; // Opsional
    location: [number, number];
    imageUrl?: string;
    validationStatus: string;
    diagnosisResult: string;
    probability: number;
    diseaseId?: string;
  }) {
    // Karena custom types mengubah [lng,lat] -> driver format (POINT(lng lat)) otomatis
    const res = await db.insert(aiScanLogs).values({
      userId: data.userId,
      workspaceId: data.workspaceId,
      qrNodeId: data.qrNodeId,
      location: data.location as [number, number],
      imageUrl: data.imageUrl,
      validationStatus: data.validationStatus,
      diagnosisResult: data.diagnosisResult,
      probability: data.probability,
      diseaseId: data.diseaseId
    }).returning({ id: aiScanLogs.id });
    
    return res[0].id;
  }
}
