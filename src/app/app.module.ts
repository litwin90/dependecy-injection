import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildModule } from './child/child.module';
import { STRING_TOKEN } from './provider-tokens';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ChildModule],
    providers: [{ provide: STRING_TOKEN, useValue: 'test1' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
