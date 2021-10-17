// import styles from '@styles/footer.module.css'
import { AtilaIO } from '@components/atila-logo'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-500">
      <div className="max-w-6xl m-auto grid py-10 px-5 sm:px-0 gap-5 sm:gap-0 grid-cols-1 sm:grid-cols-3 sm:place-items-center">
        <section className="self-start">
          <b>Black Belt</b>
          <ul>
            <li>
              <a href="https://atila.io/bb-kb">Knowledge Base</a>
            </li>
            <li>
              <a href="https://atila.io/bb-src">Github: src</a>
            </li>
            <li>
              <a href="https://atila.io/black-belt">info: workshop</a>
            </li>
            <li>
              <a href="mailto: black-belt@fassina.eu">email: feedback</a>
            </li>
          </ul>
        </section>
        <section className="self-start">
          <b>Study more</b>
          <ul>
            <li>
              <a href="https://github.com/atilafassina/next-g11n">
                Internationalization: next-g11n
              </a>
            </li>
            <li>
              <a href="https://www.smashingmagazine.com/2021/06/breaking-down-bulky-builds-netlify-nextjs/">
                Next.js + Netlify On-Demand Builders
              </a>
            </li>
            <li>
              <a href="https://www.smashingmagazine.com/2021/08/state-management-nextjs/">
                Next.js State Management
              </a>
            </li>
          </ul>
        </section>
        <section className="self-start">
          <b>Evergreen Links</b>
          <ul>
            <li>
              <a href="https://atila.io/twitter">atila/twitter</a>
            </li>
            <li>
              <a href="https://atila.io/smashingmag">atila/smashing mag</a>
            </li>
            <li>
              <a href="https://smashingmagazine.com">smashing magazine</a>
            </li>
          </ul>
        </section>
        <a href="https://atila.io" className="sm:col-span-3 mt-10">
          <AtilaIO />
        </a>
      </div>
    </footer>
  )
}
