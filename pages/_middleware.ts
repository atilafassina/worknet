import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { WEATHER_COOKIE, ONE_DAY } from '@utils/weather'

export async function middleware(req: NextRequest) {
  const weather = await fetch(
    `https://wttr.in/${req.geo.city ?? req.ip}?format=j1`
  )

  const { current_condition = [] } = await weather.json()
  const res = NextResponse.next()

  if (!req.cookies[WEATHER_COOKIE]) {
    res.cookie(WEATHER_COOKIE, current_condition[0].FeelsLikeC, {
      maxAge: ONE_DAY,
    })
  }

  return res
}
