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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/displayUI.js":
/*!**************************!*\
  !*** ./src/displayUI.js ***!
  \**************************/
/*! exports provided: displayOneCategory, renderCategories, displayOneLink, renderLinks, searchBarCategories, searchBarLinks, btnClearCategoriesFilterText, btnClearForCategoriesFilterText, btnClearLinksFilterText, btnClearForLinksFilterText, setStyleMarkedAsImportant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayOneCategory", function() { return displayOneCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCategories", function() { return renderCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayOneLink", function() { return displayOneLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLinks", function() { return renderLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBarCategories", function() { return searchBarCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBarLinks", function() { return searchBarLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnClearCategoriesFilterText", function() { return btnClearCategoriesFilterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnClearForCategoriesFilterText", function() { return btnClearForCategoriesFilterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnClearLinksFilterText", function() { return btnClearLinksFilterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnClearForLinksFilterText", function() { return btnClearForLinksFilterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyleMarkedAsImportant", function() { return setStyleMarkedAsImportant; });
/* harmony import */ var _mainClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainClass */ "./src/mainClass.js");
 ////////////////////////////////
////////////// Categories ///////////
////////////////////////////////
// Display one Category element

function displayOneCategory(categoryElement) {
  var category = document.createElement('div');
  category.className = 'category-main';
  category.id = categoryElement.name;
  var categoryItem = document.createElement("div");
  categoryItem.textContent = categoryElement.name;
  var elementName = categoryElement.name;
  var categoryItemSvg = document.createElement('div');
  categoryItemSvg.className = "fas fa-star";
  categoryItemSvg.id = "".concat(elementName, "Star");

  if (_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getTextFilterCategories() === "") {
    category.classList.add('fadein-animation');
  }

  if (_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getSelectegCategory() && _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getSelectegCategory() === categoryElement.name) {
    setStyleSelected(category);
  }

  if (categoryElement.important === true) {
    setStyleMarkedAsImportant(categoryItemSvg);
  }

  categoryItemSvg.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    setStyleMarkedAsImportant(categoryItemSvg);

    if (categoryElement.important === false) {
      _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setCategoryAsImportant(categoryElement);
    } else {
      _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].deleteElementFromImportantCategories(categoryElement);
    }
  });
  category.addEventListener("click", function (e) {
    e.preventDefault();

    if (document.getElementById(_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getSelectegCategory())) {
      reverseStyleSelected();
    }

    _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setSelectedCategory(categoryElement.name);
    setStyleSelected(category);
    selectedCategoryDisplay(categoryElement);
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].collectAllLinks();
  });
  category.append(categoryItem, categoryItemSvg);
  document.querySelector("#categories").appendChild(category);
} // Display which category has been selected (like highlited)

function selectedCategoryDisplay(category) {
  var chosenCategoryDiv = document.createElement('div');
  chosenCategoryDiv.className = 'chosen-category-div';
  chosenCategoryDiv.id = 'chosen-div';
  var chosenCategory = document.createElement('p');
  chosenCategory.id = 'chosenCategory';
  chosenCategory.className = 'chosen-category';
  chosenCategory.textContent = category.name;
  var chosenCategoryBtn = document.createElement('button');
  chosenCategoryBtn.type = 'button';
  chosenCategoryBtn.className = 'chosen-category-btn';
  chosenCategoryBtn.textContent = 'X';
  chosenCategoryBtn.addEventListener('click', function (e) {
    e.preventDefault();
    reverseStyleSelected();
    document.querySelector('#chosen-div').classList.add('fall');
    document.querySelector('#chosen-div').addEventListener('transitionend', function () {
      chosenCategoryBtn.parentElement.remove();
    });
    document.querySelector('#oneCategoryDisplayBox').innerHTML = '';
    _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setSelectedCategory('');
    _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].collectAllLinks();
  });
  chosenCategoryDiv.append(chosenCategory, chosenCategoryBtn);
  document.querySelector('#displaySelected').innerHTML = "";
  document.querySelector('#displaySelected').appendChild(chosenCategoryDiv);
} // Render of category elements;


function renderCategories() {
  _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getCategories().forEach(function (el) {
    displayOneCategory(el);
  });
} ////////////////////////////////
////////////// LINKS ///////////
////////////////////////////////
// Display of One Link element

function displayOneLink(link) {
  var individuals = document.createElement("div");
  individuals.className = "display-data";
  var paramSvg = document.createElement('div');
  paramSvg.className = "fas fa-star svg-within-link";
  var paramApi = document.createElement("p");
  paramApi.className = "display-data-p";
  paramApi.textContent = "API: ".concat(link.API);
  var paramCategory = document.createElement("p");
  paramCategory.className = "display-data-p";
  paramCategory.textContent = "Category: ".concat(link.Category);
  var paramDescription = document.createElement("p");
  paramDescription.className = "display-data-p";
  paramDescription.textContent = "Description: ".concat(link.Description);
  var paramLink = document.createElement("a");
  paramLink.className = "display-data-p";
  paramLink.href = link.Link;
  paramLink.target = "_blank";
  paramLink.textContent = "Link to an API webpage";

  if (link.important === true) {
    setStyleMarkedAsImportant(paramSvg);
  }

  paramSvg.addEventListener('click', function (e) {
    e.preventDefault();
    setStyleMarkedAsImportant(paramSvg);

    if (link.important === false) {
      _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setLinkAsImportant(link);
    } else {
      _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].deleteElementFromImportantLinks(link);
    }
  });
  individuals.append(paramSvg, paramApi, paramCategory, paramDescription, paramLink);
  document.querySelector("#oneCategoryDisplayBox").append(individuals);
} // Render of all Link elements

function renderLinks() {
  _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getLinks().forEach(function (link) {
    displayOneLink(link);
  });
} ////////////////////////////////////////
////////////// UTILITIES ///////////////
////////////////////////////////////////
// Buttons, search bars, style functions

function searchBarCategories() {
  document.querySelector("#searchBar").addEventListener("input", function (e) {
    e.preventDefault();
    _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setTextFilterCategories(e.target.value.toLowerCase());
    document.querySelector("#categories").innerHTML = "";
    renderCategories();
  });
}
function searchBarLinks() {
  document.querySelector("#searchBarLinks").addEventListener("input", function (e) {
    e.preventDefault();
    _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setTextFilterLinks(e.target.value.toLowerCase());
    document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
    renderLinks();
  });
} // btnClear for Category search

function btnClearCategoriesFilterText() {
  var searchContent = document.querySelector("#searchBar");
  searchContent.value = "";
  document.querySelector("#categories").innerHTML = "";
  _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setTextFilterCategories('');
  renderCategories();
} // Initialization of btnClear for Category

function btnClearForCategoriesFilterText() {
  var searchBarCategories = document.querySelector('#searchBar');
  document.querySelector("#btnClear").addEventListener("click", function (e) {
    e.preventDefault();

    if (searchBarCategories.value === '') {
      document.querySelector("#btnClear").disabeled = true;
    } else {
      btnClearCategoriesFilterText();
    }
  });
} // btnClear for Links search

function btnClearLinksFilterText() {
  var searchContent = document.querySelector("#searchBarLinks");
  searchContent.value = "";
  document.querySelector("#oneCategoryDisplayBox").innerHTML = "";
  _mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setTextFilterLinks('');
  renderLinks();
} // Implementation of btnClear for Links

function btnClearForLinksFilterText() {
  var searchBarLinks = document.querySelector('#searchBarLinks');
  document.querySelector("#btnClearLinks").addEventListener("click", function (e) {
    e.preventDefault();

    if (searchBarLinks.value === '') {
      document.querySelector("#btnClearLinks").disabeled = true;
    } else {
      btnClearLinksFilterText();
    }
  });
} // Change of STAR color for Mark-As-Important feature

function setStyleMarkedAsImportant(element) {
  element.classList.toggle('mark-important');
} // Highlight chosen category

function setStyleSelected(el) {
  el.classList.add('category-main-chosen');
} // Remove highlight from chosen category


function reverseStyleSelected() {
  if (_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getSelectegCategory() !== '') {
    document.getElementById(_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].getSelectegCategory()).classList.remove('category-main-chosen');
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainClass */ "./src/mainClass.js");
/* harmony import */ var _displayUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayUI */ "./src/displayUI.js");


_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setOnCategoriesReceived(_displayUI__WEBPACK_IMPORTED_MODULE_1__["renderCategories"]);
_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].setOnLinksReceived(_displayUI__WEBPACK_IMPORTED_MODULE_1__["renderLinks"]); // Initial call of method displayCategories() in order to fill and transform this.categories;

_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].collectAllCategories(); // Initial call of method collectAllLinks() in order to fill and transform this.links;

_mainClass__WEBPACK_IMPORTED_MODULE_0__["instanceOfMainClass"].collectAllLinks();
Object(_displayUI__WEBPACK_IMPORTED_MODULE_1__["searchBarCategories"])();
Object(_displayUI__WEBPACK_IMPORTED_MODULE_1__["searchBarLinks"])();
Object(_displayUI__WEBPACK_IMPORTED_MODULE_1__["btnClearForCategoriesFilterText"])();
Object(_displayUI__WEBPACK_IMPORTED_MODULE_1__["btnClearForLinksFilterText"])();

/***/ }),

/***/ "./src/mainClass.js":
/*!**************************!*\
  !*** ./src/mainClass.js ***!
  \**************************/
/*! exports provided: AllItems, instanceOfMainClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllItems", function() { return AllItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceOfMainClass", function() { return instanceOfMainClass; });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./src/source.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var AllItems = /*#__PURE__*/function () {
  function AllItems(onReceivedCategories, onReceivedLinks) {
    _classCallCheck(this, AllItems);

    // categories
    this.categories = [];
    this.onReceivedCategories = onReceivedCategories; // links

    this.links = [];
    this.onReceivedLinks = onReceivedLinks; // textFilter used for searchTabs and selectedCategory used for displaying links of certain category

    this.textFilterLinks = '';
    this.textFilterCategories = '';
    this.selectedCategory = ''; // localStorage

    this.mapOfImportantCategories = JSON.parse(localStorage.getItem('importantCategories')) || {};
    this.mapOfImportantLinks = JSON.parse(localStorage.getItem('importantLinks')) || {};
  } // Get


  _createClass(AllItems, [{
    key: "getSelectegCategory",
    value: function getSelectegCategory() {
      return this.selectedCategory;
    }
  }, {
    key: "getTextFilterCategories",
    value: function getTextFilterCategories() {
      return this.textFilterCategories;
    }
  }, {
    key: "getTextFilterLinks",
    value: function getTextFilterLinks() {
      return this.textFilterLinks;
    } // Set

  }, {
    key: "setOnCategoriesReceived",
    value: function setOnCategoriesReceived(onReceivedCategories) {
      this.onReceivedCategories = onReceivedCategories;
    }
  }, {
    key: "setOnLinksReceived",
    value: function setOnLinksReceived(onReceivedLinks) {
      this.onReceivedLinks = onReceivedLinks;
    }
  }, {
    key: "setSelectedCategory",
    value: function setSelectedCategory(param) {
      this.selectedCategory = param;
    }
  }, {
    key: "setTextFilterCategories",
    value: function setTextFilterCategories(param) {
      this.textFilterCategories = param;
    }
  }, {
    key: "setTextFilterLinks",
    value: function setTextFilterLinks(param) {
      this.textFilterLinks = param;
    } // CATEGORIES
    // called initially when page loads

  }, {
    key: "collectAllCategories",
    value: function collectAllCategories() {
      var _this = this;

      Object(_source__WEBPACK_IMPORTED_MODULE_0__["getAllCategories"])().then(function (res) {
        _this.categories = _this.transformCategories(res);

        _this.onReceivedCategories();
      });
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      var _this2 = this;

      if (this.textFilterCategories) {
        var filteredCategoriesAfterSearch = this.categories.filter(function (el) {
          if (el.name.toLowerCase().includes(_this2.textFilterCategories)) {
            return el;
          }
        });
        return filteredCategoriesAfterSearch;
      } else {
        return this.categories;
      }
    }
  }, {
    key: "transformCategories",
    value: function transformCategories(arr) {
      var _this3 = this;

      return arr.map(function (el) {
        if (_this3.mapOfImportantCategories[el]) {
          return {
            name: el,
            id: el,
            important: true
          };
        } else {
          return {
            name: el,
            id: el,
            important: false
          };
        }
      });
    } // LINKS
    // called initially when page loads

  }, {
    key: "collectAllLinks",
    value: function collectAllLinks() {
      var _this4 = this;

      var elementName = instanceOfMainClass.selectedCategory;
      var firstWord = elementName.split(" ")[0];
      Object(_source__WEBPACK_IMPORTED_MODULE_0__["getData"])(firstWord).then(function (res) {
        _this4.links = _this4.transformLink(res);

        _this4.onReceivedLinks();
      });
    }
  }, {
    key: "getLinks",
    value: function getLinks() {
      var _this5 = this;

      if (this.textFilterLinks) {
        var filteredLinksAfterSearch = this.links.filter(function (el) {
          if (el.API.toLowerCase().includes(_this5.textFilterLinks)) {
            return el;
          }
        });
        return filteredLinksAfterSearch;
      } else {
        return this.links;
      }
    }
  }, {
    key: "transformLink",
    value: function transformLink(res) {
      var _this6 = this;

      res.forEach(function (el) {
        if (_this6.mapOfImportantLinks[el.API]) {
          return el.important = true;
        } else {
          return el.important = false;
        }
      });
      return res;
    } ///////////////////////////////
    // localStorage - CATEGORIES //
    ///////////////////////////////

  }, {
    key: "toggleImportantCategory",
    value: function toggleImportantCategory(el) {
      if (el.important === false) {
        el.important = true;
      } else {
        el.important = false;
      }
    }
  }, {
    key: "updateStorageCategories",
    value: function updateStorageCategories() {
      localStorage.setItem('importantCategories', JSON.stringify(this.mapOfImportantCategories));
    }
  }, {
    key: "setCategoryAsImportant",
    value: function setCategoryAsImportant(element) {
      this.toggleImportantCategory(element);
      this.mapOfImportantCategories[element.name] = element.important;
      this.updateStorageCategories();
    }
  }, {
    key: "deleteElementFromImportantCategories",
    value: function deleteElementFromImportantCategories(element) {
      this.toggleImportantCategory(element);
      delete this.mapOfImportantCategories[element.name];
      this.updateStorageCategories();
    } ///////////////////////////////
    // localStorage - LINKS//
    ///////////////////////////////

  }, {
    key: "toggleImportantLink",
    value: function toggleImportantLink(el) {
      if (el.important === false) {
        el.important = true;
      } else {
        el.important = false;
      }
    }
  }, {
    key: "updateStorageLinks",
    value: function updateStorageLinks() {
      localStorage.setItem('importantLinks', JSON.stringify(this.mapOfImportantLinks));
    }
  }, {
    key: "setLinkAsImportant",
    value: function setLinkAsImportant(element) {
      this.toggleImportantLink(element);
      this.mapOfImportantLinks[element.API] = element.important;
      this.updateStorageLinks();
    }
  }, {
    key: "deleteElementFromImportantLinks",
    value: function deleteElementFromImportantLinks(element) {
      this.toggleImportantLink(element);
      delete this.mapOfImportantLinks[element.API];
      this.updateStorageLinks();
    }
  }]);

  return AllItems;
}();
var instanceOfMainClass = new AllItems();


/***/ }),

/***/ "./src/source.js":
/*!***********************!*\
  !*** ./src/source.js ***!
  \***********************/
/*! exports provided: getData, getAllCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return getAllCategories; });
function getData(category) {
  var categoryQuery = category ? "?category=".concat(category) : '';
  return fetch("https://api.publicapis.org/entries".concat(categoryQuery)).then(function (res) {
    if (!res.ok) {
      throw new Error("".concat(res.status));
    } else {
      return res.json();
    }
  }).then(function (res) {
    return res.entries;
  })["catch"](function (er) {
    console.log(er);
  });
}
function getAllCategories() {
  return fetch("https://api.publicapis.org/categories").then(function (res) {
    if (!res.ok) {
      throw new Error("".concat(res.status));
    } else {
      return res.json();
    }
  }).then(function (res) {
    return res;
  })["catch"](function (er) {
    console.log(er);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map