import { signIn } from 'next-auth/react'
import { LoginIcon } from '@heroicons/react/outline'

const GithubLogin = () => (
  <section className="grid gap-2 text-lg">
    <p>
      With your consent, we will connect to your Github account in order to:
    </p>
    <ol className="list-decimal pl-10">
      <li>Fetch all your followers</li>
      <li>Cross-reference with your Twitter followers</li>
      <li>Give you insight when those networks overlap</li>
    </ol>
    <div className="grid gap-2 text-center mt-32">
      <button
        className="text-3xl block py-4 px-8 border-4 rounded-md border-purple-400 hover:bg-purple-500 focus:bg-purple-500 transition-colors"
        type="submit"
        onClick={() => signIn('github')}
      >
        Github <LoginIcon className="w-8 inline-block relative bottom-1" />
      </button>
      <small>
        only for <code>read</code> access to public information
      </small>
    </div>
  </section>
)

export { GithubLogin }
