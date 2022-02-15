self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Projects\\React Projects\\portfolio_website\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "I am self-driven individual who is passionate about writing code. I aspire to become an expert Software Engineer and use my talents to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFXQTtBQU1BO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLCtDQUFRLENBQUMsQ0FBRCxDQUR2QjtBQUFBLE1BQ2RDLFVBRGM7QUFBQSxNQUNGQyxhQURFOztBQUVyQixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QixXQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsY0FBUSxFQUFFO0FBQWxCLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFD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QWE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixlQXlDRSw4REFBQyw2REFBRDtBQUFBLDBCQUFtQkQsSUFBSSxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixhQUNPUixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUEsU0FBakI7QUFESDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQTZERSw4REFBQyw0REFBRDtBQUFBLGdCQUNHdEIsa0VBQUEsQ0FBaUIsVUFBQzRCLElBQUQsRUFBT04sS0FBUDtBQUFBLDRCQUNoQiw4REFBQywyREFBRDtBQUVFLGVBQUssRUFBRUEsS0FGVDtBQUdFLGdCQUFNLEVBQUVuQixVQUhWO0FBSUUsaUJBQU8sRUFBRSxpQkFBQ1UsQ0FBRDtBQUFBLG1CQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBSVMsS0FBSixDQUFsQjtBQUFBLFdBSlg7QUFLRSxjQUFJLEVBQUMsUUFMUDtBQUFBLGlDQU9FLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixXQUNPQSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkVELENBdkhEOztHQUFNckIsUTs7S0FBQUEsUTtBQXlITiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMjExOGQwYmE1YmE0NWQ2Mjk5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbEJ1dHRvbixcclxuICBDYXJvdXNlbEJ1dHRvbkRvdCxcclxuICBDYXJvdXNlbEJ1dHRvbnMsXHJcbiAgQ2Fyb3VzZWxDb250YWluZXIsXHJcbiAgQ2Fyb3VzZWxJdGVtLFxyXG4gIENhcm91c2VsSXRlbUltZyxcclxuICBDYXJvdXNlbEl0ZW1UZXh0LFxyXG4gIENhcm91c2VsSXRlbVRpdGxlLFxyXG4gIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSxcclxufSBmcm9tIFwiLi9UaW1lTGluZVN0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRleHQsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xyXG5cclxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgL1xyXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXHJcbiAgICAgICAgICBUaW1lTGluZURhdGEubGVuZ3RoXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICAgIEkgYW0gc2VsZi1kcml2ZW4gaW5kaXZpZHVhbCB3aG8gaXMgcGFzc2lvbmF0ZSBhYm91dCB3cml0aW5nIGNvZGUuIElcclxuICAgICAgICBhc3BpcmUgdG8gYmVjb21lIGFuIGV4cGVydCBTb2Z0d2FyZSBFbmdpbmVlciBhbmQgdXNlIG15XHJcbiAgICAgICAgdGFsZW50cyB0byBcclxuICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XHJcbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgLz5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==