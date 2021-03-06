import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WINDOW_TOKEN } from './provider-tokens';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [
        {
            provide: WINDOW_TOKEN,
            useFactory: (platformId: Object) => {
                if (isPlatformBrowser(platformId)) {
                    return window;
                }
                if (isPlatformServer(platformId)) {
                    return {};
                } else {
                    return undefined;
                }
            },
            deps: [PLATFORM_ID],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
