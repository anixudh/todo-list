/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".sidebar{\\n    height: 100%;\\n    width: 250px;\\n    position: fixed; \\n    z-index: 1; \\n    top: 0; \\n    left: 0;\\n    background-color: #111; \\n    overflow-x: hidden; \\n    padding-top: 20px;\\n    color: beige;\\n    text-align: center;\\n    margin-top: 72px;\\n}\\n\\n.header{\\n    color: honeydew;\\n    width: 100%;\\n    text-align: center;\\n    padding: 25px;\\n    background-color: rgb(68, 68, 68);\\n    left:0;\\n    right: 0;\\n}\\n\\n.new-project{\\n    margin-top: 15px;\\n    cursor: pointer;\\n    \\n}\\n\\n.container-fluid{\\n    margin-left: 250px;\\n    margin-top: 72px;\\n    left: 250px;\\n    \\n}\\n\\n.toggle-display-off{\\n    display: none;\\n}\\n\\n.project-form{\\n    padding: 10px;\\n}\\n\\n.project-form input{\\n    width: 120px;\\n}\\n\\n.project{\\n    padding: 10px;\\n    margin: 5px;\\n    cursor: pointer;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.task{\\n    border: 1px solid black;\\n    border-radius: 5%;\\n    width: 600px;\\n    padding: 25px;\\n    display: flex;\\n    justify-content: space-between;\\n    margin: 5px;\\n}\\n\\n.new-task{\\n    cursor: pointer;\\n    margin: 10px;\\n}\\n\\n.task-heading{\\n    font-weight: bolder;\\n    margin-bottom: 10px;\\n}\\n\\n.rename-task{\\n    font-size: 60;\\n    cursor: pointer;\\n}\\n\\n.change-date{\\n    cursor: pointer;\\n}\\n\\n.change-buttons{\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n.done-task{\\n    cursor: pointer;\\n    border: 1px solid black;\\n    border-radius: 50%;\\n    padding: 5px;\\n}\\n\\n.done-task:hover{\\n    \\n    background-color: chartreuse;\\n}\\n\\n.project-click{\\n    background-color: rgb(75, 74, 74);\\n}\\n\\n.footer{\\n    text-align: center;\\n    background-color: beige;\\n    position: absolute;\\n    bottom: 0;\\n    width: 100%;\\n}\\n\\na{\\n    text-decoration: none;\\n    color: black;\\n}\\n\\n.delete-project{\\n    cursor: pointer;\\n}\\n\\n@media only screen and (max-width: 650px){\\n\\n    .sidebar{\\n        width: 100px;\\n    }\\n\\n    .container-fluid{\\n        margin-left: 100px;\\n    }\\n\\n    .task{\\n        width: 250px;\\n        padding: 5px;\\n    }\\n\\n    .task-form{\\n        width: 250px;\\n\\n    }\\n\\n    .task-form input{\\n        width: 80px;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDOM */ \"./src/projectDOM.js\");\n\n\n//import {changeTaskDOM} from './taskDOM';\n\nlet projects=[];\n\nconst addNewProject=e=>{\n\n    //console.log(e);\n    _projectDOM__WEBPACK_IMPORTED_MODULE_1__.changeProjectDOM.openProjectForm();\n    projects=_projectDOM__WEBPACK_IMPORTED_MODULE_1__.changeProjectDOM.getProjectArr();\n    \n};\n\nconst newProject=document.querySelector(\".new-project\");\nnewProject.addEventListener('click',addNewProject);\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProjectDOM\": () => (/* binding */ changeProjectDOM)\n/* harmony export */ });\n/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDOM */ \"./src/taskDOM.js\");\n\n\nconst changeProjectDOM=(()=>{\n\n    //const projectForm=document.querySelector('project-form');\n    let projects=[];\n    const sidebar=document.querySelector('.sidebar');\n    const newProject=document.querySelector('.new-project');\n    const projectsDOM=document.querySelector(\".projects\");\n    //const newProject=\n    const Project=(name)=>{\n\n        /*const setName=(newName)=>{\n            name=newName;\n        }\n        const getName=()=>{return name}; */\n        let tasks=[];\n        return {name,tasks};\n    }\n    const openProjectForm=()=>{\n\n        //console.log(document);\n        const projectForm=document.createElement('form');\n        projectForm.classList.add(\"project-form\");\n\n        const projectNameLabel=document.createElement('label');\n        projectNameLabel.textContent=\"Name:\"\n        const projectName=document.createElement('input');\n        projectName.type=\"text\";\n        projectName.required = true;\n        const projectSubmit=document.createElement('button');\n        projectSubmit.type=\"submit\";\n        projectSubmit.textContent=\"add project\";\n\n        projectForm.appendChild(projectNameLabel);\n        projectForm.appendChild(projectName);\n        projectForm.appendChild(projectSubmit);\n\n        sidebar.append(projectForm);\n        newProject.classList.add(\"toggle-display-off\");\n\n        const submitProject=e=>{\n           e.preventDefault();\n            let project=Project(projectName.value);\n            projectForm.classList.add(\"toggle-display-off\");\n            newProject.classList.remove(\"toggle-display-off\");\n            addProject(project);\n        }\n        projectSubmit.addEventListener('click',submitProject);\n        \n\n    };\n    const openProjectPage=e=>{\n\n        let projectKey;\n        //console.log(e.target.textContent.substr(0,e.target.textContent.length-2));\n        _taskDOM__WEBPACK_IMPORTED_MODULE_0__.changeTaskDOM.resetProject();\n        const allProjects=document.querySelectorAll(\".project\");\n        allProjects.forEach((project)=>{\n            if(project.classList.contains(\"project-click\")) project.classList.remove(\"project-click\");\n        });\n        projects.forEach((project)=>{\n            \n            if(project.name==e.target.textContent.substr(0,e.target.textContent.length-2)){\n                \n                projectKey=project;\n            }\n        })\n        e.target.classList.add(\"project-click\");\n        \n        _taskDOM__WEBPACK_IMPORTED_MODULE_0__.changeTaskDOM.openProject(projectKey);  \n        //console.log(projects, e.target.textContent);\n    };\n    const addProject=(project)=>{\n        const projectElement=document.createElement(\"div\");\n\n        const projectName=document.createElement(\"div\");\n        projectName.textContent=`${project.name}`;\n\n        const delProject=document.createElement(\"div\");\n        delProject.textContent=\"🗑\";\n        delProject.classList.add(\"delete-project\");\n\n        projectElement.appendChild(projectName);\n        projectElement.appendChild(delProject);\n        projectElement.classList.add(\"project\");\n        \n        projectsDOM.appendChild(projectElement);\n        projects.push(project);\n\n        const deleteProject=e=>{\n            projectElement.textContent=\"\";\n            projectElement.style.display=\"none\";\n            const index=projects.indexOf(project);\n            if(index>-1) projects.splice(index,1);\n        };\n        delProject.addEventListener('click',deleteProject);\n        projectElement.addEventListener('click',openProjectPage);\n        //console.log(projects);\n    };\n\n    const getProjectArr=()=>{\n        return projects;\n    }\n\n    return {\n        openProjectForm,\n        getProjectArr,\n    };\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectDOM.js?");

/***/ }),

/***/ "./src/taskDOM.js":
/*!************************!*\
  !*** ./src/taskDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTaskDOM\": () => (/* binding */ changeTaskDOM)\n/* harmony export */ });\nconst changeTaskDOM=(()=>{\n    let projectObj;\n    //let tasks=[];\n    let today = new Date().toISOString().split('T')[0];\n    const taskSpace=document.querySelector(\".container-fluid\");\n    \n    const Task=(name, date)=>{\n        return {name, date};\n    }\n    \n    const resetProject=()=>{\n        \n        taskSpace.textContent=\"\";\n    }\n    const newTask=(task)=>{\n        const taskElement=document.createElement(\"div\");\n\n        const doneTask=document.createElement(\"div\");\n        doneTask.classList.add(\"done-task\");\n        doneTask.textContent=\"✔\";\n\n        const taskName=document.createElement(\"div\");\n        taskName.textContent=`${task.name}`;\n        \n        const taskDate=document.createElement(\"div\");\n        taskDate.textContent=`Due Date: ${task.date}`;\n\n        const changeButtons=document.createElement(\"div\");\n        changeButtons.classList.add(\"change-buttons\");\n        const renameTask=document.createElement(\"div\");\n        renameTask.classList.add(\"rename-task\");\n        renameTask.textContent=\"✎\";\n        const changeDate=document.createElement(\"div\");\n        changeDate.classList.add(\"change-date\");\n        changeDate.textContent=\"📅\";\n        \n\n        const completeTask=e=>{\n            taskElement.textContent=\"\";\n            taskElement.style.display=\"none\";\n            const index=projectObj.tasks.indexOf(task);\n            if(index>-1) projectObj.tasks.splice(index,1);\n        }\n\n        const renameTaskClick=e=>{\n            changeDate.style.display=\"none\";\n            renameTask.style.display=\"none\";\n            const newName=document.createElement(\"input\");\n            newName.type=\"text\";\n            newName.required=true;\n            const submitNewName=document.createElement(\"button\");\n            submitNewName.type=\"submit\";\n            taskName.style.display=\"none\";\n            submitNewName.textContent=\"rename\";\n            taskElement.appendChild(newName);\n            taskElement.appendChild(submitNewName);\n            const changeTaskName=e=>{\n                e.preventDefault();\n                taskName.textContent=`${newName.value}`;\n                taskElement.removeChild(newName);\n                taskElement.removeChild(submitNewName);\n                taskName.style.display=\"initial\";\n                task.name=newName.value;\n                renameTask.style.display=\"block\";\n                changeDate.style.display=\"block\";\n            }\n            submitNewName.addEventListener('click',changeTaskName);\n            \n        }\n\n        const changeTaskDate=e=>{\n            changeDate.style.display=\"none\";\n            renameTask.style.display=\"none\";\n            const newDate=document.createElement(\"input\");\n            newDate.type=\"date\";\n            newDate.setAttribute('min',today);\n            newDate.required=true;\n            const submitNewDate=document.createElement(\"button\");\n            submitNewDate.type=\"submit\";\n            \n            taskDate.style.display=\"none\";\n            submitNewDate.textContent=\"change date\";\n            taskElement.appendChild(newDate);\n            taskElement.appendChild(submitNewDate);\n            const submitTaskDate=e=>{\n                e.preventDefault();\n                taskDate.textContent=`Due Date: ${newDate.value}`;\n                taskElement.removeChild(newDate);\n                taskElement.removeChild(submitNewDate);\n                taskDate.style.display=\"initial\";\n                task.date=newDate.value;\n                changeDate.style.display=\"block\";\n                renameTask.style.display=\"block\";\n            }\n            submitNewDate.addEventListener('click',submitTaskDate);\n            \n        }\n\n        doneTask.addEventListener('click',completeTask);\n        renameTask.addEventListener('click',renameTaskClick);\n        changeDate.addEventListener('click',changeTaskDate);\n\n        changeButtons.appendChild(renameTask);\n        changeButtons.appendChild(changeDate);\n\n        taskElement.appendChild(doneTask);\n        taskElement.appendChild(taskName);\n        taskElement.appendChild(taskDate);\n        taskElement.appendChild(changeButtons);\n        taskElement.classList.add(\"task\");\n        \n        taskSpace.appendChild(taskElement);\n        //tasks.push(task);\n        \n    }\n\n    const addNewTask=e=>{\n        const addTask=document.querySelector(\".new-task\");\n        const taskForm=document.createElement(\"form\");\n        taskForm.classList.add(\"task-form\");\n\n        const taskNameLabel=document.createElement('label');\n        taskNameLabel.textContent=\"Name:\"\n        const taskName=document.createElement('input');\n        taskName.type=\"text\";\n        taskName.required=true;\n        const taskDateLabel=document.createElement('label');\n        taskDateLabel.textContent=\"Due Date:\"\n        const taskDate=document.createElement('input');\n        taskDate.type=\"date\";\n        taskDate.setAttribute('min',today);\n        taskDate.required=true;\n        const taskSubmit=document.createElement('button');\n        taskSubmit.type=\"submit\";\n        taskSubmit.textContent=\"add task\";\n\n        taskForm.appendChild(taskNameLabel);\n        taskForm.appendChild(taskName);\n        taskForm.appendChild(taskDateLabel);\n        taskForm.appendChild(taskDate);\n        taskForm.appendChild(taskSubmit);\n\n        taskSpace.append(taskForm);\n        addTask.classList.add(\"toggle-display-off\");\n\n        const submitTask=e=>{\n            e.preventDefault();\n            let task=Task(taskName.value,taskDate.value);\n            taskForm.classList.add(\"toggle-display-off\");\n            addTask.classList.remove(\"toggle-display-off\");\n            newTask(task);\n            projectObj.tasks.push(task);\n        };\n\n        taskSubmit.addEventListener('click',submitTask);\n        \n    };\n\n    const openProject=(project)=>{\n        projectObj=project;\n        const taskHeading=document.createElement(\"div\");\n        taskHeading.textContent=project.name;\n        taskHeading.classList.add(\"task-heading\");\n        taskSpace.appendChild(taskHeading);\n\n       if(project.tasks.length!=0){\n            console.log(project.tasks);\n            project.tasks.forEach((task)=>{\n                newTask(task);\n            })\n        } \n\n        const addTask=document.createElement(\"div\");\n        addTask.textContent=\"➕ Add a new task...\";\n        addTask.addEventListener('click',addNewTask);\n        addTask.classList.add(\"new-task\");\n        taskSpace.appendChild(addTask);\n        //console.log(project.name);\n    };\n\n    return {\n        resetProject,\n        openProject,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/taskDOM.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;