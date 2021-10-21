const {
  getCSP,
  SELF,
  NONE,
  UNSAFE_INLINE,
  DATA,
  SAME_ORIGIN,
} = require('csp-header')

const sentryPreset = {
  'connect-src': ['o1043271.ingest.sentry.io'],
  'report-uri': process.env.SENTRY_CSP_REPORT_URI,
}

const sitePreset = {
  'default-src': [SELF],
  'script-src': [UNSAFE_INLINE, SELF],
  'connect-src': [SELF],
  'style-src': [UNSAFE_INLINE, SELF],
  'object-src': [NONE],
  'img-src': ['*', DATA],
  'frame-ancestors': [SAME_ORIGIN],
  'child-src': [SELF],
  'frame-src': [SELF],
  'base-uri': [SELF],
  'form-action': [SELF],
}

module.exports = getCSP({
  presets: [sitePreset, sentryPreset],
})
