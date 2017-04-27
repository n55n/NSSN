/**
 * Created by Марат on 21.04.2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "./user";

@Injectable()
export class UserWebService {
    constructor(private http: Http) {
    }

    getUser(): Promise<User> {
        return null;
    }
}