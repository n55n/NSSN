import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {NotebooksComponent} from "./notebooks.component";
import {NotesComponent} from "./notes.component";
import {TextComponent} from "./text.component";
import {UserComponent} from "./user.component";
import {UserWebService} from "./user.web.service";
import {NotebooksWebService} from "./notebooks.web.service";
import {NotesWebService} from "./notes.web.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NotebooksComponent,
        NotesComponent,
        TextComponent,
        UserComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        UserWebService,
        NotebooksWebService,
        NotesWebService
    ]
})
export class AppModule {
}