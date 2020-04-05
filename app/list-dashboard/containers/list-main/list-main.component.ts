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

        <!-- <div
            *ngFor="let item of listItems">
            {{ item.title | json }}
        </div> -->

        <div>
            <list-item
                *ngFor="let item of listItems"
                [listItem]="item"
                (delete)="deleteItem($event)">
            </list-item>
        </div>        
    `
})

export class ListMainComponent implements OnInit {
    listItems: ListItem[];
    listItem;

    constructor(private listDashboardService: ListDashboardService) {}

    ngOnInit() {
        this.listDashboardService
            .getAllListItems()
            .subscribe((data: ListItem[]) => this.listItems = data);

        this.listItem = {
            // id: this.listItems.length,
            id: undefined,
            title: '',
            isChecked: true
        }
    }

    addItem(listItem: ListItem) {
        this.listDashboardService
            .addListItem(listItem)
            .subscribe((data: ListItem) => {
                this.listItems.push(data);
            });
    }

    deleteItem(listItem: ListItem) {
        this.listDashboardService
            .deleteListItem(listItem)
            .subscribe((data: ListItem) => {
                this.listItems = this.listItems.filter(
                    (el: ListItem) => el.id !== listItem.id
                );
            });
    }
}