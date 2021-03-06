import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WindowService {
    windowRef: Window | Object | undefined;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        if (isPlatformBrowser(platformId)) {
            this.windowRef = window;
        }
        if (isPlatformServer(platformId)) {
            const serverWindowEmulation = {};
            this.windowRef = serverWindowEmulation;
        } else {
            this.windowRef = undefined;
        }
    }
}
