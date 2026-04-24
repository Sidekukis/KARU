import { eq, sql } from 'drizzle-orm';
import { db } from '../db';
import { geofences, workspaces } from '../db/schema';

export class WorkspaceRepository {
  /**
   * Menemukan semua data Workspace
   */
  async findAllWorkspaces() {
    return await db.select().from(workspaces);
  }

  /**
   * Menemukan ruang kerja berdasar ID
   */
  async findWorkspaceById(id: string) {
    const result = await db.select().from(workspaces).where(eq(workspaces.id, id));
    return result.length ? result[0] : null;
  }

  /**
   * Membuat atau Update geofence Polygon dari WKT 
   */
  async saveGeofence(workspaceId: string, wktString: string) {
    // Pada PostgreSQL, mengubah WKT ke geografi dilakukan memakai ::geography atau ST_GeogFromText
    return await db.insert(geofences).values({
      workspaceId,
      polygonInfo: sql`ST_GeogFromText(${wktString})` as any
    });
  }

  /**
   * Pengecekan Point In Polygon menggunakan fungsi PostGIS: ST_Contains atau ST_Covers
   * lng = longitude (X), lat = latitude (Y)
   */
  async isPointInsideWorkspace(workspaceId: string, lng: number, lat: number): Promise<boolean> {
    const res = await db.select()
      .from(geofences)
      .where(sql`
        ${geofences.workspaceId} = ${workspaceId} 
        AND ST_Covers(
          ${geofences.polygonInfo}::geometry, 
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)
        )
      `)
      .limit(1);

    return res.length > 0;
  }
}
