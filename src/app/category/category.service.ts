import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LinkCollection} from "../link-collection/link-collection.types";
import {Category} from "./category.types";
import {ActivatedRoute} from "@angular/router";
import {LinkCollectionService} from "../link-collection/link-collection.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient:HttpClient,

  ) {

  }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:8080/categories")
  }


}
