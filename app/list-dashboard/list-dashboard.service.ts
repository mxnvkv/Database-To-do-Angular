import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { ListItem } from "./models/list-item.interface";

const LIST_API: string = '/api/listItems';

@Injectable()
export class ListDashboardService {
    constructor(private http: Http) {}

    getAllListItems(): Observable<ListItem[]> {
        return this.http
            .get(LIST_API)
            .map((response: Response) => response.json())
    }

    addListItem(listItem: ListItem): Observable<ListItem> {
        return this.http
            .post(LIST_API, listItem)
            .map((response: Response) => response.json());
    }

    deleteListItem(listItem: ListItem): Observable<ListItem> {
        return this.http
            .delete(`${LIST_API}/${listItem.id}`)
            .map((response: Response) => response.json());
    }

    changeInput(listItem: ListItem): Observable<ListItem> {
        return this.http
            .put(`${LIST_API}/${listItem.id}`, listItem)
            .map((response: Response) => response.json());
    }
}