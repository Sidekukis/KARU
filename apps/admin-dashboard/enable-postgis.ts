import postgres from 'postgres';
import 'dotenv/config';

async function main() {
  const sql = postgres(process.env.DATABASE_URL!);
  try {
    console.log("Enabling postgis extension...");
    await sql`CREATE EXTENSION IF NOT EXISTS postgis;`;
    console.log("Success!");
  } catch (err) {
    console.error("Failed to enable PostGIS:", err);
    console.error("Make sure PostGIS is installed on your local PostgreSQL server.");
  } finally {
    await sql.end();
  }
}

main();
