import type { InferGetStaticPropsType } from 'next'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Header } from '@components/header'

const NEXT_G11N_ID = 405718666

const About = ({ g11n }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header
        title="Next.js Black Belt Workshop"
        subtitle="by Smashing Magazine"
      />
      <article className="my-12 mx-auto max-w-prose text-2xl">
        <p className="my-4">
          This app has a set of examples of how to leverage Next.js
          functionality to achieve a high-end complex application for the modern
          web.
        </p>
        <p className="my-4">
          Everything you need to meet the best web standards is covered here:
        </p>
        <ul className="my-4 ml-8">
          <li className="special-item" data-bullet="👮‍♀️">
            Security
          </li>
          <li className="special-item" data-bullet="⚡️">
            Performance
          </li>
          <li className="special-item" data-bullet="🔭">
            Monitoring
          </li>
          <li className="special-item" data-bullet="🎢">
            Maintanability
          </li>
          <li className="special-item" data-bullet="📈">
            Scalability
          </li>
          <li data-bullet="🧞‍♂️" className="text-purple-200 special-item">
            <a href="https//atila.io/black-belt">check workshop program</a>
          </li>
        </ul>
      </article>
      <aside className="py-8 mx-auto max-w-prose text-2xl">
        <h2 className="text-4xl text-purple-200">
          <span className="text-purple-400">About:</span> Atila Fassina
        </h2>
        <p className="my-4">
          I'm on a mission to make code simple. When not recording screencasts
          or courses, you may find me either writing and talking about jamstack,
          performance, or developer tooling.
        </p>
        <p className="my-4">
          Currently, I work as Lead Web Developer at SAP, write articles on
          Smashing Magazine, and speak on conferences on stages and on camera.
        </p>
        <section className="py-4">
          <p className="my-4">
            I also have open-source projects related to this workshop
          </p>
          <ul className="my-16 w-full flex row justify-around">
            <li className="h-72 w-72 rounded-md bg-gradient-to-tr from-purple-800 to-purple-300 text-black grid place-items-center">
              <div className="h-64 w-64 rounded-lg bg-black grid place-items-center text-purple-200">
                <Link href="/projects/next-g11n">
                  <a className="text-center text-4xl">next-g11n</a>
                </Link>
                <span className="text-center text-md">
                  translate and localize your Next.js app smoothly
                </span>
                <ul>
                  <span className="font-mono">
                    <StarIcon className="w-6 inline-block" /> {g11n}
                  </span>
                </ul>
              </div>
            </li>
            <li className="h-72 w-72 rounded-md bg-gradient-to-tl from-purple-800 to-purple-300 text-black grid place-items-center">
              <div className="h-64 w-64 rounded-lg bg-black grid place-items-center text-purple-200">
                <Link href="/projects/next-g11n">
                  <a className="text-center text-4xl">next-csp</a>
                </Link>
                <span className="text-center text-md">
                  write and test CSP directives for Next.js
                </span>
                <span className="font-mono">
                  <StarIcon className="w-6 inline-block" /> 0
                </span>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </>
  )
}

export const getStaticProps = async () => {
  const repositoriesResp = await fetch(
    'https://api.github.com/users/atilafassina/repos'
  )
  const repositories = await repositoriesResp.json()
  const g11n = repositories.find(
    (repo: Record<string, any>) => repo?.id === NEXT_G11N_ID
  )
  return {
    props: {
      g11n: g11n.stargazers_count as number,
    },
    revalidate: 60,
  }
}

export default About
