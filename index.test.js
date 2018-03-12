const plugin = require('./')
const postcss = require('postcss')
function testCode(code, expected, options = {}, plugins = []) {
  return () => {
    if (plugins.length === 0) plugins.push(plugin(options));
    return postcss(plugins)
      .process(code, { from: undefined })
      .then(result => {
        expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
      })
  }
}

it('can set uniform complementary color', testCode(
  'div { color: complementary(#34bbed) }',
  'div { color: #e6a12d }'
))

it('can set perfect complementary color', testCode(
  'div { color: complementary(#34bbed, false) }',
  'div { color: #ed6634 }'
))