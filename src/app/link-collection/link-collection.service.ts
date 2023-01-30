import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../messages/message.service";
import {Observable, of, tap} from "rxjs";
import {LinkCollection} from "./link-collection.types";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LinkCollectionService {


  constructor(
    private httpClient: HttpClient,
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

  getLinkCollections(): Observable<LinkCollection[]> {
    return this.httpClient.get<LinkCollection[]>("http://localhost:8080/link-collections")
  }

  getLinkCollection(linkCollectionId: number): Observable<LinkCollection> {
    return this.httpClient.get<LinkCollection>(`http://localhost:8080/link-collection/${linkCollectionId}`)
  }

}
