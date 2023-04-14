!function(){var e={184:function(e,t){var l;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)){if(l.length){var i=o.apply(null,l);i&&e.push(i)}}else if("object"===a){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var n in l)r.call(l,n)&&l[n]&&e.push(n)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},t={};function l(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,l),a.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/radio","title":"Radio field","description":"A radio field input for forms.","category":"hizzle-forms","keywords":["form","contact","radio"],"icon":"editor-justify","parent":["hizzle-forms/form"],"version":"1.0.0","textdomain":"hizzle-forms","attributes":{"label":{"type":"string","default":""},"required":{"type":"boolean","default":false},"help":{"type":"string","default":"","source":"html","selector":".form-text"}},"example":{"attributes":{"label":"Radio field","required":true,"help":"This is a radio field."},"innerBlocks":[{"name":"hizzle-forms/radio-option","attributes":{"label":"First Option","selected":true}},{"name":"hizzle-forms/radio-option","attributes":{"label":"Second Option"}},{"name":"hizzle-forms/radio-option","attributes":{"label":"Third Option"}}]},"supports":{"anchor":true,"spacing":{"margin":true,"padding":true}},"editorScript":"file:./index.js"}'),r=window.wp.element,o=window.wp.blockEditor;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},a.apply(this,arguments)}var i=l(184),n=l.n(i),s=window.lodash,c=window.wp.components,d=window.wp.i18n,u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0 0 24 24";return(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",width:t,height:l,viewBox:o},(0,r.createElement)(c.Path,{fill:"none",d:"M0 0h24v24H0V0z",className:"icon-filler"}),e)},m=e=>{let{attributes:t,hidePlaceholder:l,setAttributes:a}=e;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(o.BlockControls,null,(0,r.createElement)(c.ToolbarGroup,null,(0,r.createElement)(c.ToolbarButton,{title:(0,d.__)("Required","hizzle-forms"),icon:u((0,r.createElement)(c.Path,{d:"M8.23118 8L16 16M8 16L15.7688 8 M6.5054 11.893L17.6567 11.9415M12.0585 17.6563L12 6.5",stroke:"currentColor"})),onClick:()=>{a({required:!required})},className:t.required?"is-pressed":void 0}))),(0,r.createElement)(o.InspectorControls,null,(0,r.createElement)(c.PanelBody,{title:(0,d.__)("Field Settings","hizzle-forms")},(0,r.createElement)(c.ToggleControl,{label:(0,d.__)("Field is required","hizzle-forms"),className:"hizzle-forms-field-label__required",checked:t.required,onChange:e=>a({required:e})}),!l&&(0,r.createElement)(c.TextControl,{label:(0,d.__)("Placeholder text","hizzle-forms"),value:t.placeholder||"",onChange:e=>a({placeholder:e}),help:(0,d.__)("Show visitors an example of the type of content expected. Otherwise, leave blank.","hizzle-forms")}))))};const p=e=>{let{label:t,setAttributes:l}=e;return(0,r.createElement)("div",{className:"hizzle-forms__field-label"},(0,r.createElement)(o.RichText,{tagName:"label",value:t,className:"hizzle-forms-field-label__input",onChange:e=>l({label:e}),placeholder:__("Add label…","hizzle-forms"),withoutInteractiveFormatting:!0,allowedFormats:["core/bold","core/italic"]}))},h=e=>{let{help:t,setAttributes:l}=e;return(0,r.createElement)("div",{className:"hizzle-forms__field-help-text"},(0,r.createElement)(o.RichText,{tagName:"p",value:t,className:"hizzle-forms-field-help-text__input",onChange:e=>l({help:e}),placeholder:__("Add help text…","hizzle-forms")}))};function f(e){let{attributes:t,setAttributes:l,disableLabel:i,disableHelpText:c,children:d,className:u,isSelected:f,...b}=e;const z=n()("hizzle-forms-field",u,{"is-selected":f,"has-placeholder":!(0,s.isEmpty)(t.placeholder)}),v=(0,o.useBlockProps)({className:z});return(0,r.createElement)("div",v,!i&&(0,r.createElement)(p,{label:t.label,setAttributes:l}),d,!c&&(0,r.createElement)(h,{help:t.help,setAttributes:l}),(0,r.createElement)(m,a({setAttributes:l,attributes:t},b)))}const b=[{name:"hizzle-forms/radio-option",attributes:{label:"First Option",selected:!0}},{name:"hizzle-forms/radio-option",attributes:{label:"Second Option"}},{name:"hizzle-forms/radio-option",attributes:{label:"Third Option"}}];const z=e=>{let{label:t}=e;return t?(0,r.createElement)("div",{className:"hizzle-forms__field-label"},(0,r.createElement)(o.RichText.Content,{tagName:"label",value:t})):null},v=e=>{let{help:t}=e;return t?(0,r.createElement)("div",{className:"hizzle-forms__field-help-text"},(0,r.createElement)(o.RichText.Content,{tagName:"p",value:t})):null};function g(e){let{attributes:t,children:l,className:a}=e;const i=n()("hizzle-forms-field",a),s=o.useBlockProps.save({className:i});return(0,r.createElement)("div",s,(0,r.createElement)(z,{label:t.label}),l,(0,r.createElement)(v,{help:t.help}))}(0,e.registerBlockType)("hizzle-forms/radio-option",{apiVersion:2,title:(0,d.__)("Radio Option","hizzle-forms"),icon:"editor-ul",category:"hizzle-forms",parent:["hizzle-forms/radio"],attributes:{label:{type:"string",source:"html",selector:"label"},selected:{type:"boolean",default:!1}},supports:{anchor:!0,spacing:{margin:!0,padding:!0}},edit:e=>{let{attributes:t,setAttributes:l}=e;const{label:a,selected:i}=t,n=(0,o.useBlockProps)({className:"hizzle-forms__radio-option"});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(o.BlockControls,null,(0,r.createElement)(c.ToolbarGroup,null,(0,r.createElement)(c.ToolbarButton,{icon:"yes",title:(0,d.__)("Selected","hizzle-forms"),isActive:i,onClick:()=>l({selected:!i})}))),(0,r.createElement)("label",n,(0,r.createElement)("input",{type:"radio",checked:i}),(0,r.createElement)(o.RichText,{tagName:"span",value:a,onChange:e=>l({label:e}),placeholder:(0,d.__)("Option label","hizzle-forms")})))},save:e=>{let{attributes:t}=e;const{label:l,selected:a}=t,i=o.useBlockProps.save({className:"hizzle-forms__radio-option"});return(0,r.createElement)("label",i,(0,r.createElement)("input",{type:"radio",checked:a}),(0,r.createElement)(o.RichText.Content,{tagName:"span",value:l}))}});const{name:_}=t;(0,e.registerBlockType)(_,{edit:e=>{let{attributes:t,setAttributes:l}=e;return(0,r.createElement)(f,{attributes:t,setAttributes:l,className:"hizzle-forms-field__radio"},(0,r.createElement)("div",{className:"hizzle-forms__radio-options"},(0,r.createElement)(o.InnerBlocks,{allowedBlocks:["hizzle-forms/radio-option"],template:b})))},save:e=>{let{attributes:t}=e;return(0,r.createElement)(g,{attributes:t,className:"hizzle-forms-field__radio"},(0,r.createElement)("div",{className:"hizzle-forms__radio-options"},(0,r.createElement)(o.InnerBlocks.Content,null)))}})}()}();