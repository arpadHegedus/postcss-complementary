# PostCSS Complementary [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-complementary.svg)](https://www.npmjs.com/package/postcss-complementary)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-complementary.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-complementary)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to get the complementary of a color


## Installation

```
npm install postcss-complementary
```

## Examples

### Get complementary of a color

```css
/* input */
div { color: complementary(#34bbed) }
```
```css
/* output */
div { color: #ed6634 }
```

### Get a uniform complementary of a color (complementary that also has the same apparent lightness)

```css
/* input */
div { color: complementary(#34bbed, uniform) }
```
```css
/* output */
div { color: #e6a12d }
```

## Options

| Option | Type | Default | Description |
|:---:|:---:|:---:|:---:|
| `uniform` | Boolean | `false` | Whether or not to use the uniform complementary as the default for the plugin |


## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-complementary')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const complementary = require('postcss-complementary');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            complementary()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
