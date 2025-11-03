import { defineConfig, env } from 'prisma/config';
import dotenv from 'dotenv';

// Load environment variables from .env when running Prisma CLI. When a config
// file is present Prisma may skip automatic env loading, so ensure DATABASE_URL
// is available here.
dotenv.config({ path: '.env' });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: env('DATABASE_URL'),
  },

});
