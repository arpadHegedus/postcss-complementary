const chromatism = require('chromatism')
const postcss = require('postcss')
const util = require('postcss-plugin-utilities')
let settings = { uniform: true }

function complementary(obj, color, mode = null) {
  mode = mode === 'uniform' || mode === 'true' || mode === null && settings.uniform === true ? 'uniform' : 'normal'
  color = util.getRGB(color)
  if (!color.r && !color.g && !color.b) return color
  color = Object.assign(color, mode === 'uniform' ? chromatism.uniformComplementary(color).rgb : chromatism.complementary(color).rgb)
  return color.a ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : chromatism.convert(color).hex
}

module.exports = postcss.plugin('complementary', opt => css => {
  settings = Object.assign(settings, opt)
  util.parseFunction(css, 'complementary', complementary)
})
