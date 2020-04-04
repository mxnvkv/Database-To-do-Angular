import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item.interface';
import { ListDashboardService } from '../../list-dashboard.service';

@Component({
    selector: 'list-main',
    styleUrls: ['list-main.component.scss'],
    template: `
        <div class="title">
            <h1>Database To-do Angular</h1>
            <h3>by Maksym Novikov</h3>
        </div>

        <div class="form">
            <list-form
                [blankListItem]="listItem"
                (addNewListItem)="addItem($event)">
            </list-form>
        </div>

        <div
            class="list-items"
            *ngFor="let item of listItems">
            Title: {{ item.title | json }}
        </div>
    `
})

export class ListMainComponent implements OnInit {
    listItems: ListItem[];
    listItem: ListItem;

    constructor(private listDashboardService: ListDashboardService) {}

    ngOnInit() {
        this.listDashboardService
            .getAllListItems()
            .subscribe((data: ListItem[]) => this.listItems = data);

        this.listItem = {
            title: '',
            isChecked: true,
            id: undefined
        }
    }

    addItem(listItem: ListItem) {
        console.log(listItem);
        this.listDashboardService
            .addListItem(listItem)
            .subscribe((data: ListItem) => this.listItems.push(listItem));

        // console.log(listItem.id);
    }
}