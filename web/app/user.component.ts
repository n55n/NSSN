import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {UserWebService} from "./user.web.service";
import {Response} from "@angular/http";

@Component({
    selector: 'user',
    template: `
        <div class="page-header">
            <h2>Not so smart note 
                <small>
                    main page
                    <ul class="list-inline" align="right">
                        <li>{{user?.username}}</li>
                        <li><a href="#" (click)="logout($event)">Exit</a></li>
                    </ul>
                </small>
            </h2>
		</div>
    `
})
export class UserComponent {
    user: User;

    constructor(private userService: UserWebService) {
    }

    ngOnInit(): void {
        this.userService.getUser()
            .subscribe((data: Response) => this.user = data.json());
    }

    logout() {
        this.userService.logout();
    }
}
