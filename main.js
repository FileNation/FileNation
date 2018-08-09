(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: 'Josefin Sans', sans-serif !important;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n}\n\n.text-mobile {\n  display: none;\n}\n\nh1 {\n  font-size: 3em;\n  color: white;\n  padding-left: 5px;\n  margin: 10px;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 1.4em;\n  color: white;\n  text-align: center;\n  margin-left: 20px;\n  -webkit-filter: drop-shadow(10px 10px 10px black);\n          filter: drop-shadow(10px 10px 10px black);\n}\n\n.body {\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-image: url('https://source.unsplash.com/collection/168902/1600x900');\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-sizing: border-box;\n  z-index: 2;\n}\n\n.body-2 {\n  background-image: linear-gradient(to bottom left, #00c5ccff, #0063ccff);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white !important;\n  display: none;\n}\n\n.body-2 img {\n  height: 195px;\n}\n\n.body-2 img:hover {\n  -webkit-filter: drop-shadow(0 0 30px white);\n          filter: drop-shadow(0 0 30px white);\n}\n\n.body-container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  flex-wrap: wrap;\n  display: flex;\n  margin-top: 50px;\n}\n\n.feedback {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 10px;\n}\n\n#social {\n  margin-top: 2px;\n  text-align: center;\n}\n\n#social a {\n  margin-top: 4px;\n  margin: 2px;\n}\n\n#social i:before {\n  color: white;\n  margin-top: 2px;\n  font-size: 1.9rem;\n  -webkit-filter: drop-shadow(0 0 5px black);\n          filter: drop-shadow(0 0 5px black);\n}\n\n#social a:hover {\n  -webkit-filter: drop-shadow(0 0 5px #AAAAAA);\n          filter: drop-shadow(0 0 5px #AAAAAA);\n}\n\n.dot-color {\n  color: white;\n}\n\n.about-button {\n  color: white;\n  font-size: 1.5em;\n  -webkit-filter: drop-shadow(0 0 10px black);\n  filter: drop-shadow(0 0 10px black);\n}\n\n.about-link {\n  text-decoration: none;\n}\n\n.base {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 5vw;\n  padding-top: 5px;\n  padding-bottom: 36px;\n  /* box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12); */\n  z-index: 1000;\n  bottom: 0px;\n  position:relative;\n}\n\n.base-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row;\n}\n\n.base-buttons h1 {\n  padding-left: 0px !important;\n  margin: 8px !important;\n  font-weight: 600;\n}\n\n.base-twitter-follow-button {\n  margin-left: 60px\n}\n\n.feedback {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.spacer {\n  width:2vw;\n  height: 3vw;\n}\n\n.title-bar-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width:60px;\n  height:50px;\n}\n\n.download-button {\n  font-size: 15px;\n  color: black;\n  -webkit-filter:drop-shadow(5px 5px 5px black);\n          filter:drop-shadow(5px 5px 5px black);\n}\n\n.mat-fab.mat-accent, .mat-mini-fab.mat-accent, .mat-raised-button.mat-accent {\n    background-color: #FFF !important;\n}\n\n/*SAVING THESE ANIMATIONS FOR LATER. THEY ARE COOL*/\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  50% { -webkit-transform: rotate(-22deg); transform: rotate(-22deg);}\n  100% { -webkit-transform: rotate(-44deg); transform: rotate(-44deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  50% { -webkit-transform: rotate(-22deg); transform: rotate(-22deg);}\n  100% { -webkit-transform: rotate(-44deg); transform: rotate(-44deg); }\n}\n\n@-webkit-keyframes scaler {\n  0% { -webkit-transform: scale(1); transform: scale(1); opacity:1; }\n  50% { -webkit-transform: scale(1.3); transform: scale(1.3); opacity:1; }\n  100% { -webkit-transform: scale(1); transform: scale(1); opacity:1; }\n}\n\n@keyframes scaler {\n  0% { -webkit-transform: scale(1); transform: scale(1); opacity:1; }\n  50% { -webkit-transform: scale(1.3); transform: scale(1.3); opacity:1; }\n  100% { -webkit-transform: scale(1); transform: scale(1); opacity:1; }\n}\n\n@-webkit-keyframes spin2 {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  10% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  20% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  30% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  40% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  50% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  60% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  70% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  80% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  90% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n}\n\n@keyframes spin2 {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  10% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  20% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  30% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  40% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  50% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  60% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  70% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  80% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-filter: hue-rotate(100deg); filter: hue-rotate(100deg);}\n  90% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n}\n\n@-webkit-keyframes spin1 {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  100% { -webkit-transform: rotate(359deg); transform: rotate(359deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n}\n\n@keyframes spin1 {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n  100% { -webkit-transform: rotate(359deg); transform: rotate(359deg); -webkit-filter: hue-rotate(0deg); filter: hue-rotate(0deg);}\n}\n\n@-webkit-keyframes fader {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes fader {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.logo-anim2 {\n  -webkit-animation: scaler ease 2.5s infinite;\n          animation: scaler ease 2.5s infinite;\n}\n\n.logo-anim {\n  -webkit-animation: spin1 linear 8s infinite;\n          animation: spin1 linear 8s infinite;\n}\n\n.title-bar {\n  top:0;\n  display: flex;\n  position: -webkit-sticky;\n  position: sticky;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100vw;\n  /* box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12); */\n  z-index: 1000;\n}\n\n.title-bar-title {\n  display: flex;\n  flex-wrap: wrap;\n  white-space: wrap;\n  font-size: 1.6em;\n  -webkit-filter:drop-shadow(10px 10px 10px black);\n          filter:drop-shadow(10px 10px 10px black);\n  color: white;\n}\n\n#title:hover {\n  cursor: pointer;\n  border-style: none !important;\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n}\n\n.title-bar-left-container {\n  display: flex;\n  align-items: center;\n  margin-left: 5%;\n}\n\n.title-bar-theme-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-style: dashed;\n  height: 40px;\n}\n\n.title-bar-right-container {\n  display: flex;\n  align-items: center;\n  margin-right: 5%;\n}\n\n.github-mobile-button {\n  display: none;\n}\n\n@media screen and (max-width: 500px) {\n  .spacer {\n    width: 3vw;\n    height: 0;\n  }\n  .body-2 {\n    display: inherit;\n  }\n  .title-bar-right-container {\n    margin-right: 5vw;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n  .body-container {\n    flex-wrap: wrap;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .base-buttons {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    margin-right: 6vw;\n  }\n  .feedback {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n\n@media screen and (max-width: 491px) {\n  .feedback {\n    display: none;\n  }\n  .container {\n      height: 100vh;\n  }\n\n  .body {\n    display: none;\n  }\n  img {\n    padding-bottom: 300px;\n  }\n\n  h2 {\n    margin-left: 0px;\n  }\n\n  .text-mobile {\n    position: absolute;\n    display: inherit;\n  }\n  .github-mobile-button {\n    display: inline-block;\n  }\n  .base-buttons {\n    justify-content: space-around;\n    width: 100%;\n    margin-right: 6vw;\n  }\n}\n\n.mat-raised-button {\n  font-weight: 300;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"body\">\n    <div class=\"title-bar\">\n      <div class=\"title-bar-left-container\">\n        <div class=\"title-bar-logo\">\n          <img src=\"../assets/logo.png\" id=\"title\" alt=\"\" style=\"height: 5vh; position: absolute;\" />\n        </div>\n        <p id=\"title\" class=\"title-bar-title\">\n          {{title}}\n        </p>\n      </div>\n      <div class=\"title-bar-right-container\">\n        <div class=\"base-buttons\">\n          <h1 class=\"dot-color\"></h1>\n          <a href=\"https://github.com/FileNation/FileNation\" target=\"_blank\">\n            <button mat-raised-button color=\"accent\" class=\"download-button\">{{about}}</button>\n          </a>\n          <div class=\"spacer\"></div>\n          <a href=\"https://www.buymeacoffee.com/lFjmLAnoV\" target=\"_blank\">\n            <button mat-raised-button color=\"accent\" class=\"download-button\">Donate</button>\n          </a>\n          <div class=\"spacer\"></div>\n          <div id=\"social\">\n            <a href=\"https://twitter.com/FileNation_io\" target=\"_blank\">\n              <i class=\"mdi mdi-twitter\" aria-hidden=\"true\"></i>\n            </a>\n            <a href=\"https://medium.com/filenation\" target=\"_blank\">\n              <i class=\"mdi mdi-medium\" aria-hidden=\"true\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"body-container\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n  <div class=\"body-2\">\n    <a href=\"https://medium.com/filenation\">\n      <img src=\"../assets/logo2.png\" />\n    </a>\n    <h2 class=\"text-mobile\"> Please take a look from your computer </h2>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ipfs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipfs.service */ "./src/app/ipfs.service.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(document, ipfsService) {
        this.document = document;
        this.ipfsService = ipfsService;
        this.title = "FileNation";
        this.alpha = "v0.3 Alpha";
        this.about = "About";
    }
    AppComponent.prototype.ngOnInit = function () {
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.document.getElementById('title'), 2, { scrambleText: { text: 'Filenation.io', chars: ' ', revealDelay: 0.5, speed: 0.1 } });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _ipfs_service__WEBPACK_IMPORTED_MODULE_1__["IpfsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _ipfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ipfs.service */ "./src/app/ipfs.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dragzone_dragzone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dragzone/dragzone.component */ "./src/app/dragzone/dragzone.component.ts");
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transfer/transfer.component */ "./src/app/transfer/transfer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// get use with routes and modular

// import your router file







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _dragzone_dragzone_component__WEBPACK_IMPORTED_MODULE_12__["DragZoneComponent"],
                _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_13__["TransferComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__["PreloadAllModules"] }),
            ],
            providers: [
                _ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");

var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
];


/***/ }),

/***/ "./src/app/dragzone/dragzone.component.css":
/*!*************************************************!*\
  !*** ./src/app/dragzone/dragzone.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropin {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100vw !important;\n  height: 100vh !important;\n  visibility: hidden;\n}\n\n.nonopaque {\n  position: absolute;\n  opacity: 0.0;\n  color: rgba(0,0,0,0);\n  z-index: 666 !important;\n  width: 100vw !important;\n  height: 100vh !important;\n}\n\n.overlay {\n  background: rgba(0, 139, 205, 0.2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw !important;\n  height: 100vh !important;\n  visibility: visible;\n  z-index: 1000;\n}\n\n.dropin2 {\n  position: absolute;\n  visibility: hidden;\n}\n\ninput {\n  position: absolute;\n  visibility: visible !important;\n  opacity: 0;\n}\n"

/***/ }),

/***/ "./src/app/dragzone/dragzone.component.html":
/*!**************************************************!*\
  !*** ./src/app/dragzone/dragzone.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../../lib/dropzone\"></script>\n\n<div #overlay>\n  <form action=\"/file-upload\" class=\"dropzone\" uploadMultiple=\"true\">\n    <input #dropin class=\"dropin\" id=\"file-input\" type=\"file\" (change)=\"onUpload($event)\" disabled=\"disabled\" multiple />\n    <input #dropin2 class=\"dropin2\" id=\"file-input\" type=\"file\" (change)=\"onUpload($event)\" multiple />\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dragzone/dragzone.component.ts":
/*!************************************************!*\
  !*** ./src/app/dragzone/dragzone.component.ts ***!
  \************************************************/
/*! exports provided: DragZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragZoneComponent", function() { return DragZoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragZoneComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropin'),
        __metadata("design:type", Object)
    ], DragZoneComponent.prototype, "dropin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropin2'),
        __metadata("design:type", Object)
    ], DragZoneComponent.prototype, "dropin2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('overlay'),
        __metadata("design:type", Object)
    ], DragZoneComponent.prototype, "overlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DragZoneComponent.prototype, "onUpload", void 0);
    DragZoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dragzone',
            template: __webpack_require__(/*! ./dragzone.component.html */ "./src/app/dragzone/dragzone.component.html"),
            styles: [__webpack_require__(/*! ./dragzone.component.css */ "./src/app/dragzone/dragzone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DragZoneComponent);
    return DragZoneComponent;
}());



/***/ }),

/***/ "./src/app/email.service.ts":
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (to, from, message, hashes) {
        return this.http.post('https://filenation-email.herokuapp.com/api/createEmail/', { to: to, from: from, message: message, hashes: hashes })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transferHolder {\n  border-radius: 5px;\n  margin: 10%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  min-height: 400px;\n  align-items: center;\n  /*margin-left: 150px !important;*/\n}\n\n.file-box {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100vw;\n  height: 100vh;\n}\n\n@media screen and (max-width: 500px) {\n  .transferHolder {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    margin: 0;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n  .file-box {\n    justify-content: flex-start;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .transferHolder {\n    margin: 0%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"transferHolder\">\n  <app-transfer></app-transfer>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-around;\n  margin-left: 13%;\n}\n.sequencer {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top:-15vh;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n\n  font-size: 20px;\n}\n.mat-fab.mat-accent[_ngcontent-c3], .mat-mini-fab.mat-accent[_ngcontent-c3], .mat-raised-button.mat-accent[_ngcontent-c3], .mat-raised-button[_ngcontent-c3] .mat-primary[_ngcontent-c3] .mat-fab.mat-primary[_ngcontent-c3], .mat-mini-fab.mat-primary[_ngcontent-c3], .mat-raised-button.mat-primary[_ngcontent-c3]: hover {\n  color: #008bcd !important;\n  font-weight: 500 !important;\n}\n.mat-form-field {\n    font-family: 'Josefin Sans', sans-serif !important;\n}\n.mat-fab.mat-accent, .mat-mini-fab.mat-accent, .mat-raised-button.mat-accent, .mat-raised-button .mat-primary .mat-fab.mat-primary, .mat-mini-fab.mat-primary, .mat-raised-button.mat-primary {\n  background-color: #168ccc !important;\n}\n@media screen and (max-width: 500px) {\n  .container {\n    display: flex;\n    position: fixed;\n    align-items: center;\n    justify-content: center;\n    padding-left: 40px;\n    padding-right: 50px;\n    margin-left: 0px !important;\n  }\n}\n.topHolder {\n  height: 470px;\n  width: 300px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-color: black;\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 0 12px 0 rgba(0,0,0,0.1), 0 10px 30px 0 rgba(0,0,0,0.2);\n  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1),-webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.image-upload {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: 10px !important;\n}\n.image-upload>input {\n  border-radius: 5px;\n  width: 100px;\n  border: 1px solid #b5b5b5;\n}\n.progressBar,\n.progressBarTitle {\n  text-align: center;\n  font-size: 1.7em;\n  color: #168ccc;\n  font-family: 'Raleway', sans-serif;\n  margin-bottom: 23px;\n}\n.selectedFile {\n  text-align: center;\n  font-size: 1em;\n  color: blue;\n  color: #005b7a;\n  font-weight: 500;\n  max-height: 70px;\n  overflow: scroll;\n}\n.selectedFile .fileName2 {\n  font-weight: 300;\n  width: 20px;\n}\n.fileName2 {\n  margin: 5px;\n}\nform {\n  height: 100%;\n  background-color: white;\n  border-radius: 0 0 3px 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nlabel button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-bottom: 25px;\n}\nbutton {\n  border-radius: 3px;\n  width: 20%;\n  margin: 10px;\n  margin-top: 30px;\n  font-weight: 300;\n}\n.fileFeedback {\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\nmargin-bottom: 22px;\n}\n.changeButton {\n  margin: auto;\n  width: 105px;\n  text-align: center;\n}\n.successMessage {\n  display: flex;\n  background-color: white;\n  max-width: 500px;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n  border-radius: 3px;\n  border-color: black;\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0 0 12px 0 rgba(0,0,0,0.1), 0 10px 30px 0 rgba(0,0,0,0.2);\n  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1),-webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.successMessage h2 {\n  font-weight: 400;\n  font-size: 18px;\n}\n.successMessage .senderEmail {\n  font-weight: 300;\n}\n.successButton {\n  width: 150px;\n}\n.fileName {\n  border: 1px double #005b7a;\n  border-radius: 5px;\n  padding: 10px 20px;\n}\n#text {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 1em;\n}\nh2 {\n  color: #005b7a;\n}\n#file-input {\n  cursor: pointer;\n  width: auto;\n  margin-top: -15px;\n}\n#file-input:hover {\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n  cursor: pointer;\n}\n.center {\n  overflow: auto;\n}\n.send svg {}\n.example-form {\n  width: auto;\n}\n.example-full-width {}\np {\n  font-size: 1.5em;\n}\n.spinner-margin {\n  margin-bottom: 15px;\n}\n.g-recaptcha {\n  margin: 25px;\n}\n#addYourFiles {\n  position: relative !important;\n  margin-top: 35px !important;\n  font-weight: 300;\n}\ninput[type=\"file\"] {\n  -webkit-appearance: none;\n  opacity: 0;\n}\n#uploadCircle {\n  cursor: pointer !important;\n  z-index: 1000;\n  margin-left: 16px;\n}\n#upload-img {\n  height: 19px;\n  margin: -7px 0 0 0;\n}\n/*Spinner animation*/\n@-webkit-keyframes scaler {\n  0% { width: 50px; height: 50px;}\n  50% { width: 100px; height: 100px;}\n  100% { width: 50px; height: 50px;}\n}\n@keyframes scaler {\n  0% { width: 50px; height: 50px;}\n  50% { width: 100px; height: 100px;}\n  100% { width: 50px; height: 50px;}\n}\n@-webkit-keyframes counterspin2 {\n  0% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  10% { -webkit-transform: rotate(0deg) scale(1.3); transform: rotate(0deg) scale(1.3); }\n  20% { -webkit-transform: rotate(90deg) scale(1.3); transform: rotate(90deg) scale(1.3); }\n  30% { -webkit-transform: rotate(90deg) scale(1.0); transform: rotate(90deg) scale(1.0); }\n  40% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  50% { -webkit-transform: rotate(0deg) scale(1.3); transform: rotate(0deg) scale(1.3); }\n  60% { -webkit-transform: rotate(45deg) scale(1.3); transform: rotate(45deg) scale(1.3); }\n  70% { -webkit-transform: rotate(45deg) scale(1.0); transform: rotate(45deg) scale(1.0); }\n  80% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  90% { -webkit-transform: rotate(0deg) scale(1.3); transform: rotate(0deg) scale(1.3); }\n  100% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n}\n@keyframes counterspin2 {\n  0% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  10% { -webkit-transform: rotate(0deg) scale(1.3); transform: rotate(0deg) scale(1.3); }\n  20% { -webkit-transform: rotate(90deg) scale(1.3); transform: rotate(90deg) scale(1.3); }\n  30% { -webkit-transform: rotate(90deg) scale(1.0); transform: rotate(90deg) scale(1.0); }\n  40% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  50% { -webkit-transform: rotate(0deg) scale(1.3); transform: rotate(0deg) scale(1.3); }\n  60% { -webkit-transform: rotate(45deg) scale(1.3); transform: rotate(45deg) scale(1.3); }\n  70% { -webkit-transform: rotate(45deg) scale(1.0); transform: rotate(45deg) scale(1.0); }\n  80% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  90% { -webkit-transform: rotate(0deg) scale(1.3); transform: rotate(0deg) scale(1.3); }\n  100% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n}\n@-webkit-keyframes spin2 {\n  0% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  10% { -webkit-transform: rotate(-90deg) scale(1.0); transform: rotate(-90deg) scale(1.0); }\n  20% { -webkit-transform: rotate(-90deg) scale(1.3); transform: rotate(-90deg) scale(1.3); }\n  30% { -webkit-transform: rotate(-45deg) scale(1.3); transform: rotate(-45deg) scale(1.3); }\n  40% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  50% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  60% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  70% { -webkit-transform: rotate(45deg) scale(1.0); transform: rotate(45deg) scale(1.0); }\n  80% { -webkit-transform: rotate(90deg) scale(1.3); transform: rotate(90deg) scale(1.3); }\n  90% { -webkit-transform: rotate(45deg) scale(1.0); transform: rotate(45deg) scale(1.0); }\n  100% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n}\n@keyframes spin2 {\n  0% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  10% { -webkit-transform: rotate(-90deg) scale(1.0); transform: rotate(-90deg) scale(1.0); }\n  20% { -webkit-transform: rotate(-90deg) scale(1.3); transform: rotate(-90deg) scale(1.3); }\n  30% { -webkit-transform: rotate(-45deg) scale(1.3); transform: rotate(-45deg) scale(1.3); }\n  40% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  50% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  60% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n  70% { -webkit-transform: rotate(45deg) scale(1.0); transform: rotate(45deg) scale(1.0); }\n  80% { -webkit-transform: rotate(90deg) scale(1.3); transform: rotate(90deg) scale(1.3); }\n  90% { -webkit-transform: rotate(45deg) scale(1.0); transform: rotate(45deg) scale(1.0); }\n  100% { -webkit-transform: rotate(0deg) scale(1.0); transform: rotate(0deg) scale(1.0); }\n}\n@-webkit-keyframes fader {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n@keyframes fader {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n@-webkit-keyframes fadeout {\n  0% { opacity: 1;}\n  100% { opacity: 0;}\n}\n@keyframes fadeout {\n  0% { opacity: 1;}\n  100% { opacity: 0;}\n}\n.spinner-container {\n  -webkit-animation: fader linear 0.5s;\n          animation: fader linear 0.5s;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  left:0;\n  top:0;\n}\n.spinner-background {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner-container-out {\n  opacity: 0;\n  -webkit-animation: fadeout linear 0.5s;\n          animation: fadeout linear 0.5s;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  left:0;\n  top:0;\n}\n.spinner-pos {\n  left: 42%;\n  top:42%;\n  opacity: 1.0;\n  -webkit-filter: drop-shadow(0 0 80px white);\n          filter: drop-shadow(0 0 80px white);\n}\n.spinner-anim1 {\n  -webkit-animation: spin2 5s ease infinite;\n          animation: spin2 5s ease infinite;\n}\n.spinner-anim2 {\n  -webkit-animation: counterspin2 5s ease infinite;\n          animation: counterspin2 5s ease infinite;\n}\n@media screen and (max-width: 626px) {\n  .spinner-container {\n    display: none;\n  }\n  .spinner-container-out {\n    display: none;\n  }\n}\n@media screen and (max-height: 640px) {\n  .topHolder {\n    height: 400px;\n    width: 280px;\n\n  }\n}\n"

/***/ }),

/***/ "./src/app/input/input.component.html":
/*!********************************************!*\
  !*** ./src/app/input/input.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div class=\"container\" *ngIf=\"form\">\n\n  <div class=\"topHolder\">\n    <!-- Loading spinner -->\n\n    <!-- Upload icon and button-->\n    <div class=\"image-upload\" *ngIf=\"!showUpdate\">\n      <label for=\"file-input\">\n        <button title=\"Add Your Files\" (click)=\"file.click()\" id=\"uploadCircle\" mat-fab>\n          <img id=\"upload-img\" src=\"../../assets/add-plus-button.png\" />\n        </button>\n      </label>\n      <p id=\"addYourFiles\">Upload your file</p>\n      <app-dragzone #file [onUpload]='upload'></app-dragzone>\n    </div>\n\n    <!-- Displays progress of file upload-->\n    <div class=\"progressBarTitle\" *ngIf=\"!progress && showUpdate && !this.completed\">Checking Files...</div>\n    <div class=\"progressBar\" *ngIf=\"progress && showUpdate && this.completed < this.totalFiles\">\n      <mat-progress-spinner class=\"spinner-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\n      </mat-progress-spinner>\n      {{(this.progress / this.parentSize *100).toFixed(1)}} %\n    </div>\n\n    <!-- Displays file name once uploaded and allows user to change selection -->\n    <div class=\"fileFeedback\" *ngIf=\"file.length > 0\">\n      <p class=\"selectedFile\">\n        <strong>Files Selected:</strong>\n        <br>\n        <span class=\"fileName2\" style=\"color:#0099cc\">{{this.name}}</span>\n      </p>\n      <button class=\"changeButton\" mat-raised-button color=\"accent\" (click)=\"toggleFile()\">Change files</button>\n    </div>\n\n    <div class=\"form-input\">\n      <form class=\"example-form\" (ngSubmit)=\"onTestPost()\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Send Files to\" [(ngModel)]=\"data.to\" [formControl]=\"toEmailFormControl\" required>\n          <mat-error *ngIf=\"toEmailFormControl.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"toEmailFormControl.hasError('required')\">\n            Email is\n            <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Your Email\" [(ngModel)]=\"data.from\" [formControl]=\"fromEmailFormControl\" required>\n          <mat-error *ngIf=\"fromEmailFormControl.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"fromEmailFormControl.hasError('required')\">\n            Email is\n            <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\" hintLabel=\"Max 250 characters\">\n          <textarea matInput placeholder=\"Message\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"3\" maxlength=\"250\"\n            [(ngModel)]=\"data.message\" [formControl]=\"messageFormControl\">\n          <mat-error *ngIf=\"messageFormControl.hasError('pattern')\">\n            Please enter a valid message\n          </mat-error>\n          <mat-error *ngIf=\"messageFormControl.hasError('required')\">\n            Message is <strong>required</strong>\n          </mat-error></textarea>\n        </mat-form-field>\n        <button mat-raised-button color=\"accent\" type=\"submit\">Send</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Placeholder -->\n<div *ngIf=\"submit\">\n  <h2></h2>\n</div>\n\n<!-- Displays once file has been uploaded and sent -->\n<div class=\"successMessage\" *ngIf=\"submitResponse\">\n  <h2>The file below has been added to IPFS and sent to:\n    <br/>\n    <span class=\"senderEmail\" style=\"color:#0099cc\">{{this.data.to}} </span>\n  </h2>\n  <span class=\"fileName\">{{this.name}}</span>\n  <button class=\"successButton\" mat-raised-button color=\"accent\" (click)=\"refresh()\">Send another file</button>\n</div>\n"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../email.service */ "./src/app/email.service.ts");
/* harmony import */ var _ipfs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ipfs.service */ "./src/app/ipfs.service.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
var MULTIPLE_REGEX = /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(,+ )?)+$/;
var TEXT_REGEX = /^[a-zA-Z0-9-]/;
var InputComponent = /** @class */ (function () {
    function InputComponent(document, emailService, ipfsService) {
        var _this = this;
        this.document = document;
        this.emailService = emailService;
        this.ipfsService = ipfsService;
        this.color = '#168ccc';
        this.mode = 'indeterminate';
        //Verifies email inputs
        this.toEmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(MULTIPLE_REGEX)
        ]);
        this.fromEmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAIL_REGEX)
        ]);
        this.messageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(TEXT_REGEX)
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
                }).join(' ');
                _this.name = concatName;
                _this.parentSize = concatSize_1;
                file.forEach(function (el) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.ipfsService.uploadIPFS(reader.result)
                            .then(function (hash) {
                            try {
                                _this.file.push('https://ipfs.io/ipfs/' + hash);
                                _this.data.hashes = (_this.file);
                            }
                            catch (e) {
                                console.log(e);
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
        // change to upload maybe?
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
            gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(this.document.getElementById('animatedLoader'), 1, { scrambleText: { text: 'sending through IPFS', chars: '10', revealDelay: 0.1, speed: 0.3 } }),
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
                }, 4000);
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
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"], _ipfs_service__WEBPACK_IMPORTED_MODULE_3__["IpfsService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/ipfs.service.ts":
/*!*********************************!*\
  !*** ./src/app/ipfs.service.ts ***!
  \*********************************/
/*! exports provided: IpfsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpfsService", function() { return IpfsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ipfs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ipfs */ "./node_modules/ipfs/src/core/index.js");
/* harmony import */ var ipfs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ipfs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stream_buffers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stream-buffers */ "./node_modules/stream-buffers/lib/streambuffer.js");
/* harmony import */ var stream_buffers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stream_buffers__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IpfsService = /** @class */ (function () {
    function IpfsService(http) {
        var _this = this;
        this.uploadIPFS = function (fileObj) {
            return new Promise(function (resolve, reject) {
                _this.progress = 0;
                var myReadableStreamBuffer = new stream_buffers__WEBPACK_IMPORTED_MODULE_4___default.a.ReadableStreamBuffer({
                    chunkSize: 25000 // determines data transfer rate
                });
                _this.stream = _this.node.files.addReadableStream();
                _this.stream.on('data', function (file) {
                    resolve(file.hash);
                    _this.node.pin.ls(function (err, pins) {
                        if (err) {
                            throw err;
                        }
                        console.log(pins);
                    });
                    _this.node.swarm.peers(function (err, peerInfos) {
                        if (err) {
                            throw err;
                        }
                        console.log(peerInfos);
                    });
                });
                myReadableStreamBuffer.on('data', function (chunk) {
                    _this.progress += chunk.byteLength;
                    myReadableStreamBuffer.resume();
                });
                _this.stream.write(myReadableStreamBuffer);
                myReadableStreamBuffer.put(buffer__WEBPACK_IMPORTED_MODULE_2__["Buffer"].from(fileObj));
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
        this.node = new ipfs__WEBPACK_IMPORTED_MODULE_3___default.a({
            repo: 'ipfs-' + Math.random()
        });
        this.node.on('ready', function () { return console.log('Online status: ', _this.node.isOnline() ? 'online' : 'offline'); });
    }
    IpfsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], IpfsService);
    return IpfsService;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.component.css":
/*!*************************************************!*\
  !*** ./src/app/transfer/transfer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel{\n  display: inline-block;\n}\n\nlabel button{\n  margin-top: 20px;\n  margin-left: 20px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\ninput[type=\"file\"]{\n  position: fixed;\n  top: 5px;\n  left: 5px;\n  text-align: right;\n  outline: none;\n  cursor: inherit;\n}\n\n#text {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 60px;\n}\n\n#file-input:hover {\n  -webkit-filter: drop-shadow(0 0 10px white);\n          filter: drop-shadow(0 0 10px white);\n}\n\n/*.form-input {\n  margin-left: 20px;\n  margin-top: 10px;\n}*/\n\n.center {\n  overflow: auto;\n  height: 200px;\n}\n\n.send svg{\nposition: absolute;\nbottom: 0;\nleft: 40%;\n}\n"

/***/ }),

/***/ "./src/app/transfer/transfer.component.html":
/*!**************************************************!*\
  !*** ./src/app/transfer/transfer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-input></app-input>\n</div>\n"

/***/ }),

/***/ "./src/app/transfer/transfer.component.ts":
/*!************************************************!*\
  !*** ./src/app/transfer/transfer.component.ts ***!
  \************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ipfs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ipfs.service */ "./src/app/ipfs.service.ts");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../email.service */ "./src/app/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransferComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransferComponent.prototype, "parentSize", void 0);
    TransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.component.html */ "./src/app/transfer/transfer.component.html"),
            styles: [__webpack_require__(/*! ./transfer.component.css */ "./src/app/transfer/transfer.component.css")],
            providers: [_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]]
        }),
        __metadata("design:paramtypes", [_ipfs_service__WEBPACK_IMPORTED_MODULE_1__["IpfsService"], _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/unicorn/Projects/FileNation/FileNation/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!***********************!*\
  !*** rabin (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!*************************!*\
  !*** cluster (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** ./init-assets (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map