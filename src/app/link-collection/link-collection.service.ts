import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LinkCollection} from "./link-collection.types";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class LinkCollectionService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getLinkCollections(): Observable<LinkCollection[]> {
    return this.httpClient.get<LinkCollection[]>("http://localhost:8080/link-collections")
  }

  getLinkCollection(linkCollectionId: number): Observable<LinkCollection> {
    return this.httpClient.get<LinkCollection>(`http://localhost:8080/link-collections/${linkCollectionId}`)
  }

};
