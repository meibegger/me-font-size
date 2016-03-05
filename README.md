# meFontSize #

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

**WARNING: This project experienced a major update and has been moved to [meUseRem](https://github.com/meibegger/me-use-rem). Please install using [meUseRem](https://github.com/meibegger/me-use-rem) instead.**

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

meFontSize is a small utility script to to track font-resize and convert measurement units.

Currently it supports conversion between `rem` and `px`.

Additionally a `resize` event is triggered when the user resizes the font-size of the browser.

## Usage ##

### 1. Include the JavaScript ###
#### Minified version ####
Include `me-font-size.min.js` included in the `dist` folder in your HTML page.

#### Source version ####
You can find the original JavaScript file in the `src` folder of this package.

#### AMD ####
meFontSize has AMD support. This allows it to be lazy-loaded with an AMD loader, such as RequireJS.

### 2. Use meFontSize ###
Convert px to rem:

```javascript
meFontSize.px2rem(PX-VALUE);
```

Convert rem to px:

```javascript
meFontSize.rem2px(REM-VALUE);
```

Remove the utility

```javascript
meFontSize.destroy();
```

Re-initialize the utility

```javascript
meFontSize.init();
```

## Package managers ##
You can install meFontSize using npm or Bower.

```
$ npm install me-font-size
```

or

```
$ bower install me-font-size
```

## License ##
meFontSize is licenses under the [MIT licence](https://opensource.org/licenses/MIT).