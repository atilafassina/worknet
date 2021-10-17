import type { FC } from 'react'
import { RewindIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Header: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <header className="w-full py-20 grid place-items-center bg-gradient-to-tr from-purple-800 to-purple-300 text-black">
    <Link href="/">
      <a>
        <RewindIcon className="w-12 absolute top-5 left-5" />
      </a>
    </Link>
    <h1 className="text-7xl">{title}</h1>
    <strong className="font-mono">{subtitle}</strong>
  </header>
)

export { Header }
