import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Link} from "./link.types";

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  getLinks(): Observable<Link[]>{
    return this.httpClient.get<Link[]>("http://localhost:8080/links")
  }
}
