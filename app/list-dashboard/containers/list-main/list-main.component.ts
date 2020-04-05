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

        <div class="buttons-dashboard">
            <button (click)="clearList()">Clear list</button>
        </div>

        <!-- <div
            *ngFor="let item of listItems">
            {{ item.title | json }}
        </div> -->

        <div>
            <list-item
                *ngFor="let item of listItems"
                [listItem]="item"
                (delete)="deleteItem($event)"
                (toggleCheckbox)="toggleCheckbox($event)">
            </list-item>
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
            // id: this.listItems.length,
            id: undefined,
            title: '',
            isChecked: false
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

    toggleCheckbox(listItem: ListItem) {
        this.listDashboardService
            .changeInput(listItem)
            .subscribe((data: ListItem) => {
                this.listItems = this.listItems.map((item: ListItem) => {
                    if(item.id === listItem.id) {
                        item = Object.assign({}, item, listItem);
                    } 

                    return item;
                });
            });
    }

    clearList() {
        this.listItems.forEach( item => {
            this.listDashboardService
                .deleteListItem(item)
                .subscribe((data: ListItem) => {
                    this.listItems = this.listItems.filter(
                        (listItem: ListItem) => listItem.id !== item.id 
                    )
                })
        });
    }

    /*
        Create:

        1. Clear list
        2. Clear done
        3. All: check / uncheck
    */
}