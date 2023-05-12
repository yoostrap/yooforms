/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/validation/frontend.js":
/*!*******************************************!*\
  !*** ./blocks/src/validation/frontend.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initForm; }
/* harmony export */ });
/* harmony import */ var _rules_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules/frontend */ "./blocks/src/validation/rules/frontend.js");


/**
 * Container for a single field.
 */
class Field {
  /**
   * @var {boolean} submissionAttempted Checks if submission was attempted.
   */
  submissionAttempted = false;

  /**
   * @var {Array} errors Holds all errors for this field.
   */
  errors = [];

  /**
   * @var {Array} rules Holds all rules for this field.
   */
  rules = [];

  /**
   * @var {Element} field The HTML element.
   */
  field = null;

  /**
   * Class constructor.
   *
   * @param {Element} field The HTML element.
   * @param {Array} rules The rules for this field.
   */
  constructor(field, rules) {
    this.field = field;
    this.rules = rules;
    this.initEventListeners();
  }

  /**
   * Inits event listeners.
   */
  initEventListeners() {
    // Search for :input elements in the field.
    // This includes input, select and textarea elements.
    this.field.querySelectorAll('input, select, textarea').forEach(input => {
      // On blur, set touched to true and validate.
      input.addEventListener('blur', () => {
        this.validate();
      });

      // On input, validate if submission was attempted.
      input.addEventListener('input', () => {
        if (this.submissionAttempted) {
          this.validate();
        }
      });
    });
  }

  /**
   * Validates the field.
   */
  validate() {
    this.errors = [];
    const value = this.getValue();

    // Loop through all rules.
    this.rules.forEach(rule => {
      // Abort if not supported.
      if (!_rules_frontend__WEBPACK_IMPORTED_MODULE_0__["default"][rule.name]) {
        return;
      }

      // Validate.
      if (_rules_frontend__WEBPACK_IMPORTED_MODULE_0__["default"][rule.name].validate(value, rule)) {
        return;
      }

      // Prepare the error message.
      let errorMessage = rule.errorMessage || _rules_frontend__WEBPACK_IMPORTED_MODULE_0__["default"][rule.name].defaultMessage;

      // Replace placeholders.
      Object.keys(rule).forEach(key => {
        errorMessage = errorMessage.replace(`{${key}}`, rule[key]);
      });

      // Add error.
      this.errors.push(errorMessage);
    });

    // Hides or shows the error message.
    this.toggleError();
  }

  /**
   * Retrieves the current field value.
   */
  getValue() {
    // Radio and multiple checkboxes.
    if (this.field.classList.contains('wp-block-hizzle-forms-radio')) {
      // Loop through all inputs.
      const checkedCheckboxes = [];
      let isCheckbox = false;
      this.field.querySelectorAll('input').forEach(input => {
        isCheckbox = 'checkbox' === input.type;

        // If type === radio, return if checked.
        if (!isCheckbox && input.checked) {
          return input.value;
        }

        // If type === checkbox, push to array if checked.
        if (isCheckbox && input.checked) {
          checkedCheckboxes.push(input.value);
        }
      });
      return isCheckbox ? checkedCheckboxes : '';
    }

    // Checkbox.
    if (this.field.classList.contains('wp-block-hizzle-forms-checkbox')) {
      const checkbox = this.field.querySelector('input[type="checkbox"]');
      return checkbox ? checkbox.checked : false;
    }

    // Others.
    const input = this.field.querySelector('select, input, textarea');
    return input ? input.value : '';
  }

  /**
   * Toggles the error message.
   *
   * Message container is .hizzle-forms__field-error
   */
  toggleError() {
    const errorContainer = this.field.querySelector('.hizzle-forms__field-error');

    // If there are errors, show the first one.
    if (this.errors.length) {
      errorContainer.innerHTML = this.errors[0];
      this.field.classList.add('hizzle-forms__field--has-error');
      return;
    }

    // Otherwise, hide the error message.
    errorContainer.innerHTML = '';
    this.field.classList.remove('hizzle-forms__field--has-error');
  }
}

/**
 * Handles form validation.
 *
 * @param {Element} form
 * @return {Object}
 */
function initForm(form) {
  const fields = {};

  // Loop through all fields.
  // Each field wrapper has the .hizzle-forms-field class.
  form.querySelectorAll('.hizzle-forms-field').forEach(field => {
    const instanceID = field.dataset.instanceId;
    try {
      let validation = field.dataset.validation ? JSON.parse(field.dataset.validation) : [];

      // Skip if field has not data-validation attribute.
      if (!Array.isArray(validation)) {
        validation = [];
      }
      if (instanceID) {
        fields[instanceID] = new Field(field, validation);
      }
    } catch (e) {
      fields[instanceID] = new Field(field, []);
      console.error(e);
    }
  });
  return {
    /**
     * @var {Array} errors Custom error messages.
     */
    errors: [],
    /**
     * @var {Field} fields Tracked form fields.
     */
    fields,
    /**
     * Validates the form.
     *
     * @return {boolean} True if valid, false if not.
     */
    validate() {
      let hasError = false;
      this.errors = [];

      // Loop through all fields.
      Object.keys(fields).forEach(field => {
        fields[field].submissionAttempted = true;
        fields[field].validate();
        if (fields[field].errors.length) {
          hasError = true;
        }
      });
      return !hasError;
    },
    /**
     * Displays a custom error message.
     *
     * @param {string} errorCode The error code.
     * @param {string} errorMessage The error message.
     */
    displayError(errorCode, errorMessage) {
      // Is there a field with this error code?
      if (fields[errorCode]) {
        fields[errorCode].errors = [errorMessage];
        fields[errorCode].toggleError();
        return;
      }

      // Otherwise, add the error to the global errors array.
      this.errors = [errorMessage];
      this.toggleError();
    },
    /**
     * Toggles the error message.
     *
     * Message container is .hizzle-forms__form-error
     */
    toggleError() {
      const errorContainer = form.querySelector('.hizzle-forms__form-error');

      // If there are errors, show the first one.
      if (this.errors.length) {
        errorContainer.innerHTML = this.errors[0];
        errorContainer.classList.add('hizzle-forms__form--has-error');
        return;
      }

      // Otherwise, hide the error message.
      errorContainer.innerHTML = '';
      errorContainer.classList.remove('hizzle-forms__form--has-error');
    }
  };
}

/***/ }),

/***/ "./blocks/src/validation/rules/frontend.js":
/*!*************************************************!*\
  !*** ./blocks/src/validation/rules/frontend.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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









/* harmony default export */ __webpack_exports__["default"] = ({
  [_required__WEBPACK_IMPORTED_MODULE_0__.frontend.name]: _required__WEBPACK_IMPORTED_MODULE_0__.frontend,
  [_maxdate__WEBPACK_IMPORTED_MODULE_1__.frontend.name]: _maxdate__WEBPACK_IMPORTED_MODULE_1__.frontend,
  [_mindate__WEBPACK_IMPORTED_MODULE_2__.frontend.name]: _mindate__WEBPACK_IMPORTED_MODULE_2__.frontend,
  [_maxnumber__WEBPACK_IMPORTED_MODULE_3__.frontend.name]: _maxnumber__WEBPACK_IMPORTED_MODULE_3__.frontend,
  [_minnumber__WEBPACK_IMPORTED_MODULE_4__.frontend.name]: _minnumber__WEBPACK_IMPORTED_MODULE_4__.frontend,
  [_maxitems__WEBPACK_IMPORTED_MODULE_5__.frontend.name]: _maxitems__WEBPACK_IMPORTED_MODULE_5__.frontend,
  [_minitems__WEBPACK_IMPORTED_MODULE_6__.frontend.name]: _minitems__WEBPACK_IMPORTED_MODULE_6__.frontend,
  [_maxlength__WEBPACK_IMPORTED_MODULE_7__.frontend.name]: _maxlength__WEBPACK_IMPORTED_MODULE_7__.frontend,
  [_minlength__WEBPACK_IMPORTED_MODULE_8__.frontend.name]: _minlength__WEBPACK_IMPORTED_MODULE_8__.frontend
});

/***/ }),

/***/ "./blocks/src/validation/rules/maxdate.js":
/*!************************************************!*\
  !*** ./blocks/src/validation/rules/maxdate.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const defaultMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The latest date allowed is {threshold}.', 'hizzle-forms');

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
const validate = function (value) {
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.scss */ "./blocks/src/form/view.scss");
/* harmony import */ var _validation_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/frontend */ "./blocks/src/validation/frontend.js");
/**
 * WordPress dependencies
 */




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
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  // Init all forms.
  const forms = document.querySelectorAll('.wp-block-hizzle-forms-form');

  // Loop through each form.
  forms.forEach(form => {
    const validation = (0,_validation_frontend__WEBPACK_IMPORTED_MODULE_4__["default"])(form);

    // Reset error message when a field changes.
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('change', () => {
        if (validation.errors.length > 0) {
          validation.errors = [];
          validation.toggleError();
        }
      });
    });

    // Scrolls to the first error.
    const scrollToFirstError = () => {
      const firstError = form.querySelector('.hizzle-forms__field--has-error');
      if (firstError) {
        firstError.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    // Watch for submissions.
    form.addEventListener('submit', e => {
      // Prevent the form from submitting.
      e.preventDefault();

      // Abort if the form is invalid.
      if (!validation.validate()) {
        // Scroll to the first error.
        scrollToFirstError();
        return;
      }

      // Get the form ID from data-instance-id attribute.
      const formID = form.dataset.instanceId;

      // Get the form fields.
      const fields = new FormData(form);

      // Add the conversion page to the form fields.
      fields.append('hizzle_conversion_page', window.location.href);

      // Add submitting class to the form.
      form.classList.add('hizzle-forms-submitting');

      // Post the form.
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: '/hizzle/v1/forms/submit/' + formID,
        method: 'POST',
        data: formDataToObject(fields)
      })

      // On success, either show a success message or redirect.
      .then(res => {
        // Replace the form with the message.
        if ('message' === res.action) {
          form.outerHTML = `<div class="wp-block-hizzle-forms__success-message">${res.message}</div>`;
          form.classList.remove('hizzle-forms-submitting');
        }
        if ('redirect' === res.action) {
          window.location.href = res.redirect;
        }
        return res;
      })

      // On error, show an error message.
      .catch(err => {
        if (err.code) {
          validation.displayError(err.code, err.message);

          // Additional errors.
          if (err.additional_errors) {
            err.additional_errors.forEach(error => {
              validation.displayError(error.code, error.message);
            });
          }
        } else {
          validation.displayError('unknown', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An unknown error occurred while submitting the form. Check your network connectivity then try again.', 'hizzle-forms'));
        }

        // Remove submitting class from the form.
        form.classList.remove('hizzle-forms-submitting');

        // Scroll to the first error.
        scrollToFirstError();
      });
    });
  });
});
}();
/******/ })()
;
//# sourceMappingURL=view.js.map