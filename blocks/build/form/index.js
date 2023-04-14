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

/***/ "./blocks/src/components/field-help.js":
/*!*********************************************!*\
  !*** ./blocks/src/components/field-help.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldHelpEdit": function() { return /* binding */ FieldHelpEdit; },
/* harmony export */   "FieldHelpSave": function() { return /* binding */ FieldHelpSave; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Displays a help text editor for a field.
 * @param {Object} attributes The block's attributes. 
 */
const FieldHelpEdit = _ref => {
  let {
    className,
    help,
    helpFieldName,
    placeholder,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: help,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'hizzle-forms__help-text'),
    onChange: value => {
      if (helpFieldName) {
        setAttributes({
          [helpFieldName]: value
        });
        return;
      }
      setAttributes({
        help: value
      });
    },
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter help text…', 'hizzle-forms'),
    withoutInteractiveFormatting: true
  });
};

/**
 * Displays a help text for a field.
 * @param {Object} attributes The block's attributes.
 */
const FieldHelpSave = _ref2 => {
  let {
    className,
    help
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'hizzle-forms__help-text'),
    value: help
  });
};

/***/ }),

/***/ "./blocks/src/components/field-label.js":
/*!**********************************************!*\
  !*** ./blocks/src/components/field-label.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldLabelEdit": function() { return /* binding */ FieldLabelEdit; },
/* harmony export */   "FieldLabelSave": function() { return /* binding */ FieldLabelSave; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Displays a label editor for a field.
 * @param {Object} attributes The block's attributes. 
 */
const FieldLabelEdit = _ref => {
  let {
    className,
    label,
    labelFieldName,
    placeholder,
    resetFocus,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'hizzle-forms__field-label')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "label",
    value: label,
    className: "hizzle-forms-field-label__input",
    onChange: value => {
      resetFocus && resetFocus();
      if (labelFieldName) {
        setAttributes({
          [labelFieldName]: value
        });
        return;
      }
      setAttributes({
        label: value
      });
    },
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add label…', 'hizzle-forms'),
    withoutInteractiveFormatting: true,
    allowedFormats: ['core/bold', 'core/italic']
  }));
};

/**
 * Displays a label for a field.
 * @param {Object} attributes The block's attributes.
 */
const FieldLabelSave = _ref2 => {
  let {
    className,
    label
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'hizzle-forms__field-label')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "label",
    value: label
  }));
};

/***/ }),

/***/ "./blocks/src/components/help-message.js":
/*!***********************************************!*\
  !*** ./blocks/src/components/help-message.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/components/style.scss");




/* harmony default export */ __webpack_exports__["default"] = (_ref => {
  let {
    children = null,
    isError = false,
    ...props
  } = _ref;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('help-message', {
    'help-message-is-error': isError
  });
  return children && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes
  }, props), children);
});

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

/***/ "./blocks/src/components/text-field.js":
/*!*********************************************!*\
  !*** ./blocks/src/components/text-field.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFieldEdit": function() { return /* binding */ TextFieldEdit; },
/* harmony export */   "TextFieldSave": function() { return /* binding */ TextFieldSave; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _field_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-controls */ "./blocks/src/components/field-controls.js");
/* harmony import */ var _field_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-label */ "./blocks/src/components/field-label.js");
/* harmony import */ var _field_help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field-help */ "./blocks/src/components/field-help.js");





/**
 * Internal dependencies
 */



/**
 * Returns a function to edit a text field.
 *
 * @param {Object} attributes The block's attributes. 
 */
function TextFieldEdit(type) {
  type = type || 'text';
  return props => {
    const {
      attributes,
      clientId,
      id,
      isSelected,
      required,
      help,
      label,
      setAttributes,
      placeholder
    } = props;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('hizzle-forms-field', {
      'is-selected': isSelected,
      'has-placeholder': !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(placeholder)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_label__WEBPACK_IMPORTED_MODULE_4__.FieldLabelEdit, {
      attributes: attributes,
      label: label,
      setAttributes: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: `hizzle-forms__field-input hizzle-forms__field-input-${type}`,
      readOnly: true,
      type: type,
      placeholder: placeholder
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_help__WEBPACK_IMPORTED_MODULE_5__.FieldHelpEdit, {
      attributes: attributes,
      setAttributes: setAttributes,
      help: help
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_controls__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      required: required,
      width: width,
      setAttributes: setAttributes,
      placeholder: placeholder,
      attributes: attributes
    }));
  };
}

/**
 * Returns a function to save a text field.
 *
 * @param {Object} attributes The block's attributes. 
 */
function TextFieldSave(type) {
  type = type || 'text';
  return props => {
    const {
      attributes,
      clientId,
      id,
      isSelected,
      required,
      help,
      label,
      setAttributes,
      placeholder
    } = props;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('jetpack-field', {
      'has-placeholder': !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(placeholder)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_label__WEBPACK_IMPORTED_MODULE_4__.FieldLabelSave, {
      attributes: attributes,
      label: label,
      setAttributes: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: `hizzle-forms__field-input hizzle-forms__field-input-${type}`,
      readOnly: true,
      type: type,
      placeholder: placeholder
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_help__WEBPACK_IMPORTED_MODULE_5__.FieldHelpSave, {
      attributes: attributes,
      setAttributes: setAttributes,
      help: help
    })));
  };
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
/* harmony export */   "HizzleFormEdit": function() { return /* binding */ HizzleFormEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_inspector_hint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/inspector-hint */ "./blocks/src/components/inspector-hint.js");
/* harmony import */ var _email_connection_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email-connection-settings */ "./blocks/src/form/email-connection-settings.js");













// Allowed child blocks for the form.
const ALLOWED_BLOCKS = ['hizzle-forms/name', 'hizzle-forms/first-name', 'hizzle-forms/last-name', 'hizzle-forms/email', 'hizzle-forms/text', 'hizzle-forms/email', 'hizzle-forms/number', 'hizzle-forms/url', 'hizzle-forms/tel', 'hizzle-forms/date', 'hizzle-forms/time', 'hizzle-forms/month', 'hizzle-forms/week', 'hizzle-forms/color', 'hizzle-forms/range', 'hizzle-forms/textarea', 'hizzle-forms/checkbox', 'hizzle-forms/radio', 'hizzle-forms/select', 'hizzle-forms/multi-checkbox', 'core/audio', 'core/columns', 'core/group', 'core/heading', 'core/image', 'core/list', 'core/paragraph', 'core/row', 'core/separator', 'core/spacer', 'core/stack', 'core/subhead', 'core/video'];
function HizzleFormEdit(_ref) {
  let {
    attributes,
    setAttributes,
    siteTitle,
    postTitle,
    postAuthorEmail,
    hasInnerBlocks,
    replaceInnerBlocks,
    selectBlock,
    clientId,
    instanceId,
    className,
    blockType,
    variations,
    defaultVariation,
    style
  } = _ref;
  const {
    to,
    subject,
    action,
    redirect,
    message,
    title
  } = attributes;
  const formClassnames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, 'hizzle-forms', {
    'is-placeholder': !hasInnerBlocks && _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockVariation
  });
  const createBlocksFromInnerBlocksTemplate = innerBlocksTemplate => {
    const blocks = (0,lodash__WEBPACK_IMPORTED_MODULE_8__.map)(innerBlocksTemplate, _ref2 => {
      let [name, attr, innerBlocks = []] = _ref2;
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)(name, attr, createBlocksFromInnerBlocksTemplate(innerBlocks));
    });
    return blocks;
  };
  const setVariation = variation => {
    if (variation.attributes) {
      setAttributes(variation.attributes);
    }
    if (variation.innerBlocks) {
      replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(variation.innerBlocks));
    }
    selectBlock(clientId);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (to === undefined && postAuthorEmail) {
      setAttributes({
        to: postAuthorEmail
      });
    }
    if (subject === undefined && siteTitle !== undefined && postTitle !== undefined) {
      const emailSubject = '[' + siteTitle + '] ' + postTitle;
      setAttributes({
        subject: emailSubject
      });
    }
  }, [to, postAuthorEmail, subject, siteTitle, postTitle, setAttributes]);
  const renderSubmissionSettings = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector_hint__WEBPACK_IMPORTED_MODULE_9__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Customize the view after form submission:', 'hizzle-forms')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('On Submission', 'hizzle-forms'),
      value: action,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show a success message', 'hizzle-forms'),
        value: 'message'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Redirect the user', 'hizzle-forms'),
        value: 'redirect'
      }],
      onChange: newMessage => setAttributes({
        customThankyou: newMessage
      })
    }), 'message' === action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Success Message', 'hizzle-forms'),
      value: message,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms'),
      onChange: message => setAttributes({
        message
      })
    }), 'redirect' === action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Redirect URL', 'hizzle-forms'),
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
  const renderVariationPicker = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: formClassnames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalBlockVariationPicker, {
      icon: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(blockType, ['icon', 'src']),
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(blockType, ['title']),
      instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Start building a form by selecting one of these form templates, or search in the patterns library for more forms:', 'hizzle-forms'),
      variations: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.filter)(variations, v => !v.hiddenFromPicker),
      onSelect: function () {
        let nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;
        setVariation(nextVariation);
      }
    }));
  };
  if (!hasInnerBlocks && _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockVariation) {
    return renderVariationPicker();
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Submission Settings', 'hizzle-forms'),
    initialOpen: false
  }, renderSubmissionSettings()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Email Connection', 'hizzle-forms')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_connection_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    emailAddress: to,
    emailSubject: subject,
    instanceId: instanceId,
    postAuthorEmail: postAuthorEmail,
    setAttributes: setAttributes
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: formClassnames,
    style: style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    templateInsertUpdatesSelection: false
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, props) => {
  const {
    getBlockType,
    getBlockVariations,
    getDefaultBlockVariation
  } = select('core/blocks');
  const {
    getBlocks
  } = select('core/block-editor');
  const {
    getEditedPostAttribute
  } = select('core/editor');
  const {
    getSite,
    getUser
  } = select('core');
  const innerBlocks = getBlocks(props.clientId);
  const authorId = getEditedPostAttribute('author');
  const authorEmail = authorId && getUser(authorId) && getUser(authorId).email;
  const postTitle = getEditedPostAttribute('title');
  const submitButton = innerBlocks.find(block => block.name === 'hizzle-forms/button');
  if (submitButton && !submitButton.attributes.lock) {
    const lock = {
      move: false,
      remove: true
    };
    submitButton.attributes.lock = lock;
  }
  return {
    blockType: getBlockType && getBlockType(props.name),
    defaultVariation: getDefaultBlockVariation && getDefaultBlockVariation(props.name, 'block'),
    variations: getBlockVariations && getBlockVariations(props.name, 'block'),
    innerBlocks,
    hasInnerBlocks: innerBlocks.length > 0,
    siteTitle: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(getSite && getSite(), ['title']),
    postTitle: postTitle,
    postAuthorEmail: authorEmail
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => {
  const {
    replaceInnerBlocks,
    selectBlock
  } = dispatch('core/block-editor');
  return {
    replaceInnerBlocks,
    selectBlock
  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withInstanceId])(HizzleFormEdit));

/***/ }),

/***/ "./blocks/src/form/email-connection-settings.js":
/*!******************************************************!*\
  !*** ./blocks/src/form/email-connection-settings.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var _components_help_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/help-message */ "./blocks/src/components/help-message.js");
/* harmony import */ var _components_inspector_hint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/inspector-hint */ "./blocks/src/components/inspector-hint.js");







const JetpackEmailConnectionSettings = _ref => {
  let {
    emailAddress = '',
    emailSubject = '',
    instanceId,
    setAttributes,
    postAuthorEmail
  } = _ref;
  const [emailErrors, setEmailErrors] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const validateEmail = email => {
    email = email.trim();
    if (email.length === 0) {
      return false; // ignore the empty emails
    }

    if (!email_validator__WEBPACK_IMPORTED_MODULE_3__.validate(email)) {
      return {
        email
      };
    }
    return false;
  };
  const hasEmailErrors = () => {
    return emailErrors && emailErrors.length > 0;
  };
  const getEmailErrors = () => {
    if (emailErrors) {
      if (emailErrors.length === 1) {
        if (emailErrors[0] && emailErrors[0].email) {
          return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: placeholder is an email address. */
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s is not a valid email address.', 'jetpack-forms'), emailErrors[0].email);
        }
        return emailErrors[0];
      }
      if (emailErrors.length === 2) {
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: placeholders are email addresses. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s and %2$s are not a valid email address.', 'jetpack-forms'), emailErrors[0].email, emailErrors[1].email);
      }
      const inValidEmails = emailErrors.map(error => error.email);
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: placeholder is a list of email addresses. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s are not a valid email address.', 'jetpack-forms'), inValidEmails.join(', '));
    }
    return null;
  };
  const onBlurEmailField = e => {
    if (e.target.value.length === 0) {
      setEmailErrors(false);
      setAttributes({
        to: postAuthorEmail
      });
      return;
    }
    const error = e.target.value.split(',').map(validateEmail).filter(Boolean);
    if (error && error.length) {
      setEmailErrors(error);
    }
  };
  const onChangeEmailField = email => {
    setEmailErrors(false);
    setAttributes({
      to: email.trim()
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector_hint__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get incoming form responses sent to your email inbox:', 'jetpack-forms')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    "aria-describedby": `contact-form-${instanceId}-email-${hasEmailErrors() ? 'error' : 'help'}`,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email address to send to', 'jetpack-forms'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('name@example.com', 'jetpack-forms'),
    onKeyDown: e => {
      if (event.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    value: emailAddress,
    onBlur: onBlurEmailField,
    onChange: onChangeEmailField,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('You can enter multiple email addresses separated by commas.', 'jetpack-forms')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_help_message__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isError: true,
    id: `contact-form-${instanceId}-email-error`
  }, getEmailErrors()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email subject line', 'jetpack-forms'),
    value: emailSubject,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter a subject', 'jetpack-forms'),
    onChange: newSubject => setAttributes({
      subject: newSubject
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (JetpackEmailConnectionSettings);

/***/ }),

/***/ "./blocks/src/form/index.js":
/*!**********************************!*\
  !*** ./blocks/src/form/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./blocks/src/form/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/src/form/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/src/form/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variations */ "./blocks/src/form/variations.js");
/* harmony import */ var _register_text_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-text-blocks */ "./blocks/src/form/register-text-blocks.js");
/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./blocks/src/form/register-text-blocks.js":
/*!*************************************************!*\
  !*** ./blocks/src/form/register-text-blocks.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/text-field */ "./blocks/src/components/text-field.js");
/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies
 */


/**
 * Default attributes.
 */
const defaultAttributes = {
  label: {
    type: "string",
    default: "",
    source: "html",
    selector: "label"
  },
  required: {
    type: "boolean",
    default: false
  },
  help: {
    type: "string",
    default: ""
  }
};

/**
 * Registers a text input block.
 *
 * @param {string} type The type of input.
 */
const registerTextBlock = type => {
  var inputType = type;
  var autocomplete = false;
  const blockName = `hizzle-forms/${type}`;
  switch (type) {
    case 'name':
    case 'first_name':
    case 'last_name':
      inputType = 'text';
      autocomplete = type;
      break;
    case 'email':
      autocomplete = type;
      break;
  }
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(blockName, {
    attributes: {
      ...defaultAttributes,
      placeholder: {
        type: "string",
        default: "",
        source: "attribute",
        selector: "input",
        attribute: "placeholder"
      }
    },
    edit: (0,_components_text_field__WEBPACK_IMPORTED_MODULE_1__.TextFieldEdit)(inputType),
    save: (0,_components_text_field__WEBPACK_IMPORTED_MODULE_1__.TextFieldSave)(inputType, autocomplete)
  });
};

// Register all text input blocks.
registerTextBlock('name');
registerTextBlock('first-name');
registerTextBlock('last-name');
registerTextBlock('email');
registerTextBlock('text');
registerTextBlock('url');
registerTextBlock('tel');
registerTextBlock('number');
registerTextBlock('date');
registerTextBlock('time');
registerTextBlock('month');
registerTextBlock('week');
registerTextBlock('color');
registerTextBlock('range');

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

/***/ "./blocks/src/form/variations.js":
/*!***************************************!*\
  !*** ./blocks/src/form/variations.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/render-material-icon */ "./blocks/src/components/render-material-icon.js");





const defaultBlockStyling = {
  style: {
    spacing: {
      padding: {
        top: '16px',
        right: '16px',
        bottom: '16px',
        left: '16px'
      }
    }
  }
};
const PRIMARY_COLOR = '#AA00FF';
const variations = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.compact)([{
  name: 'contact-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contact Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a contact form to your page.', 'hizzle-forms'),
  icon: (0,_components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.3203L6.6477 9L12 12.6797L17.3523 9L12 5.3203ZM12 3.5L4 9L12 14.5L20 9L12 3.5Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 18V9H5.5V18C5.5 18.4142 5.83579 18.75 6.25 18.75H17.75C18.1642 18.75 18.5 18.4142 18.5 18V9H20V18C20 19.2426 18.9926 20.25 17.75 20.25H6.25C5.00736 20.25 4 19.2426 4 18Z",
    fill: PRIMARY_COLOR
  })), 24, 24, '0 0 24 24'),
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/email', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Message', 'hizzle-forms')
  }], ['hizzle-forms/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contact Us', 'hizzle-forms'),
    element: 'button',
    lock: {
      remove: true
    }
  }]],
  attributes: {
    ...defaultBlockStyling
  }
}, {
  name: 'newsletter-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Newsletter Sign-up', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A simple way to collect information from folks visiting your site.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('subscribe', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('email', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('signup', 'hizzle-forms')],
  icon: (0,_components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 8C7 7.72386 7.22386 7.5 7.5 7.5H19.5C19.7761 7.5 20 7.72386 20 8V16C20 16.2761 19.7761 16.5 19.5 16.5H10.5V18H19.5C20.6046 18 21.5 17.1046 21.5 16V8C21.5 6.89543 20.6046 6 19.5 6H7.5C6.39543 6 5.5 6.89543 5.5 8V9.5H7V8Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 15.25H3V13.75H9V15.25Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 12.5H4V11H9V12.5Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18H2V16.5H9V18Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.01196 7.56955L6.98815 6.43066L13.5001 12.0123L20.012 6.43066L20.9881 7.56955L13.5001 13.9879L6.01196 7.56955Z",
    fill: PRIMARY_COLOR
  })), 24, 24, '0 0 24 24'),
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/email', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/consent', {}], ['hizzle-forms/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subscribe', 'hizzle-forms'),
    element: 'button',
    lock: {
      remove: true
    }
  }]],
  attributes: {
    ...defaultBlockStyling
  }
}, {
  name: 'rsvp-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('RSVP Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add an RSVP form to your page', 'hizzle-forms'),
  icon: (0,_components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.87868 15.5L5.5 17.8787L5.5 6C5.5 5.72386 5.72386 5.5 6 5.5L18 5.5C18.2761 5.5 18.5 5.72386 18.5 6L18.5 15C18.5 15.2761 18.2761 15.5 18 15.5L7.87868 15.5ZM8.5 17L18 17C19.1046 17 20 16.1046 20 15L20 6C20 4.89543 19.1046 4 18 4L6 4C4.89543 4 4 4.89543 4 6L4 18.9393C4 19.5251 4.47487 20 5.06066 20C5.34196 20 5.61175 19.8883 5.81066 19.6893L8.5 17Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.6087 7.93847L11.4826 13.6692L8.45898 10.5196L9.54107 9.48084L11.3175 11.3313L14.3914 7.06201L15.6087 7.93847Z",
    fill: PRIMARY_COLOR
  })), 24, 24, '0 0 24 24'),
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/email', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Attending?', 'hizzle-forms'),
    required: true,
    options: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Yes', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No', 'hizzle-forms')]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Other Details', 'hizzle-forms')
  }], ['hizzle-forms/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send RSVP', 'hizzle-forms'),
    element: 'button',
    lock: {
      remove: true
    }
  }]],
  attributes: {
    ...defaultBlockStyling,
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A new RSVP from your website', 'hizzle-forms')
  }
}, {
  name: 'registration-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Registration Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a Registration form to your page', 'hizzle-forms'),
  icon: (0,_components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5 5.5V8H20V5.5H22.5V4H20V1.5H18.5V4H16V5.5H18.5ZM12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12H18.5V18C18.5 18.2761 18.2761 18.5 18 18.5H6C5.72386 18.5 5.5 18.2761 5.5 18V6C5.5 5.72386 5.72386 5.5 6 5.5H12V4Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M16.75 17.5V15.5C16.75 13.9812 15.5188 12.75 14 12.75H10C8.48122 12.75 7.25 13.9812 7.25 15.5V17.5H8.75V15.5C8.75 14.8096 9.30964 14.25 10 14.25H14C14.6904 14.25 15.25 14.8096 15.25 15.5V17.5H16.75Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z",
    fill: PRIMARY_COLOR
  })), 24, 24, '0 0 24 24'),
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/email', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/tel', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Phone', 'hizzle-forms')
  }], ['hizzle-forms/select', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How did you hear about us?', 'hizzle-forms'),
    options: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search Engine', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Social Media', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('TV', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Radio', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Friend or Family', 'hizzle-forms')]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Other Details', 'hizzle-forms')
  }], ['hizzle-forms/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send', 'hizzle-forms'),
    element: 'button',
    lock: {
      remove: true
    }
  }]],
  attributes: {
    ...defaultBlockStyling,
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A new registration from your website', 'hizzle-forms')
  }
}, {
  name: 'appointment-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appointment Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add an Appointment booking form to your page', 'hizzle-forms'),
  icon: (0,_components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V8H4V6Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M7 9.25H11V13.25H7V9.25Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 5.5H18C18.2761 5.5 18.5 5.72386 18.5 6V12H20V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V18.5H6C5.72386 18.5 5.5 18.2761 5.5 18V6C5.5 5.72386 5.72386 5.5 6 5.5Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.25 21V15H18.75V21H17.25Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 17.25L21 17.25L21 18.75L15 18.75L15 17.25Z",
    fill: PRIMARY_COLOR
  })), 24, 24, '0 0 24 24'),
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/email', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/tel', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Phone', 'hizzle-forms')
  }], ['hizzle-forms/date', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'hizzle-forms'),
    required: true
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Time', 'hizzle-forms'),
    required: true,
    options: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Morning', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Afternoon', 'hizzle-forms')]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Notes', 'hizzle-forms')
  }], ['hizzle-forms/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Book Appointment', 'hizzle-forms'),
    element: 'button',
    lock: {
      remove: true
    }
  }]],
  attributes: {
    ...defaultBlockStyling,
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A new appointment booked from your website', 'hizzle-forms')
  }
}, {
  name: 'feedback-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Feedback Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a Feedback form to your page', 'hizzle-forms'),
  icon: (0,_components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M16 9.5C16 10.3284 15.3284 11 14.5 11C13.6716 11 13 10.3284 13 9.5C13 8.67157 13.6716 8 14.5 8C15.3284 8 16 8.67157 16 9.5Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z",
    fill: PRIMARY_COLOR
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.16492 14.6566L7.41431 13.7183L8.58561 12.7812L9.33622 13.7195C9.98358 14.5287 10.9637 14.9998 12 14.9998C13.0362 14.9998 14.0163 14.5287 14.6637 13.7195L15.4143 12.7812L16.5856 13.7183L15.835 14.6566C14.903 15.8216 13.4919 16.4998 12 16.4998C10.508 16.4998 9.09693 15.8216 8.16492 14.6566Z",
    fill: PRIMARY_COLOR
  })), 24, 24, '0 0 24 24'),
  innerBlocks: [['hizzle-forms/name', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'hizzle-forms')
  }], ['hizzle-forms/email', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please rate our website', 'hizzle-forms'),
    required: true,
    options: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1 - Very Bad', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2 - Poor', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3 - Average', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4 - Good', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5 - Excellent', 'hizzle-forms')]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How could we improve?', 'hizzle-forms')
  }], ['hizzle-forms/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send Feedback', 'hizzle-forms'),
    element: 'button',
    lock: {
      remove: true
    }
  }]],
  attributes: {
    ...defaultBlockStyling,
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('New feedback received from your website', 'hizzle-forms')
  }
}]);
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

/***/ "./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}

/***/ }),

/***/ "./blocks/src/components/style.scss":
/*!******************************************!*\
  !*** ./blocks/src/components/style.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

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
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/forms","title":"Form","description":"Displays a form.","category":"hizzle-forms","keywords":["form","contact","input"],"icon":"forms","version":"1.0.0","textdomain":"hizzle-forms","attributes":{"subject":{"type":"string","default":"New Response: Contact Form"},"to":{"type":"string"},"action":{"type":"string","default":"message"},"redirect":{"type":"string","default":""},"message":{"type":"string","default":"Thank you for contacting us. We will be in touch with you shortly."},"title":{"type":"string","default":"Contact Form"}},"example":{"innerBlocks":[{"name":"hizzle-forms/name","attributes":{"required":true,"label":"Name"}},{"name":"hizzle-forms/email","attributes":{"required":true,"label":"Email"}},{"name":"hizzle-forms/textarea","attributes":{"required":true,"label":"Message"}},{"name":"hizzle-forms/checkbox","attributes":{"required":true,"label":"I agree to the terms and conditions"}},{"name":"hizzle-forms/submit","attributes":{"text":"Send Message","element":"button","lock":{"remove":true}}}]},"supports":{"anchor":true,"spacing":{"margin":true,"padding":true},"color":{"link":true,"gradients":true},"html":false,"align":["wide","full"]},"editorScript":"file:./index.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form/index": 0,
/******/ 			"form/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhizzle_forms"] = self["webpackChunkhizzle_forms"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["form/style-index"], function() { return __webpack_require__("./blocks/src/form/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map