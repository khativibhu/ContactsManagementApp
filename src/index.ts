//connected Drizzle ORM to the PostgreSQL database
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

export default db;
