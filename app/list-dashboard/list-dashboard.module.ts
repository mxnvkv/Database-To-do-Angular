import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { ListFormComponent } from './components/list-form/list-form.component';
import { ListItemComponent } from './components/list-item/list-item.component';

// containers
import { ListMainComponent } from './containers/list-main/list-main.component';

// services
import { ListDashboardService } from './list-dashboard.service';

@NgModule({
    declarations: [
        ListMainComponent,
        ListFormComponent,
        ListItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        ListMainComponent
    ],
    providers: [
        ListDashboardService
    ]
})

export class ListDashboardModule {

}