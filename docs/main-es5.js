(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Familia Ceballos\Desktop\Ariana\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1z/G":
    /*!***************************************************!*\
      !*** ./src/app/view/gallery/gallery.component.ts ***!
      \***************************************************/

    /*! exports provided: GalleryComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
        return GalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _poem_poem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../poem/poem.component */
      "jc5/");

      var GalleryComponent = /*#__PURE__*/function () {
        function GalleryComponent() {
          _classCallCheck(this, GalleryComponent);
        }

        _createClass(GalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            myTest();
          }
        }]);

        return GalleryComponent;
      }();

      GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
        return new (t || GalleryComponent)();
      };

      GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleryComponent,
        selectors: [["gallery"]],
        decls: 7,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col-sm-4", "animado", "m-auto"], ["src", "../../../assets/ari.jpg", 1, "img-fluid1"]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "poem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_poem_poem_component__WEBPACK_IMPORTED_MODULE_1__["PoemComponent"]],
        styles: [".img-fluid1[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border: 5px solid whitesmoke;\r\n    transform: rotate(-5deg);    \r\n}\r\n\r\n.animado[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.mostrarArriba[_ngcontent-%COMP%]{\r\n    -webkit-animation: mostrarUp 1s;\r\n            animation: mostrarUp 1s;\r\n}\r\n\r\n@-webkit-keyframes mostrarUp{\r\n    0%{\r\n        transform: translateX(-60px);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes mostrarUp{\r\n    0%{\r\n        transform: translateX(-60px);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 575px) {\r\n    #foto2[_ngcontent-%COMP%]{\r\n        margin: 0 !important;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osOEVBQThFO0lBQzlFLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZDEge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQwNCksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGVzbW9rZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTsgICAgXHJcbn1cclxuXHJcbi5hbmltYWRve1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubW9zdHJhckFycmliYXtcclxuICAgIGFuaW1hdGlvbjogbW9zdHJhclVwIDFzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vc3RyYXJVcHtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc1cHgpIHtcclxuICAgICNmb3RvMntcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 4,
        vars: 0,
        consts: [[1, "head"], [1, "marco"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ari..");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".head[_ngcontent-%COMP%]{\r\n    background: url('spring.jpg');\r\n    height: 110vh;\r\n    background-color: rgb(196, 97, 196);\r\n    background-blend-mode: soft-light; \r\n    background-size: cover;\r\n    background-position: center;\r\n    display: flex;\r\n    padding: 1px;\r\n}\r\n\r\n.marco[_ngcontent-%COMP%]{\r\n    background-image: url('late.png');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    width: 40%;\r\n    height: 70%;\r\n    margin: auto;\r\n    -webkit-animation: mianimacion 0.8s ease-in-out 1.5s infinite normal none;\r\n            animation: mianimacion 0.8s ease-in-out 1.5s infinite normal none;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font: bold 40px 'Grenze Gotisch', cursive;\r\n    text-transform: capitalize;\r\n    color: rgba(255, 192, 203, 0.829);\r\n    padding-top: 52px !important;\r\n    padding-left: 6px !important;\r\n    margin: 0;\r\n}\r\n\r\n@media screen and (min-width: 375px) and (max-width: 532px){\r\n    .head[_ngcontent-%COMP%]{\r\n        height: 85vh;\r\n    }\r\n\r\n    .marco[_ngcontent-%COMP%]{\r\n        width: 63%;\r\n        height: 45%;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 3.5rem;\r\n        padding: 60px 0;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 360px) and (max-width: 374px){\r\n    .head[_ngcontent-%COMP%]{\r\n        height: 70vh;\r\n    }\r\n\r\n    .marco[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 48%;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 4rem;\r\n        padding: 65px 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes mianimacion {\r\n    0%{\r\n        transform: scale(1);\r\n    }\r\n    50%{\r\n        transform: scale(1.2);\r\n    }\r\n    100%{\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes mianimacion {\r\n    0%{\r\n        transform: scale(1);\r\n    }\r\n    50%{\r\n        transform: scale(1.2);\r\n    }\r\n    100%{\r\n        transform: scale(1);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkM7SUFDN0MsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxpQ0FBaUMsRUFBRSwyQ0FBMkM7SUFDOUUsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWix5RUFBaUU7WUFBakUsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QywwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsU0FBUztBQUNiOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQVZBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL3NwcmluZy5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDk3LCAxOTYpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0OyAvKmludmllcnRlIG9yZGVuIGRlIGZvdG8geSBmaWx0cm8gZGUgY29sb3IqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5tYXJjb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvbGF0ZS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBhbmltYXRpb246IG1pYW5pbWFjaW9uIDAuOHMgZWFzZS1pbi1vdXQgMS41cyBpbmZpbml0ZSBub3JtYWwgbm9uZTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250OiBib2xkIDQwcHggJ0dyZW56ZSBHb3Rpc2NoJywgY3Vyc2l2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAxOTIsIDIwMywgMC44MjkpO1xyXG4gICAgcGFkZGluZy10b3A6IDUycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNTMycHgpe1xyXG4gICAgLmhlYWR7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXJjb3tcclxuICAgICAgICB3aWR0aDogNjMlO1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzRweCl7XHJcbiAgICAuaGVhZHtcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmNve1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDY1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbWlhbmltYWNpb24ge1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ariana';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "footer", "text-center"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copyright \xA9 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    background-image: url(https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/14145420/Flores-SF-6.jpg);\r\n    background-color: plum;\r\n    background-blend-mode: soft-light;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n}\r\n\r\nh5[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwySUFBMkk7SUFDM0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2FyYy13b3JkcHJlc3MtY2xpZW50LXVwbG9hZHMvaW5mb2JhZS13cC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS8xNDE0NTQyMC9GbG9yZXMtU0YtNi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xyXG59XHJcblxyXG5oNXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _view_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view/gallery/gallery.component */
      "1z/G");
      /* harmony import */


      var _view_poem_poem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view/poem/poem.component */
      "jc5/");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _view_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"], _view_poem_poem_component__WEBPACK_IMPORTED_MODULE_6__["PoemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _view_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"], _view_poem_poem_component__WEBPACK_IMPORTED_MODULE_6__["PoemComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jc5/":
    /*!*********************************************!*\
      !*** ./src/app/view/poem/poem.component.ts ***!
      \*********************************************/

    /*! exports provided: PoemComponent */

    /***/
    function jc5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PoemComponent", function () {
        return PoemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PoemComponent = /*#__PURE__*/function () {
        function PoemComponent() {
          _classCallCheck(this, PoemComponent);
        }

        _createClass(PoemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PoemComponent;
      }();

      PoemComponent.ɵfac = function PoemComponent_Factory(t) {
        return new (t || PoemComponent)();
      };

      PoemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PoemComponent,
        selectors: [["poem"]],
        decls: 25,
        vars: 0,
        consts: [[1, "container"], [1, "poema", "text-black-50"], ["id", "parte2"], [1, "font-italic", "text-muted"], ["id", "corazon1", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon2", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon3", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon4", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon5", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon6", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon7", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon8", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon9", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon10", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon11", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon12", "src", "../../../assets/me_importa.png", "alt", ""]],
        template: function PoemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "  Lo recuerdo, fue aquel d\xEDa\n  cuando te vi... \n  la primera vez que\n  vi tus ojos.\n  \n  Solos estaban   \n  solos miraban la nada,\n  desde entonces no despegue\n  de ti mi mirada. \n\n  Cada dia alisto mis barcas\n  y espero las puestas del sol \n  so\xF1ando hallar en ellos \n  tu coraz\xF3n.\n\n  No encontr\xE9 fachadas ah\xED, \n  sino un impetuoso rio\n  donde se reflejan a luz \n  sus riquezas. \n\n  Tus cabellos corren \n  y caen semejante\n  a sus cascadas... \n  hasta el Niagara es expectante.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "  Hermosura... sosiego \n  corren en sus ondas\n  se mecen y golpetean, \n  no me siento a solas. \n\n  Mis lagrimas tambi\xE9n\n  corren y caen,\n  sin embargo estar\xE1 en popa\n  mi esperanza.\n\n  Dejo soplar al viento \n  susurrando en silencio,\n  as\xED tambi\xE9n a lo que siento... \n  \n  Mis motivos no pretenden \n  perturbar la esencia\n  de su manantial, \n  maravilloso por excelencia.    \n\n  Sus olas me arrastraron a \n  otro mundo y no estaba listo,\n  el naufragio talvez espera,\n  aun as\xED no me quedare en vera.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                                      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "cite", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your eyes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 0;\r\n} \r\n\r\n.poema[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n} \r\n\r\npre[_ngcontent-%COMP%]{\r\n    \r\n    color: black;\r\n    font: normal 23.5px 'Grenze Gotisch', cursive;\r\n} \r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font: bold 40px 'Grenze Gotisch', cursive;\r\n} \r\n\r\ncite[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n} \r\n\r\n#parte2[_ngcontent-%COMP%]{\r\n    padding-top: 5rem;\r\n    margin: 0;\r\n} \r\n\r\n#corazon1[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 15%;    \r\n    right: 90%;\r\n    transform: rotate(-20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon2[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 85%;    \r\n    right: 88%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon3[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 100%;  \r\n    right: 70%;\r\n    transform: rotate(-8deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon4[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 50%;    \r\n    right: 5%;\r\n    transform: rotate(-15deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon5[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 5%;  \r\n    right:15%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon6[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 40%;  \r\n    right: 90%;\r\n    transform: rotate(20deg);\r\n    opacity:0.5\r\n} \r\n\r\n#corazon7[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 25%;    \r\n    right: 5%;\r\n    transform: rotate(-20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon8[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 55%;    \r\n    right: 90%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon9[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 10%;  \r\n    right: 0%;\r\n    transform: rotate(-8deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon10[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 75%;    \r\n    right: 0%;\r\n    transform: rotate(-15deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon11[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 95%;  \r\n    right: 7%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon12[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 65%;  \r\n    right: 5%;\r\n    transform: rotate(20deg);\r\n    opacity:0.5\r\n} \r\n\r\n@media screen and (min-width: 768px){\r\n    pre[_ngcontent-%COMP%]{\r\n        font-size: 3.5vw;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n    }\r\n} \r\n\r\n@media screen and (min-width: 1024px){\r\n    pre[_ngcontent-%COMP%]{\r\n        font-size: 2.1vw;\r\n    }\r\n} \r\n\r\n@media screen and (max-width: 320px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n} \r\n\r\n@media screen and (min-width: 320px) and (max-width: 767px){\r\n    #parte2[_ngcontent-%COMP%]{\r\n        padding-top: 2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9wb2VtL3BvZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdmlldy9wb2VtL3BvZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59IFxyXG5cclxuLnBvZW1he1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxucHJle1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjgpOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udDogbm9ybWFsIDIzLjVweCAnR3JlbnplIEdvdGlzY2gnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQ6IGJvbGQgNDBweCAnR3JlbnplIEdvdGlzY2gnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5jaXRle1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNwYXJ0ZTJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvcmF6b24xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiAxNSU7ICAgIFxyXG4gICAgcmlnaHQ6IDkwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b24ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA4NSU7ICAgIFxyXG4gICAgcmlnaHQ6IDg4JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDEwMCU7ICBcclxuICAgIHJpZ2h0OiA3MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b240e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA1MCU7ICAgIFxyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDUlOyAgXHJcbiAgICByaWdodDoxNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b242e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA0MCU7ICBcclxuICAgIHJpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OjAuNVxyXG59XHJcblxyXG4jY29yYXpvbjd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDI1JTsgICAgXHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbiNjb3Jhem9uOHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRvcDogNTUlOyAgICBcclxuICAgIHJpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b245e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiAxMCU7ICBcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjEwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA3NSU7ICAgIFxyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjExe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA5NSU7ICBcclxuICAgIHJpZ2h0OiA3JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjEye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA2NSU7ICBcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6MC41XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIHByZXtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgcHJle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4xdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAjcGFydGUye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'poem',
            templateUrl: './poem.component.html',
            styleUrls: ['./poem.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _view_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view/gallery/gallery.component */
      "1z/G");

      var routes = [{
        path: '',
        component: _view_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map