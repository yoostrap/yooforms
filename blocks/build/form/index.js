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
    className: "hizzle-forms__field-help-text",
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
    currentUserEmail,
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
    if (to === undefined && currentUserEmail) {
      setAttributes({
        to: currentUserEmail
      });
    }
    if (subject === undefined && siteTitle !== undefined && postTitle !== undefined) {
      const emailSubject = '[' + siteTitle + '] ' + postTitle;
      setAttributes({
        subject: emailSubject
      });
    }
  }, [to, currentUserEmail, subject, siteTitle, postTitle, setAttributes]);
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

  // Checks whether to show the variation picker or the form.
  const showVariationPicker = !hasInnerBlocks && _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockVariation;

  // Displays the variation picker.
  const VariationPicker = () => {
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

  // Displays the form.
  const Form = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Submission Settings', 'hizzle-forms'),
      initialOpen: false
    }, renderSubmissionSettings()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Email Connection', 'hizzle-forms')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_connection_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
      emailAddress: to,
      emailSubject: subject,
      instanceId: instanceId,
      postAuthorEmail: currentUserEmail,
      setAttributes: setAttributes
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: formClassnames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      templateInsertUpdatesSelection: false
    })));
  };

  // Either displays the variation picker or the form.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), showVariationPicker ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(VariationPicker, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Form, null));
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
    getCurrentUser,
    getUser
  } = select('core');
  const innerBlocks = getBlocks(props.clientId);
  const currentUserEmail = getCurrentUser() && getCurrentUser().id && getUser(getCurrentUser().id) && getUser(getCurrentUser().id).email;
  const postTitle = getEditedPostAttribute('title');

  // Prevent the submit button from being removed.
  const submitButton = innerBlocks.find(block => block.name === 'hizzle-forms/submit');
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
    currentUserEmail
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_render_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/render-material-icon */ "./blocks/src/components/render-material-icon.js");





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
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contact Us', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
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
  }], ['hizzle-forms/checkbox', {}], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subscribe', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
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
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send RSVP', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]],
  attributes: {
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
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]],
  attributes: {
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
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Book Appointment', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]],
  attributes: {
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
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Send Feedback', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]],
  attributes: {
    subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('New feedback received from your website', 'hizzle-forms')
  }
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
},
// Email.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for an email address.', 'hizzle-forms'),
  type: 'email',
  inputType: 'email',
  autocomplete: 'email',
  icon: 'email',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your email', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your email address.', 'hizzle-forms'),
      required: true
    }
  }
},
// Text.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input.', 'hizzle-forms'),
  type: 'text',
  inputType: 'text',
  autocomplete: 'on',
  icon: 'editor-textcolor',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your text', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your text.', 'hizzle-forms'),
      required: true
    }
  }
},
// URL.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a URL.', 'hizzle-forms'),
  type: 'url',
  inputType: 'url',
  autocomplete: 'url',
  icon: 'admin-links',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your URL', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your URL.', 'hizzle-forms'),
      required: true
    }
  }
},
// Telephone.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Telephone', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a telephone number.', 'hizzle-forms'),
  type: 'tel',
  inputType: 'tel',
  autocomplete: 'tel',
  icon: 'phone',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Telephone', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your telephone number', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your telephone number.', 'hizzle-forms'),
      required: true
    }
  }
},
// Number.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a number.', 'hizzle-forms'),
  type: 'number',
  inputType: 'number',
  autocomplete: 'on',
  icon: 'editor-ol',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your number', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a number.', 'hizzle-forms'),
      required: true
    }
  }
},
// Date.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a date.', 'hizzle-forms'),
  type: 'date',
  inputType: 'date',
  autocomplete: 'on',
  icon: 'calendar-alt',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your date', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a date.', 'hizzle-forms'),
      required: true
    }
  }
},
// Time.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Time', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a time.', 'hizzle-forms'),
  type: 'time',
  inputType: 'time',
  autocomplete: 'on',
  icon: 'clock',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Time', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your time', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a time.', 'hizzle-forms'),
      required: true
    }
  }
},
// Month.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Month', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a month.', 'hizzle-forms'),
  type: 'month',
  inputType: 'month',
  autocomplete: 'on',
  icon: 'calendar-alt',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Month', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your month', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a month.', 'hizzle-forms'),
      required: true
    }
  }
},
// Week.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Week', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a week.', 'hizzle-forms'),
  type: 'week',
  inputType: 'week',
  autocomplete: 'on',
  icon: 'calendar-alt',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Week', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your week', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a week.', 'hizzle-forms'),
      required: true
    }
  }
},
// Color.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a color.', 'hizzle-forms'),
  type: 'color',
  inputType: 'color',
  autocomplete: 'on',
  icon: 'editor-textcolor',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your color', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a color.', 'hizzle-forms'),
      required: true
    }
  }
},
// Range.
{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Range', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A single line text input for a range.', 'hizzle-forms'),
  type: 'range',
  inputType: 'range',
  autocomplete: 'on',
  icon: 'editor-ol',
  example: {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Range', 'hizzle-forms'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter your range', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a range.', 'hizzle-forms'),
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
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/forms","title":"Form","description":"Displays a form.","category":"hizzle-forms","keywords":["form","contact","input"],"icon":"forms","version":"1.0.0","textdomain":"hizzle-forms","attributes":{"emails":{"type":"array","default":[{"email":"{admin_email}","subject":"New Response: Contact Form","message":"You have received a new response to your contact form. <br><br>Here are the details:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}","active":true},{"email":"{user_email}","subject":"Thank you for contacting us","message":"Thank you for contacting us. We will be in touch with you shortly.<br><br>Here are the details of your message:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}","active":true}]},"action":{"type":"string","default":"message"},"redirect":{"type":"string","default":""},"message":{"type":"string","default":"Thank you for contacting us. We will be in touch with you shortly."},"title":{"type":"string","default":"Contact Form"}},"example":{"innerBlocks":[{"name":"hizzle-forms/name","attributes":{"required":true,"label":"Name"}},{"name":"hizzle-forms/email","attributes":{"required":true,"label":"Email"}},{"name":"hizzle-forms/textarea","attributes":{"required":true,"label":"Message"}},{"name":"hizzle-forms/checkbox","attributes":{"required":true,"label":"I agree to the terms and conditions"}},{"name":"hizzle-forms/submit","attributes":{"text":"Send Message","element":"button","lock":{"remove":true}}}]},"supports":{"anchor":true,"spacing":{"margin":false,"padding":true},"color":{"link":true,"gradients":true},"html":false,"align":["wide","full"]},"editorScript":"file:./index.js","editorStyle":"file:./frontend.css","style":"file:./frontend.css"}');

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