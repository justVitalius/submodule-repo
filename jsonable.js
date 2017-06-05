const path = require('path');

module.exports = function jsonable(app, flow, state) {
  return require(
    path.resolve(__dirname, 'schemas', app, flow, state)
  );
}