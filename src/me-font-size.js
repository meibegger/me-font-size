;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.meFontSize = factory();
  }
} (this, function() {
  'use strict';

  /**
   * me-font-size - A utility script to track font-resize and convert measurement units
   *
   * @link https://github.com/meibegger/me-font-size
   * @license MIT
   */

  var

  /*
   ---------------
   settings
   ---------------
   */

  // check font-resize interval in ms
    intervalTime = 500,

  /*
   ---------------
   variables
   ---------------
   */

  // save how many px 1 rem has
    remPx = 0,

  // cache the rem-measurement element
    remElement,

  // remember the check-interval
    checkInterval = null
  ;

  /*
   ---------------
   functions
   ---------------
   */

  /**
   * Create the rem-measurement element
   */
  function createRemElement () {
    var body = document.body;

    // create the rem-measurement element
    remElement = document.createElement('div');

    // set the dimensions to 1rem
    remElement.style.width = '1rem';
    remElement.style.height = '1rem';

    // position the element outside of the screen
    remElement.style.position = 'absolute';
    remElement.style.top = '-10000em';
    remElement.style.left = '-10000em';

    // insert the rem-measurement element as first child of the body
    body.insertBefore(remElement,body.firstChild);
  }

  /**
   * Destroy the rem-measurement element
   */
  function destroyRemElement () {
    document.body.removeChild(remElement);
  }

  /**
   * Get the px value for 1rem
   * @returns {number}
   */
  function getRemPx () {
    return remElement.offsetWidth;
  }

  /**
   * Save the px value for 1rem
   * @param val
   */
  function setRemPx (val) {
    remPx = val || getRemPx();
  }

  /**
   * Initialize the interval checking for font-resize
   */
  function startCheckInterval () {
    checkInterval = setInterval(checkFontResize, intervalTime);
  }

  /**
   * Stop the interval checking for font-resize
   */
  function stopCheckInterval () {
    clearInterval(checkInterval);
    checkInterval = null;
  }

  /**
   * Check if the font has been resized
   */
  function checkFontResize () {
    var currentRemPx = getRemPx();

    if (currentRemPx !== remPx) { // font-size has changed

      // save the new value
      setRemPx(currentRemPx);

      // trigger a "resize" event
      if (document.createEvent) { // W3C conforming
        var ev = document.createEvent('Event');
        ev.initEvent('resize', true, true);
        window.dispatchEvent(ev);
      }
      else { // IE
        var element = document.documentElement;
        var event = document.createEventObject();
        element.fireEvent("onresize",event);
      }
    }
  }

  /**
   * Convert px to rem
   * @param px
   * @returns {number}
   */
  function px2Rem (px) {
    return remPx ? px/remPx : -1;
  }

  /**
   * Convert rem to px
   * @param rem
   * @returns {number}
   */
  function rem2Px (rem) {
    return remPx ? rem*remPx : -1;
  }

  /**
   * Destroy the utility
   */
  function destroy () {
    stopCheckInterval();
    destroyRemElement();
  }

  /*
   ---------------
   initialization
   ---------------
   */

  function init() {
    if (!checkInterval) { // utility not initialized
      createRemElement();
      setRemPx();
      startCheckInterval();
    }
  }

  // initialize the utility as soon as the document has finished loading. We can now access the DOM elements.
  if (document.readyState !== 'loading') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', function loaded() {
      window.removeEventListener('DOMContentLoaded', loaded);
      init();
    });
  }

  /*
   ---------------
   api
   ---------------
   */

  return {
    px2Rem: px2Rem,
    rem2Px: rem2Px,
    destroy: destroy,
    init: init
  };

}));
