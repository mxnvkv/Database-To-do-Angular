import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { ListFormComponent } from './components/list-form/list-form.component';

// containers
import { ListMainComponent } from './containers/list-main/list-main.component';

@NgModule({
    declarations: [
        ListMainComponent,
        ListFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ListMainComponent
    ],
    providers: []
})

export class ListDashboardModule {

}