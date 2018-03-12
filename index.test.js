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

it('can set greyscale color', testCode(
  'div { color: greyscale(#34bbed) }',
  'div { color: #9f9f9f }'
))