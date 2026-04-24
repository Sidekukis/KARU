import { eq } from 'drizzle-orm';
import { db } from '../db';
import { qrBatches, qrNodes } from '../db/schema';

export class QrNodeRepository {
  async getBatchByWorkspace(workspaceId: string) {
    return await db.select().from(qrBatches).where(eq(qrBatches.workspaceId, workspaceId));
  }

  async createBatch(data: {
    id: string;
    workspaceId: string;
    zone?: string;
    nodeCount: number;
    prefix?: string;
    createdBy: string;
  }) {
    return await db.insert(qrBatches).values(data).returning();
  }

  /**
   * Method untuk generate multiple nodes untuk sebuah batch
   */
  async createNodesForBatch(batchId: string, nodeIds: string[]) {
    // Membentuk array values [{ id: 'KARU-XXX', batchId: '...', status: 'Offline' }]
    const values = nodeIds.map(nodeId => ({
      id: nodeId,
      batchId: batchId,
      status: 'Offline'
    }));

    return await db.insert(qrNodes).values(values);
  }

  /**
   * Update status node jadi Online / LastScanned
   */
  async recordNodeScan(nodeId: string) {
    return await db.update(qrNodes)
      .set({ status: 'Online', lastScannedAt: new Date() })
      .where(eq(qrNodes.id, nodeId));
  }
}
