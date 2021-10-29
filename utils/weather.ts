// one day in milliseconds
export const ONE_DAY = 86400000 as const
export const WEATHER_COOKIE = 'realFeelTemp' as const

export const getRealFeel = (cookieString: string): number | null => {
  const partialValue = cookieString.split(`; ${WEATHER_COOKIE}=`).pop() ?? ''
  const cookieValue = partialValue.substring(0, partialValue?.indexOf(';'))

  try {
    return parseInt(cookieValue, 10)
  } catch {
    return null
  }
}
