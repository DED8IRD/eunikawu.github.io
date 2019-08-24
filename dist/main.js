/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main~._src_i": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor~main~._node_modules_b","vendor~main~._node_modules_jquery_dist_jquery.js~647ac316","vendor~main~._node_modules_p"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _bootstrap = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n\nvar _bootstrap2 = _interopRequireDefault(_bootstrap);\n\nvar _scrollreveal = __webpack_require__(/*! scrollreveal */ \"./node_modules/scrollreveal/dist/scrollreveal.es.js\");\n\nvar _scrollreveal2 = _interopRequireDefault(_scrollreveal);\n\nvar _style = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _jquery2.default)(function () {\n  // Preloader animation\n  (0, _jquery2.default)('.loading').fadeOut('slow', function () {\n    (0, _jquery2.default)(this).remove();\n  });\n  window.sr = (0, _scrollreveal2.default)({\n    duration: 500,\n    delay: 200,\n    easing: 'ease-out'\n  }); // Add scrollspy to <body>\n\n  var navOffset = (0, _jquery2.default)('.navbar').height();\n  (0, _jquery2.default)('body').scrollspy({\n    target: \".navbar\",\n    offset: navOffset\n  }); // Closes responsive menu when a scroll trigger link is clicked\n\n  (0, _jquery2.default)('#navigation').on('click', function () {\n    (0, _jquery2.default)('.navbar-collapse').collapse('hide');\n  }); // Affix navbar after hero\n\n  (0, _jquery2.default)(window).on('scroll', function (event) {\n    var scrollValue = (0, _jquery2.default)(window).scrollTop();\n    var heroHeight = (0, _jquery2.default)('.hero').height();\n\n    if (scrollValue >= heroHeight) {\n      (0, _jquery2.default)('.navbar').addClass('fixed-top');\n    } else {\n      (0, _jquery2.default)('.navbar').removeClass('fixed-top');\n    }\n  }); // Copy business card content to card stack\n\n  var cardContents = (0, _jquery2.default)('.biz-card-front').html();\n  (0, _jquery2.default)('.biz-card-under').append(cardContents); // Lightbox for portfolio items\n\n  (0, _jquery2.default)(document).on('click', '.portfolio-container', function (event) {\n    var $lightbox = (0, _jquery2.default)(\"<div id='lightbox'></div>\");\n    var $close = (0, _jquery2.default)(\"<p class='close'>&times;</p>\");\n    var $contents = (0, _jquery2.default)(\"<div class='modal-dialogue modal-dialogue-centered modal-content'></div>\");\n    var $caption = (0, _jquery2.default)(\"<div class='caption-container'></div>\");\n    var $img = (0, _jquery2.default)(this).find('img')[0].outerHTML;\n    $caption.append((0, _jquery2.default)(this).find('div.portfolio-hover-content').html());\n    $lightbox.append($contents.append($img).append($close).append($caption));\n    (0, _jquery2.default)('body').append($lightbox);\n    $lightbox.fadeIn('fast');\n    $lightbox.click(function () {\n      $lightbox.fadeOut('fast');\n    });\n  }); // Fullscreen resume pdf\n\n  var resume = (0, _jquery2.default)('#resume-pdf').get(0);\n  (0, _jquery2.default)('#dl-resume-btn').on('click', function (event) {\n    if ((0, _jquery2.default)('#resume-pdf:visible').length === 0 && !resume.fullscreenElement) {\n      resume.requestFullscreen();\n    }\n  }); // Scroll reveal animations\n\n  sr.reveal('section > *');\n  sr.reveal('.projects > .portfolio-item', {\n    origin: 'left',\n    distance: '10%',\n    interval: 200,\n    duration: 600,\n    easing: \"ease-in-out\"\n  });\n  sr.reveal('.skills > .skill', {\n    origin: 'right',\n    distance: '10%',\n    interval: 300,\n    duration: 700,\n    easing: \"ease-in-out\"\n  });\n  sr.reveal('.contacts > a > i', {\n    origin: 'left',\n    distance: '10%',\n    interval: 200,\n    duration: 600,\n    easing: \"ease-in-out\"\n  });\n  sr.reveal('.click-me', {\n    origin: 'top',\n    distance: '0.5rem',\n    duration: 700\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });