export class NoteWithNotebook {
    constructor(name: string, notebookId: number) {
        this.noteName = name;
        this.notebook = notebookId;
        this.noteText = "";
    }
    noteName: string;
    noteText: string;
    notebook: number;
}