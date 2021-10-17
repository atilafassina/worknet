import { CogIcon } from '@heroicons/react/outline'

const Loading = () => (
  <div className="grid place-items-center gap-5">
    <CogIcon className="w-36 text-purple-500 animate-slow-spin" />
    <p>Hold on! We’re cheking for a valid user session...</p>
  </div>
)

export { Loading }
