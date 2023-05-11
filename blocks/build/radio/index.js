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




const HizzleFieldControls = _ref => {
  let {
    attributes,
    hidePlaceholder,
    setAttributes
  } = _ref;
  if (hidePlaceholder) {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Field Settings', 'hizzle-forms')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
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

/***/ "./blocks/src/components/validation-controls.js":
/*!******************************************************!*\
  !*** ./blocks/src/components/validation-controls.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HizzleValidationControls; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validation_rules_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validation/rules/admin */ "./blocks/src/validation/rules/admin.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Allows user to set the validations for a field.
 *
 * @param {Object} props
 * @param {Object} props.attributes
 * @param {Function} props.setAttributes
 * @param {string} props.fieldType
 */
function HizzleValidationControls(_ref) {
  let {
    attributes,
    setAttributes,
    fieldType
  } = _ref;
  // Fetch usable rules for this field type.
  const usableRules = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => _validation_rules_admin__WEBPACK_IMPORTED_MODULE_5__["default"].filter(rule => rule.fieldTypes.includes(fieldType) || rule.fieldTypes.includes('all')), [fieldType]);

  // Get the current validation rules.
  const rules = attributes.validation || [];

  // Remove any rules that are no longer usable.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const preparedRules = [];
    const hasMissingRules = false;
    rules.forEach(rule => {
      if (usableRules.some(usableRule => usableRule.name === rule.name)) {
        preparedRules.push(rule);
      } else {
        hasMissingRules = true;
      }
    });
    if (hasMissingRules) {
      setAttributes({
        validation: preparedRules
      });
    }
  }, [usableRules]);

  // Abort if there are no usable rules.
  if (!usableRules.length) {
    return null;
  }

  // Sets rules.
  const setRules = rules => {
    setAttributes({
      validation: rules
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, usableRules.map(rule => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(UsableRule, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: rule.name
  }, rule, {
    setRules: setRules,
    addedRules: rules
  }))));
}
;

/**
 * Displays a single usable rule.
 *
 * @param {Object} props
 * @param {Object} props.label The rule label
 * @param {Object} props.checkboxLabel The rule checkbox label
 * @param {Object} props.name The rule name
 * @param {Object} props.defaultMessage The rule default message
 * @param {Object} props.edit The rule edit fields
 * @param {Function} props.setRules a function to set the rules
 * @param {Array} props.addedRules The added rules
 * @return {JSX.Element} The add validation.
 */
const UsableRule = _ref2 => {
  let {
    label,
    checkboxLabel,
    name,
    defaultMessage,
    edit,
    setRules,
    addedRules
  } = _ref2;
  // Checks if the rule is added.
  const isAdded = addedRules.some(rule => rule.name === name);

  // The rule.
  const [rule, setRule] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(isAdded ? addedRules.find(rule => rule.name === name) : {
    name
  });

  // Toggles the rule.
  const toggleRule = isActive => {
    const newRules = [...addedRules];

    // Remvoe if not active.
    if (!isActive) {
      const index = newRules.findIndex(rule => rule.name === name);
      newRules.splice(index, 1);
    } else if (!isAdded) {
      newRules.push(rule);
    }
    setRules(newRules);
  };

  // Updates a rule.
  const updateRule = (key, value) => {
    const newRule = {
      ...rule
    };
    newRule[key] = value;
    setRule(newRule);

    // If is added, update the rule.
    if (isAdded) {
      const newRules = [...addedRules];
      const index = newRules.findIndex(rule => rule.name === name);
      newRules[index] = newRule;
      setRules(newRules);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: label,
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: checkboxLabel,
    checked: isAdded,
    onChange: toggleRule
  }), isAdded && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, edit.map((edit, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(EditField, {
    key: index,
    edit: edit,
    rule: rule,
    onChange: value => updateRule(edit.name, value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(EditField, {
    edit: {
      name: 'errorMessage',
      type: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Error message', 'hizzle-forms'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Optional. The error message to display when this rule fails.', 'hizzle-forms'),
      placeholder: defaultMessage
    },
    rule: rule,
    onChange: value => updateRule('errorMessage', value)
  }))));
};

/**
 * Displays a single edit field.
 *
 * @param {Object} props
 * @param {Object} props.edit The edit field
 * @param {Object} props.rule The rule
 * @param {Function} props.onChange The onChange handler
 * @return {JSX.Element} The edit field.
 */
const EditField = _ref3 => {
  let {
    edit,
    rule,
    onChange
  } = _ref3;
  const {
    type,
    name,
    ...props
  } = edit;

  // Render the edit field.
  switch (type) {
    case 'toggle':
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        checked: rule[name] ? rule[name] : false,
        onChange: onChange
      }));
    case 'select':
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        value: rule[name] ? rule[name] : '',
        onChange: onChange
      }));
    default:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        value: rule[name] ? rule[name] : '',
        onChange: onChange
      }));
  }
};

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
/* harmony import */ var _validation_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation-controls */ "./blocks/src/components/validation-controls.js");







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
    fieldType,
    ...props
  } = _ref;
  const showHelpText = !disableHelpText && (isSelected || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(attributes.help));
  const showLabel = !disableLabel && (isSelected || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(attributes.label));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hizzle-forms-field', className)
  }), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "label",
    value: attributes.label,
    className: "hizzle-forms__field-label",
    onChange: value => {
      setAttributes({
        label: value
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add label…', 'hizzle-forms')
  }), children, showHelpText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
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
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_validation_controls__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setAttributes: setAttributes,
    attributes: attributes,
    fieldType: fieldType
  }));
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "label",
    className: "hizzle-forms__field-label",
    htmlFor: `hizzle-forms-field-${instanceID}`,
    value: label
  });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "hizzle-forms__field-help-text",
    value: help
  });
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
  const props = {
    className: classes,
    'data-instance-id': attributes.instanceID
  };
  if (Array.isArray(attributes.validation) && attributes.validation.length > 0) {
    props['data-validation'] = JSON.stringify(attributes.validation);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(props);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldLabel, {
    label: attributes.label,
    instanceID: attributes.instanceID
  }), children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HelpText, {
    help: attributes.help
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-forms__field-error"
  }));
}

/***/ }),

/***/ "./blocks/src/radio/edit.js":
/*!**********************************!*\
  !*** ./blocks/src/radio/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_with_edit_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/with-edit-wrapper */ "./blocks/src/components/with-edit-wrapper.js");
/* harmony import */ var _utils_label_to_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/label-to-name */ "./blocks/src/utils/label-to-name.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const template = [['hizzle-forms/radio-option', {
  "option": "First Option",
  "selected": true
}], ['hizzle-forms/radio-option', {
  "option": "Second Option"
}], ['hizzle-forms/radio-option', {
  "option": "Third Option"
}]];
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
  const expectedName = (0,_utils_label_to_name__WEBPACK_IMPORTED_MODULE_3__["default"])(attributes.label, attributes.instanceID);

  // Ensure name is same as parent.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (expectedName !== attributes.name) {
      setAttributes({
        name: expectedName
      });
    }
  }, [expectedName]);
  const fieldType = attributes.isRadio ? 'text' : 'array';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_with_edit_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    fieldType: fieldType,
    hidePlaceholder: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-forms__radio-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['hizzle-forms/radio-option'],
    template: template
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/src/radio/radio-option.js":
/*!******************************************!*\
  !*** ./blocks/src/radio/radio-option.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_use_parent_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/use-parent-attributes */ "./blocks/src/utils/use-parent-attributes.js");
/* harmony import */ var _utils_register_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/register-block */ "./blocks/src/utils/register-block.js");

/**
 * WordPress dependencies.
 */






/**
 * Internal dependencies
 */


(0,_utils_register_block__WEBPACK_IMPORTED_MODULE_6__["default"])('hizzle-forms/radio-option', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Radio Option', 'hizzle-forms'),
  icon: 'marker',
  category: 'hizzle-forms',
  parent: ['hizzle-forms/radio'],
  attributes: {
    option: {
      type: 'string',
      default: ''
    },
    selected: {
      type: 'boolean',
      default: false
    },
    isRadio: {
      type: 'boolean',
      default: true
    },
    name: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    anchor: true,
    spacing: {
      margin: true,
      padding: true
    },
    reusable: false
  },
  edit: _ref => {
    let {
      clientId,
      onReplace,
      onRemove,
      mergeBlocks,
      attributes,
      setAttributes
    } = _ref;
    const {
      name,
      isRadio
    } = (0,_utils_use_parent_attributes__WEBPACK_IMPORTED_MODULE_5__.useParentAttributes)(clientId);
    const type = isRadio ? 'radio' : 'checkbox';
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: `hizzle-forms__${type}-option`
    });

    // Ensure name is same as parent.
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (name !== attributes.name) {
        setAttributes({
          name: name
        });
      }
    }, [name]);

    // Ensure isRadio is same as parent.
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (isRadio !== attributes.isRadio) {
        setAttributes({
          isRadio: isRadio
        });
      }
    }, [isRadio]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
      icon: "yes",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Selected', 'hizzle-forms'),
      isActive: attributes.selected,
      onClick: () => setAttributes({
        selected: !attributes.selected
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: type,
      checked: attributes.selected,
      readOnly: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "label",
      value: attributes.option,
      onChange: value => setAttributes({
        option: value
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Add option…', 'hizzle-forms'),
      onSplit: (value, isOriginal) => {
        let newAttributes;
        if (isOriginal || value) {
          newAttributes = {
            ...attributes,
            option: value,
            selected: false
          };
        }
        const block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('hizzle-forms/radio', newAttributes);
        if (isOriginal) {
          block.clientId = clientId;
        }
        return block;
      },
      onMerge: mergeBlocks,
      onReplace: onReplace,
      onRemove: onRemove,
      preserveWhiteSpace: false
    })));
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    const {
      option,
      selected,
      isRadio,
      name
    } = attributes;
    const type = isRadio ? 'radio' : 'checkbox';
    const extension = isRadio ? '' : '[]';
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: `hizzle-forms__${type}-option`
    });
    if (!option) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: type,
      name: `hizzle-forms[${name}]${extension}`,
      value: option.replace(/(<([^>]+)>)/ig, ''),
      checked: selected
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "span",
      value: option
    }));
  }
});

/***/ }),

/***/ "./blocks/src/radio/save.js":
/*!**********************************!*\
  !*** ./blocks/src/radio/save.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_with_save_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/with-save-wrapper */ "./blocks/src/components/with-save-wrapper.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const Save = _ref => {
  let {
    attributes
  } = _ref;
  const instanceID = attributes.instanceID || '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_with_save_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hizzle-forms__radio-options",
    id: `hizzle-forms-field-${instanceID}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./blocks/src/radio/variations.js":
/*!****************************************!*\
  !*** ./blocks/src/radio/variations.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const PRIMARY_COLOR = '#AA00FF';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * The available input variations.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [{
  name: 'hizzle-radio-input',
  isDefault: true,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Radio', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a radio select field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('radio', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('select', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    isRadio: true
  },
  icon: {
    src: 'marker',
    foreground: PRIMARY_COLOR
  }
}, {
  name: 'hizzle-checkbox-input',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Multi Checkbox', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a checkbox select field to your form.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('checkbox', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('select', 'hizzle-forms')],
  category: 'hizzle-forms',
  attributes: {
    isRadio: false
  },
  icon: {
    src: 'yes-alt',
    foreground: PRIMARY_COLOR
  }
}];
variations.forEach(variation => {
  // Example.
  variation.example = {
    attributes: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select an option', 'hizzle-forms'),
      validation: [{
        name: 'required'
      }],
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This is a help text.', 'hizzle-forms'),
      isRadio: variation.attributes.isRadio
    },
    innerBlocks: [{
      name: 'hizzle-forms/radio-option',
      attributes: {
        option: 'First Option',
        selected: true
      }
    }, {
      name: 'hizzle-forms/radio-option',
      attributes: {
        option: 'Second Option',
        selected: true
      }
    }, {
      name: 'hizzle-forms/radio-option',
      attributes: {
        option: 'Third Option',
        selected: true
      }
    }]
  };

  // Add `isActive` function if not defined.
  if (!variation.isActive) {
    variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.isRadio === variationAttributes.isRadio;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./blocks/src/utils/label-to-name.js":
/*!*******************************************!*\
  !*** ./blocks/src/utils/label-to-name.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ labelToName; }
/* harmony export */ });
/**
 * Converts a HTML label to a name attribute.
 *
 * @param {string} label The label to convert.
 * @param {string} fallback The fallback name.
 * @return {string} The name attribute.
 */
function labelToName(label) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!label) {
    return fallback;
  }

  // Strip HTML tags.
  let name = label.replace(/(<([^>]+)>)/ig, '');

  // Replace all non-alphanumeric characters with underscores.
  name = label.replace(/[^a-z0-9]/gi, '_').toLowerCase();

  // Remove consecutive underscores.
  name = name.replace(/_+/g, '_');

  // Remove underscores from the start and end.
  name = name.replace(/^_+|_+$/g, '');

  // If the name is empty, use the fallback.
  if (!name) {
    name = fallback;
  }
  return name;
}

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

/***/ "./blocks/src/utils/use-parent-attributes.js":
/*!***************************************************!*\
  !*** ./blocks/src/utils/use-parent-attributes.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useParentAttributes": function() { return /* binding */ useParentAttributes; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const useParentAttributes = clientId => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
  const blockEditor = select('core/block-editor');
  return blockEditor.getBlockAttributes((0,lodash__WEBPACK_IMPORTED_MODULE_1__.first)(blockEditor.getBlockParents(clientId, true)));
});

/***/ }),

/***/ "./blocks/src/validation/rules/admin.js":
/*!**********************************************!*\
  !*** ./blocks/src/validation/rules/admin.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _required__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./required */ "./blocks/src/validation/rules/required.js");
/* harmony import */ var _maxdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maxdate */ "./blocks/src/validation/rules/maxdate.js");
/* harmony import */ var _mindate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mindate */ "./blocks/src/validation/rules/mindate.js");
/* harmony import */ var _maxnumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxnumber */ "./blocks/src/validation/rules/maxnumber.js");
/* harmony import */ var _minnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minnumber */ "./blocks/src/validation/rules/minnumber.js");
/* harmony import */ var _maxitems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maxitems */ "./blocks/src/validation/rules/maxitems.js");
/* harmony import */ var _minitems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minitems */ "./blocks/src/validation/rules/minitems.js");
/* harmony import */ var _maxlength__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maxlength */ "./blocks/src/validation/rules/maxlength.js");
/* harmony import */ var _minlength__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minlength */ "./blocks/src/validation/rules/minlength.js");









/* harmony default export */ __webpack_exports__["default"] = ([_required__WEBPACK_IMPORTED_MODULE_0__.admin, _maxdate__WEBPACK_IMPORTED_MODULE_1__.admin, _mindate__WEBPACK_IMPORTED_MODULE_2__.admin, _maxnumber__WEBPACK_IMPORTED_MODULE_3__.admin, _minnumber__WEBPACK_IMPORTED_MODULE_4__.admin, _maxitems__WEBPACK_IMPORTED_MODULE_5__.admin, _minitems__WEBPACK_IMPORTED_MODULE_6__.admin, _maxlength__WEBPACK_IMPORTED_MODULE_7__.admin, _minlength__WEBPACK_IMPORTED_MODULE_8__.admin]);

/***/ }),

/***/ "./blocks/src/validation/rules/maxdate.js":
/*!************************************************!*\
  !*** ./blocks/src/validation/rules/maxdate.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'maxdate';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Maximum date', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a maximum date?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The oldest date allowed is {threshold}.', 'hizzle-forms');

// Value type.
const fieldTypes = ['date'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'date',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(value) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(config.threshold) && value > config.threshold) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/maxitems.js":
/*!*************************************************!*\
  !*** ./blocks/src/validation/rules/maxitems.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'maxitems';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Maximum items', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a maximum number of selectable items?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You must select at most {threshold} items.', 'hizzle-forms');

// Value type.
const fieldTypes = ['array'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'number',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (value.length > parseInt(config.threshold)) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/maxlength.js":
/*!**************************************************!*\
  !*** ./blocks/src/validation/rules/maxlength.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'maxlength';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Maximum length', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a maximum length?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The value must be at most {threshold} characters long.', 'hizzle-forms');

// Value type.
const fieldTypes = ['text'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'number',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (value.length > parseInt(config.threshold)) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/maxnumber.js":
/*!**************************************************!*\
  !*** ./blocks/src/validation/rules/maxnumber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'maxnumber';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Maximum number', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a maximum number?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The value must be at most {threshold}.', 'hizzle-forms');

// Value type.
const fieldTypes = ['number'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'number',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (parseFloat(value) > parseFloat(config.threshold)) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/mindate.js":
/*!************************************************!*\
  !*** ./blocks/src/validation/rules/mindate.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'mindate';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimum date', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a minimum date?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The earliest date allowed is {threshold}.', 'hizzle-forms');

// Value type.
const fieldTypes = ['date'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'date',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(value) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(config.threshold) && value < config.threshold) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/minitems.js":
/*!*************************************************!*\
  !*** ./blocks/src/validation/rules/minitems.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'minitems';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimum items', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a minimum number of selectable items?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You must select at least {threshold} items.', 'hizzle-forms');

// Value type.
const fieldTypes = ['array'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'number',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (value.length < parseInt(config.threshold)) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/minlength.js":
/*!**************************************************!*\
  !*** ./blocks/src/validation/rules/minlength.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'minlength';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimum length', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a minimum length?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The value must be at least {threshold} characters long.', 'hizzle-forms');

// Value type.
const fieldTypes = ['text'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'number',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (value.length < parseInt(config.threshold)) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/minnumber.js":
/*!**************************************************!*\
  !*** ./blocks/src/validation/rules/minnumber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'minnumber';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimum number', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set a minimum number?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The value must be at least {threshold}.', 'hizzle-forms');

// Value type.
const fieldTypes = ['number'];

// Edit details.
const edit = [{
  name: 'threshold',
  type: 'number',
  label
}];

// Validation function.
const validate = function (value, config) {
  if (parseFloat(value) < parseFloat(config.threshold)) {
    return false;
  }
  return true;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

/***/ }),

/***/ "./blocks/src/validation/rules/required.js":
/*!*************************************************!*\
  !*** ./blocks/src/validation/rules/required.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": function() { return /* binding */ admin; },
/* harmony export */   "checkboxLabel": function() { return /* binding */ checkboxLabel; },
/* harmony export */   "defaultMessage": function() { return /* binding */ defaultMessage; },
/* harmony export */   "edit": function() { return /* binding */ edit; },
/* harmony export */   "fieldTypes": function() { return /* binding */ fieldTypes; },
/* harmony export */   "frontend": function() { return /* binding */ frontend; },
/* harmony export */   "label": function() { return /* binding */ label; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Rule name.
const name = 'required';

// Rule label.
const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Required', 'hizzle-forms');

// Checkbox label.
const checkboxLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is this field required?', 'hizzle-forms');

// Default error message.
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This field is required.', 'hizzle-forms');

// Value type.
const fieldTypes = ['all'];

// Edit details.
const edit = [];

// Validation function.
const validate = function (value, config) {
  return value.length > 0;
};

// Admin export.
const admin = {
  name,
  label,
  checkboxLabel,
  defaultMessage,
  fieldTypes,
  edit
};

// Frontend export.
const frontend = {
  name,
  defaultMessage,
  validate
};

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

/***/ "./blocks/src/radio/block.json":
/*!*************************************!*\
  !*** ./blocks/src/radio/block.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/radio","title":"Radio field","description":"A radio field input for forms.","category":"hizzle-forms","keywords":["form","contact","radio","multi-checkbox"],"icon":"editor-justify","parent":["hizzle-forms/form"],"version":"1.0.0","textdomain":"hizzle-forms","attributes":{"label":{"type":"string","default":"","source":"html","selector":".hizzle-forms__field-label"},"help":{"type":"string","default":"","source":"html","selector":".hizzle-forms__field-help-text"},"instanceID":{"type":"string"},"name":{"type":"string"},"validation":{"type":"array"},"isRadio":{"type":"boolean","default":true}},"example":{"attributes":{"label":"Radio field","validation":[{"name":"required"}],"help":"This is a radio field.","isRadio":true},"innerBlocks":[{"name":"hizzle-forms/radio-option","attributes":{"option":"First Option","selected":true}},{"name":"hizzle-forms/radio-option","attributes":{"option":"Second Option"}},{"name":"hizzle-forms/radio-option","attributes":{"option":"Third Option"}}]},"styles":[{"name":"hizzle-1-6","label":"1/6"},{"name":"hizzle-2-6","label":"2-6"},{"name":"hizzle-3-6","label":"3-6"},{"name":"hizzle-4-6","label":"4-6"},{"name":"hizzle-5-6","label":"5/6"},{"name":"hizzle-full","label":"Full Width","isDefault":true}],"supports":{"anchor":true,"spacing":{"margin":true,"padding":true},"reusable":false},"editorScript":"file:./index.js"}');

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
  !*** ./blocks/src/radio/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./blocks/src/radio/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/src/radio/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/src/radio/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variations */ "./blocks/src/radio/variations.js");
/* harmony import */ var _utils_register_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/register-block */ "./blocks/src/utils/register-block.js");
/* harmony import */ var _radio_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-option */ "./blocks/src/radio/radio-option.js");
/**
 * Internal dependencies
 */






// Register the radio option block.


// Register the radio block.
const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
(0,_utils_register_block__WEBPACK_IMPORTED_MODULE_4__["default"])(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_3__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map