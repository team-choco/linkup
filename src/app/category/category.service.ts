import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {LinkCollection} from "../link-collection/link-collection.types";
import {Category} from "./category.types";
import {catchError} from "rxjs/operators";
import {MessageService} from "../messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient:HttpClient,
    private messageService: MessageService
  ) {
  }

  private log(message: string) {
    this.messageService.add(`LinkService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error); // 지금은 콘솔에 로그를 출력합니다.

      // TODO: 사용자가 이해할 수 있는 형태로 변환하기
      this.log(`${operation} failed: ${error.message}`);

      // 애플리케이션 로직이 끊기지 않도록 기본값으로 받은 객체를 반환합니다.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:8080/categories")
  }
  getLinkCollections():Observable<LinkCollection[]>{
    return this.httpClient.get<LinkCollection[]>("http://localhost:8080/link-collections")
  }

  deleteLinkCollection(link_collection_id: number): Observable<LinkCollection> {
    return this.httpClient.delete<LinkCollection>(`http://localhost:8080/link-collections/${link_collection_id}`, this.httpOptions).pipe(
      tap(_ => this.log(`deleted link collection id=${link_collection_id}`)),
      catchError(this.handleError<LinkCollection>('deleteLinkCollection'))
    );
  }

}
