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
var notebooks_component_1 = require("./notebooks.component");
var notes_component_1 = require("./notes.component");
var text_component_1 = require("./text.component");
var user_web_service_1 = require("./user.web.service");
var notebooks_web_service_1 = require("./notebooks.web.service");
var notes_web_service_1 = require("./notes.web.service");
var notebookWithUser_1 = require("./notebookWithUser");
var noteWithNotebook_1 = require("./noteWithNotebook");
var AppComponent = (function () {
    function AppComponent(userService, notebooksService, notesService) {
        this.userService = userService;
        this.notebooksService = notebooksService;
        this.notesService = notesService;
        this.selectedNotebook = undefined;
        this.selectedNote = undefined;
    }
    AppComponent.prototype.changedSelectedNotebook = function (notebook) {
        this.selectedNotebook = notebook;
        this.notesComponent.uploadNotes(this.selectedNotebook);
        this.textComponent.clean();
        this.selectedNote = undefined;
    };
    AppComponent.prototype.changedSelectedNote = function (note) {
        this.selectedNote = note;
        this.textComponent.setText(this.selectedNote.noteText);
    };
    AppComponent.prototype.createNote = function (name) {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (data) {
            var notebook = new notebookWithUser_1.NotebookWithUser(_this.selectedNotebook.notebookName, data.json());
            var note = new noteWithNotebook_1.NoteWithNotebook(name, notebook);
            _this.notesService.create(note)
                .subscribe(function (resp) { return _this.editedNotes(); });
        });
    };
    AppComponent.prototype.editedNotes = function () {
        this.notesComponent.uploadNotes(this.selectedNotebook);
    };
    AppComponent.prototype.editedNotebooks = function () {
        this.notebooksComponent.getNotebooks();
    };
    AppComponent.prototype.savedNote = function (text) {
        this.selectedNote.noteText = text;
        this.notesComponent.save(this.selectedNote);
    };
    __decorate([
        core_1.ViewChild(notebooks_component_1.NotebooksComponent), 
        __metadata('design:type', notebooks_component_1.NotebooksComponent)
    ], AppComponent.prototype, "notebooksComponent", void 0);
    __decorate([
        core_1.ViewChild(notes_component_1.NotesComponent), 
        __metadata('design:type', notes_component_1.NotesComponent)
    ], AppComponent.prototype, "notesComponent", void 0);
    __decorate([
        core_1.ViewChild(text_component_1.TextComponent), 
        __metadata('design:type', text_component_1.TextComponent)
    ], AppComponent.prototype, "textComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<div class=\"container\">\n\t\t\t<user></user>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <notebooks (onChanged)=\"changedSelectedNotebook($event)\"\n                                               (onEdit)=\"editedNotebooks($event)\"></notebooks>\n                </div>\n    \n                <div class=\"col-sm-4\">\n                    <notes (onChangedSelectedNote)=\"changedSelectedNote($event)\"\n                                                (onEdit)=\"editedNotes($event)\"\n                                                (onCreateQuery)=\"createNote($event)\"></notes>\n                </div>\n    \n                <div class=\"col-sm-4 highest\">\n                    <text (onSaved)=\"savedNote($event)\"></text>\n                </div>\n            </div>\n        </div>\n\t",
            styleUrls: ['app/equal.css']
        }), 
        __metadata('design:paramtypes', [user_web_service_1.UserWebService, notebooks_web_service_1.NotebooksWebService, notes_web_service_1.NotesWebService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map