import { Component } from '@angular/core';
import { ListItem } from '../../models/list-item.interface';

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
    `
})

export class ListMainComponent {
    listItem: ListItem = {
        title: '',
        isChecked: true
    };

    listItemsList: ListItem[] = [];

    addItem(event: ListItem) {
        console.log(event);
    }
}