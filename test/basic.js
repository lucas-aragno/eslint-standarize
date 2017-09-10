var config = require('../')
var test = require('tape')


test('test basic properties of config', function (t) {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.rules))
  t.end()
})


const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null
}