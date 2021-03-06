import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {HelloComponent} from './hello/hello.component';
import {GoodbyeComponent} from './goodbye/goodbye.component';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        HelloComponent,
        GoodbyeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
