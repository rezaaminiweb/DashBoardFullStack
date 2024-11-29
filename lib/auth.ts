import GoogleProvide from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvide({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};