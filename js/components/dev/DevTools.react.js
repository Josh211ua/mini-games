if (process.env.NODE_ENV === 'production') {
  module.exports = require('./devTools.react.prod');
} else {
  module.exports = require('./devTools.react.dev');
}