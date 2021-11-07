import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account, ...rest }) {
      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },
    async session({ session, token }) {
      const access = `token ${token.accessToken}`
      const profileResponse = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: access,
        },
      })

      const user = await profileResponse.json()
      session.user = user

      return session
    },
  },
})
