
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./jswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./jswap-sdk.cjs.development.js')
}
