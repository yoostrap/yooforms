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

/***/ "./blocks/src/components/inspector-hint.js":
/*!*************************************************!*\
  !*** ./blocks/src/components/inspector-hint.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InspectorHint; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function InspectorHint(_ref) {
  let {
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      color: 'rgba( 117, 117, 117, 1 )',
      marginBottom: '24px'
    }
  }, children);
}

/***/ }),

/***/ "./blocks/src/components/logo.js":
/*!***************************************!*\
  !*** ./blocks/src/components/logo.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const Logo = _ref => {
  let {
    width = 24,
    height = 24
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 256 256"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M117.668 4.27984C124.283 1.5395 131.717 1.5395 138.332 4.27984L208.177 33.2105C214.793 35.9508 220.049 41.207 222.79 47.8228L251.72 117.668C254.461 124.283 254.46 131.717 251.72 138.332L222.79 208.177C220.049 214.793 214.793 220.049 208.177 222.79L138.332 251.72C131.717 254.46 124.283 254.46 117.668 251.72L47.8228 222.789C41.207 220.049 35.9508 214.793 33.2105 208.177L4.27984 138.332C1.5395 131.717 1.53951 124.283 4.27984 117.668L33.2105 47.8228C35.9508 41.207 41.207 35.9508 47.8228 33.2105L117.668 4.27984Z",
    fill: "#AA00FF"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M129.613 150.2L125.813 205C125.68 206.067 125.547 206.867 125.413 207.4C125.413 207.8 124.813 208 123.613 208H112.613C105.147 208 99.8133 206.533 96.6133 203.6C93.4133 200.667 91.8133 196.467 91.8133 191C91.8133 188.333 92.0133 183.8 92.4133 177.4C92.8133 170.867 93.3466 163.467 94.0133 155.2C94.6799 146.933 95.3466 138.2 96.0133 129C96.6799 119.8 97.3466 111.133 98.0133 103C98.6799 94.8667 99.2133 87.7333 99.6133 81.6C100.013 75.4667 100.213 71.2667 100.213 69C100.213 67 101.28 66 103.413 66H173.813C174.613 66 175.347 66.2 176.013 66.6C176.68 67 177.013 67.7333 177.013 68.8L176.213 80.6C175.947 84.6 174.813 87.8667 172.813 90.4C170.947 92.8 167.013 94 161.013 94H133.413L131.413 122.2H159.813C160.613 122.2 161.347 122.4 162.013 122.8C162.68 123.2 163.013 123.933 163.013 125L162.213 136.8C161.947 140.8 160.813 144.067 158.813 146.6C156.947 149 153.013 150.2 147.013 150.2H129.613Z",
    fill: "#FAFAFA"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

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

/***/ "./blocks/src/form/edit.js":
/*!*********************************!*\
  !*** ./blocks/src/form/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HizzleFormEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_inspector_hint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/inspector-hint */ "./blocks/src/components/inspector-hint.js");
/* harmony import */ var _email_connection_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-connection-settings */ "./blocks/src/form/email-connection-settings.js");








// Allowed child blocks for the form.
const ALLOWED_BLOCKS = ['hizzle-forms/name', 'hizzle-forms/first-name', 'hizzle-forms/last-name', 'hizzle-forms/input', 'hizzle-forms/textarea', 'hizzle-forms/checkbox', 'hizzle-forms/radio', 'hizzle-forms/select', 'hizzle-forms/multi-checkbox', 'core/audio', 'core/columns', 'core/group', 'core/heading', 'core/image', 'core/list', 'core/paragraph', 'core/row', 'core/separator', 'core/spacer', 'core/stack', 'core/subhead', 'core/video'];
function HizzleFormEdit(_ref) {
  let {
    attributes,
    setAttributes,
    instanceId,
    className,
    style
  } = _ref;
  const {
    emails,
    action,
    redirect,
    message,
    title
  } = attributes;
  const formClassnames = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'hizzle-forms');
  const renderSubmissionSettings = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector_hint__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Customize the view after form submission:', 'hizzle-forms')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('On Submission', 'hizzle-forms'),
      value: action,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show a success message', 'hizzle-forms'),
        value: 'message'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Redirect the user', 'hizzle-forms'),
        value: 'redirect'
      }],
      onChange: newMessage => setAttributes({
        customThankyou: newMessage
      })
    }), 'message' === action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Success Message', 'hizzle-forms'),
      value: message,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms'),
      onChange: message => setAttributes({
        message
      })
    }), 'redirect' === action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Redirect URL', 'hizzle-forms'),
      id: `hizzle-forms-${instanceId}-thankyou-url`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
      id: `hizzle-forms-${instanceId}-thankyou-url`,
      value: redirect,
      className: "hizzle-forms__thankyou-redirect-url",
      onChange: redirect => setAttributes({
        redirect
      })
    })));
  };

  // Display the form.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Submission Settings', 'hizzle-forms'),
    initialOpen: false
  }, renderSubmissionSettings()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_connection_settings__WEBPACK_IMPORTED_MODULE_6__["default"], {
    emails: emails,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: formClassnames,
    style: style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    templateInsertUpdatesSelection: false
  })));
}

/***/ }),

/***/ "./blocks/src/form/email-connection-settings.js":
/*!******************************************************!*\
  !*** ./blocks/src/form/email-connection-settings.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);






/**
 * Displays controls for a single email connection.
 *
 * @param {Object} props
 * @param {number} props.index
 * @param {boolean} props.active
 * @param {boolean} props.canDelete
 * @param {string} props.email
 * @param {string} props.subject
 * @param {string} props.message
 * @param {Function} props.setAttributes
 * @param {Function} props.deleteConnection
 * @param {Function} props.insertConnection
 * @returns {JSX.Element}
 */
const EmailConnection = _ref => {
  let {
    index,
    active,
    email,
    subject,
    message,
    setAttributes,
    canDelete,
    deleteConnection,
    insertConnection
  } = _ref;
  const panelTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email Connection #%d', 'hizzle-forms'), index + 1);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: panelTitle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Active', 'hizzle-forms'),
    help: active ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This connection is active.', 'hizzle-forms') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This connection is inactive.', 'hizzle-forms'),
    checked: active,
    onChange: active => setAttributes({
      active
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email address to send to', 'hizzle-forms'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('{admin_email}, {user_email}, example@gmail.com', 'hizzle-forms'),
    value: email ? email : '',
    onChange: email => setAttributes({
      email
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You can enter multiple email addresses separated by commas.', 'hizzle-forms')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email subject line', 'hizzle-forms'),
    value: subject ? subject : '',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter a subject', 'hizzle-forms'),
    onChange: subject => setAttributes({
      subject
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email message', 'hizzle-forms'),
    value: message ? message : '',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter a message', 'hizzle-forms'),
    onChange: message => setAttributes({
      message
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    isSmall: true,
    onClick: insertConnection
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Connection', 'hizzle-forms'))), canDelete && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isDestructive: true,
    isSmall: true,
    onClick: deleteConnection
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Delete Connection', 'hizzle-forms')))));
};

/**
 * Displays controls for all email connections.
 *
 * @param {Object} props
 * @param {Array} props.emails
 * @param {Function} props.setAttributes
 * @returns {JSX.Element}
 */
const EmailConnections = _ref2 => {
  let {
    emails,
    setAttributes
  } = _ref2;
  // If we have no emails, add a default one.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!Array.isArray(emails) || emails.length === 0) {
      setAttributes({
        emails: [{
          email: "{admin_email}",
          subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New form response', 'hizzle-forms'),
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You have received a new response to your contact form. <br><br>Here are the details:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}', 'hizzle-forms'),
          active: false
        }]
      });
    }
  }, [emails]);

  // Abort if we don't have emails.
  if (!Array.isArray(emails)) {
    return null;
  }

  // Only allow deleting if we have more than one email.
  const canDelete = emails.length > 1;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, emails.map((email, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(EmailConnection, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: index,
    index: index,
    canDelete: canDelete,
    setAttributes: attributes => {
      const newEmails = [...emails];
      newEmails[index] = {
        ...newEmails[index],
        ...attributes
      };
      setAttributes({
        emails: newEmails
      });
    },
    deleteConnection: () => {
      const newEmails = [...emails];
      newEmails.splice(index, 1);
      setAttributes({
        emails: newEmails
      });
    },
    insertConnection: () => {
      const newEmails = [...emails];
      newEmails.splice(index + 1, 0, {
        email: "{admin_email}",
        subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New form response', 'hizzle-forms'),
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You have received a new response to your contact form. <br><br>Here are the details:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}', 'hizzle-forms'),
        active: false
      });
      setAttributes({
        emails: newEmails
      });
    }
  }, email))));
};
/* harmony default export */ __webpack_exports__["default"] = (EmailConnections);

/***/ }),

/***/ "./blocks/src/form/register-text-blocks.js":
/*!*************************************************!*\
  !*** ./blocks/src/form/register-text-blocks.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_with_edit_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/with-edit-wrapper */ "./blocks/src/components/with-edit-wrapper.js");
/* harmony import */ var _components_with_save_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/with-save-wrapper */ "./blocks/src/components/with-save-wrapper.js");
/* harmony import */ var _utils_register_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/register-block */ "./blocks/src/utils/register-block.js");
/* harmony import */ var _utils_input_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/input-types */ "./blocks/src/utils/input-types.js");

/**
 * WordPress dependencies.
 */




/**
 * Internal dependencies
 */





// Create an array of transforms for all input types.
const transforms = _utils_input_types__WEBPACK_IMPORTED_MODULE_6__["default"].map(_ref => {
  let {
    type
  } = _ref;
  return {
    type: 'block',
    blocks: [`hizzle-forms/${type}`],
    transform: attributes => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)(`hizzle-forms/${type}`, attributes)
  };
});

// Loop through all input types and register a block for each.
_utils_input_types__WEBPACK_IMPORTED_MODULE_6__["default"].forEach(metadata => {
  const {
    type,
    inputType,
    autocomplete,
    icon,
    parent,
    ...extra
  } = metadata;
  (0,_utils_register_block__WEBPACK_IMPORTED_MODULE_5__["default"])(`hizzle-forms/${type}`, {
    // The block icon.
    icon,
    // Block attributes.
    attributes: {
      label: {
        type: "string",
        default: ""
      },
      required: {
        type: "boolean",
        default: false
      },
      help: {
        type: "string",
        default: ""
      },
      placeholder: {
        type: "string",
        default: ""
      },
      instanceID: {
        type: "string",
        default: ""
      }
    },
    // The edit component.
    edit: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.withInstanceId)(_ref2 => {
      let {
        attributes,
        setAttributes,
        clientId
      } = _ref2;
      // Reset instance ID once.
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!attributes.instanceID) {
          setAttributes({
            instanceID: clientId
          });
        }
      }, []);
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_with_edit_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: inputType,
        className: "hizzle-forms__field-input form-control",
        placeholder: attributes.placeholder,
        readOnly: true
      }));
    }),
    // The save component.
    save(props) {
      const instanceID = props.attributes.instanceID || '';
      const placeholder = props.attributes.placeholder || '';
      console.log(props.attributes);
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_with_save_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: inputType,
        name: `hizzle-forms[${instanceID}]`,
        id: `hizzle-forms-field-${instanceID}`,
        className: "hizzle-forms__field-input form-control",
        placeholder: placeholder,
        autoComplete: autocomplete
      }));
    },
    // Supports.
    supports: {
      anchor: true,
      spacing: {
        margin: true,
        padding: true
      },
      reusable: false,
      html: false
    },
    // Transforms.
    transforms: {
      to: transforms
    },
    // Block metadata.
    ancestor: ['hizzle-forms/form'],
    version: '1.0.0',
    textdomain: 'hizzle-forms',
    category: 'hizzle-forms',
    keywords: ['text', 'input', type, inputType, icon],
    "$schema": 'https://schemas.wp.org/trunk/block.json',
    apiVersion: 2,
    ...extra
  });
});

/***/ }),

/***/ "./blocks/src/form/save.js":
/*!*********************************!*\
  !*** ./blocks/src/form/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const Save = () => {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./blocks/src/form/submit-button.js":
/*!******************************************!*\
  !*** ./blocks/src/form/submit-button.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies.
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('hizzle-forms/submit', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit Button', 'hizzle-forms'),
  icon: 'button',
  category: 'hizzle-forms',
  ancestor: ['hizzle-forms/form'],
  attributes: {
    text: {
      type: 'string',
      source: 'html',
      selector: 'button',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit', 'hizzle-forms')
    }
  },
  supports: {
    anchor: true,
    spacing: {
      margin: true,
      padding: true
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      text
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: 'hizzle-forms__submit-button button btn'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: "submit"
    }, blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "span",
      value: text,
      onChange: value => setAttributes({
        text: value
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enter button text...', 'hizzle-forms')
    }));
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    const {
      text
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'hizzle-forms__submit-button button btn'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: "submit"
    }, blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "span",
      value: text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit', 'hizzle-forms')
    }));
  }
});

/***/ }),

/***/ "./blocks/src/form/variations.js":
/*!***************************************!*\
  !*** ./blocks/src/form/variations.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/logo */ "./blocks/src/components/logo.js");



const defaultAttributes = {
  emails: [{
    email: '{admin_email}',
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Response: Contact Form', 'hizzle-forms'),
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You have received a new response to your contact form. <br><br>Here are the details:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}', 'hizzle-forms'),
    active: true
  }, {
    email: '{user_email}',
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for contacting us', 'hizzle-forms'),
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for contacting us. We will be in touch with you shortly.<br><br>Here are the details of your message:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}', 'hizzle-forms'),
    active: true
  }],
  action: 'message',
  redirect: '',
  message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms'),
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact Form', 'hizzle-forms')
};
const variations = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.compact)([{
  name: 'hizzle-contact-form',
  isDefault: true,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a contact form to your page.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('contact', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('email', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: defaultAttributes,
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_2__["default"],
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'email',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Message', 'hizzle-forms')
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact Us', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}, {
  name: 'hizzle-newsletter-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Newsletter Sign-up', 'hizzle-forms'),
  category: 'hizzle-forms',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A simple way to collect information from folks visiting your site.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('subscribe', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('email', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('signup', 'hizzle-forms')],
  attributes: {
    ...defaultAttributes,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Newsletter Sign-up', 'hizzle-forms')
  },
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_2__["default"],
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'email',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/checkbox', {}], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subscribe', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}, {
  name: 'hizzle-rsvp-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('RSVP Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add an RSVP form to your page', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('rsvp', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('event', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    ...defaultAttributes,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('RSVP Form', 'hizzle-forms')
  },
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_2__["default"],
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'email',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Attending?', 'hizzle-forms'),
    required: true,
    innerBlocks: [['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yes', 'hizzle-forms'),
      selected: true
    }], ['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No', 'hizzle-forms')
    }]]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Other Details', 'hizzle-forms')
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Send RSVP', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}, {
  name: 'hizzle-registration-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Registration Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a Registration form to your page', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('register', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('event', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    ...defaultAttributes,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Registration Form', 'hizzle-forms')
  },
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_2__["default"],
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'email',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    type: 'tel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone', 'hizzle-forms')
  }], ['hizzle-forms/select', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('How did you hear about us?', 'hizzle-forms'),
    options: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Engine', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Social Media', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('TV', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Radio', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Friend or Family', 'hizzle-forms')]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Other Details', 'hizzle-forms')
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Send', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}, {
  name: 'hizzle-appointment-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Appointment Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add an Appointment booking form to your page', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('appointment', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('event', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    ...defaultAttributes,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Appointment Form', 'hizzle-forms')
  },
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_2__["default"],
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'tel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'tel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    type: 'tel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'hizzle-forms'),
    required: true
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Time', 'hizzle-forms'),
    required: true,
    innerBlocks: [['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Morning', 'hizzle-forms'),
      selected: true
    }], ['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Afternoon', 'hizzle-forms')
    }]]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Notes', 'hizzle-forms')
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Book Appointment', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}, {
  name: 'hizzlefeedback-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Feedback Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a Feedback form to your page', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('feedback', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('event', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    ...defaultAttributes,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Feedback Form', 'hizzle-forms')
  },
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_2__["default"],
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/input', {
    required: true,
    type: 'tel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please rate our website', 'hizzle-forms'),
    required: true,
    innerBlocks: [['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1 - Very Bad', 'hizzle-forms'),
      selected: true
    }], ['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2 - Poor', 'hizzle-forms')
    }], ['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3 - Average', 'hizzle-forms')
    }], ['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4 - Good', 'hizzle-forms')
    }], ['hizzle-forms/radio-option', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5 - Excellent', 'hizzle-forms')
    }]]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('How could we improve?', 'hizzle-forms')
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Send Feedback', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}]);
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./blocks/src/utils/input-types.js":
/*!*****************************************!*\
  !*** ./blocks/src/utils/input-types.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies.
 */


// Register all text input blocks.
const inputTypes = [
// Full name.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a name.', 'hizzle-forms'),
  type: 'name',
  inputType: 'text',
  autocomplete: 'name',
  icon: 'admin-users',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your name', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your full name.', 'hizzle-forms'),
      required: true
    }
  }
},
// First name.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First Name', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a first name.', 'hizzle-forms'),
  type: 'first-name',
  inputType: 'text',
  autocomplete: 'given-name',
  icon: 'admin-users',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First Name', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your first name', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your first name.', 'hizzle-forms'),
      required: true
    }
  }
},
// Last name.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last Name', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a last name.', 'hizzle-forms'),
  type: 'last-name',
  inputType: 'text',
  autocomplete: 'family-name',
  icon: 'admin-users',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last Name', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your last name', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your last name.', 'hizzle-forms'),
      required: true
    }
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (inputTypes);

/***/ }),

/***/ "./blocks/src/utils/register-block.js":
/*!********************************************!*\
  !*** ./blocks/src/utils/register-block.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ registerHizzleBlockType; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies.
 */

const PRIMARY_COLOR = '#AA00FF';

/**
 * Registers a block type provided a unique name and an object defining its.
 *
 * @param {string} name     Block name.
 * @param {Object} settings Block settings.
 */
function registerHizzleBlockType(name, settings) {
  // If the name is not prefixed with hizzle-forms, add it.
  if (name.indexOf('hizzle-forms/') !== 0) {
    name = 'hizzle-forms/' + name;
  }

  // If we have a string icon, add color.
  if (typeof settings.icon === 'string') {
    settings.icon = {
      src: settings.icon,
      foreground: PRIMARY_COLOR
    };
  }

  // Register the block.
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, settings);
}

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

/***/ "./blocks/src/form/block.json":
/*!************************************!*\
  !*** ./blocks/src/form/block.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/forms","title":"Form","description":"Displays a form.","category":"hizzle-forms","keywords":["form","contact","input"],"icon":"forms","version":"1.0.0","textdomain":"hizzle-forms","attributes":{"emails":{"type":"array","default":[{"email":"{admin_email}","subject":"New Response: Contact Form","message":"You have received a new response to your contact form. <br><br>Here are the details:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}","active":true},{"email":"{user_email}","subject":"Thank you for contacting us","message":"Thank you for contacting us. We will be in touch with you shortly.<br><br>Here are the details of your message:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}","active":true}]},"action":{"type":"string","default":"message"},"redirect":{"type":"string","default":""},"message":{"type":"string","default":"Thank you for contacting us. We will be in touch with you shortly."},"title":{"type":"string","default":"Contact Form"}},"example":{"innerBlocks":[{"name":"hizzle-forms/name","attributes":{"required":true,"label":"Name"}},{"name":"hizzle-forms/input","attributes":{"required":true,"type":"email","label":"Email"}},{"name":"hizzle-forms/textarea","attributes":{"required":true,"label":"Message"}},{"name":"hizzle-forms/checkbox","attributes":{"required":true,"label":"I agree to the terms and conditions"}},{"name":"hizzle-forms/submit","attributes":{"text":"Send Message","element":"button","lock":{"remove":true}}}]},"supports":{"anchor":true,"spacing":{"blockGap":true,"units":["px","em","rem","vh","vw"],"margin":false,"padding":true},"color":{"link":true,"gradients":true},"html":false,"align":["wide","full"]},"editorScript":"file:./index.js","editorStyle":"frontend","style":"frontend"}');

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
/*!**********************************!*\
  !*** ./blocks/src/form/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./blocks/src/form/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/src/form/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/src/form/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variations */ "./blocks/src/form/variations.js");
/* harmony import */ var _register_text_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-text-blocks */ "./blocks/src/form/register-text-blocks.js");
/* harmony import */ var _submit_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-button */ "./blocks/src/form/submit-button.js");
/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies
 */






// Register the submit button block.

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