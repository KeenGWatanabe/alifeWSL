import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { adapter } from "next/dist/server/web/adapter";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter
}