import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LinkCollection} from "./link-collection.types";
import {Member} from "../member/member.types";
import {CategoryService} from "../category/category.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LinkCollectionService {


  constructor(
    private httpClient:HttpClient,
  ) {

  }

  getLinkCollections():Observable<LinkCollection[]>{
    return this.httpClient.get<LinkCollection[]>("http://localhost:8080/link-collections")
  }
  getLinkCollection(linkCollectionId:number):Observable<LinkCollection>{
    return this.httpClient.get<LinkCollection>(`http://localhost:8080/link-collection/${linkCollectionId}`)
  }
}
