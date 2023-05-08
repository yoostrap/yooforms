/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./blocks/src/form/edit.js":
/*!*********************************!*\
  !*** ./blocks/src/form/edit.js ***!
  \*********************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_inspector_hint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/inspector-hint */ "./blocks/src/components/inspector-hint.js");
/* harmony import */ var _email_connection_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-connection-settings */ "./blocks/src/form/email-connection-settings.js");

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



// Allowed child blocks for the form.
const ALLOWED_BLOCKS = ['hizzle-forms/address', 'hizzle-forms/input', 'hizzle-forms/textarea', 'hizzle-forms/checkbox', 'hizzle-forms/radio', 'hizzle-forms/select', 'hizzle-forms/multi-checkbox', 'core/audio', 'core/heading', 'core/image', 'core/list', 'core/paragraph', 'core/separator', 'core/spacer', 'core/subhead', 'core/video'];

// Template.
const template = [['hizzle-forms/address', {
  required: true,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name', 'hizzle-forms'),
  autocomplete: 'name'
}], ['hizzle-forms/input', {
  required: true,
  type: 'email',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'hizzle-forms')
}], ['hizzle-forms/textarea', {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Message', 'hizzle-forms')
}], ['hizzle-forms/submit', {
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contact Us', 'hizzle-forms'),
  lock: {
    remove: true
  }
}]];
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector_hint__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Customize the view after form submission:', 'hizzle-forms')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Form Settings', 'hizzle-forms')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Form Name', 'hizzle-forms'),
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contact Form.', 'hizzle-forms'),
    onChange: title => setAttributes({
      title
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Submission Settings', 'hizzle-forms'),
    initialOpen: false
  }, renderSubmissionSettings()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_connection_settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    emails: emails,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: formClassnames,
    style: style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: template
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref2) => {
  let {
    clientId
  } = _ref2;
  return {
    isEditing: select('hizzle/forms').isEditingHizzleForm(clientId)
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)((dispatch, _ref3) => {
  let {
    clientId
  } = _ref3;
  return {
    setIsEditing: isEditing => {
      dispatch('hizzle/forms').setEditingHizzleForm(clientId, isEditing);
    },
    saveHizzleForm: () => {
      dispatch('hizzle/forms').saveHizzleForm(clientId);
    },
    saveHizzleForm: () => {
      dispatch('hizzle/forms').deleteHizzleForm(clientId);
    }
  };
})])(HizzleFormEdit));

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);







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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: panelTitle,
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send this email', 'hizzle-forms'),
    help: active ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This email will be sent.', 'hizzle-forms') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This email will not be sent.', 'hizzle-forms'),
    checked: active,
    onChange: active => setAttributes({
      active
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Recipient', 'hizzle-forms'),
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
    value: message ? message : '',
    onChange: message => setAttributes({
      message
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email content', 'hizzle-forms'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter email content…', 'hizzle-forms'),
    rows: 10
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
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\nYour Site\n\n{user_ip}\n{user_agent}\n{user_date}', 'hizzle-forms'),
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
        email: '',
        subject: '',
        message: '',
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

/***/ "./blocks/src/form/index.js":
/*!**********************************!*\
  !*** ./blocks/src/form/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/form/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./blocks/src/form/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/src/form/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/src/form/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variations */ "./blocks/src/form/variations.js");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/logo */ "./blocks/src/components/logo.js");
/* harmony import */ var _utils_register_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/register-block */ "./blocks/src/utils/register-block.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./blocks/src/store/index.js");
/* harmony import */ var _submit_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit-button */ "./blocks/src/form/submit-button.js");
/**
 * Internal dependencies
 */









// Register the submit button block.

const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
(0,_utils_register_block__WEBPACK_IMPORTED_MODULE_6__["default"])(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  //variations,
  icon: _components_logo__WEBPACK_IMPORTED_MODULE_5__["default"]
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
  "parent": ["hizzle-forms/form"],
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
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/logo */ "./blocks/src/components/logo.js");


const variations = [{
  name: 'hizzle-contact-form',
  isDefault: true,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a contact form to your page.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('contact', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('email', 'hizzle-forms')],
  innerBlocks: [['hizzle-forms/address', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
    autocomplete: 'name'
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
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A simple way to collect information from folks visiting your site.', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('subscribe', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('email', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('signup', 'hizzle-forms')],
  innerBlocks: [['hizzle-forms/address', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
    autocomplete: 'name'
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
  innerBlocks: [['hizzle-forms/address', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
    autocomplete: 'name'
  }], ['hizzle-forms/input', {
    required: true,
    type: 'email',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Attending?', 'hizzle-forms'),
    required: true,
    isRadio: true,
    innerBlocks: [['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yes', 'hizzle-forms'),
      selected: true
    }], ['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No', 'hizzle-forms')
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
  innerBlocks: [['hizzle-forms/address', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
    autocomplete: 'name'
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
  innerBlocks: [['hizzle-forms/address', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
    autocomplete: 'name'
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
    isRadio: true,
    innerBlocks: [['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Morning', 'hizzle-forms'),
      selected: true
    }], ['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Afternoon', 'hizzle-forms')
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
  name: 'hizzle-feedback-form',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Feedback Form', 'hizzle-forms'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a Feedback form to your page', 'hizzle-forms'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('feedback', 'hizzle-forms'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('event', 'hizzle-forms')],
  innerBlocks: [['hizzle-forms/address', {
    required: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'hizzle-forms'),
    autocomplete: 'name'
  }], ['hizzle-forms/input', {
    required: true,
    type: 'tel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'hizzle-forms')
  }], ['hizzle-forms/radio', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please rate our website', 'hizzle-forms'),
    required: true,
    isRadio: true,
    innerBlocks: [['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1 - Very Bad', 'hizzle-forms'),
      selected: true
    }], ['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2 - Poor', 'hizzle-forms')
    }], ['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3 - Average', 'hizzle-forms')
    }], ['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4 - Good', 'hizzle-forms')
    }], ['hizzle-forms/radio-option', {
      option: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5 - Excellent', 'hizzle-forms')
    }]]
  }], ['hizzle-forms/textarea', {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('How could we improve?', 'hizzle-forms')
  }], ['hizzle-forms/submit', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Send Feedback', 'hizzle-forms'),
    lock: {
      remove: true
    }
  }]]
}];

/**
 * Add `isActive` function to all `input` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach(variation => {
  // Attributes.
  variation.attributes = {
    emails: [{
      email: '{admin_email}',
      subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Response: Contact Form', 'hizzle-forms'),
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\nYour Site\n\n{user_ip}\n{user_agent}\n{user_date}', 'hizzle-forms'),
      active: true
    }, {
      email: '{user_email}',
      subject: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for contacting us', 'hizzle-forms'),
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for contacting us. We will be in touch with you shortly.\n\nHere are the details of your message:\n\n{response_fields}\n\nThank you,\nYour Site\n\n{user_ip}\n{user_agent}\n{user_date}', 'hizzle-forms'),
      active: true
    }],
    action: 'message',
    redirect: '',
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms'),
    title: variation.title
  };

  // Category.
  variation.category = 'hizzle-forms';

  // Logo.
  variation.icon = _components_logo__WEBPACK_IMPORTED_MODULE_1__["default"];

  // Example.
  variation.example = {
    attributes: variation.attributes,
    innerBlocks: variation.innerBlocks
  };

  // Add `isActive` function if not defined.
  if (!variation.isActive) {
    variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.title === variationAttributes.title;
  }
  console.log(variation);
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./blocks/src/store/actions.js":
/*!*************************************!*\
  !*** ./blocks/src/store/actions.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteHizzleForm": function() { return /* binding */ deleteHizzleForm; },
/* harmony export */   "saveHizzleForm": function() { return /* binding */ saveHizzleForm; },
/* harmony export */   "setEditingHizzleForm": function() { return /* binding */ setEditingHizzleForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




/**
 * Returns a generator for saving a hizzle form.
 *
 * @param {Object} hizzleForm The hizzle form to save.
 * @param {string} id         The ID of the form to save.
 */
const saveHizzleForm = (clientId, id) => async _ref => {
  let {
    registry
  } = _ref;
  const toSave = {
    title: title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hizzle Forms', 'hizzle-forms'),
    content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.serialize)(registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlocksByClientId(clientId)),
    status: 'publish'
  };
  if (id) {
    toSave.id = id;
  }
  const updatedRecord = await registry.dispatch('core').saveEntityRecord('postType', 'hizzle_form', toSave);
  if (!id) {
    registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).resetBlocks(clientId);
  }
  return updatedRecord;
};

/**
 * Returns a generator deleting a hizzle form.
 *
 * @param {string} id The ID of the form to delete.
 */
const deleteHizzleForm = id => async _ref2 => {
  let {
    registry
  } = _ref2;
  const hizzleForm = registry.select('core').getEditedEntityRecord('postType', 'hizzle_form', id);

  // Don't allow a form with a temporary ID to be deleted.
  if (!hizzleForm) {
    return;
  }
  await registry.dispatch('core').deleteEntityRecord('postType', 'hizzle_form', id);
};

/**
 * Returns an action descriptor for SET_EDITING_HIZZLE_FORM action.
 *
 * @param {string}  clientId  The clientID of the form to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */
function setEditingHizzleForm(clientId, isEditing) {
  return {
    type: 'SET_EDITING_HIZZLE_FORM',
    clientId,
    isEditing
  };
}

/***/ }),

/***/ "./blocks/src/store/index.js":
/*!***********************************!*\
  !*** ./blocks/src/store/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./blocks/src/store/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./blocks/src/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./blocks/src/store/selectors.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const STORE_NAME = 'hizzle/forms';

/**
 * Store definition for the hizzle forms store.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, {
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./blocks/src/store/reducer.js":
/*!*************************************!*\
  !*** ./blocks/src/store/reducer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEditingHizzleForm": function() { return /* binding */ isEditingHizzleForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function isEditingHizzleForm() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  if (action?.type === 'SET_EDITING_HIZZLE_FORM') {
    return {
      ...state,
      [action.clientId]: action.isEditing
    };
  }
  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  isEditingHizzleForm
}));

/***/ }),

/***/ "./blocks/src/store/selectors.js":
/*!***************************************!*\
  !*** ./blocks/src/store/selectors.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEditingHizzleForm": function() { return /* binding */ isEditingHizzleForm; }
/* harmony export */ });
/**
 * Returns true if reusable block is in the editing state.
 *
 * @param {Object} state    Global application state.
 * @param {number} clientId the clientID of the block.
 * @return {boolean} Whether the reusable block is in the editing state.
 */
function isEditingHizzleForm(state, clientId) {
  return state.isEditingHizzleForm[clientId];
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

/***/ "./blocks/src/form/style.scss":
/*!************************************!*\
  !*** ./blocks/src/form/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/forms","title":"Form","description":"Displays a form.","category":"hizzle-forms","keywords":["form","contact","input"],"icon":"forms","version":"1.0.0","textdomain":"hizzle-forms","attributes":{"emails":{"type":"array","default":[{"email":"{admin_email}","subject":"New Response: Contact Form","message":"You have received a new response to your contact form.\\n\\nHere are the details:\\n\\n{response_fields}\\n\\nThank you,\\nYour Site\\n\\n{user_ip}\\n{user_agent}\\n{user_date}","active":true},{"email":"{user_email}","subject":"Thank you for contacting us","message":"Thank you for contacting us. We will be in touch with you shortly.\\n\\nHere are the details of your message:\\n\\n{response_fields}\\n\\nThank you,\\nYour Site\\n\\n{user_ip}\\n{user_agent}\\n{user_date}","active":true}]},"action":{"type":"string","default":"message"},"redirect":{"type":"string","default":""},"message":{"type":"string","default":"Thank you for contacting us. We will be in touch with you shortly."},"title":{"type":"string","default":"Contact Form"}},"styles":[{"name":"hizzle-default","label":"Default","isDefault":true},{"name":"hizzle-full","label":"Full"},{"name":"hizzle-wide","label":"Wide"}],"example":{"innerBlocks":[{"name":"hizzle-forms/address","attributes":{"required":true,"label":"Name","autocomplete":"name"}},{"name":"hizzle-forms/input","attributes":{"required":true,"type":"email","label":"Email"}},{"name":"hizzle-forms/textarea","attributes":{"required":true,"label":"Message"}},{"name":"hizzle-forms/checkbox","attributes":{"required":true,"label":"I agree to the terms and conditions"}},{"name":"hizzle-forms/submit","attributes":{"text":"Send Message","element":"button","lock":{"remove":true}}}]},"supports":{"anchor":true,"spacing":{"blockGap":true,"units":["px","em","rem","vh","vw"],"margin":false,"padding":true},"color":{"link":true,"gradients":true},"html":false},"editorScript":"file:./index.js","script":"file:./view.js","editorStyle":"hizzle-forms-blocks","style":"file:./view.css"}');

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