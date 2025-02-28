import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Use the non-public environment variable for database connection
// This is more secure and follows best practices
const sql = neon(process.env.DRIZZLE_DB_URL!);
export const db = drizzle({ client: sql, schema });
