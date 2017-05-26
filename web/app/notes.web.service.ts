/**
 * Created by Марат on 21.04.2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Note} from "./note";
import {Notebook} from "./notebook";
import {NoteWithNotebook} from "./noteWithNotebook";

@Injectable()
export class NotesWebService {
    private url = '/rest/resources/';

    constructor(private http: Http) {
    }

    getNotes(notebook: Notebook) {
        return this.http.get(this.url + 'notebook/' + notebook.id + '/notes');
    }

    create(note: NoteWithNotebook) {
        const body  = JSON.stringify(note);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
        return this.http.post(this.url + 'note', body, {headers: headers});
    }

    edit(note: Note) {
        const body  = JSON.stringify(note);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
        return this.http.put(this.url + 'note/' + note.id, body, {headers: headers});
    }

    remove(id: number) {
        return this.http.delete(this.url + 'note/' + id);
    }
}