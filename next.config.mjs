import { z } from "zod";

const parseResult = z
  .object({
    DATABASE_URL: z.string().url(),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string() : z.string().url()
    ),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional()
  })
  .safeParse(process.env);

if (!parseResult.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...Object.entries(parseResult.error.format())
      .map(([name, value]) =>
        value && "_errors" in value
          ? `${name}: ${value._errors.join(", ")}\n`
          : undefined
      )
      .filter(Boolean)
  );
  throw new Error("Invalid environment variables");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  }
};

export default nextConfig;
