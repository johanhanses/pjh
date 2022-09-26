import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',

      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username'
        },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username
          }
        })

        if (user && bcrypt.compareSync(credentials!.password, user.password)) {
          return {
            id: user.id,
            username: user.username
          }
        }

        return null
      }
    })
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token.id = user.id

      return token
    },
    session: ({ session, user, token }) => {
      if (token) session.id = token.id

      return session
    }
  },

  pages: {
    signIn: '/auth/signin/'
  }
})
