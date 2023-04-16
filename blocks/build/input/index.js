/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/components/field-controls.js":
/*!*************************************************!*\
  !*** ./blocks/src/components/field-controls.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _render_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-material-icon */ "./blocks/src/components/render-material-icon.js");





const HizzleFieldControls = _ref => {
  let {
    attributes,
    hidePlaceholder,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'hizzle-forms'),
    icon: (0,_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
      d: "M8.23118 8L16 16M8 16L15.7688 8 M6.5054 11.893L17.6567 11.9415M12.0585 17.6563L12 6.5",
      stroke: "currentColor"
    })),
    onClick: () => {
      setAttributes({
        required: !required
      });
    },
    className: attributes.required ? 'is-pressed' : undefined
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Field Settings', 'hizzle-forms')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Field is required', 'hizzle-forms'),
    className: "hizzle-forms-field-label__required",
    checked: attributes.required,
    onChange: value => setAttributes({
      required: value
    })
  }), !hidePlaceholder && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Placeholder text', 'hizzle-forms'),
    value: attributes.placeholder || '',
    onChange: value => setAttributes({
      placeholder: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show visitors an example of the type of content expected. Otherwise, leave blank.', 'hizzle-forms')
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HizzleFieldControls);

/***/ }),

/***/ "./blocks/src/components/render-material-icon.js":
/*!*******************************************************!*\
  !*** ./blocks/src/components/render-material-icon.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const renderMaterialIcon = function (svg) {
  let width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
  let height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 24;
  let viewbox = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0 0 24 24';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: viewbox
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    className: "icon-filler"
  }), svg);
};
/* harmony default export */ __webpack_exports__["default"] = (renderMaterialIcon);

/***/ }),

/***/ "./blocks/src/components/with-edit-wrapper.js":
/*!****************************************************!*\
  !*** ./blocks/src/components/with-edit-wrapper.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WithEditWrapper; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _field_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field-controls */ "./blocks/src/components/field-controls.js");







/**
 * Internal dependencies
 */


/**
 * Returns a function to containing an edit wrapper.
 *
 * @param {Object} attributes The block's attributes. 
 */
function WithEditWrapper(_ref) {
  let {
    attributes,
    setAttributes,
    disableLabel,
    disableHelpText,
    children,
    className,
    isSelected,
    ...props
  } = _ref;
  const showHelpText = !disableHelpText && (isSelected || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(attributes.help));
  const showLabel = !disableLabel && (isSelected || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(attributes.label));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hizzle-forms-field', className)
  }), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "hizzle-forms__field-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "label",
    value: attributes.label,
    className: "hizzle-forms-field-label__input",
    onChange: value => {
      setAttributes({
        label: value
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add label…', 'hizzle-forms')
  })), children, showHelpText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "p",
    value: attributes.help,
    className: "hizzle-forms__help-text",
    onChange: value => setAttributes({
      help: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add help text…', 'hizzle-forms')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_field_controls__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setAttributes: setAttributes,
    attributes: attributes
  }, props)));
}

/***/ }),

/***/ "./blocks/src/components/with-save-wrapper.js":
/*!****************************************************!*\
  !*** ./blocks/src/components/with-save-wrapper.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WithSaveWrapper; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Returns a function to display a field label.
 *
 * @param {Object} attributes The block's attributes.
 * @param {string} attributes.label The label.
 * @param {string} attributes.instanceID The instance ID.
 */
const FieldLabel = _ref => {
  let {
    label,
    instanceID
  } = _ref;
  // Abort if no label.
  if (!label) {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-forms__field-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "label",
    htmlFor: `hizzle-forms-field-${instanceID}`,
    value: label
  }));
};

/**
 * Returns a function to display a field help text.
 *
 * @param {Object} attributes The block's attributes.
 * @param {string} attributes.help The help text.
 */
const HelpText = _ref2 => {
  let {
    help
  } = _ref2;
  // Abort if no help text.
  if (!help) {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-forms__field-help-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: help
  }));
};

/**
 * Returns a function to containing a save wrapper.
 *
 * @param {Object} attributes The block's attributes. 
 */
function WithSaveWrapper(_ref3) {
  let {
    attributes,
    children,
    className,
    customClass
  } = _ref3;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('hizzle-forms-field', className, customClass);
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldLabel, {
    label: attributes.label,
    instanceID: attributes.instanceID
  }), children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HelpText, {
    help: attributes.help
  }));
}

/***/ }),

/***/ "./blocks/src/input/edit.js":
/*!**********************************!*\
  !*** ./blocks/src/input/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_with_edit_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/with-edit-wrapper */ "./blocks/src/components/with-edit-wrapper.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const Edit = _ref => {
  let {
    attributes,
    setAttributes,
    clientId,
    isSelected
  } = _ref;
  // Reset instance ID once.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attributes.instanceID) {
      setAttributes({
        instanceID: clientId
      });
    }
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_with_edit_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: attributes.type,
    className: "hizzle-forms__field-input form-control",
    placeholder: attributes.placeholder,
    value: attributes.value ? attributes.value : '',
    pattern: attributes.pattern,
    "data-instance-id": attributes.instanceID,
    onChange: event => {
      setAttributes({
        value: event.target.value
      });
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.withInstanceId)(Edit));

/***/ }),

/***/ "./blocks/src/input/save.js":
/*!**********************************!*\
  !*** ./blocks/src/input/save.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_with_save_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/with-save-wrapper */ "./blocks/src/components/with-save-wrapper.js");

/**
 * Internal dependencies
 */

const Save = _ref => {
  let {
    attributes
  } = _ref;
  const instanceID = attributes.instanceID || '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_with_save_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attributes: attributes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: attributes.type,
    name: `hizzle-forms[${instanceID}]`,
    id: `hizzle-forms-field-${instanceID}`,
    className: "hizzle-forms__field-input form-control",
    placeholder: attributes.placeholder,
    value: attributes.value ? attributes.value : '',
    required: attributes.required,
    pattern: attributes.pattern,
    "data-instance-id": instanceID
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./blocks/src/input/variations.js":
/*!****************************************!*\
  !*** ./blocks/src/input/variations.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const PRIMARY_COLOR = '#AA00FF';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * The available input variations.
 *
 * @type {WPBlockVariation[]}
 */
const variations = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.compact)([{
  name: 'hizzle-text-input',
  isDefault: true,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line text input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('text', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'text'
  },
  icon: {
    src: 'editor-textcolor',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-password-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Password', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line password input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('password', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'password'
  },
  icon: {
    src: 'lock',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-email-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line email input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('email', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'email'
  },
  icon: {
    src: 'email',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-url-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line URL input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('url', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'url'
  },
  icon: {
    src: 'admin-links',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-tel-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Telephone', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line telephone input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('telephone', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'tel'
  },
  icon: {
    src: 'phone',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-number-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line number input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('number', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'number',
    min: 0,
    max: 10000,
    step: 1
  },
  icon: {
    src: 'editor-ol-rtl',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-range-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Range', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line range input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('range', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'range',
    min: 0,
    max: 100,
    step: 1
  },
  icon: {
    src: 'editor-ol-rtl',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-date-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line date input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('date', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'date'
  },
  icon: {
    src: 'calendar-alt',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-time-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Time', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line time input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('time', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'time'
  },
  icon: {
    src: 'clock',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-month-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Month', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line month input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('month', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'month'
  },
  icon: {
    src: 'calendar-alt',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-week-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Week', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line week input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('week', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'week'
  },
  icon: {
    src: 'calendar-alt',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-color-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a single-line color input field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('color', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('input', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    type: 'color'
  },
  icon: {
    src: 'admin-customizer',
    foreground: PRIMARY_COLOR
  }
}]);

/**
 * Add `isActive` function to all `input` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach(variation => {
  // Add default attributes to the variation.
  variation.attributes = {
    label: '',
    placeholder: '',
    required: false,
    help: '',
    pattern: '',
    value: '',
    ...variation.attributes
  };

  // Example.
  variation.example = {
    attributes: {
      label: variation.title,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your text', 'hizzle-forms'),
      required: true,
      help: variation.description,
      pattern: '',
      type: variation.attributes.type,
      value: ''
    }
  };

  // Add `isActive` function if not defined.
  if (!variation.isActive) {
    variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.type === variationAttributes.type;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./blocks/src/input/block.json":
/*!*************************************!*\
  !*** ./blocks/src/input/block.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/input","title":"Input field","description":"A text input field for forms.","category":"hizzle-forms","keywords":["form","contact","input"],"icon":"editor-textcolor","ancestor":["hizzle-forms/form"],"version":"1.0.0","textdomain":"hizzle-forms","attributes":{"label":{"type":"string","default":"","source":"html","selector":"label"},"placeholder":{"type":"string","default":"","source":"attribute","selector":"input","attribute":"placeholder"},"required":{"type":"boolean","default":false,"source":"attribute","selector":"input","attribute":"required"},"help":{"type":"string","default":"","source":"html","selector":".hizzle-forms__help-text"},"instanceID":{"type":"string","default":"","source":"attribute","selector":"input","attribute":"data-instance-id"},"pattern":{"type":"string","default":""},"type":{"type":"string","default":"text","source":"attribute","selector":"input","attribute":"type"},"value":{"type":"string","default":"","source":"attribute","selector":"input","attribute":"value"}},"example":{"attributes":{"label":"Label","placeholder":"Placeholder","required":true,"help":"Help text","pattern":"[0-9]+","type":"number","value":"123"}},"supports":{"anchor":true,"spacing":{"margin":true,"padding":true},"reusable":false},"editorScript":"file:./index.js"}');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./blocks/src/input/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./blocks/src/input/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/src/input/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/src/input/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variations */ "./blocks/src/input/variations.js");
/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies
 */





// Register the checkbox block.
const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_4__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map