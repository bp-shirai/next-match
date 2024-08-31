import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import { Providers } from "@components/Providers";
import credentials from "next-auth/providers/credentials";
import { loginSchema } from "@lib/schemas/loginSchema";
import { getUserByEmail } from "@app/actions/authActions";
import { compare } from "bcryptjs";

//export default { providers: [GitHub] } satisfies NextAuthConfig;

export default {
  providers: [
    credentials({
      name: "credentials",
      async authorize(data) {
        const validated = loginSchema.safeParse(data);
        if (validated.success) {
          const { email, password } = validated.data;

          const user = await getUserByEmail(email);

          if (!user || !(await compare(password, user.passwordHash))) return null;

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
