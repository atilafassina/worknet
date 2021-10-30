// one day in milliseconds
export const ONE_DAY = 86400000 as const
export const WEATHER_COOKIE = 'realFeelTemp' as const

export const getWeatherComment = (temperature: number) => {
  if (temperature <= 0) {
    return '☃️ It’s super cold. I hope it snows!'
  } else if (temperature <= 15) {
    return '🧥 It’s a bit cold. Better get a jacket!'
  } else if (temperature <= 20) {
    return '🚴 It’s warm. Great weather to ride a bike.'
  } else {
    return '🏖 It’s warm super hot. I hope you’re at a beach!'
  }
}
