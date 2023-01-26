import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LinkCollection} from "./link-collection.types";

@Injectable({
  providedIn: 'root'
})
export class LinkCollectionService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getLinkCollections():Observable<LinkCollection[]>{
    return this.httpClient.get<LinkCollection[]>("http://localhost:8080/link-collections")
  }
}
