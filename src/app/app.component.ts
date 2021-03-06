import { Component, Inject } from '@angular/core';

import { WINDOW_TOKEN, WINDOW_TOKEN_WITH_OPTIONS } from './provider-tokens';
import { WindowService } from './window.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'dependecy-injection';

    constructor(
        private windowService: WindowService,
        @Inject(WINDOW_TOKEN) private windowRef: Window,
        @Inject(WINDOW_TOKEN_WITH_OPTIONS) private windowRef2: Window,
    ) {}

    ngOnInit(): void {
        console.log(!!this.windowService.windowRef);
        console.log(this.windowService.windowRef instanceof Window);

        console.log(!!this.windowRef);
        console.log(!!this.windowRef2);
    }
}
