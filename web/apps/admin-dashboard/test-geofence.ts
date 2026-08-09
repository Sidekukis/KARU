import { db } from './lib/db';
import { geofences } from './lib/db/schema';
import { sql } from 'drizzle-orm';

async function check() {
  const result = await db.select({
    id: geofences.id,
    wkt: sql<string>`ST_AsText(${geofences.polygonInfo}::geometry)`,
  }).from(geofences).limit(1);
  console.log(result);
  process.exit(0);
}

check();
