webpackJsonp([0],{

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes popup {\n  0% { margin-left: -2000px;}\n  100% { margin-left: 0;}\n}\n\n.container {\n  top: 12vh;\n  left: 2vw;\n  position: absolute;\n  animation: popup 1s ease;\n  background-color: white;\n  /*height: 350px;*/\n  width: 450px;\n  transform: scale(0.8);\n  padding: 30px;\n  border-radius: 3px;\n  text-align: center;\n}\n\na {\n  color: black;\n\n}\n\n.logo {\n  text-decoration: underline;\n}\n\n.logo:hover {\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n}\n\n#img-circle {\n    border-radius: 50%;\n    height: 250px;\n    width: 300px;\n    border-style: solid;\n    border-width: 3px;\n    border-color: #8658c9;\n}\n/*some hard coded css, its a quick fix, but needs to be refactored*/\n\n/*ipad*/\n@media screen and (max-width: 768px) {\n  .container {\n    top: 30vh;\n    left: 20vw;\n    transform: scale(1.0);\n  }\n}\n@media screen and (max-width: 1024px) {\n  .container {\n    top: 20vh;\n    left: 25vw;\n    transform: scale(1.0);\n  }\n}\n/*nexus5x*/\n@media screen and (max-width: 412px) {\n  .container {\n    top: 15vh;\n    left: -5vw;\n    transform: scale(0.75);\n  }\n}\n/*galaxys5*/\n@media screen and (max-width: 360px) {\n  .container {\n    top: 10vh;\n    left: -12vw;\n    transform: scale(0.75);\n  }\n}\n/*iphone 6 and 6+*/\n@media screen and (max-width: 414px) {\n  .container {\n    top: 15vh;\n    left: -5vw;\n    transform: scale(0.75);\n  }\n}\n@media screen and (max-width: 375px) {\n  .container {\n    top: 15vh;\n    left: -10vw;\n    transform: scale(0.75);\n  }\n}\n/*iphone5*/\n@media screen and (max-width: 320px) {\n  .container {\n    top: 12vh;\n    left: -20vw;\n    transform: scale(0.65);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"content-header\">\n    <h1 class=\"logo\" [routerLink]=\"['/']\"></h1>\n  </section>\n\n  <section class=\"content\">\n      <p class=\"lead\">\n        FileNation.io | The simplest way to send files around the world.\n      </p>\n        <img class=\"u-max-full-width\" id=\"img-circle\" src=\"https://ipfs.io/ipfs/QmZoLJWb7WZcrURyJ5cwTTsRiV67aLcfLwmj7Yxi92xVt2\">\n        <p> Joan Viladomat, Alex Sicart, Pol Baladas & Marc Esquirol </p>\n      <p class=\"lead\">\n        <a href=\"https://youtu.be/sgy6D-45_vc\" target=\"_blank\">Cómo lograr la libertad online con el Internet descentralizado - TEDx Talk</a>\n        <br />\n        <a href=\"https://github.com/alexsicart/Filenation/blob/gh-pages/LICENSE\" target=\"_blank\">MIT license</a>\n      </p>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("./src/app/about/about.component.html"),
        styles: [__webpack_require__("./src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "./src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ROUTES = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */] }];
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(ROUTES)]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map