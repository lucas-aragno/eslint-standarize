const eslint = require('eslint')
const test = require('tape')

const CLIEngine = eslint.CLIEngine

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: 'index.js'
})

const NoErrors = 'const foo = 1\nconst bar = () => {}\nbar(foo)\n'
const OneError = 'var arr = [1, 2, 3, 4,]\n'

test('load config in eslint to validate all rule syntax is correct', function(
  t
) {
  t.equal(cli.executeOnText(NoErrors).errorCount, 0)
  t.equal(cli.executeOnText(OneError).errorCount, 2)
  t.end()
})