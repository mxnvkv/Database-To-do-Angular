import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item.interface';

@Component({
    selector: 'list-form',
    styleUrls: ['list-form.component.scss'],
    template: `
        <form (ngSubmit)="handleSubmit(form.value, form.valid, form); form.reset()" class="form" #form="ngForm" novalidate>
            <input
                type="text"
                name="title"
                required
                autocomplete="off"
                #title="ngModel"
                [ngModel]="blankListItem?.title"
                class="form-input">

            <button type="submit" [disabled]="form.invalid">
                Add
            </button>
        </form>
    `
})

export class ListFormComponent {
    @Input()
    blankListItem: ListItem;

    @Output()
    addNewListItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

    handleSubmit(formValue: ListItem, isFormValid: boolean) {
        if(isFormValid) {
            let newListItem: ListItem = Object.assign({}, this.blankListItem, formValue );
            this.addNewListItem.emit(newListItem);
        }
    }
}