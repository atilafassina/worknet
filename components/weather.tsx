import type { FC } from 'react'

const Weather: FC<{ temperature: number }> = ({ temperature }) => {
  return <p>temperature: {temperature}</p>
}

export { Weather }
