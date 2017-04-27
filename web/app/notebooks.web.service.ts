/**
 * Created by Марат on 21.04.2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Notebook} from "./notebook";

@Injectable()
export class NotebooksWebService {
    constructor(private http: Http) {
    }


    getNotebooks(): Promise<Notebook[]> {
        return null;
    }

    create(name: string) {

    }

    edit(id: number, name: string) {

    }

    remove(id: number) {

    }
}