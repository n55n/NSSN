import {Component, EventEmitter, Output} from "@angular/core";
import {Note} from "./note";
import {Notebook} from "./notebook";
import {NotesWebService} from "./notes.web.service";
import {Response} from "@angular/http";

@Component({
    selector: 'notes',
    template: `
            <div class="well">
		<ul class="nav nav-pills nav-stacked">
                    <li *ngFor="let note of notes"
			[class.active]="note === selectedNote" 
			(click)="onSelect(note)">
			<a href="#">{{note.noteName}}</a>
                    </li>
		</ul>
            </div>
            <div class="btn-group btn-group-justified" id="accordion">
		<div class="btn-group">
                    <button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#createNote" class="btn btn-primary">Create</button>
		</div>
		<div class="btn-group">
                    <button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#editNote" class="btn btn-primary">Edit</button>
		</div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" (click)="deleteNote($event)">Delete</button>
		</div>
            </div>
            <div id="createNote" class="collapse well">
		<form class="block">
                    <label>Name of note: </label><br>
                    <input [(ngModel)]="createdName" [ngModelOptions]="{standalone: true}">
                    <input (click)="create($event)" type="submit" value="Create" class="btn btn-default btn-primary btn-sm">
		</form>
            </div>
            <div id="editNote" class="collapse well">
		<form>
                    <label>New name of note: </label><br>
                    <input [(ngModel)]="editedName" [ngModelOptions]="{standalone: true}">
                    <input (click)="edit($event)" type="submit" value="Edit" class="btn btn-default btn-primary btn-sm">
		</form>
            </div>
	`
})
export class NotesComponent {
    selectedNote: Note = undefined;
    notes: Note[];
    createdName: string = "";
    editedName: string = "";
    @Output() onChangedSelectedNote = new EventEmitter<Note>();
    @Output() onEdit = new EventEmitter<void>();
    @Output() onCreateQuery = new EventEmitter<string>();

    constructor(private notesService: NotesWebService) {
    }

    onSelect(note: Note) {
        this.selectedNote = note;
        this.onChangedSelectedNote.emit(this.selectedNote);
    }

    reload() {
        this.selectedNote = undefined;
    }

    uploadNotes(notebook: Notebook): void {
        //this.notesService.getNotes(notebook).then(notes => this.notes = notes);
        this.notesService.getNotes(notebook)
            .subscribe((data: Response) => this.notes = data.json());
        this.reload();
    }

    create(): void {
        if (this.createdName != "") {
            this.onCreateQuery.emit(this.createdName);
        }
    }

    deleteNote(): void {
        if (this.selectedNote != undefined) {
            this.notesService.remove(this.selectedNote.id)
                .subscribe((resp:Response) => this.onEdit.emit());
        }
    }

    edit(): void {
        if (this.editedName != "") {
            this.selectedNote.noteName = this.editedName;
            this.notesService.edit(this.selectedNote)
                .subscribe((resp: Response) => this.onEdit.emit());
        }
    }

    save(note: Note) {
        this.notesService.edit(note)
            .subscribe((resp: Response) => this.onEdit.emit());
    }
}