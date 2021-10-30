import type { FC } from 'react'
import { getWeatherComment } from '@utils/weather'

const Weather: FC<{ temperature: number }> = ({ temperature }) => {
  return (
    <p className="py-8 grid place-items-center text-3xl font-mono text-purple-400">
      {getWeatherComment(temperature)}
    </p>
  )
}

export { Weather }
