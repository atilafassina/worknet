const {
  getCSP,
  SELF,
  NONE,
  UNSAFE_INLINE,
  DATA,
  UNSAFE_EVAL,
} = require('csp-header')

const sitePreset = {
  'default-src': [SELF],
  'script-src': [UNSAFE_EVAL, SELF],
  'connect-src': [SELF],
  'style-src': [UNSAFE_INLINE, SELF],
  'object-src': [NONE],
  'img-src': ['*', DATA],
  'frame-ancestors': [SELF],
  'child-src': [SELF],
  'frame-src': [SELF],
  'base-uri': [SELF],
  'form-action': [SELF],
  /**
   * @todo
   * fix 404 on report-csp
   */
  'report-uri': '/api/report-csp',
}

module.exports = getCSP({
  presets: [sitePreset],
})
