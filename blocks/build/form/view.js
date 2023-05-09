/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/form/view.scss":
/*!***********************************!*\
  !*** ./blocks/src/form/view.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./blocks/src/form/view.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.scss */ "./blocks/src/form/view.scss");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal dependencies
 */





/**
 * Converts a key to a value or object.
 *
 * key[]=value becomes { key: [ value ] }
 * key[key2]=value becomes { key: { key2: value } }
 * key[key2][key3]=value becomes { key: { key2: { key3: value } } }
 * key[][key3]=value becomes { key: [ { key3: value } ] }
 * key=value becomes { key: value }
 *
 * @param {string} key
 * @param {string} value
 * @param {Object} obj
 * @return {Object}
 */
const keyToValue = (key, value, obj) => {
  if ('' === key) {
    return value;
  }

  // Split the key into parts.
  const parts = key.split('[');

  // If there are no parts, return the value.
  if (parts.length === 1) {
    return {
      ...obj,
      [key]: value
    };
  }

  // If only one part remains, return the value.
  if (parts.length === 2) {
    const [first, second] = parts;
    const innerKey = second.slice(0, -1);

    // If '' === innerKey, it's an array.
    if (innerKey === '') {
      const previous = obj[first] || [];
      previous.push(value);
      return {
        ...obj,
        [first]: previous
      };
    }

    // Otherwise, it's an object.
    const previous = obj[first] || {};
    return {
      ...obj,
      [first]: {
        ...previous,
        [innerKey]: value
      }
    };
  }

  // Otherwise, this is a nested object, e.g  key[key2][key3]=value or key[][key3]=value.
  const [first, ...rest] = parts;
  let innerKey = rest.join('['); // Either key2][key3]=value or ][key3]=value.

  // Process nested object, e.g key2][key3]=value.
  if (!innerKey.startsWith(']')) {
    const previous = obj[first] || {};
    return {
      ...obj,
      [first]: keyToValue(innerKey.replace(/\]/, ''), value, previous)
    };
  }

  // Process nested array, e.g. ][key3]=value.
  const previous = obj[first] || [];

  // Unwrap second key.
  previous.push(keyToValue(innerKey.slice(1).replace(/\[/, '').replace(/\]/, ''), value, {}));
  return {
    ...obj,
    [first]: previous
  };
};

/**
 * 
 * @param {FormData} formData 
 * @returns {Object}
 */
const formDataToObject = formData => {
  let data = {};

  // Convert the form data to an object.
  formData.forEach((value, key) => {
    data = keyToValue(key, value, data);
  });
  return data;
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(() => {
  // Watch for form submissions.
  document.addEventListener('submit', e => {
    // Our forms have the .wp-block-hizzle-forms-form class.
    if (!e.target.classList.contains('wp-block-hizzle-forms-form')) {
      return;
    }

    // Prevent the form from submitting.
    e.preventDefault();

    // Get the form.
    const form = e.target;

    // Get the form ID from data-instance-id attribute.
    const formID = form.dataset.instanceId;

    // Get the form fields.
    const fields = new FormData(form);

    // Add the conversion page to the form fields.
    fields.append('hizzle_conversion_page', window.location.href);
    console.log(formDataToObject(fields));
    // Add submitting class to the form.
    form.classList.add('hizzle-forms-submitting');

    // Post the form.
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/hizzle/v1/forms/submit/' + formID,
      method: 'POST',
      data: formDataToObject(fields)
    }).then(res => {
      if ('message' === res.action) {
        // TODO:
      }
      if ('redirect' === res.action) {
        // TODO:
      }
      return res;
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      // Remove submitting class from the form.
      form.classList.remove('hizzle-forms-submitting');
    });
  });
});
}();
/******/ })()
;
//# sourceMappingURL=view.js.map