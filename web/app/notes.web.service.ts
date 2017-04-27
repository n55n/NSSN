/**
 * Created by Марат on 21.04.2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Note} from "./note";

@Injectable()
export class NotesWebService {
    constructor(private http: Http) {
    }

    getNote(id: number): Promise<Note> {
        return null;
    }

    create(name: string) {

    }

    edit(id: number, name: string) {

    }

    remove(id: number) {

    }
}