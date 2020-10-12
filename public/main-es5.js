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
        decls: 10,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col-sm-4", "animado", "m-auto"], ["src", "../../../assets/ari.jpg", 1, "img-fluid1"], [1, "centrar"], ["controls", ""], ["src", "./../../../assets/REO_Speedwagon_Take_It_On_the_Run.mp3", "type", "audio/mp3"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "audio", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_poem_poem_component__WEBPACK_IMPORTED_MODULE_1__["PoemComponent"]],
        styles: [".img-fluid1[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.404), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border: 7px solid plum;\r\n    border-radius: 50%;\r\n    transform: rotate(-5deg);   \r\n    margin-top: -5rem; \r\n}\r\n\r\n.animado[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.centrar[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.mostrarArriba[_ngcontent-%COMP%]{\r\n    -webkit-animation: mostrarUp 1s;\r\n            animation: mostrarUp 1s;\r\n}\r\n\r\n@-webkit-keyframes mostrarUp{\r\n    0%{\r\n        transform: translateY(60px);\r\n    }\r\n    100%{\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes mostrarUp{\r\n    0%{\r\n        transform: translateY(60px);\r\n    }\r\n    100%{\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 575px) {\r\n    #foto2[_ngcontent-%COMP%]{\r\n        margin: 0 !important;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osOEVBQThFO0lBQzlFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQVBBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsdWlkMSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNDA0KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCBwbHVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpOyAgIFxyXG4gICAgbWFyZ2luLXRvcDogLTVyZW07IFxyXG59XHJcblxyXG4uYW5pbWFkb3tcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLmNlbnRyYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3N0cmFyQXJyaWJhe1xyXG4gICAgYW5pbWF0aW9uOiBtb3N0cmFyVXAgMXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9zdHJhclVwe1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NXB4KSB7XHJcbiAgICAjZm90bzJ7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
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
        styles: [".head[_ngcontent-%COMP%]{\r\n    background: url(https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/14145420/Flores-SF-6.jpg);\r\n    height: 100vh;\r\n    background-color: rgb(196, 97, 196, 0.7);\r\n    background-blend-mode: soft-light; \r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    \r\n    display: flex;\r\n    padding: 1px;\r\n}\r\n\r\n.marco[_ngcontent-%COMP%]{\r\n    background-image: url('late.png');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    width: 28%;\r\n    height: 50%;\r\n    margin: auto;\r\n    margin-bottom: 10rem;\r\n    -webkit-animation: mianimacion 0.8s ease-in-out 1.5s infinite normal none;\r\n            animation: mianimacion 0.8s ease-in-out 1.5s infinite normal none;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font: bold 8rem 'Grenze Gotisch', cursive;\r\n    text-transform: capitalize;\r\n    color: rgba(255, 192, 203, 0.829);\r\n    padding: 50px 0 50px 25px;\r\n    margin: 0;\r\n}\r\n\r\n@media screen and (min-width: 1024px) and (max-width: 1260px){\r\n    .marco[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n        height: 50%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 8rem;\r\n        padding: 75px 0 75px 25px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 425px) and (max-width: 532px){\r\n    .head[_ngcontent-%COMP%]{\r\n        height: 85vh;\r\n    }\r\n\r\n    .marco[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 57%;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 5.5rem;\r\n        padding: 60px 0;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 375px) and (max-width: 424px){\r\n    .head[_ngcontent-%COMP%]{\r\n        height: 85vh;\r\n    }\r\n\r\n    .marco[_ngcontent-%COMP%]{\r\n        width: 63%;\r\n        height: 45%;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 3.5rem;\r\n        padding: 58px 0;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 360px) and (max-width: 374px){\r\n    .head[_ngcontent-%COMP%]{\r\n        height: 70vh;\r\n    }\r\n\r\n    .marco[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 48%;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 4rem;\r\n        padding: 55px 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes mianimacion {\r\n    0%{\r\n        transform: scale(1);\r\n    }\r\n    50%{\r\n        transform: scale(1.2);\r\n    }\r\n    100%{\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes mianimacion {\r\n    0%{\r\n        transform: scale(1);\r\n    }\r\n    50%{\r\n        transform: scale(1.2);\r\n    }\r\n    100%{\r\n        transform: scale(1);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxSUFBcUk7SUFDckksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQ0FBaUMsRUFBRSwyQ0FBMkM7SUFDOUUsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQStDO0lBQy9DLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix5RUFBaUU7WUFBakUsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QywwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQVZBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9hcmMtd29yZHByZXNzLWNsaWVudC11cGxvYWRzL2luZm9iYWUtd3Avd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvMTQxNDU0MjAvRmxvcmVzLVNGLTYuanBnKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA5NywgMTk2LCAwLjcpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0OyAvKmludmllcnRlIG9yZGVuIGRlIGZvdG8geSBmaWx0cm8gZGUgY29sb3IqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLm1hcmNve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sYXRlLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG4gICAgYW5pbWF0aW9uOiBtaWFuaW1hY2lvbiAwLjhzIGVhc2UtaW4tb3V0IDEuNXMgaW5maW5pdGUgbm9ybWFsIG5vbmU7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udDogYm9sZCA4cmVtICdHcmVuemUgR290aXNjaCcsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTkyLCAyMDMsIDAuODI5KTtcclxuICAgIHBhZGRpbmc6IDUwcHggMCA1MHB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyNjBweCl7XHJcbiAgICAubWFyY297XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgICAgICBwYWRkaW5nOiA3NXB4IDAgNzVweCAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkgYW5kIChtYXgtd2lkdGg6IDUzMnB4KXtcclxuICAgIC5oZWFke1xyXG4gICAgICAgIGhlaWdodDogODV2aDtcclxuICAgIH1cclxuXHJcbiAgICAubWFyY297XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDU3JTtcclxuICAgIH1cclxuXHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDUuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNDI0cHgpe1xyXG4gICAgLmhlYWR7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXJjb3tcclxuICAgICAgICB3aWR0aDogNjMlO1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDU4cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzRweCl7XHJcbiAgICAuaGVhZHtcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmNve1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDU1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbWlhbmltYWNpb24ge1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn0iXX0= */"]
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
        decls: 6,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "footer", "text-center"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    background-image: url(https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/14145420/Flores-SF-6.jpg);\r\n    background-color: rgba(221, 160, 221, 0.5);\r\n    background-blend-mode: soft-light;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwySUFBMkk7SUFDM0ksMENBQTBDO0lBQzFDLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLmFtYXpvbmF3cy5jb20vYXJjLXdvcmRwcmVzcy1jbGllbnQtdXBsb2Fkcy9pbmZvYmFlLXdwL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA5LzE0MTQ1NDIwL0Zsb3Jlcy1TRi02LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMTYwLCAyMjEsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cclxufSJdfQ== */"]
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
        consts: [[1, "container"], [1, "poema"], ["id", "parte2"], [1, "font-italic", "text-muted"], ["id", "corazon1", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon2", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon3", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon4", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon5", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon6", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon7", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon8", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon9", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon10", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon11", "src", "../../../assets/me_importa.png", "alt", ""], ["id", "corazon12", "src", "../../../assets/me_importa.png", "alt", ""]],
        template: function PoemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "  Lo recuerdo bien \n  fue aquel d\xEDa cuando te vi\n  la primera vez que\n  vi tus ojos.\n  \n  Solos estaban   \n  solos miraban la nada,\n  fue as\xED que me cautivo\n  tu mirada (si esa mirada). \n\n  Cada d\xEDa alisto mis barcas\n  y espero las puestas del sol \n  deseando hallar en ellos \n  tu coraz\xF3n.\n\n  No encontr\xE9 fals\xEDa en ellos\n  si un rio impetuoso, turguesa,\n  donde se esconden de la luz \n  muchas riquezas. \n\n  As\xED tambien tus cabellos  \n  que se vuelven semejante\n  a sus cascadas... \n  hasta el Niagara es expectante.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "  Hermosura... sosiego \n  corren en sus ondas\n  se mecen y golpetean, \n  y yo aqui a solas. \n\n  Mis lagrimas tambi\xE9n\n  corren y caen,\n  pero no abandona la popa\n  mi esperanza.\n\n  Dejo soplar al viento \n  susurrando en silencio,\n  as\xED tambi\xE9n a lo que siento... \n  \n  No pretenden mis anhelos \n  perturbar esa esencia\n  de manantial, \n  maravilloso por excelencia.    \n\n  Me arrastra y me lleva a \n  otro mundo y no estaba listo,\n  y aunque el naufragio espera\n  no me quedare en la vera.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                             ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "cite", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Titulo: tus ojos");

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
        styles: [".container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 0;\r\n} \r\n\r\n.poema[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n} \r\n\r\npre[_ngcontent-%COMP%]{\r\n    \r\n    color: black;\r\n    font: bold 23.5px 'Grenze Gotisch', cursive;\r\n} \r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font: bold 40px 'Grenze Gotisch', cursive;\r\n} \r\n\r\ncite[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n} \r\n\r\n#parte2[_ngcontent-%COMP%]{\r\n    padding-top: 3.5rem;\r\n    margin: 0;\r\n} \r\n\r\n#corazon1[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 15%;    \r\n    right: 90%;\r\n    transform: rotate(-20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon2[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 85%;    \r\n    right: 88%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon3[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 100%;  \r\n    right: 70%;\r\n    transform: rotate(-8deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon4[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 50%;    \r\n    right: 5%;\r\n    transform: rotate(-15deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon5[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 5%;  \r\n    right:15%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon6[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 40%;  \r\n    right: 90%;\r\n    transform: rotate(20deg);\r\n    opacity:0.5\r\n} \r\n\r\n#corazon7[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 25%;    \r\n    right: 5%;\r\n    transform: rotate(-20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon8[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 55%;    \r\n    right: 90%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon9[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 10%;  \r\n    right: 0%;\r\n    transform: rotate(-8deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon10[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 75%;    \r\n    right: 0%;\r\n    transform: rotate(-15deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon11[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 95%;  \r\n    right: 7%;\r\n    transform: rotate(20deg);\r\n    opacity: 0.5\r\n} \r\n\r\n#corazon12[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    max-width: 40px;\r\n    height: auto;\r\n    top: 65%;  \r\n    right: 5%;\r\n    transform: rotate(20deg);\r\n    opacity:0.5\r\n} \r\n\r\n@media screen and (min-width: 768px){\r\n    pre[_ngcontent-%COMP%]{\r\n        font-size: 3.5vw;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n    }\r\n} \r\n\r\n@media screen and (min-width: 1024px){\r\n    pre[_ngcontent-%COMP%]{\r\n        font-size: 2.1vw;\r\n    }\r\n} \r\n\r\n@media screen and (max-width: 320px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n} \r\n\r\n@media screen and (min-width: 320px) and (max-width: 767px){\r\n    #parte2[_ngcontent-%COMP%]{\r\n        padding-top: 2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9wb2VtL3BvZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdmlldy9wb2VtL3BvZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59IFxyXG5cclxuLnBvZW1he1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxucHJle1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjgpOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udDogYm9sZCAyMy41cHggJ0dyZW56ZSBHb3Rpc2NoJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250OiBib2xkIDQwcHggJ0dyZW56ZSBHb3Rpc2NoJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuY2l0ZXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcGFydGUye1xyXG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvcmF6b24xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiAxNSU7ICAgIFxyXG4gICAgcmlnaHQ6IDkwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b24ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA4NSU7ICAgIFxyXG4gICAgcmlnaHQ6IDg4JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDEwMCU7ICBcclxuICAgIHJpZ2h0OiA3MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b240e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA1MCU7ICAgIFxyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDUlOyAgXHJcbiAgICByaWdodDoxNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b242e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA0MCU7ICBcclxuICAgIHJpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OjAuNVxyXG59XHJcblxyXG4jY29yYXpvbjd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDI1JTsgICAgXHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbiNjb3Jhem9uOHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRvcDogNTUlOyAgICBcclxuICAgIHJpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuI2NvcmF6b245e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiAxMCU7ICBcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjEwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA3NSU7ICAgIFxyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjExe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA5NSU7ICBcclxuICAgIHJpZ2h0OiA3JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4jY29yYXpvbjEye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA2NSU7ICBcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgIG9wYWNpdHk6MC41XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIHByZXtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgcHJle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4xdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAjcGFydGUye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgfVxyXG59Il19 */"]
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