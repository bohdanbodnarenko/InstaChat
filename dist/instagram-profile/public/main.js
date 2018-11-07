(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

module.exports = "\nsvg{\n    width: 70%;\n    height: 70%;\n    position: relative;\n    cursor: pointer;\n    padding: 10px;\n    margin: 20px;\n}\n\n.container{\n    background-color: #fff;\n    border: 1px solid #e6e6e6;\n    border-radius: 1px;\n    width: 20%;\n    margin: auto;\n    display:-ms-grid;\n    display:grid;\n}\n\n.button-login {\n\tborder: none;\n    color: white;\n    cursor: pointer;\n    background: #3897f0;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 26px;\n    outline: 0;\n    border-radius: 5pt;\n    width: 85%;\n    margin: auto;\n    margin-bottom: 8%;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\n}\n\n.wrapper {\n  height: 100%;\n  background-color: #fafafa;\n  display: flex;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, activatedRoute) {
        var _this = this;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.fragment.subscribe(function (fragment) {
            if (fragment) {
                var tmpIndex = fragment.indexOf("=");
                _this.loginService.setAccessToken(fragment.substr(tmpIndex + 1));
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var _models_Posts_PostPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/Posts/PostPipe */ "./src/app/models/Posts/PostPipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_User_UserPipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/User/UserPipe.pipe */ "./src/app/models/User/UserPipe.pipe.ts");
/* harmony import */ var _services_ModalService_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/ModalService/modal.service */ "./src/app/services/ModalService/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chatroom/chatroom.component */ "./src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/chat/chat.service */ "./src/app/services/chat/chat.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/chat-form/chat-form.component */ "./src/app/components/chat-form/chat-form.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/feed/feed.component */ "./src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-auto-scroll */ "./node_modules/ngx-auto-scroll/ngx-auto-scroll.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _models_Posts_PostPipe__WEBPACK_IMPORTED_MODULE_2__["PostPipe"],
                _models_User_UserPipe_pipe__WEBPACK_IMPORTED_MODULE_7__["UserPipe"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_12__["ChatroomComponent"],
                _components_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_18__["ChatFormComponent"],
                _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_19__["FeedComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_11__["Ng2Webstorage"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["appRoutes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"],
                ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_22__["NgxAutoScrollModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase)
            ],
            providers: [_models_Posts_PostPipe__WEBPACK_IMPORTED_MODULE_2__["PostPipe"], _models_User_UserPipe_pipe__WEBPACK_IMPORTED_MODULE_7__["UserPipe"], _services_ModalService_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"], _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_14__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-form/chat-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/chat-form/chat-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput{\r\n    flex: 10;\r\n    font-size: 1.3em;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #eee;\r\n    color: #000;\r\n    transition: 0.1s ease-out;\r\n    padding-left: 80px;\r\n}\r\n\r\n.chatInput:focus{\r\n    background-color: #E4F1FE;\r\n    color: #222;\r\n    transition: 0.2s ease-in;\r\n}\r\n\r\n.chatButton{\r\n    flex: 1;\r\n    padding: 10px;\r\n    padding: 8px 24px;\r\n    font-size: 1.3em;\r\n    font-family: 'Droid Sans', sans-serif;\r\n    background-color: #2A2845;\r\n    color: white;\r\n    transition: 0.2s ease-out;\r\n    min-width: 50px;\r\n}\r\n\r\n.chatButton:hover{\r\n    background-color: #444;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/chat-form/chat-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-form/chat-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input \n    class=\"chatInput\" \n    [(ngModel)]=\"message\" \n    (keydown)=\"handleSubmit($event)\"\n    autofocus\n    \n    />\n\n<button class=\"chatButton\" \n  (click)=send()>Send</button>\n"

/***/ }),

/***/ "./src/app/components/chat-form/chat-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-form/chat-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/chat/chat.service */ "./src/app/services/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        if (this.message) {
            this.chat.sendMessage(this.message);
            this.message = '';
        }
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    ChatFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/components/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/components/chat-form/chat-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/chatroom/chatroom.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\r\n    display: flex;\r\n    height: 83%;\r\n}\r\n\r\n.userListWrapper {\r\n    background-color: #2A2845;\r\n    color: #fff;\r\n    display: flex;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 1;\r\n    order: 1;\r\n    padding:20px 0px 40px 30px;\r\n    border-right: 1px solid #222;\r\n}\r\n\r\n.feedWrapper {\r\n    background-color: #fff;\r\n    background: \r\n    linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9));\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 6;\r\n    order: 2;\r\n    overflow-y: scroll;\r\n    padding:20px 0px 0px 24px;\r\n}\r\n\r\n.chatFormWrapper {\r\n    display: flex;\r\n    height: 50px;\r\n    background-color: #eee;\r\n    z-index: 3;\r\n}\r\n\r\n#scroll-style::-webkit-scrollbar-track\r\n{\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\napp-user-list {\r\n    width: 100%;\r\n}\r\n\r\n* {\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/chatroom/chatroom.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n  <!-- <div class=\"userListWrapper\">\n    <app-user-list></app-user-list>\n  </div> -->\n  <div #feedDiv class=\"feedWrapper\">\n    <app-feed></app-feed>\n  </div>\n</div>\n\n<div class=\"chatFormWrapper\">\n  <app-chat-form></app-chat-form>\n</div>"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/chatroom/chatroom.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
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

var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('feedDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatroomComponent.prototype, "myScrollContainer", void 0);
    ChatroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/components/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/components/feed/feed.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/feed/feed.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/feed/feed.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"feed\" >\n<div  #feedDiv  ngx-auto-scroll *ngFor=\"let message of feed \" class=\"message\">\n      <app-message [chatMessage]=message  (dblclick) = \"delete(message)\"></app-message>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/chat/chat.service */ "./src/app/services/chat/chat.service.ts");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat, loginService) {
        this.chat = chat;
        this.loginService = loginService;
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chat.getMessages().snapshotChanges().subscribe(function (responce) {
            _this.feed = [];
            responce.forEach(function (elem) {
                var message;
                message = elem.payload.toJSON();
                message.key = elem.key;
                _this.feed.push(message);
            });
        });
    };
    FeedComponent.prototype.delete = function (message) {
        this.chat.deleteMessage(message);
    };
    FeedComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.chat.getMessages().snapshotChanges().subscribe(function (responce) {
            responce.forEach(function (elem) {
                var message;
                message = elem.payload.toJSON();
                message.key = elem.key;
                _this.feed.push(message);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('feedDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "myScrollContainer", void 0);
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"], _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nsvg{\r\n    width: 70%;\r\n    height: 70%;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.container{\r\n    background-color: #fff;\r\n    border: 1px solid #e6e6e6;\r\n    border-radius: 1px;\r\n    width: 20%;\r\n    margin: auto;\r\n    display:-ms-grid;\r\n    display:grid;\r\n}\r\n\r\n.button-login {\r\n\tborder: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    background: #3897f0;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    line-height: 26px;\r\n    outline: 0;\r\n    border-radius: 5pt;\r\n    width: 85%;\r\n    margin: auto;\r\n    margin-bottom: 8%;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  height: 100%;\r\n  background-color: #fafafa;\r\n  display: flex;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div  class=\"container\" >\n    <a href=\"https://www.instagram.com/\">\n      <svg viewBox=\"0 0 512 146\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        preserveAspectRatio=\"xMidYMid\">\n        <g fill=\"#2f3238\">\n          <path d=\"M27.1265503,0.902013423 C16.6803758,5.27806711 5.19645638,17.6253423 1.56950336,33.1348188 C-3.02389262,52.7806711 16.0910604,61.0895034 17.6588456,58.3688591 C19.5041074,55.168 14.2337718,54.0855839 13.1487785,43.8919732 C11.7467919,30.7260134 17.8675973,16.014604 25.571651,9.55962416 C27.0028456,8.36037584 26.9349799,10.0295302 26.9349799,13.1169933 C26.9349799,18.6381745 26.6300134,68.2016644 26.6300134,78.5456107 C26.6300134,92.5422819 26.0518658,96.9621477 25.0132617,101.329611 C23.9617718,105.75549 22.2702819,108.745879 23.5511409,109.897879 C24.9831946,111.18647 31.0971275,108.121342 34.6364564,103.181745 C38.8802148,97.2576644 40.3655302,90.1429262 40.632698,82.4165369 C40.9548456,73.102604 40.9411007,58.3233289 40.9548456,49.8933691 C40.9668725,42.1618255 41.0845638,19.5221477 40.8191141,5.91205369 C40.7538255,2.57374497 31.4957315,-0.928644295 27.1265503,0.902013423\"></path>\n          <path d=\"M398.069691,66.4053691 C397.73294,73.6816107 396.122201,79.3694497 394.123168,83.3812617 C390.253101,91.1480268 382.222604,93.5594094 378.812993,82.3950604 C376.954846,76.3094765 376.868081,66.1450738 378.203919,57.6524027 C379.563812,49.0008054 383.360859,42.4667919 389.648322,43.0561074 C395.849879,43.6385503 398.752644,51.6295302 398.069691,66.4053691 L398.069691,66.4053691 Z M293.520322,111.550711 C293.436134,123.641128 291.533315,134.241933 287.452779,137.320805 C281.665289,141.68655 273.886497,138.411812 275.497235,129.589262 C276.922416,121.782121 283.662604,113.809181 293.536644,104.067436 C293.536644,104.067436 293.557262,106.288966 293.520322,111.550711 L293.520322,111.550711 Z M291.939651,66.3340671 C291.585718,72.9617181 289.867597,79.6194362 287.993128,83.3812617 C284.123919,91.1480268 276.035007,93.5757315 272.682953,82.3950604 C270.39098,74.7554362 270.939919,64.8685101 272.073879,58.638604 C273.54545,50.5557047 277.112268,43.0569664 283.518282,43.0569664 C289.74647,43.0569664 292.817611,49.8899329 291.939651,66.3340671 L291.939651,66.3340671 Z M231.375034,66.233557 C230.995329,73.2520805 229.625987,79.1194631 227.42851,83.3812617 C223.452779,91.0947651 215.587221,93.5405101 212.118336,82.3950604 C209.617611,74.3576913 210.46894,63.3995168 211.509262,57.4797315 C213.052993,48.6949799 216.918765,42.4667919 222.953664,43.0569664 C229.152644,43.662604 232.166228,51.6295302 231.375034,66.233557 L231.375034,66.233557 Z M508.928,74.4315705 C507.412617,74.4315705 506.721074,75.9942013 506.14894,78.6229262 C504.16451,87.765906 502.078711,89.8293691 499.388993,89.8293691 C496.384,89.8293691 493.683973,85.3029799 492.989852,76.2407517 C492.444349,69.1148456 492.531973,55.9969933 493.22953,42.9478658 C493.372134,40.2667383 492.632483,37.6139597 485.441289,35.001557 C482.346953,33.877906 477.848913,32.2233557 475.609342,37.6294228 C469.281503,52.9026577 466.805691,65.0282953 466.223248,69.9532886 C466.193181,70.2084295 465.880483,70.2608322 465.825503,69.6646443 C465.454389,65.7198389 464.624537,58.5501208 464.52145,43.4882148 C464.501691,40.5493691 463.878872,38.0477852 460.63506,35.9997852 C458.530362,34.6708188 452.138953,32.3204295 449.83753,35.1166711 C447.843651,37.4034899 445.534497,43.5577987 443.135141,50.8529396 C441.185074,56.7821745 439.826899,60.7931275 439.826899,60.7931275 C439.826899,60.7931275 439.852671,44.7948456 439.875866,38.726443 C439.886174,36.437047 438.315812,35.6742013 437.84247,35.5358926 C435.711141,34.9182282 431.512054,33.8847785 429.729503,33.8847785 C427.530309,33.8847785 426.991678,35.1132349 426.991678,36.9043758 C426.991678,37.1397584 426.644617,57.9676779 426.644617,72.5321879 C426.644617,73.1653154 426.645477,73.8551409 426.648054,74.5887785 C425.431624,81.2825772 421.486819,90.3697181 417.196671,90.3697181 C412.901369,90.3697181 410.874846,86.570953 410.874846,69.2076242 C410.874846,59.079302 411.178953,54.6740403 411.32843,47.3479732 C411.415195,43.1282685 411.582711,39.8878926 411.573262,39.1525369 C411.541477,36.8975034 407.642201,35.7609664 405.827866,35.3408859 C404.00494,34.9182282 402.420832,34.7532886 401.183785,34.8237315 C399.43302,34.9233826 398.194255,36.0710872 398.194255,37.6508993 C398.194255,38.4987919 398.203705,40.1086711 398.203705,40.1086711 C395.948671,36.565047 392.321718,34.0986846 389.908617,33.3839463 C383.408966,31.4536376 376.626685,33.1648859 371.51098,40.3225772 C367.445047,46.0104161 364.994148,52.4525101 364.029423,61.7080268 C363.324134,68.4748456 363.554362,75.3361611 364.807732,81.1391141 C363.293208,87.6868725 360.481503,90.3697181 357.402631,90.3697181 C352.93294,90.3697181 349.692564,83.0745772 350.068832,70.456698 C350.317101,62.1581745 351.977664,56.333745 353.792859,47.9080805 C354.566872,44.316349 353.93804,42.4358658 352.360805,40.633557 C350.914148,38.9807248 347.831839,38.1362685 343.400805,39.1748725 C340.244617,39.9153826 335.731973,40.7117315 331.603329,41.3233826 C331.603329,41.3233826 331.852456,40.3294497 332.056913,38.5769664 C333.130738,29.3867383 323.144161,30.1324027 319.957906,33.0678121 C318.055946,34.8202953 316.761342,36.8871946 316.26996,40.6034899 C315.490792,46.5009396 320.300671,49.2825772 320.300671,49.2825772 C318.722577,56.5072752 314.854228,65.9431946 310.860456,72.7658523 C308.721396,76.4211544 307.084886,79.1297718 304.972456,82.0093423 C304.964725,80.9372349 304.958711,79.8642685 304.955275,78.7973154 C304.907168,63.6099866 305.109047,51.6578792 305.198389,47.3488322 C305.285154,43.1291275 305.454389,39.9746577 305.44494,39.239302 C305.420886,37.5907651 304.457879,36.9670872 302.45455,36.1784698 C300.683168,35.4809128 298.588779,34.9981208 296.416215,34.829745 C293.674094,34.616698 292.022121,36.0702282 292.065074,37.7900671 C292.073664,38.1147919 292.073664,40.1086711 292.073664,40.1086711 C289.818631,36.565047 286.191678,34.0986846 283.778577,33.3839463 C277.278926,31.4544966 270.496644,33.1648859 265.38094,40.3225772 C261.315866,46.0104161 258.653638,53.9919463 257.899383,61.6375839 C257.196671,68.7634899 257.326389,74.8181477 258.284242,79.9201074 C257.250792,85.0280805 254.279302,90.3697181 250.919517,90.3697181 C246.624215,90.3697181 244.180188,86.570953 244.180188,69.2076242 C244.180188,59.079302 244.484295,54.6740403 244.633772,47.3488322 C244.720537,43.1291275 244.888054,39.8878926 244.878604,39.153396 C244.846819,36.8983624 240.947544,35.7618255 239.133208,35.3408859 C237.234685,34.901906 235.595597,34.7404027 234.337074,34.8340403 C232.67651,34.9568859 231.509047,36.4439195 231.509047,37.5529664 L231.509047,40.1086711 C229.254013,36.565047 225.62706,34.0986846 223.21396,33.3839463 C216.714309,31.4544966 209.969826,33.1923758 204.816322,40.3225772 C201.455678,44.9718121 198.735034,50.1261745 197.334765,61.5362148 C196.930148,64.8332886 196.751463,67.9216107 196.774658,70.8071946 C195.434523,79.0034899 189.515597,88.4488591 184.673933,88.4488591 C181.840752,88.4488591 179.142443,82.9534497 179.142443,71.2418792 C179.142443,55.6413423 180.108027,33.4303356 180.271248,31.289557 C180.271248,31.289557 186.388617,31.1856107 187.573262,31.1718658 C190.624644,31.1383624 193.388242,31.2105235 197.452456,31.0026309 C199.491007,30.8986846 201.454819,23.5829262 199.35098,22.6774765 C198.397423,22.2677047 191.658094,21.9086174 188.986416,21.8519195 C186.739973,21.8012349 180.486013,21.3382013 180.486013,21.3382013 C180.486013,21.3382013 181.04698,6.59500671 181.177557,5.0375302 C181.288376,3.73948993 179.608913,3.07114094 178.645906,2.66566443 C176.304107,1.67516779 174.208859,1.20096644 171.725315,0.688966443 C168.294228,-0.0188993289 166.737611,0.673503356 166.433503,3.56939597 C165.975624,7.96434899 165.738523,20.8373691 165.738523,20.8373691 C163.220617,20.8373691 154.619705,20.3451275 152.10094,20.3451275 C149.760859,20.3451275 147.235221,30.4090201 150.470443,30.5327248 C154.192752,30.677047 160.679517,30.8024698 164.979973,30.9313289 C164.979973,30.9313289 164.788403,53.5091544 164.788403,60.4804295 C164.788403,61.2217987 164.791839,61.9356779 164.796134,62.6289396 C162.429423,74.9641879 154.093101,81.6279195 154.093101,81.6279195 C155.883383,73.4668456 152.226362,67.3383087 145.639087,62.150443 C143.212242,60.2390336 138.421262,56.6198121 133.060725,52.6535302 C133.060725,52.6535302 136.165369,49.5944161 138.918658,43.4375302 C140.869584,39.0760805 140.953772,34.0866577 136.165369,32.9862013 C128.253423,31.1667114 121.729718,36.977396 119.783946,43.1806711 C118.276295,47.9871141 119.080376,51.5522148 122.033826,55.2564832 C122.24945,55.5270872 122.483114,55.8037047 122.72451,56.0820403 C120.938523,59.5242953 118.485047,64.1589262 116.40698,67.7532349 C110.639248,77.7320805 106.282094,85.6251275 102.989315,85.6251275 C100.357154,85.6251275 100.392376,77.610953 100.392376,70.1079195 C100.392376,63.6400537 100.870013,53.9154899 101.251436,43.847302 C101.377718,40.5175839 99.7128591,38.6207785 96.9217718,36.9026577 C95.2259866,35.8588993 91.6067651,33.806604 89.5106577,33.806604 C86.3733691,33.806604 77.3214497,34.233557 68.7686443,58.9736376 C67.6905235,62.0920268 65.5729396,67.7738523 65.5729396,67.7738523 L65.7559195,38.0228725 C65.7559195,37.3253154 65.3839463,36.650953 64.5334765,36.1896376 C63.0919732,35.4070336 59.2425235,33.806604 55.8200268,33.806604 C54.1895302,33.806604 53.3751409,34.5651544 53.3751409,36.0771007 L53.077047,82.6227114 C53.077047,86.1603221 53.1689664,90.2855302 53.518604,92.089557 C53.8673826,93.8961611 54.4317852,95.3660134 55.1302013,96.2405369 C55.8286174,97.1133423 56.6361342,97.7791141 57.9668188,98.0540134 C59.2055839,98.3091544 65.990443,99.1802416 66.3426577,96.5875973 C66.7653154,93.4803758 66.7816376,90.1197315 70.3441611,77.5860403 C75.890255,58.0724832 83.1201074,48.5515168 86.5202685,45.170255 C87.1147383,44.5792215 87.793396,44.544 87.7607517,45.511302 C87.6155705,49.7894228 87.1052886,60.4804295 86.7616644,69.561557 C85.8407517,93.866094 90.2623356,98.3710067 96.5807248,98.3710067 C101.414658,98.3710067 108.228725,93.568 115.533315,81.4097181 C120.087195,73.8328054 124.508779,66.403651 127.685584,61.0491275 C129.899383,63.0988456 132.383785,65.3040537 134.86647,67.6604564 C140.635919,73.1361074 142.530148,78.3394362 141.273342,83.2755973 C140.312054,87.0494497 136.691973,90.9384161 130.24902,87.1585503 C128.371114,86.0555168 127.569611,85.2033289 125.681396,83.9602685 C124.666846,83.2927785 123.11796,83.0926174 122.189315,83.7927517 C119.777074,85.6113826 118.397423,87.9248322 117.609664,90.7889396 C116.843383,93.5757315 119.63447,95.0490201 122.527785,96.3376107 C125.01906,97.4466577 130.373584,98.4517584 133.788349,98.5660134 C147.093477,99.0110067 157.751839,92.1419597 165.171544,74.4229799 C166.499651,89.7262819 172.152268,98.3847517 181.973047,98.3847517 C188.538846,98.3847517 195.121826,89.898094 198.000537,81.5488859 C198.826953,84.9524832 200.050255,87.9119463 201.630067,90.4152483 C209.19753,102.405154 223.878013,99.8245369 231.252188,89.642953 C233.532134,86.4970738 233.879195,85.3665503 233.879195,85.3665503 C234.954738,94.9802953 242.696591,98.3392215 247.129342,98.3392215 C252.093852,98.3392215 257.219866,95.9922685 260.812456,87.9042148 C261.233396,88.7821745 261.692993,89.6206174 262.194685,90.4152483 C269.762148,102.405154 284.442631,99.8245369 291.816805,89.642953 C292.164725,89.1653154 292.466255,88.732349 292.729987,88.3431946 L292.94647,94.6581477 C292.94647,94.6581477 288.739651,98.517047 286.157315,100.884617 C274.777342,111.31447 266.132617,119.225557 265.496913,128.438121 C264.687678,140.184913 274.208644,144.550658 281.423034,145.122792 C289.070389,145.730148 295.631034,141.501852 299.65745,135.584644 C303.201074,130.376161 305.520537,119.166282 305.350443,108.094711 C305.282577,103.661101 305.170899,98.0239463 305.083275,91.9813154 C309.077906,87.3423893 313.578523,81.478443 317.722631,74.6162685 C322.238711,67.1372886 327.078658,57.0931544 329.557047,49.2765638 C329.557047,49.2765638 333.762148,49.3126443 338.249879,49.0188456 C339.685369,48.9252081 340.097718,49.2181477 339.832268,50.2704966 C339.511839,51.541906 334.16247,72.1748188 339.04451,85.9197852 C342.386255,95.3290738 349.919356,98.3564027 354.385611,98.3564027 C359.613852,98.3564027 364.615302,94.4081611 367.29557,88.5450738 C367.618577,89.1988188 367.956188,89.8310872 368.324725,90.4152483 C375.892188,102.405154 390.521128,99.8090738 397.946846,89.642953 C399.622872,87.3492617 400.573852,85.3665503 400.573852,85.3665503 C402.167409,95.3161879 409.904966,98.389906 414.336859,98.389906 C418.95345,98.389906 423.334658,96.497396 426.88945,88.0863356 C427.038067,91.789745 427.271732,94.8179329 427.641128,95.772349 C427.866201,96.3565101 429.177987,97.0892886 430.132403,97.4432215 C434.355544,99.0092886 438.662872,98.2687785 440.25643,97.9466309 C441.360322,97.7232752 442.221101,96.8375839 442.338792,94.5507651 C442.648054,88.5459329 442.458201,78.4571275 444.27855,70.9583893 C447.334228,58.3748725 450.184591,53.4936913 451.536752,51.0771544 C452.293584,49.7232752 453.14749,49.4999195 453.178416,50.9328322 C453.241987,53.8321611 453.386309,62.3463087 454.570094,73.785557 C455.439463,82.1983356 456.600913,87.1714362 457.493477,88.7452349 C460.040591,93.2458523 463.18647,93.4588993 465.748188,93.4588993 C467.377826,93.4588993 470.785718,93.0087517 470.480752,90.1446443 C470.332134,88.7486711 470.59243,80.1211275 473.605154,67.7240268 C475.572403,59.6282416 478.852295,52.3142013 480.035221,49.6390872 C480.471624,48.6528859 480.674362,49.4303356 480.66749,49.5815302 C480.418362,55.1568322 479.859114,73.3929664 482.13047,83.3666577 C485.209342,96.8779597 494.116081,98.389906 497.219866,98.389906 C503.845799,98.389906 509.264752,93.3497987 511.090255,80.0876242 C511.530094,76.8962148 510.878926,74.4315705 508.928,74.4315705 L508.928,74.4315705 Z\"></path>\n        </g>\n      </svg></a>\n    <button class=\"button-login\" (click)=\"onClick()\">\n      Log in</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.loginUrl = "https://www.instagram.com/oauth/authorize/?client_id=389654896f884ec8bf642313b72d4943&redirect_uri=https://insta-chat-38bb4.firebaseapp.com/profile&response_type=token";
    }
    LoginComponent.prototype.onClick = function () {
        window.location.href = this.loginUrl;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer {\r\n    display: flex;\r\n    height: auto;\r\n    width: 90%;\r\n    min-width: 400px;\r\n    border-radius: 15px;\r\n    align-items: stretch;\r\n    background-color: #eee;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin: 20px;\r\n}\r\n\r\n.isOwnMessageContainer {\r\n    background-color: #01579B;\r\n}\r\n\r\n.isOwnMessageData{\r\n    margin-left: auto;\r\n    order: 2;  \r\n}\r\n\r\n.messageData {\r\n    flex: 0.5;\r\n    padding: 10px;\r\n    font-size: 0.7em;\r\n}\r\n\r\n.senderImg {\r\n    border-radius: 50%;\r\n    width: 90px;\r\n}\r\n\r\n.sender {\r\n    display: block;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n\r\n.isOwnSender {\r\n    color: #E1F5FE;\r\n}\r\n\r\n.timestamp {\r\n    color: #555;\r\n    font-style: italic;\r\n    font-size: 1em;\r\n}\r\n\r\n.isOwnTimestamp {\r\n    color: #4FC3F7;\r\n}\r\n\r\n.messageContent {\r\n    height: auto;\r\n    flex: 9;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    border-top-right-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n}\r\n\r\n.isOwnMessageContent {\r\n    background-color: #E3F2FD;\r\n    color: #01579B;\r\n    text-align: end;      \r\n    border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\" [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\n  <div class=\"messageData\" [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\n    <img src=\"{{chatMessage.img}}\" class=\"senderImg\">\n    <span class=\"sender\" [ngClass]=\"{'isOwnSender':isOwnMessage}\">\n      {{ userName }}\n    </span>\n    <span class=\"timestamp\" [ngClass]=\"{'isOwnTimestamp':isOwnMessage}\">\n      {{ timeStamp | date:'medium' }}\n    </span>\n  </div>\n  <div class=\"messageContent\" [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\n    {{ messageContent }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/chat-message.model */ "./src/app/models/chat-message.model.ts");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(loginService) {
        this.loginService = loginService;
        this.user = loginService.getReadyUser();
        // this.isOwnMessage = this.user.userName === this.chatMessage.userName;
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userName = chatMessage.userName;
        this.isOwnMessage = this.user.userName === this.chatMessage.userName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_1__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-message",
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ModalService_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/ModalService/modal.service */ "./src/app/services/ModalService/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            \n                <ng-content></ng-content>\n            \n        </div>\n        <div class=\"jw-modal-background\"></div>",
        }),
        __metadata("design:paramtypes", [_services_ModalService_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBar{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    z-index: 100;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid rgba(0, 0, 0, .0975);\r\n    margin: 0%;\r\n}\r\n\r\n#logo{\r\n    display: inline-block;\r\n    background: url('instagram-new.png') no-repeat;\r\n    background-size: cover;\r\n    margin: 12px 10px 12px 32px;\r\n    width: 60px;\r\n    height: 60px;\r\n    min-width: 60px;\r\n}\r\n\r\n#heading{\r\n    flex: 1;\r\n    padding: 24px 0px 8px 10px;\r\n    height: 60px;\r\n}\r\n\r\n.links{\r\n    padding-top: 32px;\r\n    padding-right: 30px;\r\n    white-space: nowrap;\r\n    display: block;\r\n}\r\n\r\n#heading > a{\r\n    text-decoration: none;\r\n    color: black;\r\n    overflow: hidden;\r\n    font-size: 150%;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.links a{\r\n    color: #555;\r\n    text-decoration: none;\r\n    transition: ease-in 0.2s;\r\n    padding-right: 12px;\r\n    overflow: hidden;\r\n}\r\n\r\n.links a:hover {\r\n    color: #1E88E5;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n#userEmail {\r\n    padding-right: 16px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n  <div id=\"logo\"></div>\n  <div id=\"heading\">\n    <a>Insta Chat</a>\n  </div>\n  <div class=\"links\">\n    <span>\n      <a  routerLink=\"/chat\">Chat</a>\n    </span>\n    <span>\n      <a  routerLink=\"/profile\">Profile</a>\n    </span>\n    <span>\n      <a  routerLink=\"/\" (click)=\"logout()\">Logout</a>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(loginService) {
        this.loginService = loginService;
        this.isAuth = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.loginService.getReadyUser();
        if (this.loginService.getAccessToken()) {
            this.isAuth = true;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.loginService.logout();
        this.isAuth = false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  margin: auto;\n  width: auto;\n  position: relative;\n  top: 20%;\n}\n\n.profile-image {\n  position: relative;\n  border-radius: 50%;\n  padding: 10px;\n  width: 90%;\n  cursor: pointer;\n  margin: auto;\n}\n\n.username {\n  padding: 5px;\n  display: block;\n  color: #000000;\n  font: \"inherit\";\n  font-size: 2em;\n  margin-left: 5%;\n  line-height: 40px;\n  font-weight: 200;\n  float: left;\n}\n\n.full-name {\n  padding: 5px;\n  border: 0;\n  line-height: 24px;\n  font-weight: 600;\n  font-size: 1.3rem;\n  float: left;\n  margin-left: 5%;\n}\n\n.number {\n  font-size: 1.35em;\n  font: \"inherit\";\n  color: #262626;\n  font-weight: 600;\n}\n\n.text {\n  color: #262626;\n  font-weight: 200;\n  font: \"inherit\";\n  font-size: 1.35m;\n}\n\n.follow-info {\n  float: left;\n  display: inline;\n  position: relative;\n  list-style-type: none;\n}\n\n.follow-info li {\n  display: inline;\n  margin-right: 4px;\n  padding: 5px;\n}\n\n.postsBlock {\n  padding: 20px;\n}\n\n.container {\n  display: table;\n  width: 100%;\n  height: auto;\n  margin-top: 2%;\n}\n\n.holder {\n  position: relative;\n  cursor: pointer;\n  border-radius: 4px;\n  width: 30%;\n  height: 290px;\n  margin: 15px;\n  float: left;\n}\n\n.photo {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.post-li {\n  position: relative;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.head-container {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 4px;\n  height: 30%;\n  position: relative;\n}\n\n.holder:hover {\n  background: rgba(255, 255, 255, 0.7);\n}\n\n.desc-block {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  background: rgba(0, 0, 0, .5);\n  padding: 5px;\n  opacity: 0;\n  color: #fafafa;\n  padding: 100px;\n}\n\n.likes-count {\n  padding: 11px;\n  margin: auto;\n  font-weight: 600;\n  font-size: 1em;\n}\n\n.desc-block svg {\n  width: 15%;\n  height: 15%;\n  padding-bottom: 5%;\n}\n\n.holder:hover .desc-block {\n  opacity: 1;\n}\n\n.data-parent {\n  width: 40%;\n  height: 100%;\n  min-height: 100%;\n  margin: auto;\n  margin-top: 3%;\n  position: relative;\n}\n\n.user-image-block {\n  display: flex;\n  float: left;\n  width: 30%;\n  height: 100%;\n}\n\nheader {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  background-color: #fff;\n  height: 8%;\n  border-bottom: 1px solid rgba(0, 0, 0, .0975);\n  margin: 0%;\n}\n\n.header-info {\n  width: 80%;\n  height: 60%;\n  position: relative;\n  max-height: 100%;\n  ;\n  margin: auto;\n}\n\n.text-block .dots {\n  margin-top: 2.5%;\n  width: 2.5%;\n  margin-right: 20%;\n  cursor: pointer;\n}\n\n.likes-comments-container {\n  margin: auto;\n  position: relative;\n}\n\n.main {\n  margin-top: 0;\n  position: relative;\n  height: 100%;\n  overflow: scroll;\n}\n\n.dots-menu-button {\n  text-align: center;\n  width: 100%;\n  height: 50%;\n  background-color: #fff;\n  border-bottom: 0;\n  border-left: 0;\n  border-right: 0;\n  border-top: 1px solid #efefef;\n  cursor: pointer;\n}\n\n.postImage {\n  float: left;\n  margin: 0%;\n  padding: 0%;\n  overflow: hidden;\n}\n\n.post-info-block {\n  position: relative;\n  display: inline-block;\n  top: 0%;\n  right: 0;\n  width: 325px;\n  height: auto;\n  background-color: #fff;\n  margin: 0px;\n}\n\n.inPost-user-image {\n  border-radius: 50%;\n  width: 90%;\n\n}\n\n.inPost-user-info {\n  display: inline;\n}\n\n.inPost-username {\n  margin-top: 10px;\n  font-size: 1em;\n  color: #262626;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 5px;\n  margin-left: -5px;\n}\n\n.inPost-location {\n  font-size: 0.9em;\n  color: #262626;\n\n}\n\n.inPost-user-image-block {\n  background-color: #fff;\n  width: 20%;\n  margin-left: 15px;\n  height: auto;\n  display: inline-block;\n}\n\n.like {\n  width: 10%;\n}\n\n.inPost-text-block {\n  display: inline-block;\n}\n\n.inPost-caption {\n  margin-left: 15px;\n  max-height: 250px;\n  overflow: auto;\n\n}\n\n.username-caption{\n  font-weight: 600;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-family: Roboto;\n    vertical-align: baseline;\n}\n\n.text-caption{\n  font-weight: 400;\n  font-size: 0.9em;\n  font-family: Roboto;\n  vertical-align: baseline;\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n      <div class=\"head-container\">\n            <div align=\"middle\" class=\"data-parent\">\n                  <div class=\"user-image-block\">\n                        <img class=\"profile-image\" sizes=\"600px\" src=\"{{user.imgSrc}}\">\n                  </div>\n                  <div class=\"data\">\n                        <div class=\"text-block\">\n                              <h1 class=\"username\">{{user.userName}} </h1>\n                              <svg class=\"dots\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg \" (click)=\"openModal('custom-modal-1')\"\n                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"25.583px\" height=\"25.583px\"\n                                    viewBox=\"0 0 45.583 45.583\" xml:space=\"preserve\">\n                                    <g>\n                                          <path d=\"M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585\n                        C8.705,15.371,11.214,17.874,11.214,20.956z\" />\n                                          <path d=\"M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585\n                        C24.056,15.371,26.564,17.874,26.564,20.956z\" />\n                                          <path d=\"M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585\n                        C39.406,15.371,41.915,17.874,41.915,20.956z\" />\n                                    </g>\n                              </svg>\n                              <ul class=\"follow-info\" *ngIf=\"user.countMedia\">\n                                    <li>\n                                          <span class=\"text\">\n                                                <span class=\"number\">{{user.countMedia}}</span>\n                                                posts\n                                          </span>\n                                    </li>\n                                    <li>\n                                          <span class=\"text\">\n                                                <span class=\"number\">{{user.countFollowers}}</span>\n                                                followers\n                                          </span>\n                                    </li>\n                                    <li>\n                                          <span class=\"text\">\n                                                <span class=\"number\">{{user.countFollowing}}</span>\n                                                following\n                                          </span>\n                                    </li>\n                              </ul>\n\n                              <h1 class=\"full-name\">{{user.fullName}}</h1>\n                        </div>\n                  </div>\n\n            </div>\n      </div>\n      <div class=\"container\">\n            <hr>\n            <ul>\n                  <li *ngFor=\"let post of postsArray\" class=\"post-li\">\n                        <div class=\"holder\">\n                              <img class=\"photo\" src=\"{{post.imageStandart}}\">\n                              <div class=\"desc-block\" (click)=\"onPostClick(postsArray.indexOf(post),'post-modal')\">\n                                    <div class=\"likes-comments-container\">\n                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                x=\"0px\" y=\"0px\" width=\"25.583px\" height=\"25.583px\" viewBox=\"0 0 45.583 45.583\"\n                                                xml:space=\"preserve\">\n                                                <g fill=\"#fff\">\n                                                      <path d=\"M34.199,3.83c-3.944,0-7.428,1.98-9.51,4.997c0,0-0.703,1.052-1.818,1.052c-1.114,0-1.817-1.052-1.817-1.052\n                                                c-2.083-3.017-5.565-4.997-9.51-4.997C5.168,3.83,0,8.998,0,15.376c0,1.506,0.296,2.939,0.82,4.258\n                                                c3.234,10.042,17.698,21.848,22.051,22.279c4.354-0.431,18.816-12.237,22.052-22.279c0.524-1.318,0.82-2.752,0.82-4.258\n                                                C45.743,8.998,40.575,3.83,34.199,3.83z\" />\n                                                </g>\n                                          </svg>\n                                          <span class=\"likes-count\">{{post.likes}}</span>\n                                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                x=\"0px\" y=\"0px\" width=\"25.583px\" height=\"25.583px\" viewBox=\"0 0 45.583 45.583\"\n                                                xml:space=\"preserve\">\n                                                <g fill=\"#fff\">\n                                                      <path d=\"M37.426,2.633H8.362C3.746,2.633,0,6.369,0,10.985v17.003c0,4.615,3.747,8.344,8.362,8.344h18.48l3.902,5.604\n                                                c0.527,0.756,1.39,1.209,2.311,1.211c0.92,0.002,1.785-0.443,2.314-1.197l4.129-5.865c3.611-0.924,6.281-4.198,6.281-8.098V10.985\n                                                C45.779,6.369,42.042,2.633,37.426,2.633z M15.431,22.203c-1.505,0-2.726-1.215-2.726-2.717c0-1.499,1.221-2.716,2.726-2.716\n                                                c1.506,0,2.726,1.217,2.726,2.716C18.157,20.988,16.937,22.203,15.431,22.203z M22.894,22.203c-1.505,0-2.726-1.215-2.726-2.717\n                                                c0-1.499,1.221-2.716,2.726-2.716c1.506,0,2.725,1.217,2.725,2.716C25.619,20.988,24.4,22.203,22.894,22.203z M30.357,22.203\n                                                c-1.506,0-2.727-1.215-2.727-2.717c0-1.499,1.221-2.716,2.727-2.716s2.726,1.217,2.726,2.716\n                                                C33.083,20.988,31.863,22.203,30.357,22.203z\" />\n                                                </g>\n                                          </svg>\n                                          <span class=\"likes-count\">{{post.comments}}</span>\n                                    </div>\n\n                              </div>\n\n                        </div>\n                  </li>\n            </ul>\n\n      </div>\n</div>\n\n\n\n<jw-modal id=\"custom-modal-1\">\n      <div class=\"jw-modal-body-dots\">\n            <button class=\"dots-menu-button\" (click)=\"logOut()\"> Log out</button>\n            <button class=\"dots-menu-button\" (click)=\"closeModal('custom-modal-1')\">Close</button>\n      </div>\n</jw-modal>\n\n<jw-modal id=\"post-modal\">\n      <div class=\"jw-modal-body\">\n            <button type=\"button\" class=\"close right-btn\" (click)=\"closeModal('post-modal')\" style=\"outline: none;margin-right: 10px;margin-top: 10px\">\n                  <span>&times;</span>\n            </button>\n            <img src=\"{{selectedPost.imageStandart}}\" class=\"postImage\" alt=\"Post photo\">\n            <div class=\"post-info-block\">\n                  <div class=\"inPost-user-info\">\n                        <div class=\"inPost-user-image-block\">\n                              <img class=\"inPost-user-image\" src=\"{{user.imgSrc}}\">\n                        </div>\n                        <div class=\"inPost-text-block\">\n                              <h4 class=\"inPost-username\">{{user.userName}}</h4>\n                              <h4 class=\"inPost-location\">{{selectedPost.location}}</h4>\n                        </div>\n                  </div>\n\n                  <div style=\"margin-left:15px\">\n                        <hr>\n                        <img class=\"like\" src=\"/src/img/filled.png\" alt=\"Like\" *ngIf=\"selectedPost.userHasLiked;else unset\">\n                        <ng-template #unset>\n                              <img class=\"like\" src=\"/src/img/empty.png\" alt=\"Like\">\n                        </ng-template>\n                        <span class=\"text\">\n                              <span class=\"number\">{{selectedPost.likes}}</span>\n                              likes\n                        </span>\n                  </div>\n                  <div class=\"inPost-caption\">\n                        <span class=\"username-caption\">{{user.userName}}:\n                              <span class=\"text-caption\">\n                                    {{selectedPost.caption}}\n                              </span>\n                        </span>\n                  </div>\n            </div>\n      </div>\n</jw-modal>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _models_User_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/User/User */ "./src/app/models/User/User.ts");
/* harmony import */ var _models_User_UserPipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/User/UserPipe.pipe */ "./src/app/models/User/UserPipe.pipe.ts");
/* harmony import */ var _models_Posts_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/Posts/Post */ "./src/app/models/Posts/Post.ts");
/* harmony import */ var _models_Posts_PostPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/Posts/PostPipe */ "./src/app/models/Posts/PostPipe.ts");
/* harmony import */ var _services_ModalService_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/ModalService/modal.service */ "./src/app/services/ModalService/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(loginService, postPipe, userPipe, modalService) {
        var _this = this;
        this.loginService = loginService;
        this.postPipe = postPipe;
        this.userPipe = userPipe;
        this.modalService = modalService;
        this.user = new _models_User_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.postsArray = [];
        this.selectedPost = new _models_Posts_Post__WEBPACK_IMPORTED_MODULE_4__["Post"]();
        this.onPostClick = function (postID, id) {
            _this.loginService.setSelectedPost(postID);
            _this.modalService.open(id);
            _this.selectedPost = _this.loginService.getSelectedPost();
        };
    }
    ProfileComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    ProfileComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    ProfileComponent.prototype.logOut = function () {
        this.loginService.logout();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUserInfo().subscribe(function (response) {
            _this.user = _this.userPipe.transform(response);
            _this.loginService.setReadyUser(_this.user);
        }, function (err) {
            console.log(err.message);
        });
        this.loginService.getPosts().subscribe(function (response) {
            _this.postPipe.transform(response, _this.postsArray);
        }, function (err) {
            console.log(err.message);
        });
        this.loginService.setReadyPosts(this.postsArray);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "isReady", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _models_Posts_PostPipe__WEBPACK_IMPORTED_MODULE_5__["PostPipe"],
            _models_User_UserPipe_pipe__WEBPACK_IMPORTED_MODULE_3__["UserPipe"],
            _services_ModalService_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/models/Posts/Post.ts":
/*!**************************************!*\
  !*** ./src/app/models/Posts/Post.ts ***!
  \**************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/models/Posts/PostPipe.ts":
/*!******************************************!*\
  !*** ./src/app/models/Posts/PostPipe.ts ***!
  \******************************************/
/*! exports provided: PostPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPipe", function() { return PostPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./src/app/models/Posts/Post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PostPipe = /** @class */ (function () {
    function PostPipe() {
    }
    PostPipe.prototype.transform = function (responce, result) {
        var _this = this;
        var i = 1;
        responce.data.forEach(function (element) {
            var tmp = new _Post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
            tmp.location = _this.checkIfLocationExist(element.location);
            tmp.caption = _this.checkIfCaptionExist(element.caption);
            tmp.imageLow = element.images.low_resolution.url;
            tmp.imageStandart = element.images.standard_resolution.url;
            tmp.likes = element.likes.count;
            tmp.userHasLiked = element.user_has_liked;
            tmp.comments = element.comments.count;
            tmp.id = i++;
            result.push(tmp);
        });
    };
    PostPipe.prototype.checkIfLocationExist = function (tmp) {
        if (tmp === null) {
            return "";
        }
        else {
            return tmp.name;
        }
    };
    PostPipe.prototype.checkIfCaptionExist = function (tmp) {
        if (tmp === null) {
            return '';
        }
        else {
            return tmp.text;
        }
    };
    PostPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'PostPipe'
        })
    ], PostPipe);
    return PostPipe;
}());



/***/ }),

/***/ "./src/app/models/User/User.ts":
/*!*************************************!*\
  !*** ./src/app/models/User/User.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/User/UserPipe.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/models/User/UserPipe.pipe.ts ***!
  \**********************************************/
/*! exports provided: UserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPipe", function() { return UserPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/app/models/User/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserPipe = /** @class */ (function () {
    function UserPipe() {
    }
    UserPipe.prototype.transform = function (responce) {
        var result = new _User__WEBPACK_IMPORTED_MODULE_1__["User"];
        result.userName = responce.data.username;
        result.imgSrc = responce.data.profile_picture;
        result.fullName = responce.data.full_name;
        result.countMedia = responce.data.counts.media;
        result.countFollowers = responce.data.counts.followed_by;
        result.countFollowing = responce.data.counts.follows;
        return result;
    };
    UserPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userPipe'
        })
    ], UserPipe);
    return UserPipe;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/chatroom/chatroom.component */ "./src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "chat", component: _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_3__["ChatroomComponent"] },
    { path: "**", redirectTo: "login", pathMatch: "full" },
    { path: "", redirectTo: "login", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/ModalService/modal.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/ModalService/modal.service.ts ***!
  \********************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/chat/chat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/chat/chat.service.ts ***!
  \***********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(loginService, db) {
        this.loginService = loginService;
        this.db = db;
        this.user = this.loginService.getReadyUser();
    }
    ChatService.prototype.sendMessage = function (msg) {
        var timestamp = this.getTimeStamp();
        var userName = this.user.userName;
        var img = this.user.imgSrc;
        this.chatMessages = this.getMessages();
        this.chatMessages.push({
            message: msg,
            timeSent: timestamp,
            userName: userName,
            img: img
        });
    };
    ChatService.prototype.getMessages = function () {
        return this.db.list("messages", function (ref) { return ref.limitToLast(25).orderByKey(); });
    };
    ChatService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() +
            "/" +
            (now.getUTCMonth() + 1) +
            "/" +
            now.getUTCDate();
        var time = now.getUTCHours() + ":" + now.getUTCMinutes() + ":" + now.getUTCSeconds();
        return date + " " + time;
    };
    ChatService.prototype.deleteMessage = function (message) {
        if (message.userName === this.loginService.getReadyUser().userName) {
            if (confirm("Are you sure to delete: " + message.message)) {
                this.db.object('/messages/' + message.key).remove();
            }
        }
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = /** @class */ (function () {
    function LoginService(http, localSt, router) {
        this.http = http;
        this.localSt = localSt;
        this.router = router;
        this.homePageUrl = "http://localhost:4200/login";
        this.pageToReditect = "http://localhost:4200/profile";
    }
    LoginService.prototype.setReadyUser = function (user) {
        // this.readyUser = user;    
        this.localSt.store("user", JSON.stringify(user));
    };
    LoginService.prototype.getReadyUser = function () {
        return JSON.parse(this.localSt.retrieve('user'));
    };
    LoginService.prototype.logout = function () {
        this.localSt.clear();
        this.router.navigate(['']);
    };
    LoginService.prototype.getSelectedPost = function () {
        return this.selectedPost;
    };
    LoginService.prototype.setSelectedPost = function (value) {
        this.selectedPost = this.posts[value];
    };
    LoginService.prototype.setReadyPosts = function (postArray) {
        this.posts = postArray;
    };
    LoginService.prototype.getReadyPosts = function () {
        return this.posts;
    };
    LoginService.prototype.setAccessToken = function (token) {
        this.localSt.store('AccessToken', token);
    };
    LoginService.prototype.getAccessToken = function () {
        return this.localSt.retrieve('AccessToken');
    };
    LoginService.prototype.getIdSelectedPost = function () {
        return this.posts.indexOf(this.selectedPost);
    };
    LoginService.prototype.getUserInfo = function () {
        return this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + this.getAccessToken())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    LoginService.prototype.getPosts = function () {
        return this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.getAccessToken())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        ;
    };
    LoginService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || 'Server error');
    };
    LoginService.prototype.getHomePageUrl = function () {
        return this.homePageUrl;
    };
    LoginService.prototype.getPageToReditect = function () {
        return this.pageToReditect;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    homeUrl: "localhost:4200",
    firebase: {
        apiKey: "AIzaSyAYZt5DvIwVNV8tlmOLOvxPeYnb0TIoC00",
        authDomain: "insta-chat-38bb4.firebaseapp.com",
        databaseURL: "https://insta-chat-38bb4.firebaseio.com",
        projectId: "insta-chat-38bb4",
        storageBucket: "",
        messagingSenderId: "70714683562"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bodya\Desktop\Angular\InstaChat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map