/**
 * Created by Марат on 21.04.2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Notebook} from "./notebook";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NotebooksWebService {

    private url = '/rest/resources/';
    constructor(private http: Http) {
    }

    getNotebooks(userId: number) {
        return this.http.get(this.url + 'user/' + userId + '/notebooks');
    }

    create(notebookName: string) {
        const body  = JSON.stringify(notebookName);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
        return this.http.post(this.url + 'notebook', body, {headers: headers});
    }

    edit(notebook: Notebook) {
        const body  = JSON.stringify(notebook.notebookName);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
        return this.http.put(this.url + 'notebook/' + notebook.id, body, {headers: headers});
    }

    remove(id: number) {
        return this.http.delete(this.url + 'notebook/' + id);
    }
}