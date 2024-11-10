import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import prisma from '@/lib/prisma';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = null;

        console.log('credentials', credentials);

        // // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash);

        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // Optionally, this is also the place you could do a user registration
        //   throw new Error('Invalid credentials.');
        // }

        // // return user object with their profile data
        return user;
      },
    }),
  ],
});
