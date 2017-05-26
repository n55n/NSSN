export class Note {
    constructor(name: string) {
        this.noteName = name;
    }
    id: number;
    noteName: string;
    noteText: string;
}