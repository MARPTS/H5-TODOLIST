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

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8888 ./src/index.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mac/2019program/H5-TODOLIST/node_modules/webpack-dev-server/client/index.js?http://localhost:8888 */"xJUu");
module.exports = __webpack_require__(/*! ./src/index.tsx */"2YZa");


/***/ }),

/***/ "1YCh":
/*!*******************************!*\
  !*** ./src/components/app.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todomvc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todomvc */ "LHfi");

/* harmony default export */ __webpack_exports__["default"] = (_todomvc__WEBPACK_IMPORTED_MODULE_0__["default"]);


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
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app */ "1YCh");



react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.querySelector('#root'));


/***/ }),

/***/ "LHfi":
/*!******************************************!*\
  !*** ./src/components/todomvc/index.tsx ***!
  \******************************************/
/*! exports provided: TodoMvc, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoMvc", function() { return TodoMvc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "PdlB");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);



var STORAGE_KEY = 'todos-react-ts-demo';
var filters = ['all', 'active', 'completed'];
var todoStorage = {
    uid: 1,
    fetch: function () {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        todos.forEach(function (todo, index) {
            todo.id = index;
        });
        todoStorage.uid = todos.length;
        return todos;
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};
var TodoMvc = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TodoMvc, _super);
    function TodoMvc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            newTodo: '',
            filteredTodos: [],
            todoList: todoStorage.fetch(),
            editedTodo: {},
            beforeEditCache: '',
            visibility: 'all'
        };
        _this.onHashChange = function () {
            var visibility = window.location.hash.replace(/#\/?/, '');
            if (filters.indexOf(visibility) > -1) {
                _this.setState({
                    visibility: visibility
                });
            }
            else {
                window.location.hash = '';
                _this.setState({
                    visibility: 'all'
                });
            }
        };
        _this.addTodo = function (event) {
            if (Number(event.keyCode) === 13) {
                var _a = _this.state, newTodo = _a.newTodo, todoList = _a.todoList;
                todoList.push({
                    id: todoStorage.uid++,
                    completed: 'todo',
                    title: newTodo.trim()
                });
                if (newTodo) {
                    _this.setState({
                        todoList: todoList,
                        newTodo: ''
                    });
                }
                todoStorage.save(todoList);
            }
        };
        _this.handleOnChange = function (event) {
            var value = event.target.value;
            _this.setState({
                newTodo: value
            });
        };
        _this.editTodo = function (event) {
            var id = Number(event.target.getAttribute('data-id'));
            var index = _this.getIndex(id);
            var todoList = _this.state.todoList;
            if (index > -1) {
                var todo = todoList[index];
                _this.setState({
                    editedTodo: todo
                });
            }
        };
        _this.removeTodo = function (event) {
            var id = Number(event.target.getAttribute('data-id'));
            var index = _this.getIndex(id);
            var todoList = _this.state.todoList;
            if (index > -1) {
                todoList.splice(index, 1);
                _this.setState({
                    todoList: todoList
                });
                todoStorage.save(todoList);
            }
        };
        _this.doneTodo = function (event) {
            var value = event.target.value.trim();
            var _a = _this.state, todoList = _a.todoList, editedTodo = _a.editedTodo;
            var index = todoList.indexOf(editedTodo);
            if (index > -1) {
                todoList.splice(index, 1, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, editedTodo, { title: value }));
                _this.setState({
                    todoList: todoList,
                    editedTodo: null
                });
                todoStorage.save(todoList);
            }
        };
        _this.handleEditTodo = function (event) {
            var keyCode = Number(event.keyCode);
            if (keyCode === 27) {
                _this.setState({
                    editedTodo: null
                });
            }
            else if (keyCode === 13) {
                _this.doneTodo(event);
            }
        };
        _this.handleCheckBox = function (event) {
            var checked = event.target.checked;
            var id = Number(event.target.getAttribute('data-id'));
            var index = _this.getIndex(id);
            var todoList = _this.state.todoList;
            if (index > -1) {
                todoList[index].completed = checked ? 'done' : 'todo';
            }
            _this.setState({
                todoList: todoList
            });
            todoStorage.save(todoList);
        };
        _this.handleCheckBoxAll = function (event) {
            var checked = event.target.checked;
            var todoList = _this.state.todoList;
            var completed = checked ? 'done' : 'todo';
            todoList.forEach(function (todo) {
                todo.completed = completed;
            });
            _this.setState({
                todoList: todoList
            });
            todoStorage.save(todoList);
        };
        _this.removeCompleted = function (event) {
            var todoList = _this.state.todoList;
            todoList.forEach(function (todo, index) {
                if (todo.completed === 'done') {
                    todoList.splice(index, 1);
                }
            });
            _this.setState({
                todoList: todoList
            });
            todoStorage.save(todoList);
        };
        _this.fliterFactory = function () {
            var todoList = _this.state.todoList;
            return {
                all: function () {
                    return todoList;
                },
                active: function () {
                    return todoList.filter(function (todo) { return todo.completed === 'todo'; });
                },
                completed: function () {
                    return todoList.filter(function (todo) { return todo.completed === 'done'; });
                }
            };
        };
        return _this;
    }
    TodoMvc.prototype.componentDidMount = function () {
        window.addEventListener('hashchange', this.onHashChange);
        this.onHashChange();
    };
    TodoMvc.prototype.componentWillUnmount = function () {
        window.removeEventListener('hashchange', this.onHashChange);
    };
    TodoMvc.prototype.render = function () {
        var _this = this;
        var _a = this.state, newTodo = _a.newTodo, todoList = _a.todoList, editedTodo = _a.editedTodo, visibility = _a.visibility;
        var remaining = todoList.filter(function (todo) { return todo.completed === 'todo'; }).length;
        var pluralize = remaining === 1 ? 'item' : 'items';
        var filter = this.fliterFactory();
        var filteredTodos = filter[visibility]();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "todoapp" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("header", { className: "header" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "todos"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "new-todo", autoFocus: true, autoComplete: "off", placeholder: "What needs to be done?", value: newTodo, onChange: this.handleOnChange, onKeyDown: this.addTodo })),
            !!filteredTodos.length && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "main" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "toggle-all", type: "checkbox", value: "allDone", onChange: this.handleCheckBoxAll }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "todo-list" }, filteredTodos.map(function (todo, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: todo.id, className: "todo" + (todo.completed === 'done' ? ' completed' : '') + (todo === editedTodo ? ' editing' : '') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "view" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "toggle", type: "checkbox", checked: todo.completed === 'done', onChange: _this.handleCheckBox, "data-id": todo.id }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { onDoubleClick: _this.editTodo, "data-id": todo.id }, todo.title),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "destroy", onClick: _this.removeTodo, "data-id": todo.id })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "edit", type: "text", defaultValue: todo.title, autoFocus: todo === editedTodo, onBlur: _this.doneTodo, onKeyDown: _this.handleEditTodo }))); }))),
            !!todoList.length && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("footer", { className: "footer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "todo-count" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, remaining),
                    " ",
                    remaining && pluralize,
                    " left"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "filters" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#/all", className: visibility === 'all' ? 'selected' : '' }, "All")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#/active", className: visibility === 'active' ? 'selected' : '' }, "Active")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#/completed", className: visibility === 'completed' ? 'selected' : '' }, "Completed"))),
                (todoList.length > remaining) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "clear-completed", onClick: this.removeCompleted }, "Clear completed"))));
    };
    TodoMvc.prototype.getIndex = function (id) {
        var todoList = this.state.todoList;
        var index = -1;
        todoList.forEach(function (todo, i) {
            if (todo.id === id) {
                index = i;
            }
        });
        return index;
    };
    return TodoMvc;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (TodoMvc);


/***/ }),

/***/ "PdlB":
/*!*******************************************!*\
  !*** ./src/components/todomvc/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "oyDm");

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

/***/ "oyDm":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/components/todomvc/index.less ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\nbutton,\ninput[type=\"checkbox\"] {\n  outline: none;\n}\n.hidden {\n  display: none;\n}\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  -webkit-box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n          box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\nlabel[for='toggle-all'] {\n  display: none;\n}\n.toggle-all {\n  position: absolute;\n  top: -55px;\n  left: -12px;\n  width: 60px;\n  height: 34px;\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n}\n.toggle-all:before {\n  content: '\\276F';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.toggle-all:checked:before {\n  color: #737373;\n}\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.todo-list li:last-child {\n  border-bottom: none;\n}\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px;\n}\n.todo-list li.editing .view {\n  display: none;\n}\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.todo-list li .toggle:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n.todo-list li .toggle:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n.todo-list li label {\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  -webkit-transition: color 0.4s;\n  transition: color 0.4s;\n}\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  -webkit-transition: color 0.2s ease-out;\n  transition: color 0.2s ease-out;\n}\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n.todo-list li .destroy:after {\n  content: '\\D7';\n}\n.todo-list li:hover .destroy {\n  display: block;\n}\n.todo-list li .edit {\n  display: none;\n}\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.footer:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todo-count {\n  float: left;\n  text-align: left;\n}\n.todo-count strong {\n  font-weight: 300;\n}\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.filters li {\n  display: inline;\n}\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.filters li a.selected,\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.clear-completed:hover {\n  text-decoration: underline;\n}\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.info p {\n  line-height: 1;\n}\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.info a:hover {\n  text-decoration: underline;\n}\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none;\n  }\n  .todo-list li .toggle {\n    height: 40px;\n  }\n  .toggle-all {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n  }\n}\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n  .filters {\n    bottom: 10px;\n  }\n}\n", ""]);

// exports


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map