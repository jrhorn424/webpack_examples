/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __es6_transpiler_warn__(warning) {
	  if (typeof console === 'undefined') {
	  } else if (typeof console.warn === "function") {
	    console.warn(warning);
	  } else if (typeof console.log === "function") {
	    console.log(warning);
	  }
	}
	function __es6_transpiler_build_module_object__(name, imported) {
	  var moduleInstanceObject = Object.create ? Object.create(null) : {};
	  if (typeof imported === "function") {
	    __es6_transpiler_warn__("imported module '"+name+"' exported a function - this may not work as expected");
	  }
	  for (var key in imported) {
	    if (Object.prototype.hasOwnProperty.call(imported, key)) {
	      moduleInstanceObject[key] = imported[key];
	    }
	  }
	  if (Object.freeze) {
	    Object.freeze(moduleInstanceObject);
	  }
	  return moduleInstanceObject;
	}
	var str = __es6_transpiler_build_module_object__("str", __webpack_require__(1));

	console.log(str.format('Hello {0}!', 'World'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function format(string, obj) {
	    var result = string;
	    if (!(obj instanceof Object) || arguments.length > 2) {
	        var args = [];
	        for (var i = 1; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        obj = args;
	    }
	    for (var name in obj) {
	        if (obj.hasOwnProperty(name)) {
	            result = replaceToken(result, name, obj[name]);
	        }
	    }
	    return result;
	}

	exports.format = format;function replaceToken(string, tokenName, value) {
	    var pattern = new RegExp("{\\s*?" + tokenName + "\\s*?\\}", "ig");
	    if (string && pattern.test(string)) {
	        string = string.replace(pattern, value);
	    }
	    return string
	}

/***/ }
/******/ ])