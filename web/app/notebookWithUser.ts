import {User} from "./user";
export class NotebookWithUser {
    constructor(name: string, user: User) {
        this.notebookName = name;
        this.user = user;
    }
    id: number;
    notebookName: string;
    user: User;
}