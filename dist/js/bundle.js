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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "+F/S":
/*!************************************!*\
  !*** ./src/server/localStorage.ts ***!
  \************************************/
/*! exports provided: todoStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoStorage", function() { return todoStorage; });
var STORAGE_KEY = 'todos-list';
var todoStorage = {
    fetch: function (state) {
        return new Promise(function (resolve, reject) {
            var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            if (!state) {
                resolve(todos);
            }
            else {
                var targetList = todos.find(function (todo, index) {
                    todo.completed = state;
                });
                resolve(targetList);
            }
        });
    },
    addTodo: function (title) {
        return new Promise(function (resolve) {
            todoStorage.fetch().then(function (data) {
                var todos = data;
                var newTodo = {
                    id: data.length + 1,
                    completed: 0 /* Todo */,
                    title: title
                };
                todos.push(newTodo);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
                resolve('success');
            });
        });
    },
    setCompleteState: function (state, id) {
        var _this = this;
        return new Promise(function (resove, reject) {
            _this.fetch().then(function (res) {
                var todoIndex = res.findIndex(function (todo) { return todo.id === id; });
                if (todoIndex === -1) {
                    reject('can not find the id' + id);
                }
                else {
                    res[todoIndex].completed = state;
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
                    resove('success');
                }
            });
        });
    }
};


/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8888 ./src/index.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mac/2019program/H5-TODOLIST/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8888 */"q9+0");
module.exports = __webpack_require__(/*! ./src/index.tsx */"2YZa");


/***/ }),

/***/ "1zJm":
/*!********************************************!*\
  !*** ./src/components/TodoList/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "y6Zf");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "2YZa":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "pLYI");
/* harmony import */ var antd_mobile_dist_antd_mobile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/dist/antd-mobile.css */ "v++Q");
/* harmony import */ var antd_mobile_dist_antd_mobile_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_dist_antd_mobile_css__WEBPACK_IMPORTED_MODULE_3__);




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.querySelector('#root'));


/***/ }),

/***/ "5H8B":
/*!*******************************************!*\
  !*** ./src/components/TodoList/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile */ "9ibs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/localStorage */ "+F/S");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "1zJm");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);


var CheckboxItem = antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Checkbox"].CheckboxItem;



var TodoList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TodoList, _super);
    function TodoList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (evt, id) {
            if (_this.props.completeState === 2 /* Cancel */) {
                return;
            }
            _server_localStorage__WEBPACK_IMPORTED_MODULE_3__["todoStorage"].setCompleteState(evt.target.checked ? 1 /* Done */ : 0 /* Todo */, id);
            antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Toast"].success('success!', 0.5, function () {
                _this.props.fetch();
            });
        };
        _this.onClickCancel = function (id) {
            _server_localStorage__WEBPACK_IMPORTED_MODULE_3__["todoStorage"].setCompleteState(2 /* Cancel */, id);
            antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Toast"].success('success cancel this item!', 0.5, function () {
                _this.props.fetch();
            });
        };
        return _this;
    }
    TodoList.prototype.render = function () {
        var _this = this;
        var _a = this.props, todoList = _a.todoList, completeState = _a.completeState;
        var count = 0;
        var render = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["List"], null, todoList.map(function (todo) {
            if (todo.completed === completeState) {
                count++;
                return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { position: 'relative' } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](CheckboxItem, { key: todo.id, onChange: function (evt) { return _this.onChange(evt, todo.id); }, defaultChecked: todo.completed === 1 /* Done */, disabled: completeState === 2 /* Cancel */ }, todo.title),
                    completeState === 2 /* Cancel */ ? '' : react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "ghost", size: "small", inline: true, className: "list-cancel-btn", onClick: function () { return _this.onClickCancel(todo.id); } }, "cancel"));
            }
            return;
        }));
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, count ? render : react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "enpty-placeHolder" }, "Hear is enpty\uFF01"));
    };
    return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TodoList);


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "faye":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "i3Xp":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "dZZH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "i3Xp";

/***/ }),

/***/ "lsAC":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/app.less ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  font-family: PingFang SC,Helvetica Neue,Hiragino Sans GB,Helvetica,Microsoft YaHei,Arial;\n}\n#root {\n  height: 100%;\n}\n.title {\n  font-size: 19px;\n  color: #404040;\n  padding: 21px 15px;\n  text-align: center;\n  height: 20px;\n  position: relative;\n  text-indent: 20px;\n}\n.title .add-btn {\n  width: 30px;\n  height: 30px;\n  position: absolute!important;\n  left: 100px;\n  top: 50%;\n  -webkit-transform: translateY(-50%) rotate(45deg);\n          transform: translateY(-50%) rotate(45deg);\n  border-radius: 100%;\n}\n.title .add-btn span {\n  position: relative;\n  right: -50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "mPlr":
/*!**********************!*\
  !*** ./src/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/src!../node_modules/less-loader/dist/cjs.js!./app.less */ "lsAC");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "pLYI":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile */ "9ibs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TodoList */ "5H8B");
/* harmony import */ var _server_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/localStorage */ "+F/S");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.less */ "mPlr");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_5__);





var prompt = antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Modal"].prompt;
// import TodoMvc from './components/todomvc';

var App = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.fetchTodoList = function (completeState) {
            _server_localStorage__WEBPACK_IMPORTED_MODULE_4__["todoStorage"].fetch(completeState).then(function (data) {
                _this.setState({
                    todoList: data,
                    isHaveToDoList: !!data.find(function (todo) { return todo.completed === 0 /* Todo */; })
                });
            });
        };
        _this.submitTodo = function (value) {
            _server_localStorage__WEBPACK_IMPORTED_MODULE_4__["todoStorage"].addTodo(value).then(function () {
                antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Toast"].success('success!', 0.5, function () {
                    _this.fetchTodoList();
                });
            });
        };
        _this.state = {
            todoList: [],
            isHaveToDoList: false
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.fetchTodoList();
    };
    App.prototype.render = function () {
        var _this = this;
        var tabs = [
            { title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Badge"], { dot: this.state.isHaveToDoList }, "Ready"), sub: 0 /* Todo */ },
            { title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Badge"], null, "Finished"), sub: 1 /* Done */ },
            { title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Badge"], null, "Cancel"), sub: 2 /* Cancel */ }
        ];
        var promptClick = function () { return prompt('ToDoList', 'Now, Write your work list!', [
            { text: 'Cancel' },
            { text: 'Submit', onPress: _this.submitTodo }
        ], 'default', ''); };
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { height: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("header", { className: "title", onClick: promptClick },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Icon"], { type: "cross-circle", className: "add-btn" }),
                "To Do List"),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_mobile__WEBPACK_IMPORTED_MODULE_1__["Tabs"], { tabs: tabs, initialPage: 0 },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { height: '100%', backgroundColor: '#fff' } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_TodoList__WEBPACK_IMPORTED_MODULE_3__["default"], { todoList: this.state.todoList, completeState: 0 /* Todo */, fetch: this.fetchTodoList })),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { height: '100%', backgroundColor: '#fff' } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_TodoList__WEBPACK_IMPORTED_MODULE_3__["default"], { todoList: this.state.todoList, completeState: 1 /* Done */, fetch: this.fetchTodoList })),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { height: '100%', backgroundColor: '#fff' } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_TodoList__WEBPACK_IMPORTED_MODULE_3__["default"], { todoList: this.state.todoList, completeState: 2 /* Cancel */, fetch: this.fetchTodoList })))));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "y6Zf":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/components/TodoList/index.less ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, ".enpty-placeHolder {\n  height: 500px;\n  line-height: 500px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n.list-cancel-btn {\n  position: absolute!important;\n  right: 20px;\n  top: 7px;\n  z-index: 99;\n}\n", ""]);

// exports


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map