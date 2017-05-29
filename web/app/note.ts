export class Note {
    constructor(name: string) {
        this.noteName = name;
        this.noteText = "";
    }
    id: number;
    noteName: string;
    noteText: string;
}