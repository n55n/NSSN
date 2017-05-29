export class NoteWithNotebook {
    constructor(name: string, notebookId: number) {
        this.noteName = name;
        this.notebook = notebookId;
    }
    noteName: string;
    notebook: number;
}