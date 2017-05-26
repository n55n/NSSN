import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {Notebook} from "./notebook";
import {NotebooksWebService} from "./notebooks.web.service";
import {Response} from '@angular/http';
import {UserWebService} from "./user.web.service";
import {NotebookWithUser} from "./notebookWithUser";

@Component({
    selector: 'notebooks',
    template: `
		<div class="well">
			<ul class="nav nav-pills nav-stacked">
				<li *ngFor="let notebook of notebooks"
				[class.active]="notebook === selectedNotebook"
				(click)="onSelect(notebook)">
					<a href="#">{{notebook.notebookName}}</a>
				</li>
			</ul>
		</div>
		<div class="btn-group btn-group-justified" id="accordion">
			<div class="btn-group">
				<button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#createNotebook" class="btn btn-primary">Create</button>
			</div>
			<div class="btn-group">
				<button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#editNotebook" class="btn btn-primary">Edit</button>
			</div>
			<div class="btn-group">
				<button type="button" class="btn btn-primary" (click)="delete($event)">Delete</button>
			</div>
		</div>
		<div id="createNotebook" class="collapse well">
			<form>
				<label>Name of notebook: </label><br>
				<input [(ngModel)]="createdName" [ngModelOptions]="{standalone: true}">
				<input (click)="create($event)" type="submit" value="Create" class="btn btn-default btn-primary btn-sm" >
			</form>
		</div>
		<div id="editNotebook" class="collapse well">
			<form>
				<label>New name of notebook: </label><br>
				<input [(ngModel)]="editedName" [ngModelOptions]="{standalone: true}">
				<input (click)="edit($event)" type="submit" value="Edit" class="btn btn-default btn-primary btn-sm">
			</form>
		</div>
	`
})
export class NotebooksComponent implements OnInit {
    selectedNotebook: Notebook;
    notebooks: Notebook[];
    createdName: string = "";
    editedName: string = "";
    @Output() onChanged = new EventEmitter<Notebook>();
    @Output() onEdit = new EventEmitter<void>();


    constructor(private notebooksService: NotebooksWebService,
                private userService: UserWebService) {
    }

    onSelect(notebook: Notebook) {
        this.selectedNotebook = notebook;
        this.onChanged.emit(this.selectedNotebook);
    }

    getNotebooks(): void {
        this.userService.getUser()
            .subscribe((resp: Response) => {
                let user = resp.json();
                this.notebooksService.getNotebooks(user.id)
                    .subscribe((data: Response) => this.notebooks = data.json());
            })
    }

    ngOnInit(): void {
        this.getNotebooks();
    }

    getSelectedNotebook(): Notebook {
        return this.selectedNotebook;
    }

    create(): void {
        if (this.createdName != "") {
            this.userService.getUser()
                .subscribe((data:Response) => {
                    let user = data.json();
                    let notebook = new NotebookWithUser(this.createdName, user);
                    console.log(notebook);
                    this.notebooksService.create(new NotebookWithUser(this.createdName, user))
                        .subscribe((resp:Response) => this.onEdit.emit());
                });
        }
    }

    delete(): void {
        if (this.selectedNotebook != undefined) {
            this.notebooksService.remove(this.selectedNotebook.id)
                .subscribe((resp: Response) => this.onEdit.emit());
        }
    }

    edit(): void {
        if (this.editedName != "") {
            this.selectedNotebook.notebookName = this.editedName;
            this.notebooksService.edit(this.selectedNotebook)
                .subscribe((resp: Response) => this.onEdit.emit());
        }
    }
}