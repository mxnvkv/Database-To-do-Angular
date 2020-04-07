import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item.interface';

@Component({
    selector: 'list-item',
    styleUrls: ['list-item.component.scss'],
    template: `
        <div class="listItem">
            <input
                type="checkbox"
                class="checkbox"
                [ngModel]="listItem?.isChecked"
                (ngModelChange)="changeCheckbox($event)">

            <span class="itemtitle">{{ listItem.title }}</span>

            <button (click)="deleteItem()">
                Delete
            </button>
        </div>
    `
})

export class ListItemComponent implements OnInit {
    @Input()
    listItem: ListItem;

    @Output()
    delete: EventEmitter<ListItem> = new EventEmitter<ListItem>();

    @Output()
    toggleCheckbox: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {}

    deleteItem() {
        this.delete.emit(this.listItem);
    }

    changeCheckbox(event) {
        this.listItem.isChecked = event
        this.toggleCheckbox.emit(this.listItem);
    }
}