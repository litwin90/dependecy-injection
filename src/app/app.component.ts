import { Component, Inject } from '@angular/core';

import { STRING_TOKEN } from './provider-tokens';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'dependecy-injection';

    constructor(@Inject(STRING_TOKEN) private testString: string) {}

    ngOnInit(): void {
        console.log(this.testString);
    }
}
