declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    // Set by vercel during deployment.
    VERCEL_URL?: string;
    // This will default to `VERCEL_URL` on deployment. Not used in production.
    NEXTAUTH_URL: string;
    // Must be set when running in production. Automatically generated during development.
    NEXTAUTH_SECRET?: string;
    // Only exists during development.
    PORT?: string;
  }
}
