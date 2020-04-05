import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item.interface';

@Component({
    selector: 'list-item',
    styleUrls: ['list-item.component.scss'],
    template: `
        <div class="listItem">
            {{ listItem.title }} : {{ listItem.id }}

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
    delete: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {}

    deleteItem() {
        this.delete.emit(this.listItem);
    }
}