# PostCSS Greyscale [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-greyscale.svg)](https://www.npmjs.com/package/postcss-greyscale)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-greyscale.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-greyscale)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to get the greyscale equivalent of a color


## Installation

```
npm install postcss-greyscale
```

## Examples

```css
/* input */
div { color: greyscale(#34bbed) }
```
```css
/* output */
div { color: #9f9f9f }
```

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-greyscale')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const greyscale = require('postcss-greyscale');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            greyscale()
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
