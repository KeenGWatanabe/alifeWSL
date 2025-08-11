import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from 'bcryptjs';

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'read:user, user:email',
        },
      },
       profile(profile) {
      console.log("GitHub Profile:", profile); // 👈 Debug here
      return { id: profile.id, email: profile.email, image: profile.avatar_url };
      },
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: { 
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });
        if ( !user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcryptjs.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allow relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allow callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'production',
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);