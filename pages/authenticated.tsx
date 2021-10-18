import type { BaseUser, UserRequest } from '@utils/types'
import { AuthLayout } from '@layouts/auth'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { ExternalLinkIcon, LogoutIcon } from '@heroicons/react/outline'
import { pollFollowers } from '@utils/github'
import { ReactElement } from 'react'
import { getSession, signOut } from 'next-auth/react'

type FormattedUser = {
  name: string
  bio: string
  login: string
  url: string
  avatar: string
}

type AuthenticatedProps = {
  user: FormattedUser
  followers: BaseUser[]
}

// cannot InferServerSideProps because of returned redirect
const Authenticated = ({ user, followers }: AuthenticatedProps) => {
  return (
    <>
      <header className="w-full grid place-items-center pt-24">
        <button
          type="button"
          className="absolute top-5 right-5  text-purple-200 hover:outline-white focus:outline-white"
          onClick={() => signOut()}
        >
          Logout{' '}
          <LogoutIcon className="w-6 mr-2 inline-block relative -top-0.5" />
        </button>
        <Image
          src={user.avatar}
          width="100"
          height="100"
          className="rounded-md"
          alt={`avatar for ${user.name}`}
        />
        <h1>{user.name}</h1>
        <strong>{user.bio}</strong>
        <div className="font-mono">Total friends: {followers.length}</div>
      </header>
      <table className="text-center my-20 mx-auto text-2xl">
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th className="text-left">Username</th>
          </tr>
        </thead>
        <tbody>
          {followers.map((follower: BaseUser, index: number) => {
            return (
              <tr key={follower.login} className="h-24">
                <td className="w-20">{index + 1}</td>
                <td className="w-48">
                  <Image
                    src={follower.avatar_url}
                    width="70"
                    height="70"
                    className="rounded-full"
                    alt={`avatar for ${follower.login}`}
                  />
                </td>
                <td className="text-left min-w-60">
                  <a
                    href={follower.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {follower.login}
                  </a>
                  <ExternalLinkIcon className="w-4 inline-block relative bottom-1.5" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

Authenticated.getLayout = function AthenticatedAuth(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/get-started',
        permanent: false,
      },
    }
  }

  const user = session.user as UserRequest

  const followers = await pollFollowers(user.followers_url)
  const { name, bio, login, html_url: url, avatar_url: avatar } = user

  return {
    props: {
      user: { name, bio, login, url, avatar },
      followers: followers,
    },
  }
}

export default Authenticated
