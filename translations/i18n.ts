import { dictionary } from './dictionary'

export type Locale = keyof typeof dictionary
type Term = keyof typeof dictionary[Locale]

/**
 *
 * options:
 * - interpolation string
 * - use term with fallback
 *
 * check for string interpolation
 * use string interpolation
 * translate string interpolation if it's a term
 *
 */

export const useI18n = (locale: Locale, useFallback = false) => ({
  translate: (term: Term) => {
    if (!Boolean(dictionary[locale][term] && !useFallback)) {
      throw new Error(`missing translation for ${term} on locale: ${locale}`)
    }

    return Boolean(dictionary[locale][term]) ? dictionary[locale][term] : term
  },
})
