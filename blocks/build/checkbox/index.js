!function(){var e={184:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var i=n.apply(null,l);i&&e.push(i)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var s in l)a.call(l,s)&&l[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,l),r.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/checkbox","title":"Checkbox field","description":"A checkbox field.","category":"hizzle-forms","keywords":["form","contact","checkbox"],"icon":"yes","parent":["hizzle-forms/form"],"version":"1.0.0","textdomain":"hizzle-forms","attributes":{"label":{"type":"string","default":""},"value":{"type":"boolean","default":false},"validation":{"type":"array"},"help":{"type":"string","default":"","source":"html","selector":".hizzle-forms__field-help-text"},"instanceID":{"type":"string"},"name":{"type":"string"}},"example":{"attributes":{"label":"Checkbox field","validation":[{"name":"required"}],"value":true,"help":"This is a checkbox field."}},"styles":[{"name":"hizzle-1-6","label":"1/6"},{"name":"hizzle-2-6","label":"2-6"},{"name":"hizzle-3-6","label":"3-6"},{"name":"hizzle-4-6","label":"4-6"},{"name":"hizzle-5-6","label":"5/6"},{"name":"hizzle-full","label":"Full Width","isDefault":true}],"supports":{"anchor":true,"spacing":{"margin":true,"padding":true},"reusable":false},"editorScript":"file:./index.js"}'),t=window.wp.element,a=window.wp.blockEditor,n=window.wp.i18n;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}var i=l(184),s=l.n(i),o=window.lodash,m=window.wp.components,c=e=>{let{attributes:l,hidePlaceholder:r,hasOptions:i,setAttributes:s}=e;const o=l.name&&l.name.length>0;if(!i&&r&&!o)return null;const c=l.options?l.options.join("\n"):"";return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(m.PanelBody,{title:(0,n.__)("General","hizzle-forms")},(0,t.createElement)(m.TextControl,{label:(0,n.__)("Merge Tag","hizzle-forms"),value:`{${l.name}}`,onClick:e=>e.target.select(),help:(0,n.__)("Use this merge tag to display this field's value in your emails, response message and redirect URL.","hizzle-forms"),readOnly:!0}),i&&(0,t.createElement)(m.TextareaControl,{label:(0,n.__)("Options","hizzle-forms"),value:c,onChange:e=>{s({options:e.split("\n")})},help:(0,n.__)('Enter each option on a new line. For example, "Option 1" and "Option 2" will be displayed as a dropdown with two options.',"hizzle-forms")}),!r&&(0,t.createElement)(m.TextControl,{label:(0,n.__)("Placeholder text","hizzle-forms"),value:l.placeholder||"",onChange:e=>s({placeholder:e}),help:(0,n.__)("Show visitors an example of the type of content expected. Otherwise, leave blank.","hizzle-forms")}))))};const h={name:"required",label:(0,n.__)("Required","hizzle-forms"),checkboxLabel:(0,n.__)("Is this field required?","hizzle-forms"),defaultMessage:(0,n.__)("This field is required.","hizzle-forms"),fieldTypes:["all"],edit:[]},u=(0,n.__)("Maximum date","hizzle-forms"),d={name:"maxdate",label:u,checkboxLabel:(0,n.__)("Set a maximum date?","hizzle-forms"),defaultMessage:(0,n.__)("The latest date allowed is {threshold}.","hizzle-forms"),fieldTypes:["date"],edit:[{name:"threshold",type:"date",label:u}]},f=(0,n.__)("Minimum date","hizzle-forms"),p={name:"mindate",label:f,checkboxLabel:(0,n.__)("Set a minimum date?","hizzle-forms"),defaultMessage:(0,n.__)("The earliest date allowed is {threshold}.","hizzle-forms"),fieldTypes:["date"],edit:[{name:"threshold",type:"date",label:f}]},b=(0,n.__)("Maximum number","hizzle-forms"),z={name:"maxnumber",label:b,checkboxLabel:(0,n.__)("Set a maximum number?","hizzle-forms"),defaultMessage:(0,n.__)("The value must be at most {threshold}.","hizzle-forms"),fieldTypes:["number"],edit:[{name:"threshold",type:"number",label:b}]},_=(0,n.__)("Minimum number","hizzle-forms"),g={name:"minnumber",label:_,checkboxLabel:(0,n.__)("Set a minimum number?","hizzle-forms"),defaultMessage:(0,n.__)("The value must be at least {threshold}.","hizzle-forms"),fieldTypes:["number"],edit:[{name:"threshold",type:"number",label:_}]},y=(0,n.__)("Maximum items","hizzle-forms"),x={name:"maxitems",label:y,checkboxLabel:(0,n.__)("Set a maximum number of selectable items?","hizzle-forms"),defaultMessage:(0,n.__)("You must select at most {threshold} items.","hizzle-forms"),fieldTypes:["array"],edit:[{name:"threshold",type:"number",label:y}]},v=(0,n.__)("Minimum items","hizzle-forms"),E={name:"minitems",label:v,checkboxLabel:(0,n.__)("Set a minimum number of selectable items?","hizzle-forms"),defaultMessage:(0,n.__)("You must select at least {threshold} items.","hizzle-forms"),fieldTypes:["array"],edit:[{name:"threshold",type:"number",label:v}]},T=(0,n.__)("Maximum length","hizzle-forms"),k={name:"maxlength",label:T,checkboxLabel:(0,n.__)("Set a maximum length?","hizzle-forms"),defaultMessage:(0,n.__)("The value must be at most {threshold} characters long.","hizzle-forms"),fieldTypes:["text"],edit:[{name:"threshold",type:"number",label:T}]},w=(0,n.__)("Minimum length","hizzle-forms");var C=[h,p,d,g,z,E,x,{name:"minlength",label:w,checkboxLabel:(0,n.__)("Set a minimum length?","hizzle-forms"),defaultMessage:(0,n.__)("The value must be at least {threshold} characters long.","hizzle-forms"),fieldTypes:["text"],edit:[{name:"threshold",type:"number",label:w}]},k];function M(e){let{attributes:l,setAttributes:a,fieldType:n}=e;const i=(0,t.useMemo)((()=>C.filter((e=>e.fieldTypes.includes(n)||e.fieldTypes.includes("all")))),[n]),s=l.validation||[];if((0,t.useEffect)((()=>{const e=[],t=!1;s.forEach((l=>{i.some((e=>e.name===l.name))?e.push(l):t=!0})),t&&a({validation:e})}),[i]),!i.length)return null;const o=e=>{a({validation:e})};return(0,t.createElement)(t.Fragment,null,i.map((e=>(0,t.createElement)(S,r({key:e.name},e,{setRules:o,addedRules:s})))))}const S=e=>{let{label:l,checkboxLabel:r,name:i,defaultMessage:s,edit:o,setRules:c,addedRules:h}=e;const u=h.some((e=>e.name===i)),[d,f]=(0,t.useState)(u?h.find((e=>e.name===i)):{name:i}),p=(e,t)=>{const l={...d};if(l[e]=t,f(l),u){const e=[...h],t=e.findIndex((e=>e.name===i));e[t]=l,c(e)}};return(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(m.PanelBody,{title:l,initialOpen:!1},(0,t.createElement)(m.ToggleControl,{label:r,checked:u,onChange:e=>{const t=[...h];if(e)u||t.push(d);else{const e=t.findIndex((e=>e.name===i));t.splice(e,1)}c(t)}}),u&&(0,t.createElement)(t.Fragment,null,o.map(((e,l)=>(0,t.createElement)(O,{key:l,edit:e,rule:d,onChange:t=>p(e.name,t)}))),(0,t.createElement)(O,{edit:{name:"errorMessage",type:"text",label:(0,n.__)("Error message","hizzle-forms"),help:(0,n.__)("Optional. The error message to display when this rule fails.","hizzle-forms"),placeholder:s},rule:d,onChange:e=>p("errorMessage",e)}))))},O=e=>{let{edit:l,rule:a,onChange:n}=e;const{type:i,name:s,...o}=l;switch(i){case"toggle":return(0,t.createElement)(m.ToggleControl,r({},o,{checked:!!a[s]&&a[s],onChange:n}));case"select":return(0,t.createElement)(m.SelectControl,r({},o,{value:a[s]?a[s]:"",onChange:n}));default:return(0,t.createElement)(m.TextControl,r({},o,{value:a[s]?a[s]:"",onChange:n}))}};function N(e){let{attributes:l,setAttributes:i,disableLabel:m,disableHelpText:h,children:u,className:d,isSelected:f,fieldType:p,...b}=e;const z=!h&&(f||!(0,o.isEmpty)(l.help)),_=!m&&(f||!(0,o.isEmpty)(l.label));return(0,t.createElement)("div",(0,a.useBlockProps)({className:s()("hizzle-forms-field",d)}),_&&(0,t.createElement)(a.RichText,{tagName:"label",value:l.label,className:"hizzle-forms__field-label",onChange:e=>{i({label:e})},placeholder:(0,n.__)("Add label…","hizzle-forms")}),u,z&&(0,t.createElement)(a.RichText,{tagName:"p",value:l.help,className:"hizzle-forms__field-help-text",onChange:e=>i({help:e}),placeholder:(0,n.__)("Add help text…","hizzle-forms")}),(0,t.createElement)(c,r({setAttributes:i,attributes:l},b)),(0,t.createElement)(M,{setAttributes:i,attributes:l,fieldType:p}))}const A=e=>{let{label:l,instanceID:n}=e;return l?(0,t.createElement)(a.RichText.Content,{tagName:"label",className:"hizzle-forms__field-label",htmlFor:`hizzle-forms-field-${n}`,value:l}):null},I=e=>{let{help:l}=e;return l?(0,t.createElement)(a.RichText.Content,{tagName:"p",className:"hizzle-forms__field-help-text",value:l}):null};function L(e){let{attributes:l,children:n,className:r,customClass:i}=e;const o={className:s()("hizzle-forms-field",r,i),"data-instance-id":l.instanceID};Array.isArray(l.validation)&&l.validation.length>0&&(o["data-validation"]=JSON.stringify(l.validation));const m=a.useBlockProps.save(o);return(0,t.createElement)("div",m,(0,t.createElement)(A,{label:l.label,instanceID:l.instanceID}),n,(0,t.createElement)(I,{help:l.help}),(0,t.createElement)("div",{className:"hizzle-forms__field-error"}))}var R=window.wp.blocks;const{name:j,icon:D}=e;var P,F;F={icon:D,edit:e=>{let{attributes:l,setAttributes:r,clientId:i,isSelected:s}=e;(0,t.useEffect)((()=>{l.instanceID||r({instanceID:i})}),[]);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e)return t;let l=e.replace(/(<([^>]+)>)/gi,"");return l=e.replace(/[^a-z0-9]/gi,"_").toLowerCase(),l=l.replace(/_+/g,"_"),l=l.replace(/^_+|_+$/g,""),l||(l=t),l}(l.label,l.instanceID);return(0,t.useEffect)((()=>{o!==l.name&&r({name:o})}),[o]),(0,t.createElement)(N,{attributes:l,setAttributes:r,isSelected:s,fieldType:"boolean",disableLabel:!0,showChecked:!0},(0,t.createElement)("input",{type:"checkbox",checked:l.value,onChange:e=>r({value:e.target.checked})}),(0,t.createElement)(a.RichText,{tagName:"label",value:l.label,onChange:e=>r({label:e}),placeholder:(0,n.__)("Enter checkbox label","hizzle-forms")}))},save:e=>{let{attributes:l}=e;const n=l.instanceID||"";return(0,t.createElement)(L,{attributes:l,disableLabel:!0},(0,t.createElement)("label",null,(0,t.createElement)("input",{type:"checkbox",checked:l.value,name:`hizzle-forms[${l.name}]`,id:`hizzle-forms-field-${n}`,value:l.label.replace(/(<([^>]+)>)/gi,"")}),(0,t.createElement)(a.RichText.Content,{tagName:"span",value:l.label})))}},0!==(P=j).indexOf("hizzle-forms/")&&(P="hizzle-forms/"+P),"string"==typeof F.icon&&(F.icon={src:F.icon,foreground:"#AA00FF"}),(0,R.registerBlockType)(P,F)}()}();