"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_web_service_1 = require("./user.web.service");
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (data) { return _this.user = data.json(); });
    };
    UserComponent.prototype.logout = function () {
        this.userService.logout();
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n        <div class=\"page-header\">\n            <h2>Not so smart note \n                <small>\n                    main page\n                    <ul class=\"list-inline\" align=\"right\">\n                        <li>{{user?.username}}</li>\n                        <li><a href=\"#\" (click)=\"logout($event)\">Exit</a></li>\n                    </ul>\n                </small>\n            </h2>\n\t\t</div>\n    "
        }), 
        __metadata('design:paramtypes', [user_web_service_1.UserWebService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map