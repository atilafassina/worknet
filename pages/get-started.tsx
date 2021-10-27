import { ReactElement, useEffect } from 'react'
import { AuthLayout } from '@layouts/auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GithubLogin } from '@components/github-login'
import { Loading } from '@components/loading'
import { Header } from '@components/header'

const GetStarted = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated' && session) {
      router.push('/authenticated')
    }
  }, [status, session, router])

  return (
    <>
      <Header title="WorkNet" subtitle="map your work’s net" />
      <article className="w-full py-40 grid place-items-center">
        {status === 'loading' || status === 'authenticated' ? (
          <Loading />
        ) : (
          <GithubLogin />
        )}
      </article>
    </>
  )
}

GetStarted.getLayout = function GetStartedAuth(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}

export default GetStarted
