//@ts-nocheck
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.FIREBASE_WEB_CLIENT_ID,
      clientSecret: process.env.FIREBASE_WEB_CLIENT_SECRET_KEY,
    }),
  ],
};

export default NextAuth(authOptions);
