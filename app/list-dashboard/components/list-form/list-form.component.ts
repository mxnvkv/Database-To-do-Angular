import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item.interface';

@Component({
    selector: 'list-form',
    styleUrls: ['list-form.component.scss'],
    template: `
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" class="form" #form="ngForm" novalidate>
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

            <div class="form-object">
                {{ form.value | json }}
            </div>

            <div class="form-object">
                Form status: {{ form.valid ? 'valid' : 'invalid' }}
            </div>
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
            let newListItem: ListItem = { title: formValue.title, isChecked: true };
            this.addNewListItem.emit(newListItem);
        }
    }

    // createNewItem(title: string): ListItem {
    //     return { title: title, isChecked: true }
    // }
}