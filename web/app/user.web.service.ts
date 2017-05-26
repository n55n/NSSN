/**
 * Created by Марат on 21.04.2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Notebook} from "./notebook";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserWebService {
    constructor(private http: Http) {
    }

    getUser() {
        return this.http.get('/rest/resources/user');
    }

    logout() {
        return this.http.get('/rest/logout');
    }
}