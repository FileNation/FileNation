webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Josefin Sans', sans-serif !important;\n}\n\n.container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 100vw;\n  height: 200vh;\n  background-color: white;\n}\n\n.text-mobile {\n  display: none;\n}\n\nh1 {\n  font-size: 3em;\n  color: white;\n  padding-left: 5px;\n  margin: 10px;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.4em;\n  color: white;\n  text-align: center;\n  margin-left: 20px;\n  -webkit-filter: drop-shadow(10px 10px 10px black);\n          filter: drop-shadow(10px 10px 10px black);\n}\n\n.body {\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  background-image: url('https://source.unsplash.com/collection/168902/1600x900');\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-sizing: border-box;\n  z-index: 2;\n}\n\n.body-2 {\n  background-image: linear-gradient(to bottom left, #00c5ccff, #0063ccff);\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  color: white !important;\n}\n\n.body-2 img {\n  height: 195px;\n}\n.body-2 img:hover {\n  -webkit-filter: drop-shadow(0 0 30px white);\n          filter: drop-shadow(0 0 30px white);\n}\n\n\n.body-container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 50px;\n}\n\n\n.feedback {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 10px;\n}\n\n\n.img-twitter {\n  height: 32px;\n  -webkit-filter:drop-shadow(10px 10px 10px black);\n          filter:drop-shadow(10px 10px 10px black);\n  margin-left: 3.5px;\n}\n\n.dot-color {\n  color: white;\n}\n\n.about-button {\n  color: white;\n  font-size: 1.5em;\n  -webkit-filter: drop-shadow(0 0 10px black);\n  filter: drop-shadow(0 0 10px black);\n}\n\n.about-link {\n  text-decoration: none;\n}\n\n.base {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 100%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-right: 5vw;\n  padding-top: 5px;\n  padding-bottom: 36px;\n  /* box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12); */\n  z-index: 1000;\n  bottom: 0px;\n  position:relative;\n}\n.base-buttons {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-flow: row;\n      flex-flow: row;\n}\n\n.base-buttons h1 {\n  padding-left: 0px !important;\n  margin: 8px !important;\n  font-weight: 600;\n}\n.base-twitter-follow-button {\n  margin-left: 60px\n}\n.feedback {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.spacer {\n  width:3vw;\n  height: 3vw;\n}\n.title-bar-logo {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width:60px;\n  height:50px;\n}\n/*SAVING THESE ANIMATIONS FOR LATER. THEY ARE COOL*/\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(-22deg);}\n  100% { transform: rotate(-44deg); }\n}\n@keyframes scaler {\n  0% { transform: scale(1); opacity:1; }\n  50% { transform: scale(1.3); opacity:1; }\n  100% { transform: scale(1); opacity:1; }\n}\n@keyframes spin2 {\n  0% { transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  10% { transform: rotate(-90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  20% { transform: rotate(0deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  30% { transform: rotate(90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  40% { transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  50% { transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  60% { transform: rotate(-90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  70% { transform: rotate(0deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  80% { transform: rotate(90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  90% { transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  100% { transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n}\n@keyframes spin1 {\n  0% { transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  100% { transform: rotate(359deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n}\n@keyframes fader {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n.logo-anim2 {\n  animation: scaler ease 2.5s infinite;\n}\n.logo-anim {\n  animation: spin1 linear 8s infinite;\n}\n.title-bar {\n  top:0;\n  display: -ms-flexbox;\n  display: flex;\n  position: -webkit-sticky;\n  position: sticky;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  width: 100vw;\n  /* box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12); */\n  z-index: 1000;\n}\n.title-bar-title {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  white-space: wrap;\n  font-size: 1.6em;\n  -webkit-filter:drop-shadow(10px 10px 10px black);\n          filter:drop-shadow(10px 10px 10px black);\n  color: white;\n}\n\n#title:hover {\n  cursor: pointer;\n  border-style: none !important;\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n}\n\n.title-bar-left-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-left: 5%;\n}\n\n.title-bar-theme-button {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-style: dashed;\n  height: 40px;\n}\n.title-bar-right-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-right: 5%;\n}\n.github-mobile-button {\n  display: none;\n}\n\n@media screen and (max-width: 500px) {\n  .spacer {\n    width: 3vw;\n    height: 0;\n  }\n  .title-bar-right-container {\n    margin-right: 5vw;\n    transform: scale(0.9);\n  }\n  .body-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: start;\n        align-items: flex-start;\n  }\n  .base-buttons {\n    transform: scale(0.9);\n    margin-right: 6vw;\n  }\n  .feedback {\n    transform: scale(0.9);\n  }\n}\n@media screen and (max-width: 491px) {\n  .feedback {\n    display: none;\n  }\n  .container {\n      height: 100vh;\n  }\n\n  .body {\n    display: none;\n  }\n  img {\n    padding-bottom: 300px;\n  }\n\n  h2 {\n    margin-left: 0px;\n  }\n\n  .text-mobile {\n    position: absolute;\n    display: inherit;\n  }\n  .github-mobile-button {\n    display: inline-block;\n  }\n  .base-buttons {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    width: 100%;\n    margin-right: 6vw;\n  }\n}\n\n.mat-raised-button {\n  font-weight: 300;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"body\">\n    <div class=\"title-bar\">\n      <div class=\"title-bar-left-container\">\n        <div class=\"title-bar-logo\">\n          <img src=\"../assets/logo.png\" id=\"title\" alt=\"\" style=\"height: 5vh; position: absolute;\"/>\n        </div>\n        <p id=\"title\" class=\"title-bar-title\">\n          {{title}}\n        </p>\n      </div>\n      <div class=\"title-bar-right-container\">\n        <div class=\"base-buttons\">\n          <h1 class=\"dot-color\"></h1>\n          <a href=\"https://github.com/FileNation/docs\" class=\"about-link\" target=\"_blank\"><h1 class=\"about-button\"> {{about}} </h1></a>\n          <h1 class=\"dot-color\"></h1>\n          <a href=\"https://twitter.com/Filenation_io\" target=\"_blank\"><img class=\"img-twitter\" src=\"../assets/twitter.png\" /></a>\n          <a href=\"https://github.com/FileNation/FileNation\" class=\"about-link\" target=\"_blank\"><h2> {{alpha}} </h2></a>\n          <div class=\"spacer\"></div>\n          <div class=\"spacer\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"body-container\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n  <div class=\"body-2\">\n    <a href=\"https://medium.com/filenation\"><img src=\"../assets/logo2.png\"  /></a>\n    <h2 class=\"text-mobile\"> Please take a look from your computer </h2>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ipfs_service__ = __webpack_require__("./src/app/ipfs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = (function () {
    function AppComponent(document, ipfsService) {
        this.document = document;
        this.ipfsService = ipfsService;
        this.title = "FileNation";
        this.alpha = "v0.3 Alpha";
        this.about = "About";
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenMax"].to(this.document.getElementById('title'), 2, { scrambleText: { text: 'Filenation.io', chars: ' ', revealDelay: 0.5, speed: 0.1 } });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ipfs_service__["a" /* IpfsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ipfs_service__["a" /* IpfsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ipfs_service__ = __webpack_require__("./src/app/ipfs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__input_input_component__ = __webpack_require__("./src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragzone_dragzone_component__ = __webpack_require__("./src/app/dragzone/dragzone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transfer_transfer_component__ = __webpack_require__("./src/app/transfer/transfer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {MaterialModule} from '@angular/material';

// get use with routes and modular

// import your router file







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dragzone_dragzone_component__["a" /* DragZoneComponent */],
            __WEBPACK_IMPORTED_MODULE_13__transfer_transfer_component__["a" /* TransferComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */]],
            [__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatProgressSpinnerModule */]],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* PreloadAllModules */] }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ipfs_service__["a" /* IpfsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");

var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/dragzone/dragzone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropin {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100vw !important;\n  height: 100vh !important;\n  visibility: hidden;\n}\n.nonopaque {\n  position: absolute;\n  opacity: 0.0;\n  color: rgba(0,0,0,0);\n  z-index: 666 !important;\n  width: 100vw !important;\n  height: 100vh !important;\n}\n.overlay {\n  background: rgba(252, 68, 130, 0.2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw !important;\n  height: 100vh !important;\n  visibility: visible;\n  z-index: 1000;\n}\n.dropin2 {\n  position: absolute;\n  visibility: hidden;\n}\ninput {\n  position: absolute;\n  visibility: visible !important;\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dragzone/dragzone.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <script src=\"./dropzone.js\"></script>\n\n<div #overlay>\n  <form action=\"/file-upload\" class=\"dropzone\" uploadMultiple=\"true\">\n    <input #dropin class=\"dropin\" id=\"file-input\" type=\"file\" (change)=\"onUpload($event)\" disabled=\"disabled\" multiple />\n    <input #dropin2 class=\"dropin2\" id=\"file-input\" type=\"file\" (change)=\"onUpload($event)\" multiple />\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dragzone/dragzone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragZoneComponent; });
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

var DragZoneComponent = (function () {
    function DragZoneComponent() {
    }
    DragZoneComponent.prototype.click = function () { this.dropin2.nativeElement.click(); };
    DragZoneComponent.prototype.ngOnInit = function () {
        this.dropin.nativeElement.addEventListener('dragover', function ($event) {
            this.disabled = false;
            this.classList.add('nonopaque');
        });
        this.dropin.nativeElement.addEventListener('dragon', function ($event) {
            this.disabled = false;
            this.classList.add('nonopaque');
        });
        this.dropin.nativeElement.addEventListener('dragleave', function ($event) {
            this.disabled = true;
            this.classList.remove('nonopaque');
        });
        this.overlay.nativeElement.addEventListener('dragover', function ($event) {
            this.classList.add('overlay');
        });
        this.overlay.nativeElement.addEventListener('dragleave', function ($event) {
            this.classList.remove('overlay');
        });
    };
    return DragZoneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('dropin'),
    __metadata("design:type", Object)
], DragZoneComponent.prototype, "dropin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('dropin2'),
    __metadata("design:type", Object)
], DragZoneComponent.prototype, "dropin2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('overlay'),
    __metadata("design:type", Object)
], DragZoneComponent.prototype, "overlay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DragZoneComponent.prototype, "onUpload", void 0);
DragZoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dragzone',
        template: __webpack_require__("./src/app/dragzone/dragzone.component.html"),
        styles: [__webpack_require__("./src/app/dragzone/dragzone.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DragZoneComponent);

//# sourceMappingURL=dragzone.component.js.map

/***/ }),

/***/ "./src/app/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (to, from, message, hashes) {
        return this.http.post('https://email.filenation.io/api/createEmail/', { to: to, from: from, message: message, hashes: hashes })
            .map(function (res) { return res.json(); });
    };
    return EmailService;
}());
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], EmailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.transferHolder {\n  /*width: 50%;*/\n  /*height: 100%;*/\n  border-radius: 5px;\n  margin: 10%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  min-height: 400px;\n  -ms-flex-align: center;\n      align-items: center;\n  /*margin-left: 150px !important;*/\n}\n\n.file-box {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  width: 100vw;\n  height: 100vh;\n}\n@media screen and (max-width: 500px) {\n  .transferHolder {\n    transform: scale(0.75);\n    margin: 0;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n  }\n  .file-box {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"transferHolder\">\n  <app-transfer></app-transfer>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/input/input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-left: 13%;\n}\n.sequencer {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  top:-15vh;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n\n  font-size: 20px;\n}\n\n.mat-fab.mat-accent[_ngcontent-c3], .mat-mini-fab.mat-accent[_ngcontent-c3], .mat-raised-button.mat-accent[_ngcontent-c3], .mat-raised-button[_ngcontent-c3] .mat-primary[_ngcontent-c3] .mat-fab.mat-primary[_ngcontent-c3], .mat-mini-fab.mat-primary[_ngcontent-c3], .mat-raised-button.mat-primary[_ngcontent-c3]: hover {\n  color: #008bcd !important;\n  font-weight: 500 !important;\n}\n.mat-form-field {\n    font-family: 'Josefin Sans', sans-serif !important;\n}\n\n.mat-fab.mat-accent, .mat-mini-fab.mat-accent, .mat-raised-button.mat-accent, .mat-raised-button .mat-primary .mat-fab.mat-primary, .mat-mini-fab.mat-primary, .mat-raised-button.mat-primary {\n  background-color: #168ccc !important;\n}\n@media screen and (max-width: 500px) {\n  .container {\n    display: -ms-flexbox;\n    display: flex;\n    position: fixed;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    padding-left: 40px;\n    padding-right: 50px;\n    margin-left: 0px !important;\n  }\n}\n\n.topHolder {\n  height: 470px;\n  width: 300px;\n  background-color: white;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  border-color: black;\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 0 12px 0 rgba(0,0,0,0.1), 0 10px 30px 0 rgba(0,0,0,0.2);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n}\n\n.image-upload {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-left: 10px !important;\n}\n\n.image-upload>input {\n  border-radius: 5px;\n  width: 100px;\n  border: 1px solid #b5b5b5;\n}\n\n.progressBar,\n.progressBarTitle {\n  text-align: center;\n  font-size: 1.7em;\n  color: #168ccc;\n  font-family: 'Raleway', sans-serif;\n  margin-bottom: 23px;\n}\n\n.selectedFile {\n  text-align: center;\n  font-size: 1em;\n  color: blue;\n  color: #005b7a;\n  font-weight: 500;\n  max-height: 70px;\n  overflow: scroll;\n}\n\n.selectedFile .fileName2 {\n  font-weight: 300;\n  width: 20px;\n}\n\n.fileName2 {\n  margin: 5px;\n}\n\n\nform {\n  height: 100%;\n  background-color: white;\n  border-radius: 0 0 3px 3px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\nlabel button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-bottom: 25px;\n}\n\nbutton {\n  border-radius: 3px;\n  width: 20%;\n  margin: 10px;\n  margin-top: 30px;\n  font-weight: 300;\n}\n\n.fileFeedback {\nwidth: 100%;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-ms-flex-direction: column;\nflex-direction: column;\nmargin-bottom: 22px;\n}\n\n\n.changeButton {\n  margin: auto;\n  width: 105px;\n  text-align: center;\n}\n\n.successMessage {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: white;\n  max-width: 500px;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 10px;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  text-align: center;\n  border-radius: 3px;\n  border-color: black;\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0 0 12px 0 rgba(0,0,0,0.1), 0 10px 30px 0 rgba(0,0,0,0.2);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n}\n\n.successMessage h2 {\n  font-weight: 400;\n  font-size: 18px;\n}\n\n.successMessage .senderEmail {\n  font-weight: 300;\n}\n\n.successButton {\n  width: 150px;\n}\n\n.fileName {\n  border: 1px double #005b7a;\n  border-radius: 5px;\n  padding: 10px 20px;\n}\n\n#text {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 1em;\n}\n\nh2 {\n  color: #005b7a;\n}\n\n#file-input {\n  cursor: pointer;\n  width: auto;\n  margin-top: -15px;\n}\n\n#file-input:hover {\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n  cursor: pointer;\n}\n\n.center {\n  overflow: auto;\n}\n\n.send svg {}\n\n.example-form {\n  width: auto;\n}\n\n.example-full-width {}\n\np {\n  font-size: 1.5em;\n}\n\n.spinner-margin {\n  margin-bottom: 15px;\n}\n\n.g-recaptcha {\n  margin: 25px;\n}\n\n#addYourFiles {\n  position: relative !important;\n  margin-top: 35px !important;\n  font-weight: 300;\n}\n\ninput[type=\"file\"] {\n  -webkit-appearance: none;\n  opacity: 0;\n}\n\n#uploadCircle {\n  cursor: pointer !important;\n  z-index: 1000;\n  margin-left: 16px;\n}\n\n#upload-img {\n  height: 19px;\n  weight: 7px;\n}\n\n/*Spinner animation*/\n@keyframes scaler {\n  0% { width: 50px; height: 50px;}\n  50% { width: 100px; height: 100px;}\n  100% { width: 50px; height: 50px;}\n}\n@keyframes counterspin2 {\n  0% { transform: rotate(0deg) scale(1.0); }\n  10% { transform: rotate(0deg) scale(1.3); }\n  20% { transform: rotate(90deg) scale(1.3); }\n  30% { transform: rotate(90deg) scale(1.0); }\n  40% { transform: rotate(0deg) scale(1.0); }\n  50% { transform: rotate(0deg) scale(1.3); }\n  60% { transform: rotate(45deg) scale(1.3); }\n  70% { transform: rotate(45deg) scale(1.0); }\n  80% { transform: rotate(0deg) scale(1.0); }\n  90% { transform: rotate(0deg) scale(1.3); }\n  100% { transform: rotate(0deg) scale(1.0); }\n}\n\n@keyframes spin2 {\n  0% { transform: rotate(0deg) scale(1.0); }\n  10% { transform: rotate(-90deg) scale(1.0); }\n  20% { transform: rotate(-90deg) scale(1.3); }\n  30% { transform: rotate(-45deg) scale(1.3); }\n  40% { transform: rotate(0deg) scale(1.0); }\n  50% { transform: rotate(0deg) scale(1.0); }\n  60% { transform: rotate(0deg) scale(1.0); }\n  70% { transform: rotate(45deg) scale(1.0); }\n  80% { transform: rotate(90deg) scale(1.3); }\n  90% { transform: rotate(45deg) scale(1.0); }\n  100% { transform: rotate(0deg) scale(1.0); }\n}\n@keyframes fader {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n@keyframes fadeout {\n  0% { opacity: 1;}\n  100% { opacity: 0;}\n}\n.spinner-container {\n  animation: fader linear 0.5s;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  left:0;\n  top:0;\n}\n.spinner-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner-container-out {\n  opacity: 0;\n  animation: fadeout linear 0.5s;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  left:0;\n  top:0;\n}\n.spinner-pos {\n  left: 42%;\n  top:42%;\n  opacity: 1.0;\n  -webkit-filter: drop-shadow(0 0 80px white);\n          filter: drop-shadow(0 0 80px white);\n}\n.spinner-anim1 {\n  animation: spin2 5s ease infinite;\n}\n.spinner-anim2 {\n  animation: counterspin2 5s ease infinite;\n}\n@media screen and (max-width: 626px) {\n  .spinner-container {\n    display: none;\n  }\n  .spinner-container-out {\n    display: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div class=\"container\" *ngIf=\"form\">\n\n\n  <div class=\"topHolder\">\n    <!-- Loading spinner -->\n\n    <!-- Upload icon and button-->\n    <div class=\"image-upload\" *ngIf=\"!showUpdate\">\n      <label for=\"file-input\">\n        <button title =\"Add Your Files\" (click)=\"file.click()\" id=\"uploadCircle\"mat-fab><img id=\"upload-img\" src=\"../../assets/add-plus-button.png\"/></button>\n      </label><p id=\"addYourFiles\">Upload your files</p>\n      <app-dragzone #file [onUpload]='upload'></app-dragzone>\n    </div>\n\n    <!-- Displays progress of file upload-->\n    <div class=\"progressBarTitle\" *ngIf=\"!progress && showUpdate && !this.completed\">Checking Files...</div>\n    <div class=\"progressBar\" *ngIf=\"progress && showUpdate && this.completed < this.totalFiles\">\n      <mat-progress-spinner\n      class=\"spinner-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]= \"value\">\n    </mat-progress-spinner>\n    {{(this.progress / this.parentSize *100).toFixed(1)}} %\n  </div>\n\n    <!-- Displays file name once uploaded and allows user to change selection -->\n    <div  class=\"fileFeedback\" *ngIf=\"file.length > 0\">\n      <p class=\"selectedFile\"><strong>Files Selected:</strong><br> <span class=\"fileName2\" style=\"color:#0099cc\">{{this.name}}</span></p>\n      <button class=\"changeButton\" mat-raised-button color=\"accent\" (click)=\"toggleFile()\">Change files</button>\n    </div>\n\n    <div class=\"form-input\">\n      <form class=\"example-form\" (ngSubmit)=\"onTestPost()\" >\n        <mat-input-container class=\"example-full-width\">\n          <input matInput placeholder=\"Send Files to\" [(ngModel)]=\"data.to\" [formControl]=\"toEmailFormControl\" required>\n          <mat-error *ngIf=\"toEmailFormControl.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"toEmailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-input-container>\n        <mat-input-container class=\"example-full-width\">\n          <input matInput placeholder=\"Your Email\" [(ngModel)]=\"data.from\" [formControl]=\"fromEmailFormControl\" required>\n          <mat-error *ngIf=\"fromEmailFormControl.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"fromEmailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-input-container>\n\n        <mat-form-field class=\"example-full-width\" hintLabel=\"Max 250 characters\">\n          <textarea matInput placeholder=\"Message\" matTextareaAutosize matAutosizeMinRows=\"2\"\n          matAutosizeMaxRows=\"3\" maxlength=\"250\" [(ngModel)]=\"data.message\" [formControl]=\"messageFormControl\">\n          <mat-error *ngIf=\"messageFormControl.hasError('pattern')\">\n            Please enter a valid message\n          </mat-error>\n          <mat-error *ngIf=\"messageFormControl.hasError('required')\">\n            Message is <strong>required</strong>\n          </mat-error></textarea>\n        </mat-form-field>\n        <button mat-raised-button color=\"accent\" type=\"submit\">Send</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Placeholder -->\n<div *ngIf=\"submit\">\n  <h2></h2>\n</div>\n\n<!-- Displays once file has been uploaded and sent -->\n<div class=\"successMessage\" *ngIf=\"submitResponse\">\n  <h2>The file below has been added to IPFS and sent to: <br/>\n    <span class=\"senderEmail\" style=\"color:#0099cc\">{{this.data.to}} </span>\n  </h2>\n  <span class=\"fileName\">{{this.name}}</span>\n  <button class=\"successButton\" mat-raised-button color=\"accent\" (click)=\"refresh()\">Send another file</button>\n</div>\n"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ipfs_service__ = __webpack_require__("./src/app/ipfs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
var MULTIPLE_REGEX = /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(,+ )?)+$/;
var TEXT_REGEX = /^[a-zA-Z0-9-]/;
var InputComponent = (function () {
    function InputComponent(emailService, ipfsService) {
        var _this = this;
        this.emailService = emailService;
        this.ipfsService = ipfsService;
        this.color = '#168ccc';
        this.mode = 'indeterminate';
        //Verifies email inputs
        this.toEmailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(MULTIPLE_REGEX)
        ]);
        this.fromEmailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(EMAIL_REGEX)
        ]);
        this.messageFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(TEXT_REGEX)
        ]);
        this.upload = function ($event) {
            if (!_this.file.length) {
                _this.showUpdate = true;
                var concatSize_1 = 0;
                var file = Object.keys($event.target.files).map(function (key) { return $event.target.files[key]; });
                var concatName = file.map(function (el) {
                    concatSize_1 += el.size;
                    _this.totalFiles++;
                    return el.name;
                }).join(' and ');
                _this.name = concatName;
                _this.parentSize = concatSize_1;
                file.forEach(function (el, key) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.ipfsService.uploadIPFS(reader.result)
                            .then(function (ipfsObject) {
                            try {
                                _this.hashes.push(ipfsObject);
                                _this.file.push('https://ipfs.io/ipfs/' + _this.hashes[key].hash);
                                _this.data.hashes = (_this.file);
                            }
                            catch (e) {
                            }
                        }).then(function () {
                            _this.completed++;
                        });
                    };
                    reader.readAsArrayBuffer(el);
                });
            }
            else {
                alert("Sorry, still uploading previous file!");
            }
        };
        this.data = {
            to: '',
            from: '',
            message: '',
            hashes: ''
        };
    }
    InputComponent.prototype.ngOnInit = function () {
        this.animated = false;
        //change to upload maybe?
        this.totalFiles = 0;
        this.completed = 0;
        this.hashes = [];
        this.file = [];
        this.submit = false;
        this.submitResponse = false;
        this.form = true;
        this.progress = this.ipfsService.progress;
        this.showUpdate = false;
        this.getTransfer();
    };
    InputComponent.prototype.animateStyles = function () {
        if (!this.animated)
            __WEBPACK_IMPORTED_MODULE_4_gsap__["TweenMax"].to(this.document.getElementById('animatedLoader'), 1, { scrambleText: { text: 'sending through IPFS', chars: '10', revealDelay: 0.1, speed: 0.3 } }),
                this.animated = true;
    };
    //Called when form is submitted
    InputComponent.prototype.onTestPost = function () {
        var _this = this;
        if (!this.data.to.match(MULTIPLE_REGEX))
            alert("Invalid Recipient, please verify recpient's email!");
        else if (!this.data.from.match(EMAIL_REGEX))
            alert("Invalid Sender, please verify senders's email!");
        else if (!(this.data.message.length === 0) && (!this.data.message.match(TEXT_REGEX)))
            alert("Invalid message.");
        else {
            if (this.file.length && this.data.to) {
                this.form = false;
                this.submit = true;
                setTimeout(function () {
                    _this.submit = false;
                    _this.submitResponse = true;
                }, 3500);
                this.emailService.sendEmail(this.data.to, this.data.from, this.data.message, this.data.hashes)
                    .subscribe(function (data) {
                    _this.postData = JSON.stringify(data),
                        console.log('POST', _this.postData);
                }, function (error) { return console.log("Error 123", error); });
            }
            else {
                alert("No file selected");
            }
        }
    };
    //Called when user opts to change the selected file
    InputComponent.prototype.toggleFile = function () {
        this.totalFiles = 0;
        this.completed = 0;
        this.hashes = [];
        this.file.length = [];
        this.showUpdate = false;
    };
    InputComponent.prototype.getTransfer = function () {
        var _this = this;
        setInterval(function () { return _this.progress = _this.ipfsService.progress; }), 500;
    };
    //Called when user opts to upload / send another file
    InputComponent.prototype.refresh = function () {
        this.totalFiles = 0;
        this.completed = 0;
        this.hashes = [];
        this.file = [];
        this.submit = false;
        this.submitResponse = false;
        this.form = true;
        this.data.to = '';
        this.data.from = '';
        this.data.message = '';
        this.showUpdate = false;
    };
    return InputComponent;
}());
InputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__("./src/app/input/input.component.html"),
        styles: [__webpack_require__("./src/app/input/input.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ipfs_service__["a" /* IpfsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ipfs_service__["a" /* IpfsService */]) === "function" && _b || Object])
], InputComponent);

var _a, _b;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "./src/app/ipfs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpfsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer__ = __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ipfs__ = __webpack_require__("./node_modules/ipfs/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ipfs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ipfs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stream_buffers__ = __webpack_require__("./node_modules/stream-buffers/lib/streambuffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stream_buffers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_stream_buffers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IpfsService = (function () {
    function IpfsService(http) {
        var _this = this;
        this.uploadIPFS = function (fileObj) {
            return new Promise(function (resolve, reject) {
                _this.progress = 0;
                var myReadableStreamBuffer = new __WEBPACK_IMPORTED_MODULE_4_stream_buffers___default.a.ReadableStreamBuffer({
                    chunkSize: 25000 //determines data transfer rate
                });
                _this.stream = _this.node.files.addReadableStream();
                _this.stream.on('data', function (file) {
                    _this.node.swarm.peers(function (err, peerInfos) {
                        if (err) {
                            throw err;
                        }
                        console.log('Peers: ', peerInfos);
                    });
                    resolve(file);
                });
                myReadableStreamBuffer.on('data', function (chunk) {
                    _this.progress += chunk.byteLength;
                    myReadableStreamBuffer.resume();
                });
                _this.stream.write(myReadableStreamBuffer);
                myReadableStreamBuffer.put(__WEBPACK_IMPORTED_MODULE_2_buffer__["Buffer"].from(fileObj));
                myReadableStreamBuffer.stop();
                myReadableStreamBuffer.on('end', function () {
                    _this.stream.end();
                });
                myReadableStreamBuffer.resume();
            });
        };
        this.http = http;
        // Create an IPFS node
        var repoPath = 'ipfs-' + Math.random();
        this.node = new __WEBPACK_IMPORTED_MODULE_3_ipfs___default.a({
            repo: 'ipfs-' + Math.random()
        });
        this.node.on('ready', function () { return console.log('Online status: ', _this.node.isOnline() ? 'online' : 'offline'); });
    }
    return IpfsService;
}());
IpfsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], IpfsService);

var _a;
//# sourceMappingURL=ipfs.service.js.map

/***/ }),

/***/ "./src/app/transfer/transfer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\nlabel{\n  display: inline-block;\n}\n\nlabel button{\n  margin-top: 20px;\n  margin-left: 20px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n\ninput[type=\"file\"]{\n  position: fixed;\n  top: 5px;\n  left: 5px;\n  text-align: right;\n  outline: none;\n  cursor: inherit;\n}\n\n\n#text {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 60px;\n}\n\n\n#file-input:hover {\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n}\n\n/*.form-input {\n  margin-left: 20px;\n  margin-top: 10px;\n}*/\n\n.center {\n  overflow: auto;\n  height: 200px;\n}\n\n.send svg{\nposition: absolute;\nbottom: 0;\nleft: 40%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/transfer/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<app-input></app-input>\n<div>\n"

/***/ }),

/***/ "./src/app/transfer/transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ipfs_service__ = __webpack_require__("./src/app/ipfs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service__ = __webpack_require__("./src/app/email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransferComponent = (function () {
    function TransferComponent(ipfsService, emailService) {
        var _this = this;
        this.ipfsService = ipfsService;
        this.emailService = emailService;
        this.upload = function ($event) {
            var file = $event.target.files[0];
            _this.name = file.name;
            _this.parentSize = file.size;
            _this.ipfsService.uploadIPFS(file)
                .then(function (torrent) {
                _this.hashes.push(torrent);
            });
        };
    }
    TransferComponent.prototype.ngOnInit = function () {
        this.hashes = [];
    };
    return TransferComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TransferComponent.prototype, "parentSize", void 0);
TransferComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-transfer',
        template: __webpack_require__("./src/app/transfer/transfer.component.html"),
        styles: [__webpack_require__("./src/app/transfer/transfer.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ipfs_service__["a" /* IpfsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ipfs_service__["a" /* IpfsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]) === "function" && _b || Object])
], TransferComponent);

var _a, _b;
//# sourceMappingURL=transfer.component.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map