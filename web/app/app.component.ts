import {Component, ViewChild} from "@angular/core";
import {Notebook} from "./notebook";
import {Note} from "./note";
import {NotebooksComponent} from "./notebooks.component";
import {NotesComponent} from "./notes.component";
import {TextComponent} from "./text.component";
import {UserWebService} from "./user.web.service";
import {NotebooksWebService} from "./notebooks.web.service";
import {NotesWebService} from "./notes.web.service";
import {Response} from '@angular/http';
import {NotebookWithUser} from "./notebookWithUser";
import {NoteWithNotebook} from "./noteWithNotebook";


@Component({
    selector: 'my-app',
    template: `
		<div class="container">
			<user></user>
            <div class="row">
                <div class="col-sm-4">
                    <notebooks (onChanged)="changedSelectedNotebook($event)"
                                               (onEdit)="editedNotebooks($event)"></notebooks>
                </div>
    
                <div class="col-sm-4">
                    <notes (onChangedSelectedNote)="changedSelectedNote($event)"
                                                (onEdit)="editedNotes($event)"
                                                (onCreateQuery)="createNote($event)"></notes>
                </div>
    
                <div class="col-sm-4 highest">
                    <text (onSaved)="savedNote($event)"></text>
                </div>
            </div>
        </div>
	`,
    styleUrls: ['app/equal.css']
})
export class AppComponent {
    selectedNotebook: Notebook = undefined;
    selectedNote: Note = undefined;

    @ViewChild(NotebooksComponent)
    private notebooksComponent: NotebooksComponent;

    @ViewChild(NotesComponent)
    private notesComponent: NotesComponent;

    @ViewChild(TextComponent)
    private textComponent: TextComponent;

    constructor(private userService: UserWebService,
                private notebooksService: NotebooksWebService,
                private notesService: NotesWebService) {}

    changedSelectedNotebook(notebook) {
        this.selectedNotebook = notebook;
        this.notesComponent.uploadNotes(this.selectedNotebook);
        this.textComponent.clean();
        this.selectedNote = undefined;
    }

    changedSelectedNote(note) {
        this.selectedNote = note;
        this.textComponent.setText(this.selectedNote.noteText);
    }

    createNote(name) {
            this.userService.getUser()
                .subscribe((data:Response) => {
                    let notebook = new NotebookWithUser(this.selectedNotebook.notebookName, data.json());
                    let note = new NoteWithNotebook(name, notebook);
                    this.notesService.create(note)
                        .subscribe((resp:Response) => this.editedNotes());
                });
    }

    editedNotes() {
        this.notesComponent.uploadNotes(this.selectedNotebook);
    }

    editedNotebooks() {
        this.notebooksComponent.getNotebooks();
    }

    savedNote(text: string) {
        this.selectedNote.noteText = text;
        this.notesComponent.save(this.selectedNote);
    }
}