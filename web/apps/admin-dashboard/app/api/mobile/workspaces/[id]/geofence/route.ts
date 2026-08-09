import { NextRequest, NextResponse } from 'next/server'; // 1. Tambahkan NextRequest di sini
import { db } from '@/lib/db';
import { geofences } from '@/lib/db/schema';
import { eq, sql } from 'drizzle-orm';
import { getMobileUser } from '@/lib/auth/auth-guard';

export async function GET(
  req: NextRequest, // 2. Ubah Request menjadi NextRequest
  { params }: { params: Promise<{ id: string }> } // 3. Bungkus params ke dalam Promise
) {
  try {
    const user = await getMobileUser();
    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    // Ini sudah benar
    const { id } = await params;

    const geofenceRows = await db
      .select({
        id: geofences.id,
        workspaceId: geofences.workspaceId,
        polygonInfoRaw: sql<string>`ST_AsGeoJSON(${geofences.polygonInfo}::geometry)`,
      })
      .from(geofences)
      .where(eq(geofences.workspaceId, id))
      .limit(1);

    if (geofenceRows.length === 0) {
      return NextResponse.json({ success: false, error: 'Geofence not found' }, { status: 404 });
    }

    const row = geofenceRows[0];
    let polygonInfoObj = null;
    try {
      if (row.polygonInfoRaw) {
        polygonInfoObj = JSON.parse(row.polygonInfoRaw);
      }
    } catch (e) {
      console.error('Failed to parse polygonInfoRaw:', e);
    }

    return NextResponse.json({
      success: true,
      data: {
        id: row.id,
        workspaceId: row.workspaceId,
        polygon_info: polygonInfoObj
      }
    });
  } catch (error) {
    console.error('Error fetching mobile workspace geofence:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}