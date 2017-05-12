import { Injectable } from '@angular/core';
import { Notebook } from './notebook';
import { NOTEBOOKS } from './mock-notebooks';
import { Observable } from "rxjs";

@Injectable ()
export class NotebooksService {
    getNotebooks(): Promise<Notebook[]> {
	return Promise.resolve(NOTEBOOKS);
    }
        
    create(notebookName: string) {
        let notebook: Notebook = {id: NOTEBOOKS.length + 1, notebookName: notebookName, noteSet: []};
        NOTEBOOKS.push(notebook);
    }
    
    addNoteToNotebook(noteId: number, notebookId: number) {
        NOTEBOOKS[notebookId].noteSet.push(noteId);
    }
}