import { WorkspaceRepository } from '../repositories/workspace.repository';
import { AiScanRepository } from '../repositories/ai-scan.repository';

export class AiScanService {
  private workspaceRepo: WorkspaceRepository;
  private scanRepo: AiScanRepository;

  constructor() {
    this.workspaceRepo = new WorkspaceRepository();
    this.scanRepo = new AiScanRepository();
  }

  /**
   * Method utama saat Mobile App mengirimkan log pindaian hama
   */
  async processIncomingScan(userId: string, data: any) {
    const { workspaceId, qrNodeId, lng, lat, imageUrl, diagnosisResult, probability, diseaseId } = data;

    // 1. Validasi Input Dasar
    if (!workspaceId || !lng || !lat || !diagnosisResult) {
      throw new Error('Incomplete scan data. Require workspaceId, lng, lat, and diagnosisResult');
    }

    // 2. Cek Geofence Validation: Point in Polygon
    const isInside = await this.workspaceRepo.isPointInsideWorkspace(workspaceId, lng, lat);
    const validationStatus = isInside ? 'Valid' : 'Di Luar Batas';

    // 3. Simpan ke database
    const logId = await this.scanRepo.saveScanLog({
      userId,
      workspaceId,
      qrNodeId,
      location: [lng, lat],
      imageUrl,
      validationStatus,
      diagnosisResult,
      probability,
      diseaseId
    });

    return {
      success: true,
      logId,
      validationStatus,
      message: isInside ? "Data diverifikasi valid di dalam zona lahan." : "PERINGATAN: Posisi scan Anda terdeteksi diluar batas poligon lahan."
    };
  }
}
