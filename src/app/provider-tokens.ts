import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';

export const WINDOW_TOKEN = new InjectionToken<Window>('window');
export const WINDOW_TOKEN_WITH_OPTIONS = new InjectionToken<
    Window | Object | undefined
>('windowWithOptions', {
    providedIn: 'root',
    factory: () => {
        const platformId = inject(PLATFORM_ID);
        // return window;
        if (isPlatformBrowser(platformId)) {
            return window;
        }
        if (isPlatformServer(platformId)) {
            return {};
        } else {
            return undefined;
        }
    },
});
