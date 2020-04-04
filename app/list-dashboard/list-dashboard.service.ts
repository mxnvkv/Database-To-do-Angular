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
}