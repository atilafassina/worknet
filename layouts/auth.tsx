import type { FC } from 'react'
import { DefaultLayout } from './default'
import { SessionProvider } from 'next-auth/react'

const AuthLayout: FC = ({ children }) => {
  return (
    <SessionProvider>
      <DefaultLayout>{children}</DefaultLayout>
    </SessionProvider>
  )
}

export { AuthLayout }
