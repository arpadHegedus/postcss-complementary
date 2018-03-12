const chromatism = require('chromatism')
const postcss = require('postcss')
const util = require('postcss-plugin-utilities')

function complementary (object, color) {
  color = util.getRGB(color)
  if (!color.r && !color.g && !color.b) return color
  color = Object.assign(color, chromatism.complementary(color).rgb)
  return color.a ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : chromatism.convert(color).hex
}

module.exports = postcss.plugin('complementary', opt => css => {
  util.parseFunction(css, 'complementary', complementary)
})
