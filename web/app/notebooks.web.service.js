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
/**
 * Created by Марат on 21.04.2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var NotebooksWebService = (function () {
    function NotebooksWebService(http) {
        this.http = http;
        this.url = '/rest/resources/';
    }
    NotebooksWebService.prototype.getNotebooks = function (userId) {
        return this.http.get(this.url + 'user/' + userId + '/notebooks');
    };
    NotebooksWebService.prototype.create = function (notebookName) {
        var body = JSON.stringify(notebookName);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post(this.url + 'notebook', body, { headers: headers });
    };
    NotebooksWebService.prototype.edit = function (notebook) {
        var body = JSON.stringify(notebook);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.put(this.url + 'notebook/' + notebook.id, body, { headers: headers });
    };
    NotebooksWebService.prototype.remove = function (id) {
        return this.http.delete(this.url + 'notebook/' + id);
    };
    NotebooksWebService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotebooksWebService);
    return NotebooksWebService;
}());
exports.NotebooksWebService = NotebooksWebService;
//# sourceMappingURL=notebooks.web.service.js.map