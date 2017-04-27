import {Component} from "@angular/core";

@Component({
    selector: 'user',
    template: `
        <div class="page-header">
            <h2>Not so smart note 
                <small>
                    main page
                    <ul class="list-inline" align="right">
                        <li>Username</li>
                        <li><a href="#">Exit</a></li>
                    </ul>
                </small>
            </h2>
		</div>
    `
})
export class UserComponent {
    username: string;
}
