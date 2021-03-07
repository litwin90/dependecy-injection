import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { STRING_TOKEN } from '../provider-tokens';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [{ provide: STRING_TOKEN, useValue: 'test2' }],
})
export class ChildModule {}
