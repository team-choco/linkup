import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {LinkCollection} from "../link-collection/link-collection.types";
import {Category} from "./category.types";
import {Link} from "../link/link.types";
import {catchError} from "rxjs/operators";
import {MessageService} from "../messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:8080/categories")
  }
  getLinkCollections():Observable<LinkCollection[]>{
    return this.httpClient.get<LinkCollection[]>("http://localhost:8080/link-collections")
  }

}
