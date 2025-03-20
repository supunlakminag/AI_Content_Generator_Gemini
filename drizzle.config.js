/** @type {import("drizzle-kit").Config} */

export default {
  schema: './utils/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_xt8CBDS7HKZA@ep-raspy-union-a5e7z5am-pooler.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require',
  },
};
