/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/jim/projects/mafia/app/javascript/packs/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (5:3):\n\n  3 |\n  4 | const Comp = props => (\n> 5 |   <div><h1>Hi</h1></div>\n    |   ^\n  6 | )\n  7 |\n  8 | document.addEventListener('DOMContentLoaded', () => {\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:798:17)\n    at Parser.raiseWithData (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:791:17)\n    at Parser.expectOnePlugin (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:3272:18)\n    at Parser.parseExprAtom (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11514:20)\n    at Parser.parseExprSubscripts (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11081:23)\n    at Parser.parseUpdate (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11061:21)\n    at Parser.parseMaybeUnary (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11039:23)\n    at Parser.parseExprOps (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10882:23)\n    at Parser.parseMaybeConditional (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10856:23)\n    at Parser.parseMaybeAssign (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10814:21)\n    at /home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10776:39\n    at Parser.allowInAnd (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:12595:12)\n    at Parser.parseMaybeAssignAllowIn (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10776:17)\n    at Parser.parseParenAndDistinguishExpression (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11779:28)\n    at Parser.parseExprAtom (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11410:23)\n    at Parser.parseExprSubscripts (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11081:23)\n    at Parser.parseUpdate (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11061:21)\n    at Parser.parseMaybeUnary (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11039:23)\n    at Parser.parseExprOps (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10882:23)\n    at Parser.parseMaybeConditional (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10856:23)\n    at Parser.parseMaybeAssign (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10814:21)\n    at Parser.parseFunctionBody (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:12238:24)\n    at Parser.parseArrowExpression (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:12217:10)\n    at Parser.parseExprAtom (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11368:25)\n    at Parser.parseExprSubscripts (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11081:23)\n    at Parser.parseUpdate (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11061:21)\n    at Parser.parseMaybeUnary (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:11039:23)\n    at Parser.parseExprOps (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10882:23)\n    at Parser.parseMaybeConditional (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10856:23)\n    at Parser.parseMaybeAssign (/home/jim/projects/mafia/node_modules/@babel/parser/lib/index.js:10814:21)");

/***/ })

/******/ });
//# sourceMappingURL=index-aae7d0af0d480f27c54e.js.map