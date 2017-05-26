import {NotebookWithUser} from "./notebookWithUser";
export class NoteWithNotebook {
    constructor(name: string, notebook: NotebookWithUser) {
        this.noteName = name;

    }
    id: number;
    noteName: string;
    noteText: string;
    notebook: NotebookWithUser;
}